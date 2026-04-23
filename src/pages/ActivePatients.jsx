import React from 'react';
import { mockPatients } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Activity, User, Phone, Calendar, ArrowRight, MoreHorizontal, ShieldCheck } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const ActivePatients = () => {
  const navigate = useNavigate();
  const activePatients = mockPatients.filter(p => p.status === 'Active');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-1">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">Active Members</h1>
          <p className="text-[14px] text-slate-500 font-bold mt-1">Direct clinical management for CarePlus babies.</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search active..." 
              className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 focus:border-primary outline-none transition-all shadow-sm text-[14px] font-bold"
            />
          </div>
          <button className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-all text-slate-500 shadow-sm">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block glass-card rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-black text-slate-400 uppercase tracking-widest">
              <th className="px-6 py-4">Baby & Mother</th>
              <th className="px-6 py-4">Plan Status</th>
              <th className="px-6 py-4">Next Visit</th>
              <th className="px-6 py-4">Node ID</th>
              <th className="px-6 py-4 text-right">Care Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[15px]">
            {activePatients.map((patient) => (
              <tr key={patient.id} className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white font-black text-sm shadow-md">
                      {patient.babyName[0]}
                    </div>
                    <div>
                      <p className="font-black text-slate-900 leading-none">{patient.babyName}</p>
                      <p className="text-[11px] text-slate-400 font-bold mt-1 uppercase tracking-tight">Mother: {patient.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="font-black text-primary text-[12px] uppercase">Phase 1</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-slate-600">Apr 28, 2026</td>
                <td className="px-6 py-4">
                   <span className="font-mono text-[12px] text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">{patient.erpId}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={() => navigate(`/admin/details/${patient.id}`)}
                    className="bg-primary text-white text-[11px] font-black uppercase tracking-widest px-5 py-2.5 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                  >
                    Track
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {activePatients.map((patient) => (
          <div 
            key={patient.id} 
            className="bg-white p-5 rounded-[1.5rem] border border-slate-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white font-black text-lg shadow-md">
                    {patient.babyName[0]}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 leading-tight">{patient.babyName}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <ShieldCheck size={12} className="text-primary" />
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest">Active Plan</span>
                    </div>
                  </div>
               </div>
               <button className="p-2 text-slate-300"><MoreHorizontal size={20} /></button>
            </div>

            <div className="space-y-3 py-4 border-y border-slate-50">
               <div className="flex justify-between items-center text-[13px]">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mother Name</p>
                  <p className="font-bold text-slate-700">{patient.name}</p>
               </div>
               <div className="flex justify-between items-center text-[13px]">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Next Checkup</p>
                  <p className="font-bold text-slate-700">Apr 28, 2026</p>
               </div>
               <div className="flex justify-between items-center text-[13px]">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Clinical ID</p>
                  <p className="font-mono text-slate-400">{patient.erpId}</p>
               </div>
            </div>

            <button 
              onClick={() => navigate(`/admin/details/${patient.id}`)}
              className="w-full mt-4 bg-primary text-white text-[12px] font-black uppercase tracking-[0.1em] py-3.5 rounded-xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
            >
              Enter Command Center <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivePatients;
