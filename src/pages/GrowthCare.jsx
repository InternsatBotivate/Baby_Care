import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockPatients } from '../data/mockData';
import ServicePage from '../components/ServicePage';
import { Activity, ArrowUpRight, Scale, Ruler, Brain } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const growthData = [
  { age: 'Birth', weight: 3.2, height: 50 },
  { age: '1 mo', weight: 4.1, height: 54 },
  { age: '2 mo', weight: 5.0, height: 57 },
  { age: '3 mo', weight: 5.8, height: 60 },
  { age: '4 mo', weight: 6.4, height: 63 },
];

const GrowthCare = () => {
  const { id } = useParams();
  const { user } = useAuth();
  
  const patientId = id || user?.patientId;
  const patient = mockPatients.find(p => p.id === patientId) || mockPatients[2];

  return (
    <ServicePage 
      title={`Growth & Development: ${patient?.name}`} 
      icon={Activity}
      description="Track weight, height, and head circumference against WHO standards."
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary/5 border border-primary/20 p-4 rounded-2xl flex items-center justify-between shadow-sm">
            <div>
              <p className="text-[10px] text-primary font-bold uppercase mb-0.5 tracking-widest">Weight</p>
              <h3 className="text-2xl font-bold text-slate-900">6.4 <span className="text-xs font-medium text-slate-400">kg</span></h3>
              <p className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                <ArrowUpRight size={10} className="text-primary" /> +0.6kg since last
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
              <Scale size={20} />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-center justify-between shadow-sm">
            <div>
              <p className="text-[10px] text-blue-500 font-bold uppercase mb-0.5 tracking-widest">Height</p>
              <h3 className="text-2xl font-bold text-slate-900">63 <span className="text-xs font-medium text-slate-400">cm</span></h3>
              <p className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                <ArrowUpRight size={10} className="text-blue-500" /> +3cm since last
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-500">
              <Ruler size={20} />
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-100 p-4 rounded-2xl flex items-center justify-between shadow-sm">
            <div>
              <p className="text-[10px] text-orange-500 font-bold uppercase mb-0.5 tracking-widest">Development</p>
              <h3 className="text-2xl font-bold text-slate-900">Normal</h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">12/12 Milestones</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
              <Brain size={20} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="glass-card p-5 rounded-2xl border border-slate-200 h-[300px] flex flex-col bg-white shadow-sm">
            <h4 className="font-bold text-sm mb-4 text-slate-900">Weight Growth Curve</h4>
            <div className="flex-1 w-full min-h-[200px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
                  <XAxis dataKey="age" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', boxShadow: '0 2px 4px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                  />
                  <Line type="monotone" dataKey="weight" stroke="#22c55e" strokeWidth={2} dot={{ fill: '#22c55e', r: 3 }} activeDot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-200 h-[300px] flex flex-col bg-white shadow-sm">
            <h4 className="font-bold text-sm mb-4 text-slate-900">Height Growth Curve</h4>
            <div className="flex-1 w-full min-h-[200px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
                  <XAxis dataKey="age" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', boxShadow: '0 2px 4px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                  />
                  <Line type="monotone" dataKey="height" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 3 }} activeDot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </ServicePage>
  );
};

export default GrowthCare;
