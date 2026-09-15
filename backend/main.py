from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import psycopg2
from psycopg2.extras import RealDictCursor
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
import uuid

app = FastAPI()

# 1. PERMISOS: Dejar que tu diseño web (Next.js) se comunique con este backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. CONFIGURACIÓN DE LA NUEVA BASE DE DATOS DE TUS COMPAÑEROS
DB_CONFIG = {
    "dbname": "crianza_patos_db",  # ¡El nuevo nombre de tu BD!
    "user": "admin_patos",
    "password": "password_seguro", # <--- ¡PON TU CONTRASEÑA DE PGADMIN AQUÍ!
    "host": "localhost",
    "port": "5432"
}

# 3. MODELOS DE DATOS (Lo que el formulario de Login/Registro nos va a enviar)
class LoginRequest(BaseModel):
    correo: str
    contrasena: str

class RegistroRequest(BaseModel):
    nombre_usuario: str
    correo: str
    contrasena: str
    datos_contacto: str

# --- RUTAS DEL SERVIDOR ---

@app.get("/")
def leer_raiz():
    return {"mensaje": "¡Motor Backend encendido y conectado a la nueva base de datos!"}

# Ruta para REGISTRAR un nuevo usuario
@app.post("/api/registro")
def registrar_usuario(request: RegistroRequest):
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cursor = conn.cursor()
        
        # Generamos un ID único (UUID) como pide la nueva base de datos
        nuevo_id = str(uuid.uuid4())
        
        # Guardamos en la nueva tabla 'usuarios'
        query = "INSERT INTO usuarios (id, nombre_usuario, correo, password_hash, datos_contacto) VALUES (%s, %s, %s, %s, %s)"
        cursor.execute(query, (nuevo_id, request.nombre_usuario, request.correo, request.contrasena, request.datos_contacto))
        
        conn.commit()
        cursor.close()
        conn.close()
        
        return {"success": True, "mensaje": "Usuario registrado correctamente", "id": nuevo_id}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error al registrar: Probablemente el correo ya existe. Detalle: {str(e)}")

# Ruta para INICIAR SESIÓN
@app.post("/api/login")
def iniciar_sesion(request: LoginRequest):
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        
        # Buscamos en la nueva tabla 'usuarios'
        query = "SELECT id, nombre_usuario, correo FROM usuarios WHERE correo = %s AND password_hash = %s"
        cursor.execute(query, (request.correo, request.contrasena))
        usuario = cursor.fetchone()
        
        cursor.close()
        conn.close()

        if usuario:
            return {"success": True, "usuario": usuario}
        else:
            raise HTTPException(status_code=401, detail="Correo o contraseña incorrectos")
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

# ==========================================
# MÓDULO DE NIDOS E INCUBACIÓN (DOS PASOS)
# ==========================================

# 1. Modelo y Ruta para Registrar un Nido (Paso 1)
class NidoRequest(BaseModel):
    lote_id: str
    codigo_nombre: str
    fecha_inicio: str
    estado_incubacion: str
    fecha_eclosion: Optional[str] = None  # <--- Esto permite que acepte texto o null explícitamente
    cantidad_eclosion: int
    obs_eclocion: str

