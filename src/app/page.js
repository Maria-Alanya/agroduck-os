"use client";
import { useState, useEffect } from "react";
import { 
  LayoutDashboard, List, Stethoscope, Archive, FileText, Settings, 
  Search, Download, Plus, ChevronLeft, ChevronRight, 
  Calendar, User, Building2, CheckCircle2,
  LogOut, ShieldCheck, CalendarDays, Syringe, UploadCloud, 
  ImageIcon, Info, FileDown, Activity, Wheat, Scale, 
  ClipboardType, CheckCircle, AlertCircle, ChevronDown,
  Egg, Clock, AlertTriangle, Printer, Edit2, Trash2, BookOpen,
  Lock, Mail, UserPlus // <-- ¡Estos son los nuevos para el Login!
} from "lucide-react";

export default function SistemaTradicional() {
  // 1. Estados de la aplicación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  // Definimos la URL de la API: si está en la nube usará Vercel/Render, si estás en tu PC usará localhost
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

  // 2. Si NO está autenticado, mostramos la pantalla de Login
  if (!isAuthenticated) {
    return <AuthScreen onLogin={() => setIsAuthenticated(true)} />;
  }
  
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex font-sans text-gray-800">
      
      {/* SIDEBAR ADMINISTRATIVO */}
      <aside className="bg-[#0b5c36] text-white w-64 flex flex-col h-screen sticky top-0 shadow-xl z-20">
        <div className="p-5 flex items-center gap-3 border-b border-[#0f6b40]">
          <div className="bg-white p-1.5 rounded-lg text-[#0b5c36]">
            <Building2 size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-wide">AgroDuck OS</h1>
            <p className="text-[10px] text-green-200 tracking-wider">Gestión Avícola Tradicional</p>
          </div>
        </div>
        
        <nav className="flex-1 py-6 overflow-y-auto">
          <p className="px-6 text-[10px] font-bold uppercase tracking-wider text-green-300/70 mb-3">Módulo Operativo</p>
          <ul className="space-y-1 px-3">
            <li>
              <button onClick={() => setCurrentView('dashboard')} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${currentView === 'dashboard' ? 'bg-white text-[#0b5c36] shadow-sm' : 'text-green-50 hover:bg-[#0f6b40]'}`}>
                <LayoutDashboard size={18} /> Panel Principal
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentView('eclosion')} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${currentView === 'eclosion' ? 'bg-white text-[#0b5c36] shadow-sm' : 'text-green-50 hover:bg-[#0f6b40]'}`}>
                <List size={18} /> Control de Lotes
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentView('sanidad')} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${currentView === 'sanidad' ? 'bg-white text-[#0b5c36] shadow-sm' : 'text-green-50 hover:bg-[#0f6b40]'}`}>
                <Stethoscope size={18} /> Control Sanitario
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentView('nutricion')} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${currentView === 'nutricion' ? 'bg-white text-[#0b5c36] shadow-sm' : 'text-green-50 hover:bg-[#0f6b40]'}`}>
                <Archive size={18} /> Alimentación y Silos
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-green-50 hover:bg-[#0f6b40] transition-colors">
                <FileText size={18} /> Reportes
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-green-50 hover:bg-[#0f6b40] transition-colors">
                <Settings size={18} /> Configuración
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4 bg-[#08482a] mt-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <div>
              <p className="text-xs font-bold text-white">Licencia AgroDuck v3.4</p>
              <p className="text-[10px] text-green-200">Servidor Local Granja Activo</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-2 justify-center text-xs text-green-200 hover:text-white transition-colors">
            <LogOut size={14} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* CONTENIDO CENTRAL */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#f8fafc]">
        
        {/* Top Bar (Info Global) */}
        <div className="bg-white px-6 py-2 border-b border-gray-200 flex justify-between items-center text-xs text-gray-500 shadow-sm z-10 sticky top-0">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-md font-medium text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors">
              <Building2 size={14} className="text-emerald-700" /> Granja El Manantial <ChevronDown size={12} />
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} /> 24 Octubre 2026 (Ciclo 42)
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> En línea <span className="text-gray-300 font-normal mx-1">•</span> <span className="text-gray-500 font-medium">Sync local activa</span>
            </div>
            <div className="flex items-center gap-3 text-right border-l border-gray-200 pl-6">
              <div>
                <p className="font-bold text-[#0f2942] leading-none">Carlos Mendoza</p>
                <p className="text-[10px] text-gray-500">Administrador de Granja</p>
              </div>
              <div className="bg-[#0b5c36] p-1.5 rounded-lg text-white"><User size={16} /></div>
            </div>
          </div>
        </div>

        {/* ÁREA DE TRABAJO */}
        <div className="p-6 md:p-8 w-full mx-auto max-w-7xl">
          {currentView === 'dashboard' && <DashboardProAdministrativo />}
          {currentView === 'sanidad' && <SanidadAdministrativo />}
          {currentView === 'nutricion' && <NutricionAdministrativo />}
          {currentView === 'eclosion' && <EclosionAdministrativo />}
          {currentView === 'eclosion' && <div className="p-10 text-center text-gray-500 bg-white rounded-xl border border-gray-200">Registro de Lotes (En construcción)</div>}
        </div>
      </main>
    </div>
  );
}

