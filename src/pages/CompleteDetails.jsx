import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockPatients, healthRecords, mockAppointments, labOrders } from '../data/mockData';
import { 
  User, Calendar, ShieldCheck, Activity, FileText, 
  History, FlaskConical, Pill, Stethoscope, ChevronRight,
  TrendingUp, Download, Eye, AlertCircle, Baby, Heart,
  Award, FileCheck, ClipboardList
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const CompleteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  const patient = mockPatients.find(p => p.id === id) || mockPatients.find(p => p.id === 'P003');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Baby },
    { id: 'records', label: 'Records', icon: Award },
    { id: 'growth', label: 'Growth', icon: TrendingUp },
    { id: 'reports', label: 'History', icon: ClipboardList },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Patient Header Card - Responsive */}
      <div className="glass-card p-5 lg:p-8 rounded-[2rem] border border-slate-200 bg-white shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-[1.5rem] bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white font-black text-2xl lg:text-3xl shadow-xl shadow-primary/20">
            {patient.name[0]}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">{patient.name}</h1>
              <span className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded-full font-black border border-primary/20 uppercase tracking-widest">Active</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-slate-500 font-bold text-[13px] lg:text-[14px]">
              <span className="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                <Baby size={14} className="text-primary" /> {patient.babyName || 'Newborn'}
              </span>
              <span className="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                <Heart size={14} className="text-primary" /> {patient.gender || 'Male'}
              </span>
              <span className="font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">{patient.erpId}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 w-full lg:w-auto">
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-600 rounded-xl font-black text-[11px] border border-slate-200 uppercase tracking-widest shadow-sm hover:bg-slate-50 transition-all">
            <Download size={16} /> Export
          </button>
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-black text-[11px] uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">
            <AlertCircle size={16} /> Alert
          </button>
        </div>
      </div>

      {/* Navigation Tabs - Mobile Scrollable */}
      <div className="flex overflow-x-auto scrollbar-hide gap-1 p-1.5 bg-slate-100/50 rounded-2xl w-full lg:w-fit border border-slate-200 shadow-inner">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={twMerge(
              "flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-black text-[12px] uppercase tracking-widest transition-all whitespace-nowrap min-w-[120px] lg:min-w-0",
              activeTab === tab.id 
                ? "bg-white text-primary shadow-md" 
                : "text-slate-400 hover:text-slate-600"
            )}
          >
            <tab.icon size={16} /> {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Content Area */}
      <div className="min-h-[400px] animate-in fade-in duration-500">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Phase Progress', value: '4%', sub: 'Month 1 of 24', color: 'bg-primary' },
                { label: 'Benefits Used', value: '12', sub: 'of 45 entitled', color: 'bg-blue-500' },
                { label: 'Next Event', value: 'Vaccination', sub: 'In 2 days', color: 'bg-orange-500' },
                { label: 'Health Status', value: 'Stable', sub: 'No Alerts', color: 'bg-emerald-500' },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between h-32">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
                  <h4 className="text-3xl font-black text-slate-900 leading-none">{stat.value}</h4>
                  <p className="text-[11px] text-slate-500 font-bold flex items-center gap-2 uppercase tracking-tight">
                    <div className={twMerge("w-2 h-2 rounded-full", stat.color)}></div> {stat.sub}
                  </p>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-[2rem] border border-slate-200 overflow-hidden bg-white shadow-sm">
              <div className="p-5 bg-slate-50/50 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-[12px] font-black text-slate-400 uppercase tracking-widest">CarePlus Benefit Roadmap</h3>
                <span className="text-[10px] font-black bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/10 uppercase">Phase 1 Active</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[500px]">
                  <tbody className="divide-y divide-slate-50 text-[14px]">
                    {[
                      { name: 'Newborn checkups', total: 4, used: 2 },
                      { name: 'Breastfeeding support', total: '∞', used: 0 },
                      { name: 'Vaccination guidance', total: '∞', used: 1 },
                      { name: 'Home visit', total: 1, used: 0 },
                    ].map((b, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-4 font-black text-slate-900">{b.name}</td>
                        <td className="px-8 py-4 text-right font-mono font-black text-slate-500">{b.used} / {b.total}</td>
                        <td className="px-8 py-4">
                          <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden ml-auto border border-slate-200 shadow-inner">
                            <div className="h-full bg-primary transition-all duration-1000 shadow-sm" style={{ width: b.total === '∞' ? '10%' : `${(b.used / b.total) * 100}%` }}></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'records' && (
          <div className="space-y-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {[
                 { title: 'Birth Certificate', date: 'Apr 10, 2026', id: 'BC-7782' },
                 { title: 'Discharge Summary', date: 'Apr 12, 2026', id: 'DS-9921' },
                 { title: 'Immunization Card', date: 'Apr 15, 2026', id: 'IC-4410' },
               ].map((cert, i) => (
                 <div key={i} className="glass-card p-6 rounded-2xl border-l-4 border-l-primary border border-slate-200 bg-white shadow-sm flex items-center gap-4 group hover:shadow-md transition-all cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="text-[15px] font-black text-slate-900 leading-tight tracking-tight">{cert.title}</p>
                      <p className="text-[11px] text-slate-400 font-bold uppercase mt-1.5 tracking-widest">{cert.date} • {cert.id}</p>
                    </div>
                    <Eye size={18} className="ml-auto text-slate-300 group-hover:text-primary transition-colors" />
                 </div>
               ))}
             </div>

             <div className="glass-card rounded-[2rem] border border-slate-200 overflow-hidden bg-white shadow-sm">
                <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                  <h3 className="text-[12px] font-black text-slate-400 uppercase tracking-widest leading-none">Medical Dossier History</h3>
                  <button className="text-[11px] font-black text-primary uppercase tracking-widest hover:underline">+ Upload New</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[600px]">
                    <thead>
                      <tr className="border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white">
                        <th className="px-8 py-3">Document</th>
                        <th className="px-8 py-3">Issue Date</th>
                        <th className="px-8 py-3">Format</th>
                        <th className="px-8 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-[14px]">
                      {healthRecords.map((rec) => (
                        <tr key={rec.id} className="hover:bg-slate-50 transition-colors group">
                          <td className="px-8 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shadow-inner">
                                <FileCheck size={16} />
                              </div>
                              <span className="font-black text-slate-900">{rec.title}</span>
                            </div>
                          </td>
                          <td className="px-8 py-4 font-bold text-slate-500">{rec.date}</td>
                          <td className="px-8 py-4">
                            <span className="text-[9px] font-black px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-400 uppercase tracking-widest shadow-sm">{rec.type}</span>
                          </td>
                          <td className="px-8 py-4 text-right">
                            <button className="text-primary hover:underline font-black text-[11px] uppercase tracking-widest">Download PDF</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'growth' && (
          <div className="glass-card p-8 lg:p-16 rounded-[2.5rem] border border-slate-200 bg-white shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center mb-6 shadow-inner">
              <TrendingUp size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Clinical Growth Monitoring</h3>
            <p className="text-[14px] text-slate-500 font-bold mt-2 max-w-sm">Detailed tracking of development metrics and percentile scaling.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-10 w-full max-w-2xl">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Weight</p>
                <p className="text-3xl font-black text-slate-900">4.2 <span className="text-sm text-slate-400">kg</span></p>
                <p className="text-[10px] text-green-500 font-bold mt-2 uppercase">↑ Normal Gain</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Height</p>
                <p className="text-3xl font-black text-slate-900">54 <span className="text-sm text-slate-400">cm</span></p>
                <p className="text-[10px] text-blue-500 font-bold mt-2 uppercase">↑ Healthy Growth</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Percentile</p>
                <p className="text-3xl font-black text-primary">85th</p>
                <p className="text-[10px] text-primary font-bold mt-2 uppercase">Top 15% Rank</p>
              </div>
            </div>
            <button className="mt-12 px-10 py-4 bg-primary text-white rounded-2xl font-black text-[12px] uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">Generate Analytics Chart</button>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-6">
             <div className="glass-card rounded-[2rem] border border-slate-200 overflow-hidden bg-white shadow-sm">
                <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
                  <FlaskConical size={18} className="text-blue-500" />
                  <h3 className="text-[12px] font-black text-slate-400 uppercase tracking-widest">Lab Report History</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[600px]">
                    <thead>
                      <tr className="border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white">
                        <th className="px-8 py-3">Report Test Name</th>
                        <th className="px-8 py-3">Analysis Date</th>
                        <th className="px-8 py-3">Result Status</th>
                        <th className="px-8 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-[14px]">
                      {labOrders.map((lab) => (
                        <tr key={lab.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-8 py-4 font-black text-slate-900">{lab.test}</td>
                          <td className="px-8 py-4 font-bold text-slate-500">{lab.date}</td>
                          <td className="px-8 py-4">
                            <span className="text-[10px] font-black px-3 py-1 rounded-full bg-blue-50 text-blue-600 uppercase tracking-tighter border border-blue-100 shadow-sm">{lab.status}</span>
                          </td>
                          <td className="px-8 py-4 text-right text-primary font-black text-[11px] uppercase tracking-widest cursor-pointer hover:underline">Download PDF</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="glass-card rounded-[2rem] border border-slate-200 overflow-hidden bg-white shadow-sm flex flex-col">
                  <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
                    <Calendar size={18} className="text-primary" />
                    <h3 className="text-[12px] font-black text-slate-400 uppercase tracking-widest">Clinic Booking Log</h3>
                  </div>
                  <div className="p-5 space-y-3 flex-1">
                    {mockAppointments.map((app) => (
                      <div key={app.id} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all cursor-pointer group shadow-inner">
                        <div>
                          <p className="text-[14px] font-black text-slate-900 group-hover:text-primary transition-colors">{app.doctor.split(' (')[0]}</p>
                          <p className="text-[11px] text-slate-400 font-bold uppercase mt-1 tracking-widest">{app.date} • {app.status}</p>
                        </div>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-primary transition-transform group-hover:translate-x-1" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-[2rem] border border-slate-200 overflow-hidden bg-white shadow-sm flex flex-col min-h-[300px]">
                  <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
                    <Stethoscope size={18} className="text-purple-500" />
                    <h3 className="text-[12px] font-black text-slate-400 uppercase tracking-widest">Specialist Network Consults</h3>
                  </div>
                  <div className="p-10 flex flex-col items-center justify-center text-center flex-1">
                    <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                       <ShieldCheck size={24} className="text-purple-500" />
                    </div>
                    <p className="text-[13px] text-slate-400 font-bold max-w-[200px]">No specialist records available for this patient history.</p>
                    <button className="mt-4 text-[11px] font-black text-primary uppercase tracking-widest hover:underline">Request Consultation</button>
                  </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompleteDetails;