@app.post("/api/nidos")
def registrar_nido(request: NidoRequest):
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cursor = conn.cursor()
        nuevo_id = str(uuid.uuid4())
        
        # Limpieza: si la fecha está vacía o es nula, se envía None (NULL en la base de datos)
        f_eclosion = request.fecha_eclosion if request.fecha_eclosion else None

        query = """
            INSERT INTO nidos (id, lote_id, codigo_nombre, fecha_inicio, estado_incubacion, fecha_eclosion, cantidad_eclosion, obs_eclosion, fecha_creacion) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, NOW())
        """
        cursor.execute(query, (
            nuevo_id, 
            request.lote_id, 
            request.codigo_nombre, 
            request.fecha_inicio, 
            request.estado_incubacion, 
            f_eclosion, 
            request.cantidad_eclosion, 
            request.obs_eclocion
        ))
        conn.commit()
        cursor.close()
        conn.close()
        return {"success": True, "mensaje": "¡Nido registrado exitosamente!"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error en nidos: {str(e)}")

# Ruta GET para listar los nidos creados (para que el segundo formulario los pueda seleccionar)
@app.get("/api/nidos")
def obtener_nidos():
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cursor = conn.cursor()
        
        cursor.execute("SELECT id, codigo_nombre FROM nidos ORDER BY fecha_creacion DESC;")
        filas = cursor.fetchall()
        
        nidos_lista = []
        for fila in filas:
            nidos_lista.append({
                "id": str(fila[0]),
                "codigo_nombre": fila[1]
            })
            
        cursor.close()
        conn.close()
        
        return {"success": True, "nidos": nidos_lista}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error al obtener nidos: {str(e)}")


# 2. Modelo y Ruta para el Registro de Incubación (Paso 2 - Control Diario)
class IncubacionRequest(BaseModel):
    nido_id: str
    tipo_evento: str
    horas_periodo: float
    observaciones: str

@app.post("/api/registros-incubacion")
def registrar_incubacion(request: IncubacionRequest):
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cursor = conn.cursor()
        nuevo_id = str(uuid.uuid4())
        
        # Limpieza inteligente para asegurar que coincida con el check constraint
        evento_limpio = request.tipo_evento.strip().lower()
        if "abandon" in evento_limpio:
            tipo_bd = "abandono"
        else:
            tipo_bd = "permanencia"  # Por defecto o si incluye permanencia

        query = """
            INSERT INTO registros_incubacion (id, nido_id, tipo_evento, horas_periodo, observaciones, fecha_creacion) 
            VALUES (%s, %s, %s, %s, %s, NOW())
        """
        cursor.execute(query, (
            nuevo_id, 
            request.nido_id, 
            tipo_bd,  # <--- Manda exactamente "permanencia" o "abandono"
            request.horas_periodo, 
            request.observaciones
        ))
        
        conn.commit()
        cursor.close()
        conn.close()
        return {"success": True, "mensaje": "¡Registro de incubación guardado con éxito!"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error en registros: {str(e)}")

#==========================================
# MÓDULO DE LOTES (POST y GET)
# ==========================================
class LoteRequest(BaseModel):
    codigo_nombre: str
    fecha_inicio: str
    cantidad_patos: int
    etapa: str
    proposito: str
    estado: str

@app.post("/api/lotes")
def registrar_lote(request: LoteRequest):
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cursor = conn.cursor()
        
        # Buscamos un usuario para el lote
        cursor.execute("SELECT id FROM usuarios LIMIT 1;")
        user_row = cursor.fetchone()
        if not user_row:
            raise HTTPException(status_code=400, detail="No hay usuarios registrados.")
        usuario_id = user_row[0]
        nuevo_id = str(uuid.uuid4())
        
        # Limpieza de textos para cumplir el check constraint
        estado_limpio = request.estado.strip().lower()
        estado_bd = "activo" if "activ" in estado_limpio else "finalizado"

        etapa_limpia = request.etapa.strip().lower()
        if "inici" in etapa_limpia:
            etapa_bd = "iniciacion"
        elif "crec" in etapa_limpia:
            etapa_bd = "crecimiento"
        elif "engord" in etapa_limpia:
            etapa_bd = "engorde"
        elif "reproduc" in etapa_limpia:
            etapa_bd = "reproduccion"
        else:
            etapa_bd = "engorde"

        proposito_bd = request.proposito.strip().lower()

        query = """
            INSERT INTO lotes (id, usuario_id, codigo_nombre, fecha_inicio, cantidad_patos, etapa, proposito, estado, fecha_creacion) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, NOW())
        """
        cursor.execute(query, (
            nuevo_id, usuario_id, request.codigo_nombre, request.fecha_inicio, 
            request.cantidad_patos, etapa_bd, proposito_bd, estado_bd
        ))
        
        conn.commit()
        cursor.close()
        conn.close()
        return {"success": True, "mensaje": "¡Lote registrado exitosamente!", "id": nuevo_id}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error al registrar lote: {str(e)}")

@app.get("/api/lotes")
def obtener_lotes():
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cursor = conn.cursor()
        cursor.execute("SELECT id, codigo_nombre, fecha_inicio, cantidad_patos, etapa, proposito, estado FROM lotes ORDER BY fecha_creacion DESC;")
        filas = cursor.fetchall()
        
        lotes_lista = []
        for fila in filas:
            lotes_lista.append({
                "id": str(fila[0]),
                "codigo_nombre": fila[1],
                "fecha_inicio": str(fila[2]),
                "cantidad_patos": fila[3],
                "etapa": fila[4],
                "proposito": fila[5],
                "estado": fila[6]
            })
            
        cursor.close()
        conn.close()
        return {"success": True, "lotes": lotes_lista}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error al obtener lotes: {str(e)}")