// ==========================================
// COMPONENTE: SANIDAD ADMINISTRATIVO (NUEVO)
// ==========================================
function SanidadAdministrativo() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* HEADER DE LA VISTA */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-4 mb-2">
        <div>
          <h2 className="text-3xl font-black text-[#0f2942] flex items-center gap-3 tracking-tight">
            <Stethoscope className="text-[#0b5c36]" size={32} /> Control Sanitario y Vacunación
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Módulo administrativo de registro de tratamientos clínicos, inmunizaciones preventivas e inspección documental de lotes zootécnicos.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 min-w-max">
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-all">
            <FileDown size={18} className="text-gray-400" /> Descargar Planilla Oficial (PDF)
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-all">
            <Download size={18} className="text-gray-400" /> Exportar Historial (CSV)
          </button>
        </div>
      </div>

      {/* 4 TARJETAS KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Tarjeta 1 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between hover:border-amber-200 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">Eventos Sanitarios<br/>Activos</span>
            <div className="bg-amber-50 p-2 rounded-lg text-amber-600"><Stethoscope size={20}/></div>
          </div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-3xl font-black text-[#0f2942]">3</span>
            <span className="text-sm font-bold text-gray-500">casos</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> 2 ambulatorios • 1 en observación
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between hover:border-emerald-200 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">Cobertura de<br/>Vacunación</span>
            <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600"><ShieldCheck size={20}/></div>
          </div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-3xl font-black text-[#0f2942]">98.5%</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Lotes con cronograma al día
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between hover:border-blue-200 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">Tratamientos<br/>Aplicados</span>
            <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><Syringe size={20}/></div>
          </div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-3xl font-black text-[#0f2942]">42</span>
            <span className="text-sm font-bold text-gray-500">registros</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <CalendarDays size={12} className="text-gray-400" /> Mes en curso (Octubre)
          </div>
        </div>

        {/* Tarjeta 4 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between hover:border-orange-200 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">Próxima<br/>Inmunización</span>
            <div className="bg-orange-50 p-2 rounded-lg text-orange-600"><CalendarDays size={20}/></div>
          </div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-3xl font-black text-orange-600">En 3 días</span>
          </div>
          <div className="text-xs text-gray-500 font-medium truncate">
            Lote Pekín #05 • Cólera Aviar
          </div>
        </div>

      </div>

      {/* SECCIÓN MEDIA: FORMULARIO Y EVIDENCIA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Formulario (Ocupa 2 columnas) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-50">
            <h3 className="text-lg font-black text-[#0f2942] flex items-center gap-2">
              <FileText className="text-[#0b5c36]" size={20}/> Nuevo Registro Sanitario / Ficha Clínica
            </h3>
            <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div> Captura Manual
            </span>
          </div>

          <form className="space-y-5 flex-1 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5">Fecha de Inspección / Aplicación</label>
                <div className="relative">
                  <input type="date" defaultValue="2026-10-24" className="w-full border border-gray-200 p-2.5 rounded-xl text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-gray-50" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5">Tipo de Evento Sanitario</label>
                <select className="w-full border border-gray-200 p-2.5 rounded-xl text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-gray-50 cursor-pointer appearance-none">
                  <option>Vacunación Preventiva / Inmuniz...</option>
                  <option>Tratamiento Clínico</option>
                  <option>Revisión Podal / Rutina</option>
                  <option>Desparasitación</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-600 mb-1.5">Lote y Galpón Asignado</label>
                <select className="w-full border border-gray-200 p-2.5 rounded-xl text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-gray-50 cursor-pointer appearance-none">
                  <option>Lote Pekín #04 - Galpón 04 Norte</option>
                  <option>Lote Pekín #05 - Galpón 02 Este</option>
                  <option>Lote Reproductores A1 - Galpón 01</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5">Aves Tratadas / Insp.</label>
                <input type="number" defaultValue="1" className="w-full border border-gray-200 p-2.5 rounded-xl text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-gray-50" />
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-end mb-1.5">
                <label className="block text-xs font-bold text-gray-600">Signos Observados (Captura Manual en Galpón)</label>
                <span className="text-[10px] text-gray-400 italic">Anotación directa del operario</span>
              </div>
              <textarea 
                className="w-full border border-gray-200 p-3 rounded-xl text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-gray-50 resize-none flex-1 min-h-[100px]" 
                placeholder="Describir detalladamente signos clínicos observados manualmente por el operario: letargo, postura reclinada, revisión podal, mucosas, consistencia fecal, plumaje húmedo..."
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5">Tratamiento / Insumo Aplicado</label>
                <input type="text" placeholder="Ej. Pomada de óxido de zinc tópica" className="w-full border border-gray-200 p-2.5 rounded-xl text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-gray-50" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5">Profesional / Responsable a Cargo</label>
                <input type="text" defaultValue="Dr. Carlos Mendoza (Médico Veteri...)" className="w-full border border-gray-200 p-2.5 rounded-xl text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-gray-50" />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-50 mt-2">
              <button type="button" className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-700 transition-colors">
                Limpiar Campos
              </button>
              <button type="button" className="flex items-center gap-2 bg-[#0b5c36] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md shadow-green-900/20 hover:bg-[#08482a] transition-colors">
                <Plus size={16} /> Guardar Registro en Ficha
              </button>
            </div>
          </form>
        </div>

        {/* Evidencia Fotográfica (Ocupa 1 columna) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
          <div className="mb-4">
            <h3 className="text-base font-black text-[#0f2942] flex items-center gap-2">
              <ImageIcon className="text-[#0b5c36]" size={18}/> Evidencia Fotográfica de Campo
            </h3>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              Inspección visual documental para el expediente clínico del lote. Carga directa de fotografías tomadas en galpón.
            </p>
          </div>

          <div className="border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-100 transition-colors mb-4 group">
            <div className="bg-blue-50 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <UploadCloud size={24} className="text-blue-600" />
            </div>
            <p className="text-sm font-bold text-[#0f2942]">Arrastra la fotografía aquí o haz clic para examinar</p>
            <p className="text-[10px] text-gray-400 mt-2">Formatos soportados: JPG, PNG (máx. 10MB) • Archivo plano sin filtros</p>
          </div>

          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white mb-4">
            <img src="https://images.unsplash.com/photo-1548681528-6a5c45b66b42?q=80&w=400&auto=format&fit=crop" alt="Pato en galpón" className="w-full h-40 object-cover" />
            <div className="p-3 bg-gray-50 flex justify-between items-start border-t border-gray-200">
              <div>
                <p className="text-xs font-bold text-[#0f2942] flex items-center gap-1"><ImageIcon size={12} className="text-[#0b5c36]"/> IMG-20241024-LOTE04.jpg</p>
                <p className="text-[10px] text-gray-500 mt-0.5">Galpón 04 Norte • Registrado por: Operario C. Ramos</p>
              </div>
              <span className="text-[10px] font-medium text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">1200 x 896 px</span>
            </div>
          </div>

          <div className="bg-blue-50/50 border border-blue-100 p-3 rounded-xl flex items-start gap-2 mt-auto">
            <Info size={14} className="text-blue-500 mt-0.5 shrink-0" />
            <p className="text-[10px] text-gray-600 leading-relaxed">
              Las fotografías adjuntas constituyen respaldo visual inalterable para inspecciones del Servicio de Sanidad Animal y seguimiento evolutivo del médico veterinario de planta.
            </p>
          </div>
        </div>

      </div>

      {/* TABLA DE HISTORIAL */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* Cabecera Tabla */}
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-white">
          <div>
            <h3 className="text-lg font-black text-[#0f2942] flex items-center gap-2">
              <List size={20} className="text-[#0b5c36]"/> Historial de Tratamientos y Vacunación
            </h3>
            <p className="text-xs text-gray-500 mt-1">Registro cronológico auditado de inmunizaciones y atenciones zootécnicas manuales.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Search size={14} className="text-gray-400"/></div>
              <input type="text" placeholder="Buscar por Lote o Medicamento" className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0b5c36] w-full sm:w-64 text-gray-600 bg-gray-50" />
            </div>
            <select className="border border-gray-200 rounded-lg text-sm px-3 py-2 text-gray-600 outline-none focus:border-[#0b5c36] bg-gray-50">
              <option>Tipo: Todos</option>
            </select>
            <select className="border border-gray-200 rounded-lg text-sm px-3 py-2 text-gray-600 outline-none focus:border-[#0b5c36] bg-gray-50">
              <option>Estado: Todos</option>
            </select>
          </div>
        </div>

        {/* Contenido Tabla */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                <th className="p-4 pl-6">FECHA</th>
                <th className="p-4">LOTE Y GALPÓN</th>
                <th className="p-4">TIPO DE EVENTO</th>
                <th className="p-4">TRATAMIENTO / INSUMO</th>
                <th className="p-4">DOSIS / VÍA</th>
                <th className="p-4 pr-6">SIGNOS / MOTIVO OBSERVADO</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              
              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 pl-6 font-bold text-[#0f2942]">24/10/2026</td>
                <td className="p-4">
                  <p className="font-bold text-[#0f2942]">Lote Pekín #04</p>
                  <p className="text-[11px] text-gray-500">Galpón 04 Norte</p>
                </td>
                <td className="p-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 w-max border border-emerald-100">
                    <Stethoscope size={12}/> Revisión Podal
                  </span>
                </td>
                <td className="p-4 font-medium text-gray-800">Pomada óxido de zinc + antiséptico</td>
                <td className="p-4 text-xs text-gray-600">Tópica / Curación manual</td>
                <td className="p-4 pr-6 text-xs text-gray-500">Pododermatitis leve en cojinete plantar...</td>
              </tr>

              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 pl-6 font-bold text-[#0f2942]">21/10/2026</td>
                <td className="p-4">
                  <p className="font-bold text-[#0f2942]">Lote Pekín #05</p>
                  <p className="text-[11px] text-gray-500">Galpón 02 Este</p>
                </td>
                <td className="p-4">
                  <span className="bg-blue-50 text-blue-700 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 w-max border border-blue-100">
                    <ShieldCheck size={12}/> Inmunización
                  </span>
                </td>
                <td className="p-4 font-medium text-gray-800">Vacuna Cólera Aviar (Pasteurella)</td>
                <td className="p-4 text-xs text-gray-600">Agua de bebida / 2000 aves</td>
                <td className="p-4 pr-6 text-xs text-gray-500">Vacunación preventiva reglamentaria (Día 1...</td>
              </tr>

              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 pl-6 font-bold text-[#0f2942]">18/10/2026</td>
                <td className="p-4">
                  <p className="font-bold text-[#0f2942]">Lote Cherry Valley #12</p>
                  <p className="text-[11px] text-gray-500">Galpón 03</p>
                </td>
                <td className="p-4">
                  <span className="bg-amber-50 text-amber-700 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 w-max border border-amber-100">
                    <Activity size={12}/> Tratamiento Clínico
                  </span>
                </td>
                <td className="p-4 font-medium text-gray-800">Complejo Multivitamínico + Electrólitos</td>
                <td className="p-4 text-xs text-gray-600">Oral en tanques / 3 días</td>
                <td className="p-4 pr-6 text-xs text-gray-500">Rehidratación zootécnica manual tras ola de...</td>
              </tr>

              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 pl-6 font-bold text-[#0f2942]">14/10/2026</td>
                <td className="p-4">
                  <p className="font-bold text-[#0f2942]">Lote Reproductoras A1</p>
                  <p className="text-[11px] text-gray-500">Galpón 01</p>
                </td>
                <td className="p-4">
                  <span className="bg-blue-50 text-blue-700 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 w-max border border-blue-100">
                    <ShieldCheck size={12}/> Inmunización
                  </span>
                </td>
                <td className="p-4 font-medium text-gray-800">Vacuna Hepatitis Viral del Pato (DHV)</td>
                <td className="p-4 text-xs text-gray-600">Subcutánea 0.5 ml / ave</td>
                <td className="p-4 pr-6 text-xs text-gray-500">Inoculación profiláctica del plantel reprod...</td>
              </tr>

              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 pl-6 font-bold text-[#0f2942]">10/10/2026</td>
                <td className="p-4">
                  <p className="font-bold text-[#0f2942]">Lote Pekín #04</p>
                  <p className="text-[11px] text-gray-500">Galpón 04 Norte</p>
                </td>
                <td className="p-4">
                  <span className="bg-indigo-50 text-indigo-700 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 w-max border border-indigo-100">
                    <Stethoscope size={12}/> Desparasitación
                  </span>
                </td>
                <td className="p-4 font-medium text-gray-800">Levamisol hidrocloruro 10%</td>
                <td className="p-4 text-xs text-gray-600">Oral disuelto / 25 mg/kg</td>
                <td className="p-4 pr-6 text-xs text-gray-500">Control parasitológico trimestral programado.</td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 pl-6 font-bold text-[#0f2942] opacity-70">27/10/2026</td>
                <td className="p-4 opacity-70">
                  <p className="font-bold text-[#0f2942]">Lote Pekín #05</p>
                  <p className="text-[11px] text-gray-500">Galpón 02 Este</p>
                </td>
                <td className="p-4">
                  <span className="bg-gray-100 text-gray-500 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 w-max border border-gray-200">
                    <CalendarDays size={12}/> Vacunación Programada
                  </span>
                </td>
                <td className="p-4 font-medium text-gray-800 opacity-70">Refuerzo Cólera Aviar</td>
                <td className="p-4 text-xs text-gray-600 opacity-70">Agua de bebida / Dilución estándar</td>
                <td className="p-4 pr-6 text-xs text-gray-500 opacity-70">Segundo ciclo preventivo según calendario...</td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs font-medium text-gray-500">
          <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#0b5c36]"/> Mostrando <strong>6</strong> de 42 registros <span className="text-gray-300 mx-1">•</span> Libro de Registro Sanitario N° 04-2026</span>
          <div className="flex items-center gap-2">
            <button className="flex items-center hover:text-[#0b5c36] px-2 py-1">Anterior</button>
            <span className="bg-[#0b5c36] text-white w-7 h-7 flex items-center justify-center rounded-md font-bold shadow-sm">1</span>
            <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors">2</button>
            <button className="flex items-center hover:text-[#0b5c36] px-2 py-1">Siguiente</button>
          </div>
        </div>
      </div>

    </div>
  );
}

// ==========================================
// COMPONENTE: DASHBOARD ADMINISTRATIVO PRO (CON FORMULARIO DE LOTES)
// ==========================================
function DashboardProAdministrativo() {
  // 1. Estados para el formulario y la lista dinámica de lotes
  const [codigoLote, setCodigoLote] = useState('LOT-NU-002');
  const [fechaInicioLote, setFechaInicioLote] = useState('2026-10-24');
  const [cantidadPatos, setCantidadPatos] = useState(3200);
  const [etapaLote, setEtapaLote] = useState('engorde');
  const [propositoLote, setPropositoLote] = useState('carne');
  const [estadoLote, setEstadoLote] = useState('activo');
  const [loadingLote, setLoadingLote] = useState(false);

  // Estado para guardar los lotes que vienen de la base de datos
  const [listaLotes, setListaLotes] = useState([]);

  // 2. Función para cargar los lotes desde FastAPI
  const cargarLotes = async () => {
    try {
      const response = await fetch(`${API_URL}/api/lotes`);
      const data = await response.json();
      if (data.success) {
        setListaLotes(data.lotes);
      }
    } catch (error) {
      console.error('No se pudieron cargar los lotes:', error);
    }
  };

  // useEffect para que carguen los datos al abrir la vista
  useEffect(() => {
    cargarLotes();
  }, []);

  // 3. Función para guardar el lote
  const handleGuardarLote = async (e) => {
    e.preventDefault();
    setLoadingLote(true);

    const payload = {
      codigo_nombre: codigoLote,
      fecha_inicio: fechaInicioLote,
      cantidad_patos: parseInt(cantidadPatos),
      etapa: etapaLote,
      proposito: propositoLote,
      estado: estadoLote
    };

    try {
      const response = await fetch(`${API_URL}/api/lotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('¡Lote registrado correctamente en el sistema!');
        setLoadingLote(false);
        cargarLotes(); 
      } else {
        alert(`Error al registrar lote: ${data.detail || 'Verifique los datos.'}`);
        setLoadingLote(false);
      }
    } catch (error) {
      alert('No se pudo conectar con el servidor backend.');
      setLoadingLote(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* 4 TARJETAS KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Tarjeta 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-gray-400 tracking-wider">TOTAL DE PATOS</span>
              <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded">Censo #42</span>
            </div>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-black text-[#0f2942]">14,850</span>
              <span className="text-sm font-bold text-gray-500">aves</span>
            </div>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">Distribuidas en 6 galpones activos (Censo manual de semana actual).</p>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
            <div className="flex items-center gap-1.5 text-emerald-600 font-medium"><CheckCircle2 size={14}/> Conteo validado</div>
            <span className="font-bold text-gray-700">100% verificado</span>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-gray-400 tracking-wider">ALIMENTO CONSUMIDO</span>
              <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded">Corte 18:00 hrs</span>
            </div>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-black text-[#0f2942]">2,745</span>
              <span className="text-sm font-bold text-gray-500">kg</span>
            </div>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">Ración acumulada del día (Promedio 185 g/ave según pesaje de tolvas).</p>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
            <div className="flex items-center gap-1.5 text-gray-500 font-medium"><Archive size={14}/> Tolvas centrales</div>
            <span className="font-bold text-gray-700">Balance Diario</span>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-gray-400 tracking-wider">NIDOS ACTIVOS</span>
              <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded">Postura</span>
            </div>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-black text-[#0f2942]">128</span>
              <span className="text-sm font-bold text-gray-500">nidos</span>
            </div>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">De un total censado de 142 nidos (14 en mantenimiento higiénico).</p>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
            <div className="flex items-center gap-1.5 text-emerald-600 font-medium"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Disponibilidad</div>
            <span className="font-bold text-gray-700">90.1% operativos</span>
          </div>
        </div>

        {/* Tarjeta 4 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-100 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-red-400 tracking-wider">ALERTAS SANITARIAS</span>
              <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Revisión</span>
            </div>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-black text-red-600">03</span>
              <span className="text-sm font-bold text-red-400">casos</span>
            </div>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">Revisiones zootécnicas pendientes de visita veterinaria (Galpones 01 y 04).</p>
          </div>
          <div className="mt-6 pt-4 border-t border-red-50 flex justify-between items-center text-xs">
            <div className="flex items-center gap-1.5 text-red-500 font-medium"><Stethoscope size={14}/> Visita programada</div>
            <span className="font-bold text-red-700">Mañana 09:00</span>
          </div>
        </div>

      </div>

      {/* FORMULARIO DE APERTURA DE NUEVO LOTE */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
          <div>
            <h3 className="text-lg font-black text-[#0f2942]">Apertura de Nuevo Lote Avícola</h3>
            <p className="text-xs text-gray-500 mt-0.5">Formulario oficial de recepción de aves y alta en base de datos.</p>
          </div>
          <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Registro Oficial
          </span>
        </div>

        <form onSubmit={handleGuardarLote} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Código / Nombre de Lote *</label>
              <input 
                type="text" 
                value={codigoLote}
                onChange={(e) => setCodigoLote(e.target.value)}
                required
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" 
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Fecha de Inicio *</label>
              <input 
                type="date" 
                value={fechaInicioLote}
                onChange={(e) => setFechaInicioLote(e.target.value)}
                required
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" 
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Cantidad Inicial de Patos *</label>
              <input 
                type="number" 
                value={cantidadPatos}
                onChange={(e) => setCantidadPatos(e.target.value)}
                required
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Etapa Actual del Lote *</label>
              <select 
                value={etapaLote}
                onChange={(e) => setEtapaLote(e.target.value)}
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white cursor-pointer"
              >
                <option value="iniciacion">Iniciación</option>
                <option value="crecimiento">Crecimiento</option>
                <option value="engorde">Engorde</option>
                <option value="reproduccion">Reproducción</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Propósito Comercial *</label>
              <select 
                value={propositoLote}
                onChange={(e) => setPropositoLote(e.target.value)}
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white cursor-pointer"
              >
                <option value="carne">Carne</option>
                <option value="huevo">Huevo</option>
                <option value="reproduccion">Reproducción</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Estado Operativo *</label>
              <select 
                value={estadoLote}
                onChange={(e) => setEstadoLote(e.target.value)}
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white cursor-pointer"
              >
                <option value="activo">Activo</option>
                <option value="finalizado">Finalizado</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-3">
            <button 
              type="submit" 
              disabled={loadingLote}
              className="bg-[#0b5c36] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#084729] transition-colors cursor-pointer disabled:opacity-50"
            >
              {loadingLote ? 'Registrando...' : 'Registrar Nuevo Lote en Sistema'}
            </button>
          </div>
        </form>
      </div>

      {/* TABLA DINÁMICA DE LOTES (Conectada a la Base de Datos) */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-black text-[#0f2942]">Lotes Registrados en Base de Datos</h3>
            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md">{listaLotes.length} Lotes en total</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                <th className="p-4 pl-6">CÓDIGO DE LOTE</th>
                <th className="p-4">PROPÓSITO</th>
                <th className="p-4">ETAPA</th>
                <th className="p-4">FECHA INICIO</th>
                <th className="p-4">POBLACIÓN CENSADA</th>
                <th className="p-4">ESTADO</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {listaLotes.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-6 text-center text-gray-400">No hay lotes registrados todavía. ¡Crea el primero arriba!</td>
                </tr>
              ) : (
                listaLotes.map((lote) => (
                  <tr key={lote.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="p-4 pl-6 font-black text-[#0f2942]">{lote.codigo_nombre}</td>
                    <td className="p-4 capitalize">{lote.proposito}</td>
                    <td className="p-4">
                      <span className="bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-full text-xs capitalize">
                        {lote.etapa}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-gray-500">{lote.fecha_inicio}</td>
                    <td className="p-4 font-black text-[#0f2942]">{lote.cantidad_patos} aves</td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-600 text-xs capitalize">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> {lote.estado}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

// ==========================================
// COMPONENTE: NUTRICIÓN Y SILOS (NUEVO)
// ==========================================
function NutricionAdministrativo() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* HEADER DE LA VISTA */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-4 mb-2">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
            <Wheat size={12} /> <span>AgroDuck OS</span> <ChevronRight size={12} /> <span className="text-[#0b5c36]">Control Zootécnico</span>
          </div>
          <h2 className="text-3xl font-black text-[#0f2942] tracking-tight">
            Control Nutricional y Alimentación
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Módulo administrativo de pesaje manual, asignación de raciones y registro de consumo diario por lote zootécnico.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 min-w-max items-start">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded-lg shadow-sm hover:bg-gray-50 transition-all">
            <FileDown size={16} className="text-gray-400" /> Planilla PDF
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded-lg shadow-sm hover:bg-gray-50 transition-all">
            <Download size={16} className="text-gray-400" /> Exportar CSV
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0b5c36] text-white text-sm font-bold rounded-lg shadow-md shadow-green-900/20 hover:bg-[#08482a] transition-all">
            <Plus size={16} /> Nuevo Pesaje Manual
          </button>
        </div>
      </div>

      {/* ALERTA / PROTOCOLO */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4 shadow-sm">
        <div className="bg-emerald-50 p-2.5 rounded-lg text-emerald-700 shrink-0">
          <ClipboardType size={20} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h4 className="font-bold text-[#0f2942] text-sm">Protocolo de Registro en Balanza de Tolva</h4>
            <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded">Báscula Mecánica #1 y #2 Operativas</span>
          </div>
          <p className="text-xs text-gray-500">Taras de carretilla (18.5 kg) y baldes de dosificación calibradas a las 06:00 AM. Registre cada bache pesado antes de vaciar en comederos lineales y tolvas de tolva-silo.</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Última Tara Verificada</p>
          <p className="text-xs font-bold text-gray-700">Hoy, 06:15 AM <span className="font-normal text-gray-500">(P. Morales)</span></p>
        </div>
      </div>

      {/* 4 TARJETAS KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Tarjeta 1 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">Consumo Acumulado<br/>(Mes)</span>
            <div className="text-[#0b5c36]"><Archive size={18}/></div>
          </div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-3xl font-black text-[#0f2942]">38,420</span>
            <span className="text-sm font-bold text-gray-500">kg</span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Total pesado en tolvas y comederos</span>
            <span className="font-bold text-[#0b5c36]">Octubre</span>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">Consumo Promedio<br/>Diario</span>
            <div className="text-emerald-600"><Scale size={18}/></div>
          </div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-3xl font-black text-[#0f2942]">182.4</span>
            <span className="text-sm font-bold text-gray-500">g / ave / día</span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Cálculo zootécnico manual sobre 14,850 aves</span>
            <span className="font-bold text-gray-700">Cálculo 24h</span>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">Lotes Alimentados<br/>Hoy</span>
            <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">Al día</span>
          </div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-3xl font-black text-[#0f2942]">5</span>
            <span className="text-sm font-bold text-gray-500">de 5 activos</span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Galpones 01, 02, 03, 04, 05 completados</span>
            <span className="font-bold text-emerald-600">100%</span>
          </div>
        </div>

        {/* Tarjeta 4 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">Stock Físico en Silo<br/>&nbsp;</span>
            <div className="text-amber-600"><Building2 size={18}/></div>
          </div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-3xl font-black text-[#0f2942]">12,650</span>
            <span className="text-sm font-bold text-gray-500">kg</span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Inventario físico verificado en báscula de patio</span>
            <span className="font-bold text-amber-700">Aforo manual</span>
          </div>
        </div>

      </div>

      {/* SECCIÓN MEDIA: FORMULARIO Y TABLA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Formulario (1 Columna) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-50">
            <h3 className="text-base font-black text-[#0f2942] flex items-center gap-2 leading-tight">
              <ClipboardType className="text-[#0b5c36]" size={20}/> Formulario de Registro<br/>de Alimentación
            </h3>
            <span className="border border-gray-200 text-gray-500 text-[9px] font-bold px-2 py-1 rounded text-center uppercase tracking-wider">
              Registro Manual<br/>en Galpón
            </span>
          </div>

          <form className="space-y-4 flex-1 flex flex-col">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Fecha de Suministro *</label>
                <input type="date" defaultValue="2026-10-24" className="w-full border border-gray-200 p-2 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Turno de Reparto *</label>
                <select className="w-full border border-gray-200 p-2 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white cursor-pointer appearance-none">
                  <option>Mañana (07:00 - 09:00)</option>
                  <option>Tarde (15:00 - 17:00)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1">Asignación de Lote y Galpón *</label>
              <select className="w-full border border-gray-200 p-2 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white cursor-pointer appearance-none">
                <option>Lote Pekín #04 • Galpón 04 Norte (3,400 aves)</option>
                <option>Lote Pekín #05 • Galpón 02 Este (2,850 aves)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1.5">Etapa Zootécnica de Crianza *</label>
              <div className="grid grid-cols-4 gap-1.5 bg-gray-50 p-1 rounded-lg border border-gray-200">
                <button type="button" className="text-[10px] font-bold py-1.5 rounded bg-white text-gray-500 border border-gray-200 shadow-sm">Iniciación</button>
                <button type="button" className="text-[10px] font-bold py-1.5 rounded bg-white text-gray-500 border border-gray-200 shadow-sm">Crecimiento</button>
                <button type="button" className="text-[10px] font-bold py-1.5 rounded bg-[#0b5c36] text-white shadow-sm">Engorde</button>
                <button type="button" className="text-[10px] font-bold py-1.5 rounded bg-white text-gray-500 border border-gray-200 shadow-sm">Reproducción</button>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1">Tipo de Alimento / Fórmula de Granja *</label>
              <select className="w-full border border-gray-200 p-2 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white cursor-pointer appearance-none">
                <option>Ración Engorde Grano Partido 16% PB (Tolva Ccr)</option>
                <option>Harina de Inicio 22% PB Micropellet</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Cantidad Pesada en Balanza *</label>
                <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#0b5c36]">
                  <input type="number" placeholder="Ej: 520" className="w-full p-2 text-sm outline-none text-gray-700" />
                  <div className="bg-gray-50 border-l border-gray-200 px-3 flex items-center text-xs font-bold text-gray-500">kg</div>
                </div>
                <p className="text-[9px] text-gray-400 mt-1">Tara de carretilla descontada</p>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Comederos / Tolvas Abastecidas *</label>
                <input type="number" defaultValue="18" className="w-full border border-gray-200 p-2 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" />
                <p className="text-[9px] text-gray-400 mt-1 text-right">Verificación visual de nivel</p>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1">Operario Responsable de Báscula / Despacho *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User size={14} className="text-gray-400"/></div>
                <input type="text" defaultValue="Carlos Mendoza" className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" />
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-end mb-1">
                <label className="block text-[11px] font-bold text-gray-600">Observaciones Nutricionales (Anotación Manual)</label>
                <span className="text-[9px] text-gray-400 italic">Libreta de campo</span>
              </div>
              <textarea 
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white resize-none flex-1 min-h-[60px]" 
                placeholder="Registrar textura del grano, apetencia observada, humedad de la cama alrededor de tolvas, remanente anterior..."
              ></textarea>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button type="button" className="w-1/3 py-2.5 bg-gray-50 border border-gray-200 text-sm font-bold text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                Limpiar Formulario
              </button>
              <button type="button" className="w-2/3 flex items-center justify-center gap-2 bg-[#0b5c36] text-white py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-[#08482a] transition-colors">
                <Archive size={16} /> Guardar Registro
              </button>
            </div>
          </form>
        </div>

        {/* Historial (2 Columnas) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
          
          <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row justify-between sm:items-center gap-3 bg-white">
            <h3 className="text-base font-black text-[#0f2942] flex items-center gap-2">
              <Archive size={18} className="text-[#0b5c36]"/> Historial de Alimentación
            </h3>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Libro de Tolva • Octubre 2026</p>
          </div>

          <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50 flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Search size={14} className="text-gray-400"/></div>
              <input type="text" placeholder="Buscar por Lote o Alimento..." className="pl-9 pr-4 py-1.5 border border-gray-200 rounded-md text-xs outline-none focus:border-[#0b5c36] w-full text-gray-600 bg-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500">Etapa:</span>
              <select className="border border-gray-200 rounded-md text-xs px-2 py-1.5 text-gray-600 outline-none focus:border-[#0b5c36] bg-white">
                <option>Todas</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500">Galpón:</span>
              <select className="border border-gray-200 rounded-md text-xs px-2 py-1.5 text-gray-600 outline-none focus:border-[#0b5c36] bg-white">
                <option>Todos</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-200 text-[9px] uppercase tracking-widest text-gray-500 font-bold">
                  <th className="p-3 pl-5">FECHA / TURNO</th>
                  <th className="p-3">LOTE Y GALPÓN</th>
                  <th className="p-3">ETAPA</th>
                  <th className="p-3">ALIMENTO SUMINISTRADO</th>
                  <th className="p-3 text-right pr-5">CANTIDAD (KG)</th>
                </tr>
              </thead>
              <tbody className="text-xs text-gray-700">
                
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="p-3 pl-5">
                    <p className="font-bold text-[#0f2942]">24/10/2026</p>
                    <p className="text-[10px] text-gray-500">07:30 • Mañana</p>
                  </td>
                  <td className="p-3">
                    <p className="font-bold text-[#0f2942]">Lote Pekín #04</p>
                    <p className="text-[10px] text-gray-500">Galpón 04 Norte</p>
                  </td>
                  <td className="p-3"><span className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded border border-emerald-100 text-[10px]">Engorde</span></td>
                  <td className="p-3 text-[11px] text-gray-600 leading-tight">Ración Engorde 16% PB<br/>Grano partido • 18 tolvas</td>
                  <td className="p-3 text-right pr-5 font-black text-emerald-600 text-sm">540 kg</td>
                </tr>

                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="p-3 pl-5">
                    <p className="font-bold text-[#0f2942]">24/10/2026</p>
                    <p className="text-[10px] text-gray-500">08:00 • Mañana</p>
                  </td>
                  <td className="p-3">
                    <p className="font-bold text-[#0f2942]">Lote Pekín #05</p>
                    <p className="text-[10px] text-gray-500">Galpón 02 Este</p>
                  </td>
                  <td className="p-3"><span className="bg-indigo-50 text-indigo-700 font-bold px-2.5 py-1 rounded border border-indigo-100 text-[10px]">Iniciación</span></td>
                  <td className="p-3 text-[11px] text-gray-600 leading-tight">Harina de Inicio 22% PB<br/>Micropellet • 12 tolvas</td>
                  <td className="p-3 text-right pr-5 font-black text-[#0f2942] text-sm">280 kg</td>
                </tr>

                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="p-3 pl-5">
                    <p className="font-bold text-[#0f2942]">23/10/2026</p>
                    <p className="text-[10px] text-gray-500">16:00 • Tarde</p>
                  </td>
                  <td className="p-3">
                    <p className="font-bold text-[#0f2942]">Lote Cherry Valley #12</p>
                    <p className="text-[10px] text-gray-500">Galpón 03</p>
                  </td>
                  <td className="p-3"><span className="bg-blue-50 text-blue-700 font-bold px-2.5 py-1 rounded border border-blue-100 text-[10px]">Crecimiento</span></td>
                  <td className="p-3 text-[11px] text-gray-600 leading-tight">Pellet Crecimiento 19% PB<br/>Peletizado 3mm • 20 tolvas</td>
                  <td className="p-3 text-right pr-5 font-black text-[#0f2942] text-sm">460 kg</td>
                </tr>

                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="p-3 pl-5">
                    <p className="font-bold text-[#0f2942]">23/10/2026</p>
                    <p className="text-[10px] text-gray-500">08:15 • Mañana</p>
                  </td>
                  <td className="p-3">
                    <p className="font-bold text-[#0f2942]">Lote Reproductoras A1</p>
                    <p className="text-[10px] text-gray-500">Galpón 01</p>
                  </td>
                  <td className="p-3"><span className="bg-amber-50 text-amber-700 font-bold px-2.5 py-1 rounded border border-amber-100 text-[10px]">Reproducción</span></td>
                  <td className="p-3 text-[11px] text-gray-600 leading-tight">Suplemento Postura + Calcio<br/>Concha molida • 10 tolvas</td>
                  <td className="p-3 text-right pr-5 font-black text-[#0f2942] text-sm">210 kg</td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 pl-5">
                    <p className="font-bold text-[#0f2942]">22/10/2026</p>
                    <p className="text-[10px] text-gray-500">16:30 • Tarde</p>
                  </td>
                  <td className="p-3">
                    <p className="font-bold text-[#0f2942]">Lote Pekín #04</p>
                    <p className="text-[10px] text-gray-500">Galpón 04 Norte</p>
                  </td>
                  <td className="p-3"><span className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded border border-emerald-100 text-[10px]">Engorde</span></td>
                  <td className="p-3 text-[11px] text-gray-600 leading-tight">Ración Engorde 16% PB<br/>Grano partido • 18 tolvas</td>
                  <td className="p-3 text-right pr-5 font-black text-[#0f2942] text-sm">535 kg</td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="p-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-[10px] font-medium text-gray-500">
            <span>Mostrando <strong>5</strong> de 142 registros físicos • Pág. 1 de 29</span>
            <div className="flex items-center gap-1">
              <button className="flex items-center hover:text-[#0b5c36] px-1 text-gray-400"><ChevronLeft size={14}/> Anterior</button>
              <span className="bg-[#0b5c36] text-white w-6 h-6 flex items-center justify-center rounded font-bold shadow-sm">1</span>
              <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-200 transition-colors">2</button>
              <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-200 transition-colors">3</button>
              <button className="flex items-center hover:text-[#0b5c36] px-1 text-gray-700 font-bold">Siguiente <ChevronRight size={14}/></button>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER WIDGETS (3 Columnas) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Widget 1 */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-widest">Capacidad de Tolvas por Galpón</h4>
            <Building2 size={14} className="text-emerald-500" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">Galpón 01 (Reprod.)</span>
              <span className="font-bold text-gray-700">12 tolvas lineales (300 kg cap.)</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">Galpón 02 (Iniciación)</span>
              <span className="font-bold text-gray-700">14 comederos tolva baby (400 kg cap.)</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">Galpón 03 (Crecim.)</span>
              <span className="font-bold text-gray-700">22 tolvas canaleta (800 kg cap.)</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">Galpón 04 (Engorde)</span>
              <span className="font-bold text-gray-700">24 tolvas automáticas (950 kg cap.)</span>
            </div>
          </div>
        </div>

        {/* Widget 2 */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-widest">Inspección de Grano y Cereal</h4>
            <CheckCircle2 size={14} className="text-amber-500" />
          </div>
          <ul className="space-y-2 text-[11px] text-gray-600">
            <li className="flex items-start gap-2">
              <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5"/>
              <span>Verificar ausencia de apelmazamiento por condensación en tolvas metálicas cada amanecer.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5"/>
              <span>Revisión olfativa y de color: ración de engorde con olor a cereal tostado libre de micotoxinas.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5"/>
              <span>En caso de lluvia continua, elevar platos de tolva a 15 cm sobre la cama de cascarilla de arroz.</span>
            </li>
          </ul>
        </div>

        {/* Widget 3 */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-widest">Instrucciones de Báscula Manual</h4>
            <Scale size={14} className="text-gray-400" />
          </div>
          <p className="text-[11px] text-gray-600 leading-relaxed bg-white p-3 rounded-lg border border-gray-200 mb-3">
            <strong className="text-[#0f2942]">Comprobación con Pesa Patrón de 25 kg:</strong><br/> Ajustar el nonio de la barra graduada si difiere más de 200 gramos respecto a la lectura nominal.
          </p>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500">Próxima calibración física:</span>
            <span className="font-bold text-[#0f2942]">01/Nov/2026</span>
          </div>
        </div>

      </div>

    </div>
  );
}

// ==========================================
// COMPONENTE: NIDOS Y POSTURA (DOBLE FORMULARIO)
// ==========================================
function EclosionAdministrativo() {
  // --- ESTADOS PARA FORMULARIO 1: REGISTRO DE NIDOS ---
  const [lotesDisponibles, setLotesDisponibles] = useState([]);
  const [loteSeleccionado, setLoteSeleccionado] = useState('');
  const [codigoNido, setCodigoNido] = useState('NID-001');
  const [fechaInicioNido, setFechaInicioNido] = useState('2026-10-18');
  const [estadoIncubacionNido, setEstadoIncubacionNido] = useState('en_curso'); // Valor por defecto válido por el CHECK constraint
  const [fechaEclosionNido, setFechaEclosionNido] = useState(''); // Opcional
  const [cantidadEclosionNido, setCantidadEclosionNido] = useState(12);
  const [obsNido, setObsNido] = useState('Caja nidal limpia.');
  const [loadingNido, setLoadingNido] = useState(false);

  // --- ESTADOS PARA FORMULARIO 2: REGISTRO DE INCUBACIÓN ---
  const [nidosDisponibles, setNidosDisponibles] = useState([]);
  const [nidoSeleccionado, setNidoSeleccionado] = useState('');
  const [tipoEvento, setTipoEvento] = useState('Permanencia');
  const [horasPeriodo, setHorasPeriodo] = useState(20);
  const [obsIncubacion, setObsIncubacion] = useState('Comportamiento normal en ronda.');
  const [loadingIncubacion, setLoadingIncubacion] = useState(false);

  // 1. Cargamos los lotes y nidos al abrir la vista
  useEffect(() => {
    const cargarDatosSelects = async () => {
      try {
        // Cargar Lotes
        const resLotes = await fetch(`${API_URL}/api/lotes`);
        const dataLotes = await resLotes.json();
        if (dataLotes.success && dataLotes.lotes.length > 0) {
          setLotesDisponibles(dataLotes.lotes);
          setLoteSeleccionado(dataLotes.lotes[0].id);
        }

        // Cargar Nidos
        const resNidos = await fetch(`${API_URL}/api/nidos`);
        const dataNidos = await resNidos.json();
        if (dataNidos.success && dataNidos.nidos.length > 0) {
          setNidosDisponibles(dataNidos.nidos);
          setNidoSeleccionado(dataNidos.nidos[0].id);
        }
      } catch (error) {
        console.error('Error al cargar datos iniciales:', error);
      }
    };
    cargarDatosSelects();
  }, []);

  // 2. Función para guardar el Nido (Paso 1)
  const handleGuardarNido = async (e) => {
    e.preventDefault();
    setLoadingNido(true);

    const payload = {
      lote_id: loteSeleccionado,
      codigo_nombre: codigoNido,
      fecha_inicio: fechaInicioNido,
      estado_incubacion: estadoIncubacionNido,
      fecha_eclosion: fechaEclosionNido ? fechaEclosionNido : null,
      cantidad_eclosion: parseInt(cantidadEclosionNido),
      obs_eclocion: obsNido
    };

    try {
      const response = await fetch(`${API_URL}/api/nidos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('¡Nido registrado y vinculado al lote exitosamente!');
        setLoadingNido(false);
        
        const resNidos = await fetch(`${API_URL}/api/nidos`);
        const dataNidos = await resNidos.json();
        if (dataNidos.success) {
          setNidosDisponibles(dataNidos.nidos);
          setNidoSeleccionado(dataNidos.nidos[0].id);
        }
      } else {
        const mensajeError = typeof data.detail === 'string' 
          ? data.detail 
          : JSON.stringify(data.detail || 'Verifique los datos.');
        alert(`Error al registrar nido: ${mensajeError}`);
        setLoadingNido(false);
      }
    } catch (error) {
      alert('No se pudo conectar con el servidor backend.');
      setLoadingNido(false);
    }
  };

  // 3. Función para guardar el Registro de Incubación / Control Diario (Paso 2)
  const handleGuardarIncubacion = async (e) => {
    e.preventDefault();
    setLoadingIncubacion(true);

    const payload = {
      nido_id: nidoSeleccionado,
      tipo_evento: tipoEvento,
      horas_periodo: parseFloat(horasPeriodo),
      observaciones: obsIncubacion
    };

    try {
      const response = await fetch(`${API_URL}/api/registros-incubacion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('¡Registro de incubación guardado con éxito!');
        setLoadingIncubacion(false);
      } else {
        const mensajeError = typeof data.detail === 'string' 
          ? data.detail 
          : JSON.stringify(data.detail || 'Verifique los datos.');
        alert(`Error al guardar: ${mensajeError}`);
        setLoadingIncubacion(false);
      }
    } catch (error) {
      alert('No se pudo conectar con el servidor backend.');
      setLoadingIncubacion(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* ========================================================= */}
      {/* FORMULARIO 1: REGISTRO Y ALTA DE NIDOS (Arriba)           */}
      {/* ========================================================= */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
          <div>
            <h3 className="text-lg font-black text-[#0f2942]">Paso 1: Alta y Registro de Nidos</h3>
            <p className="text-xs text-gray-500 mt-0.5">Creación de la caja nidal física asociada a un lote.</p>
          </div>
          <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Módulo Nidos
          </span>
        </div>

        <form onSubmit={handleGuardarNido} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Lote / Parvada Asociada *</label>
              <select 
                value={loteSeleccionado}
                onChange={(e) => setLoteSeleccionado(e.target.value)}
                required
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white cursor-pointer"
              >
                {lotesDisponibles.map((lote) => (
                  <option key={lote.id} value={lote.id}>
                    {lote.codigo_nombre} - ({lote.etapa})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Código / ID del Nido *</label>
              <input 
                type="text" 
                value={codigoNido}
                onChange={(e) => setCodigoNido(e.target.value)}
                required
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" 
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Fecha de Inicio *</label>
              <input 
                type="date" 
                value={fechaInicioNido}
                onChange={(e) => setFechaInicioNido(e.target.value)}
                required
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Estado de Incubación *</label>
              <select 
                value={estadoIncubacionNido}
                onChange={(e) => setEstadoIncubacionNido(e.target.value)}
                required
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white cursor-pointer"
              >
                <option value="en_curso">En Curso (Activa)</option>
                <option value="finalizado">Finalizado</option>
                <option value="abandonado">Abandonado</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Fecha de Eclosión (Opcional)</label>
              <input 
                type="date" 
                value={fechaEclosionNido}
                onChange={(e) => setFechaEclosionNido(e.target.value)}
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" 
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Cantidad Eclosión / Huevos *</label>
              <input 
                type="number" 
                value={cantidadEclosionNido}
                onChange={(e) => setCantidadEclosionNido(e.target.value)}
                required
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" 
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Observaciones del Nido *</label>
            <input 
              type="text" 
              value={obsNido}
              onChange={(e) => setObsNido(e.target.value)}
              className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" 
            />
          </div>

          <div className="flex justify-end pt-3">
            <button 
              type="submit" 
              disabled={loadingNido}
              className="bg-[#0b5c36] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#084729] transition-colors cursor-pointer disabled:opacity-50"
            >
              {loadingNido ? 'Registrando Nido...' : 'Guardar y Dar de Alta Nido'}
            </button>
          </div>
        </form>
      </div>


      {/* ========================================================= */}
      {/* FORMULARIO 2: REGISTRO DE INCUBACIÓN (Abajo)              */}
      {/* ========================================================= */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
          <div>
            <h3 className="text-lg font-black text-[#0f2942]">Paso 2: Registro de Incubación (Control Diario)</h3>
            <p className="text-xs text-gray-500 mt-0.5">Seguimiento de horas de permanencia y eventos sobre el nido creado.</p>
          </div>
          <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Control Operativo
          </span>
        </div>

        <form onSubmit={handleGuardarIncubacion} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Seleccionar Nido *</label>
              <select 
                value={nidoSeleccionado}
                onChange={(e) => setNidoSeleccionado(e.target.value)}
                required
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white cursor-pointer"
              >
                {nidosDisponibles.map((nido) => (
                  <option key={nido.id} value={nido.id}>
                    Nido: {nido.codigo_nombre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Tipo de Evento *</label>
              <select 
                value={tipoEvento}
                onChange={(e) => setTipoEvento(e.target.value)}
                required
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white cursor-pointer"
              >
                <option value="permanencia">Permanencia</option>
                <option value="abandono">Abandono</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Horas de Permanencia *</label>
              <input 
                type="number" 
                step="0.1"
                value={horasPeriodo}
                onChange={(e) => setHorasPeriodo(e.target.value)}
                required
                className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" 
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Observaciones de Campo *</label>
            <input 
              type="text" 
              value={obsIncubacion}
              onChange={(e) => setObsIncubacion(e.target.value)}
              required
              className="w-full border border-gray-200 p-2.5 rounded-lg text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-white" 
            />
          </div>

          <div className="flex justify-end pt-3">
            <button 
              type="submit" 
              disabled={loadingIncubacion}
              className="bg-[#0b5c36] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#084729] transition-colors cursor-pointer disabled:opacity-50"
            >
              {loadingIncubacion ? 'Guardando Registro...' : 'Guardar Registro de Incubación'}
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

// ==========================================
// COMPONENTE: PANTALLA DE LOGIN Y REGISTRO (CONECTADO AL BACKEND)
// ==========================================
function AuthScreen({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [datosContacto, setDatosContacto] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    const url = isLogin ? `${API_URL}/api/login` : `${API_URL}/api/registro`;
    
    const payload = isLogin 
      ? { correo, contrasena } 
      : { nombre_usuario: nombreUsuario, correo, contrasena, datos_contacto: datosContacto };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (!isLogin) {
          alert('¡Registro exitoso! Ahora inicie sesión.');
          setIsLogin(true);
          setLoading(false);
        } else {
          onLogin();
        }
      } else {
        setErrorMsg(data.detail || 'Ocurrió un error en la autenticación.');
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg('No se pudo conectar con el servidor backend (FastAPI). ¿Está encendido?');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        {/* Lado Izquierdo - Branding Institucional */}
        <div className="bg-[#0b5c36] w-full md:w-5/12 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10">
            <div className="bg-white/10 w-fit p-3 rounded-xl mb-6 backdrop-blur-sm border border-white/20">
              <Building2 size={32} className="text-green-100" />
            </div>
            <h1 className="text-3xl font-black tracking-tight mb-2">AgroDuck OS</h1>
            <p className="text-green-200 text-sm font-medium tracking-wide">GESTIÓN AVÍCOLA TRADICIONAL</p>
          </div>
          
          <div className="relative z-10 mt-12 md:mt-0">
            <div className="bg-black/20 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={16} className="text-green-300" />
                <p className="text-xs font-bold uppercase tracking-widest text-green-100">Acceso Restringido</p>
              </div>
              <p className="text-[11px] text-green-50/80 leading-relaxed">
                Módulo de acceso seguro para personal autorizado. Conectado a la base de datos centralizada de la granja.
              </p>
            </div>
          </div>
        </div>

        {/* Lado Derecho - Formulario Manual */}
        <div className="w-full md:w-7/12 p-10 md:p-14">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-[#0f2942]">
              {isLogin ? 'Iniciar Sesión' : 'Crear Nueva Cuenta'}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {isLogin ? 'Ingrese sus credenciales para acceder al sistema.' : 'Complete el formulario para registrar un nuevo operario.'}
            </p>
          </div>

          {/* Mensaje de Error si la conexión o credenciales fallan */}
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium flex items-center gap-2">
              <AlertCircle size={16} />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Campo Nombre de Usuario (Solo en Registro - Mapeado a la tabla usuarios) */}
            {!isLogin && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Nombre de Usuario</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User size={16} className="text-gray-400"/></div>
                  <input 
                    type="text" 
                    required 
                    value={nombreUsuario}
                    onChange={(e) => setNombreUsuario(e.target.value)}
                    placeholder="Ej. carlos_mendoza" 
                    className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-gray-50" 
                  />
                </div>
              </div>
            )}

            {/* Campo Email */}
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Correo Institucional</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Mail size={16} className="text-gray-400"/></div>
                <input 
                  type="email" 
                  required 
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="operario@granja.com" 
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-gray-50" 
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">Contraseña</label>
                {isLogin && <a href="#" className="text-[10px] font-bold text-[#0b5c36] hover:underline">¿Olvidó su clave?</a>}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Lock size={16} className="text-gray-400"/></div>
                <input 
                  type="password" 
                  required 
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-gray-50" 
                />
              </div>
            </div>

            {/* Campo Teléfono / Datos de Contacto (Solo en Registro) */}
            {!isLogin && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Teléfono / Contacto</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User size={16} className="text-gray-400"/></div>
                  <input 
                    type="text" 
                    required 
                    value={datosContacto}
                    onChange={(e) => setDatosContacto(e.target.value)}
                    placeholder="Ej. +51 987654321" 
                    className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#0b5c36] text-gray-700 bg-gray-50" 
                  />
                </div>
              </div>
            )}

            {/* Botón Principal */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#0b5c36] text-white py-3.5 rounded-xl text-sm font-bold shadow-md shadow-green-900/20 hover:bg-[#08482a] transition-colors mt-4 flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? 'Procesando...' : (isLogin ? 'Ingresar al Panel Operativo' : 'Registrar Cuenta de Operario')} 
            </button>
          </form>

          {/* Toggle Login/Registro */}
          <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-600">
              {isLogin ? '¿No tiene cuenta asignada?' : '¿Ya tiene credenciales de acceso?'}
              <button 
                onClick={() => { setIsLogin(!isLogin); setErrorMsg(''); }} 
                className="ml-1 font-bold text-[#0b5c36] hover:underline cursor-pointer"
              >
                {isLogin ? 'Solicitar registro' : 'Iniciar sesión aquí'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
