import React from 'react';
import { mockPatients } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Activity, Baby } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const ActivePatients = () => {
  const navigate = useNavigate();
  const actives = mockPatients.filter(p => p.status === 'Active');

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end px-1">
        <div>
          <h1 className="text-2xl font-black mb-0.5 text-slate-900 tracking-tight">Active Members</h1>
          <p className="text-[13px] text-slate-500 font-medium">Managing the 2-year journey for subscribed patients.</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search active..." 
              className="bg-white border border-slate-200 rounded-lg py-1.5 pl-9 pr-3 focus:border-primary outline-none transition-all w-48 shadow-sm text-[13px] font-medium"
            />
          </div>
          <button className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-all text-slate-500 shadow-sm">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="glass-card rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-black text-slate-400 uppercase tracking-widest">
              <th className="px-5 py-3">Mother & Baby</th>
              <th className="px-5 py-3">Plan</th>
              <th className="px-5 py-3">Progress</th>
              <th className="px-5 py-3">Next Visit</th>
              <th className="px-5 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-[14px]">
            {actives.map((patient) => (
              <tr 
                key={patient.id} 
                className="hover:bg-slate-50 transition-colors group"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white font-black text-sm shadow-sm">
                      {patient.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="font-bold text-slate-900 leading-tight">{patient.name}</p>
                        <span className={twMerge(
                          "text-[8px] font-black px-1 py-0.5 rounded border uppercase tracking-tighter",
                          patient.gender === 'Male' ? "bg-blue-50 text-blue-500 border-blue-100" : "bg-pink-50 text-pink-500 border-pink-100"
                        )}>
                          {patient.gender}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-bold mt-1 flex items-center gap-1">
                        <Baby size={10} className="text-primary" /> {patient.babyName || 'Newborn'}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-slate-700 leading-tight">{patient.planId || 'PLAN-2YR'}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">Exp: Mar 2028</span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <div className="w-32">
                    <div className="flex justify-between text-[10px] mb-1 font-black">
                      <span className="text-slate-400 uppercase tracking-widest">M 1/24</span>
                      <span className="text-primary">4%</span>
                    </div>
                    <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden shadow-inner border border-slate-100">
                      <div className="h-full bg-primary w-[4%] transition-all duration-1000"></div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Activity size={16} className="text-primary" />
                    <div>
                      <p className="text-[13px] font-bold leading-tight">Tomorrow</p>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">10:00 AM</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-right">
                  <button 
                    onClick={() => navigate(`/admin/details/${patient.id}`)}
                    className="bg-slate-50 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-slate-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-sm"
                  >
                    Track
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivePatients;
