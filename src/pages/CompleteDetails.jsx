import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { mockPatients, healthRecords, mockAppointments, labOrders } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { 
  User, Calendar, ShieldCheck, Activity, FileText, 
  History, FlaskConical, Pill, Stethoscope, ChevronRight,
  TrendingUp, Download, Eye, AlertCircle, Baby, Heart,
  Award, FileCheck, ClipboardList, Scale
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const CompleteDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const isAdmin = user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN';
  
  // For USER role, they always see their own record. For ADMIN, we find by ID.
  const patient = isAdmin 
    ? (mockPatients.find(p => p.id === id) || mockPatients.find(p => p.id === 'P003'))
    : mockPatients.find(p => p.id === 'P003'); // Mocking current user's baby

  const getActiveTab = () => {
    if (location.pathname.includes('/records')) return 'records';
    if (location.pathname.includes('/growth')) return 'growth';
    if (location.pathname.includes('/reports')) return 'reports';
    return 'overview';
  };

  const activeTab = getActiveTab();

  // Dynamically build paths based on role
  const getPath = (tabId) => {
    const base = isAdmin ? '/admin' : '/user';
    const segment = {
      overview: isAdmin ? `details/${id}` : 'profile',
      records: isAdmin ? `records/${id}` : 'records',
      growth: isAdmin ? `growth/${id}` : 'growth',
      reports: isAdmin ? `reports/${id}` : 'reports',
    }[tabId];
    return `${base}/${segment}`;
  };

  const tabs = [
    { id: 'overview', label: 'Identity', icon: Baby, path: getPath('overview') },
    { id: 'records', label: 'Records', icon: Award, path: getPath('records') },
    { id: 'growth', label: 'Growth', icon: TrendingUp, path: getPath('growth') },
    { id: 'reports', label: 'History', icon: ClipboardList, path: getPath('reports') },
  ];

  return (
    <div className="space-y-4 pb-10">
      {/* Patient Header Card */}
      <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white font-black text-xl shadow-md">
            {patient.name[0]}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black text-slate-900 tracking-tight">{patient.name}</h1>
              <span className="bg-primary/10 text-primary text-[8px] px-1.5 py-0.5 rounded-full font-black border border-primary/20 uppercase tracking-widest">
                {isAdmin ? 'Active' : 'Authenticated Profile'}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-1 text-slate-500 font-bold text-[12px]">
              <span className="flex items-center gap-1"><Baby size={12} className="text-primary" /> {patient.babyName || 'Baby'}</span>
              <span className="flex items-center gap-1"><Heart size={12} className="text-primary" /> {patient.gender || 'Male'}</span>
              <span className="text-slate-300 hidden md:block">|</span>
              <span className="font-mono text-slate-400 hidden md:block">{patient.erpId}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-50 text-slate-600 rounded-lg font-bold text-[11px] border border-slate-100 uppercase tracking-wider">
            <Download size={14} /> Export Dossier
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-primary text-white rounded-lg font-bold text-[11px] uppercase tracking-wider shadow-lg shadow-primary/10">
            <AlertCircle size={14} /> Support
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto scrollbar-hide gap-1 p-1 bg-slate-100/50 rounded-xl border border-slate-200 shadow-inner w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className={twMerge(
              "flex items-center gap-2 px-4 py-2 rounded-lg font-black text-[11px] uppercase tracking-widest transition-all whitespace-nowrap",
              activeTab === tab.id 
                ? "bg-white text-primary shadow-sm" 
                : "text-slate-400 hover:text-slate-600"
            )}
          >
            <tab.icon size={14} /> {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Content Area */}
      <div className="min-h-[400px]">
        {activeTab === 'overview' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
               {[
                 { label: 'Care Phase', value: 'Phase 1', sub: 'Newborn', color: 'bg-primary' },
                 { label: 'Membership', value: 'CarePlus', sub: 'Active', color: 'bg-blue-500' },
                 { label: 'Next Event', value: 'Checkup', sub: 'Tomorrow', color: 'bg-orange-500' },
                 { label: 'Status', value: 'Verified', sub: 'Complete', color: 'bg-emerald-500' },
               ].map((stat, i) => (
                 <div key={i} className="glass-card p-3 md:p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                   <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                   <h4 className="text-lg md:text-xl font-black text-slate-900 leading-none">{stat.value}</h4>
                   <p className="text-[9px] text-slate-500 font-bold mt-2 flex items-center gap-1 uppercase">
                     <div className={twMerge("w-1 h-1 rounded-full", stat.color)}></div> {stat.sub}
                   </p>
                 </div>
               ))}
             </div>
             <div className="glass-card p-5 md:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-tight">Identity Details</h3>
                  <p className="text-[12px] text-slate-500 font-bold mt-1">Personal child identity record.</p>
                </div>
                <div className="grid grid-cols-2 gap-6 w-full md:w-auto md:flex md:gap-8">
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mother Name</p>
                    <p className="text-[13px] font-black text-slate-900">{patient.name}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mother Age</p>
                    <p className="text-[13px] font-black text-slate-900">{patient.motherAge} Years</p>
                  </div>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'records' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
               {[
                 { title: 'Birth Certificate', date: 'Apr 10', type: 'Certificate' },
                 { title: 'Discharge Summary', date: 'Apr 12', type: 'Summary' },
                 { title: 'Vaccination Card', date: 'Apr 15', type: 'Log' },
               ].map((cert, i) => (
                 <div key={i} className="glass-card p-4 rounded-xl border-t-4 border-t-primary border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center">
                        <Award size={18} />
                      </div>
                      <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-slate-100 text-slate-400 uppercase">{cert.type}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-black text-slate-900 leading-tight">{cert.title}</p>
                      <p className="text-[9px] text-slate-400 font-bold uppercase mt-1.5">{cert.date}, 2026</p>
                    </div>
                 </div>
               ))}
             </div>
             <div className="glass-card rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                <div className="p-4 bg-slate-50 border-b border-slate-100 font-black text-[10px] text-slate-400 uppercase tracking-widest">Child Health Dossier</div>
                <div className="p-4 space-y-2">
                   {healthRecords.map((rec) => (
                      <div key={rec.id} className="flex justify-between items-center p-3 bg-white border border-slate-100 rounded-lg hover:border-primary/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                           <FileCheck size={16} className="text-primary" />
                           <p className="text-[13px] font-bold text-slate-900">{rec.title}</p>
                        </div>
                        <Download size={14} className="text-slate-300" />
                      </div>
                   ))}
                </div>
             </div>
          </div>
        )}

        {activeTab === 'growth' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shadow-inner"><Scale size={20} /></div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Weight</p>
                    <p className="text-lg font-black text-slate-900">4.2 kg</p>
                  </div>
                </div>
                <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shadow-inner"><TrendingUp size={20} /></div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Height</p>
                    <p className="text-lg font-black text-slate-900">54 cm</p>
                  </div>
                </div>
                <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shadow-inner"><Activity size={20} /></div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Percentile</p>
                    <p className="text-lg font-black text-slate-900">85th</p>
                  </div>
                </div>
             </div>
             <div className="glass-card p-10 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col items-center justify-center text-center">
                <p className="text-[13px] text-slate-400 font-bold mb-4">World Health Organization (WHO) Growth Analytics</p>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-primary animate-pulse"></div>
                </div>
                <p className="text-[10px] text-slate-400 font-bold mt-4 uppercase">Status: Optimal Development Track</p>
             </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="glass-card rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                <div className="p-4 bg-slate-50 border-b border-slate-100 font-black text-[10px] text-slate-400 uppercase tracking-widest">Medical History & Logs</div>
                <div className="p-4 space-y-3">
                   {labOrders.map(lab => (
                     <div key={lab.id} className="flex justify-between items-center p-3 bg-white border border-slate-100 rounded-xl">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded bg-blue-50/50 flex items-center justify-center text-blue-500 shadow-inner"><FileCheck size={16}/></div>
                         <div>
                           <p className="text-[13px] font-black text-slate-900 leading-tight">{lab.test}</p>
                           <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">{lab.date} • {lab.status}</p>
                         </div>
                       </div>
                       <ChevronRight size={18} className="text-slate-300" />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompleteDetails;
