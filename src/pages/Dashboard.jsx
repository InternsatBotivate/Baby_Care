import React from 'react';
import { 
  Users, UserCheck, TrendingUp, DollarSign, 
  Calendar, AlertCircle, ArrowUpRight, Activity, ArrowRight
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { twMerge } from 'tailwind-merge';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 600 },
  { name: 'Mar', value: 800 },
  { name: 'Apr', value: 700 },
  { name: 'May', value: 900 },
  { name: 'Jun', value: 1200 },
];

const StatCard = ({ icon: Icon, label, value, trend, color }) => (
  <div className="glass-card p-5 rounded-2xl border border-slate-200 relative overflow-hidden group bg-white shadow-sm hover:shadow-md transition-all">
    <div className={twMerge("absolute -top-4 -right-4 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity", `text-${color}`)}>
      <Icon size={80} />
    </div>
    <div className={twMerge("w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-inner", `bg-${color}/10 text-${color}`)}>
      <Icon size={22} />
    </div>
    <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest mb-1">{label}</p>
    <div className="flex items-end justify-between">
      <h3 className="text-2xl font-black text-slate-900 leading-none">{value}</h3>
      <span className={twMerge("text-[10px] font-black px-1.5 py-0.5 rounded-full border flex items-center gap-1 uppercase tracking-tight", `bg-${color}/5 text-${color} border-${color}/10`)}>
        {trend}
      </span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">Hospital Insights</h1>
          <p className="text-[13px] text-slate-500 font-bold mt-1">Real-time performance analytics for Newborn Care ERP.</p>
        </div>
        <div className="flex items-center gap-2">
           <button className="flex-1 md:flex-none px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold text-[12px] uppercase tracking-widest shadow-sm hover:bg-slate-50 transition-all">Download Report</button>
           <button className="flex-1 md:flex-none px-4 py-2 bg-primary text-white rounded-xl font-bold text-[12px] uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">Manage Plans</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard icon={Users} label="New Enquiries" value="124" trend="+12.5%" color="blue-500" />
        <StatCard icon={UserCheck} label="Active Members" value="42" trend="+5.2%" color="primary" />
        <StatCard icon={DollarSign} label="Revenue" value="₹2.4M" trend="+18.1%" color="green-500" />
        <StatCard icon={AlertCircle} label="Vaccinations" value="18" trend="-2.4%" color="orange-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2 glass-card p-6 lg:p-8 rounded-[2rem] border border-slate-200 bg-white shadow-sm flex flex-col min-h-[400px]">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-primary rounded-full"></div>
              <h3 className="text-lg font-black text-slate-900">Subscription Trends</h3>
            </div>
            <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-[12px] font-black uppercase tracking-widest outline-none text-slate-700 shadow-inner">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="flex-1 w-full min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.03)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', border: 'none', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                  itemStyle={{ color: '#22c55e', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#22c55e" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] border border-slate-200 flex flex-col bg-white shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
            <h3 className="text-[12px] font-black text-slate-900 uppercase tracking-widest">Live Activity</h3>
            <span className="flex items-center gap-1.5 text-[9px] bg-primary/10 text-primary px-2.5 py-1 rounded-full font-black uppercase border border-primary/20">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div> Live
            </span>
          </div>
          <div className="flex-1 overflow-auto max-h-[350px]">
            <table className="w-full text-left">
              <tbody className="divide-y divide-slate-50 text-[14px]">
                {[
                  { icon: UserCheck, title: "Subscription", detail: "Meera Reddy", time: "10m ago", color: "text-green-500" },
                  { icon: Calendar, title: "Booking", detail: "Anjali Gupta", time: "1h ago", color: "text-blue-500" },
                  { icon: Activity, title: "Checkup", detail: "Aryan V.", time: "3h ago", color: "text-primary" },
                  { icon: Users, title: "Enquiry", detail: "Rahul S.", time: "5h ago", color: "text-slate-400" },
                ].map((act, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                          <act.icon size={18} className={act.color} />
                        </div>
                        <div>
                          <p className="text-[14px] font-black text-slate-900 leading-none">{act.title}</p>
                          <p className="text-[11px] text-slate-500 mt-1.5 font-bold uppercase tracking-tight">{act.detail}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-[10px] text-slate-400 font-black uppercase whitespace-nowrap">{act.time}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 bg-slate-50 border-t border-slate-100">
            <button className="w-full text-[11px] font-black text-primary uppercase tracking-widest hover:bg-white hover:shadow-md py-3 rounded-xl transition-all border border-transparent hover:border-primary/10 flex items-center justify-center gap-2">
              View All History <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
