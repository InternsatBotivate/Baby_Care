import React from 'react';
import ServicePage from '../components/ServicePage';
import { AlertCircle, Phone, MapPin, Ambulance, Zap, Info } from 'lucide-react';

const Emergency = () => {
  return (
    <ServicePage 
      title="Emergency Services" 
      icon={AlertCircle}
      description="Immediate assistance and priority support for critical situations."
    >
      <div className="space-y-5">
        <div className="bg-red-50 border border-red-100 p-6 rounded-2xl flex flex-col items-center text-center relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-5">
             <Ambulance size={100} />
          </div>
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg mb-4 animate-pulse">
            <Phone size={32} />
          </div>
          <h2 className="text-2xl font-bold text-red-600 mb-1">Emergency Hotline</h2>
          <p className="text-lg font-bold text-slate-900 mb-5 tracking-tight">+91 1800-BABY-911</p>
          <div className="flex flex-wrap justify-center gap-3">
             <button className="bg-red-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-md">
                Call Now
             </button>
             <button className="bg-white text-red-500 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-red-50 transition-all border border-red-200 shadow-sm">
                Request Ambulance
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="font-bold text-sm mb-4 flex items-center gap-2 text-slate-900 uppercase tracking-widest">
              <Zap size={16} className="text-orange-500" /> Quick Red Flags
            </h3>
            <ul className="space-y-3">
              {[
                "Fever higher than 100.4°F (38°C)",
                "Difficulty breathing or blue-tinted lips",
                "Extreme lethargy or inability to wake up",
                "Severe vomiting or dehydration signs",
                "Seizures or rhythmic twitching"
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-xs text-slate-500 font-medium">
                  <div className="w-4 h-4 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 text-[9px] font-bold">!</div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col">
            <div className="p-5 border-b border-slate-100">
              <h3 className="font-bold text-sm flex items-center gap-2 text-slate-900 uppercase tracking-widest">
                <MapPin size={16} className="text-primary" /> NICU Facilities
              </h3>
            </div>
            <div className="flex-1">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-50 bg-slate-50/50">
                    <th className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hospital</th>
                    <th className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dist.</th>
                    <th className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { name: "City Children's Hospital", dist: "1.2 km", time: "5m" },
                    { name: "CarePlus Specialty NICU", dist: "3.5 km", time: "12m" },
                    { name: "Motherhood Emergency", dist: "5.8 km", time: "18m" },
                  ].map((loc, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                      <td className="px-4 py-3 text-[12px] font-bold text-slate-800">{loc.name}</td>
                      <td className="px-4 py-3 text-[11px] text-slate-500">{loc.dist}</td>
                      <td className="px-4 py-3 text-right text-[11px] font-bold text-primary">{loc.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-4 shadow-sm">
           <Info className="text-blue-500 mt-0.5" size={18} />
           <div>
             <p className="text-[11px] font-bold text-blue-600 mb-0.5 uppercase tracking-widest">Priority Support Active</p>
             <p className="text-[11px] text-slate-500 font-medium">As a CarePlus member, you have priority access to emergency consultations. Your details are automatically shared with first responders.</p>
           </div>
        </div>
      </div>
    </ServicePage>
  );
};

const ArrowUpRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

export default Emergency;
