import React from 'react';
import ServicePage from '../components/ServicePage';
import { mockAppointments } from '../data/mockData';
import { Calendar, Clock, User, Video, MapPin, ChevronRight, Plus } from 'lucide-react';

const Appointments = ({ isAdmin = true }) => {
  return (
    <ServicePage 
      title={isAdmin ? "Appointment Management" : "My Appointments"} 
      icon={Calendar}
      description={isAdmin ? "Schedule and manage patient visits and consultations." : "View and book your baby's medical visits."}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-end px-1">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Upcoming Appointments</h3>
            <p className="text-[11px] text-slate-500 font-medium">Real-time schedule for today and upcoming days.</p>
          </div>
          <button className="bg-primary text-white px-3 py-1.5 rounded-lg font-bold text-[11px] flex items-center gap-1.5 hover:scale-105 transition-all shadow-sm">
            <Plus size={14} />
            {isAdmin ? "Schedule New" : "Book Visit"}
          </button>
        </div>

        <div className="glass-card rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Patient / Type</th>
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Consultant</th>
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest text-center">Schedule</th>
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest text-center">Status</th>
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockAppointments.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                        {app.type === 'Video' ? <Video size={16} /> : <MapPin size={16} />}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-[13px]">{app.patient}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{app.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <User size={12} />
                      </div>
                      <span className="text-[11px] text-slate-700 font-medium">{app.doctor}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-[11px] font-bold text-slate-700">{app.date}</span>
                      <span className="text-[9px] text-slate-400 flex items-center gap-1">
                        <Clock size={10} /> {app.time}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded border ${app.status === 'Confirmed' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-orange-50 text-orange-500 border-orange-100'}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-300 group-hover:text-primary transition-colors">
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

export default Appointments;
