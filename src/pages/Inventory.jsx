import React from 'react';
import ServicePage from '../components/ServicePage';
import { labOrders } from '../data/mockData';
import { FlaskConical, Pill, Package, Search, Plus, Filter, Clock, CheckCircle2 } from 'lucide-react';

const Inventory = ({ type = 'Lab' }) => {
  const Icon = type === 'Lab' ? FlaskConical : Pill;
  const title = type === 'Lab' ? "Laboratory Services" : "Pharmacy & Medicine";
  const desc = type === 'Lab' ? "Manage lab tests, samples, and diagnostic reports." : "Track medication inventory and prescription fulfillments.";

  return (
    <ServicePage title={title} icon={Icon} description={desc}>
      <div className="space-y-4">
        <div className="flex justify-between items-end mb-4 px-1">
          <div className="flex gap-3">
             <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm min-w-[100px]">
                <p className="text-[9px] text-slate-400 uppercase font-bold mb-0.5 tracking-widest">Active Orders</p>
                <p className="text-lg font-bold text-slate-900">08</p>
             </div>
             <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm min-w-[100px]">
                <p className="text-[9px] text-slate-400 uppercase font-bold mb-0.5 tracking-widest">Pending Sync</p>
                <p className="text-lg font-bold text-orange-500">02</p>
             </div>
          </div>
          <div className="flex gap-2">
             <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                <input type="text" placeholder={`Search...`} className="bg-white border border-slate-200 rounded-lg py-1.5 pl-8 pr-3 outline-none w-40 text-xs shadow-sm focus:border-primary transition-all" />
             </div>
             <button className="bg-primary text-white px-3 py-1.5 rounded-lg font-bold text-[11px] flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all">
                <Plus size={14} /> New {type === 'Lab' ? 'Test' : 'Order'}
             </button>
          </div>
        </div>

        <div className="glass-card rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Item / Test</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Patient</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Status</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Order Date</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {labOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                  <td className="px-4 py-3">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                           {type === 'Lab' ? <FlaskConical size={16} /> : <Pill size={16} />}
                        </div>
                        <span className="font-bold text-slate-900 text-[13px]">{order.test}</span>
                     </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600 text-[11px] font-medium">{order.patient}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded border text-[9px] font-bold uppercase tracking-widest ${order.status === 'Ready' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-[11px] text-slate-400">{order.date}</td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-300 hover:text-primary transition-all">
                      <Clock size={16} />
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

export default Inventory;
