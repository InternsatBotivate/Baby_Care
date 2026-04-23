import React from 'react';
import ServicePage from '../components/ServicePage';
import { Bell, Calendar, ChevronRight } from 'lucide-react';

const VaccineReminders = () => {
  const reminders = [
    { name: "BCG, OPV-0, Hep B-1", date: "2026-04-10", status: "Completed", type: "Vaccine" },
    { name: "OPV-1, Pentavalent-1, Rota-1", date: "2026-05-22", status: "Upcoming", type: "Vaccine" },
    { name: "1st Month Growth Checkup", date: "2026-05-15", status: "Pending", type: "Checkup" },
  ];

  return (
    <ServicePage 
      title="Vaccine & Checkup Reminders" 
      icon={Bell}
      description="Automated tracking of immunization and wellness checkups."
    >
      <div className="space-y-4">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 bg-primary/10 border border-primary/20 p-4 rounded-2xl shadow-sm">
            <p className="text-[10px] text-primary font-bold mb-0.5 tracking-widest">NEXT VACCINE</p>
            <h3 className="text-xl font-bold text-slate-900 leading-tight">Pentavalent-1</h3>
            <p className="text-slate-500 text-[11px] font-medium">Due in 28 days • May 2026</p>
          </div>
          <div className="flex-1 bg-blue-50 border border-blue-100 p-4 rounded-2xl shadow-sm">
            <p className="text-[10px] text-blue-500 font-bold mb-0.5 tracking-widest">COMPLETED</p>
            <h3 className="text-xl font-bold text-slate-900 leading-tight">12 Total</h3>
            <p className="text-slate-500 text-[11px] font-medium">Last: Hep B-1 • April 10</p>
          </div>
        </div>

        <div className="glass-card rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Reminder Name</th>
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Type</th>
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Due Date</th>
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reminders.map((r, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${r.status === 'Completed' ? 'bg-primary/10 text-primary' : 'bg-slate-50 text-slate-400'}`}>
                        <Calendar size={16} />
                      </div>
                      <span className="font-bold text-slate-900 text-[13px]">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[11px] text-slate-500 font-medium">
                    {r.type}
                  </td>
                  <td className="px-4 py-3 text-[11px] text-slate-500 font-medium">
                    {r.date}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded border ${r.status === 'Completed' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-orange-50 text-orange-500 border-orange-100'}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-slate-300 group-hover:text-primary transition-colors">
                      <ChevronRight size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ServicePage>
  );
};

export default VaccineReminders;
