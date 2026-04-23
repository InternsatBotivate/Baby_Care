import React, { useState } from 'react';
import ServicePage from '../components/ServicePage';
import { healthTips, membershipPlan } from '../data/mockData';
import { BookOpen, Search, ArrowRight, Play, Heart, ChevronRight, CheckCircle2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const Guidelines = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  // Grouped benefits from mockData or derived
  const allBenefits = [
    { name: 'Newborn checkups', phaseId: 1, phase: '0-1mo', entitled: 4, used: 2, color: 'bg-emerald-500' },
    { name: 'Home visit', phaseId: 1, phase: '0-1mo', entitled: 1, used: 0, color: 'bg-emerald-500' },
    { name: 'Breastfeeding support', phaseId: 1, phase: 'unlimited', entitled: '∞', used: 0, color: 'bg-blue-500' },
    { name: 'Regular checkups (1-6)', phaseId: 2, phase: '1-6mo', entitled: 5, used: 1, color: 'bg-blue-500' },
    { name: 'Vaccinations (1-6)', phaseId: 2, phase: '1-6mo', entitled: 6, used: 0, color: 'bg-blue-500' },
    { name: 'Parent counselling', phaseId: 2, phase: '1-6mo', entitled: 1, used: 0, color: 'bg-blue-500' },
    { name: 'Regular checkups (6-12)', phaseId: 3, phase: '6-12mo', entitled: 4, used: 0, color: 'bg-orange-500' },
    { name: 'Vaccinations (6-12)', phaseId: 3, phase: '6-12mo', entitled: 4, used: 0, color: 'bg-orange-500' },
    { name: 'Milestone assessment', phaseId: 3, phase: '6-12mo', entitled: 2, used: 0, color: 'bg-orange-500' },
    { name: 'Expert consultations', phaseId: 3, phase: '6-12mo', entitled: 3, used: 0, color: 'bg-orange-500' },
    { name: 'Regular checkups (12-24)', phaseId: 4, phase: '12-24mo', entitled: 4, used: 0, color: 'bg-pink-500' },
    { name: 'Vaccinations (12-24)', phaseId: 4, phase: '12-24mo', entitled: 4, used: 0, color: 'bg-pink-500' },
    { name: 'Behavioural guidance', phaseId: 4, phase: '12-24mo', entitled: 1, used: 0, color: 'bg-pink-500' },
    { name: 'Growth tracking', phaseId: 'all', phase: 'unlimited', entitled: '∞', used: 3, color: 'bg-blue-500' },
    { name: '24×7 pediatric support', phaseId: 'all', phase: 'unlimited', entitled: '∞', used: 8, color: 'bg-blue-500' },
    { name: 'Digital health records', phaseId: 'all', phase: 'unlimited', entitled: '∞', used: 0, color: 'bg-blue-500' },
  ];

  const filteredBenefits = selectedPhase 
    ? allBenefits.filter(b => b.phaseId === selectedPhase || b.phaseId === 'all')
    : allBenefits;

  return (
    <ServicePage 
      title="Health Tips & Guidelines" 
      icon={BookOpen}
      description="Expert-curated medical advice and growth milestones for your baby's age."
    >
      <div className="space-y-8 pb-12">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search for topics (e.g. fever, nutrition, sleep)..." 
            className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-14 pr-6 focus:border-primary outline-none transition-all shadow-sm text-[16px]"
          />
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden group cursor-pointer shadow-sm">
             <div className="relative z-10">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 inline-block">Daily Highlight</span>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 leading-tight">Understanding Baby Sleep Cycles</h3>
                <p className="text-[14px] text-slate-500 mb-6 max-w-sm font-medium">Learn why newborns have irregular sleep patterns and how to establish a healthy bedtime routine.</p>
                <button className="flex items-center gap-2 text-primary font-bold text-[13px] uppercase tracking-widest hover:gap-3 transition-all">
                  Read Full Article <ArrowRight size={18} />
                </button>
             </div>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-500/5 to-transparent relative overflow-hidden group cursor-pointer shadow-sm">
             <div className="relative z-10">
                <span className="bg-blue-500/20 text-blue-500 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 inline-block">Video Tutorial</span>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 leading-tight">Proper Swaddling Techniques</h3>
                <p className="text-[14px] text-slate-500 mb-6 max-w-sm font-medium">A step-by-step video guide by our senior pediatric nurse on how to swaddle safely.</p>
                <button className="flex items-center gap-2 text-blue-500 font-bold text-[13px] uppercase tracking-widest hover:gap-3 transition-all">
                  Watch Video <Play size={18} />
                </button>
             </div>
          </div>
        </div>

        {/* Interactive Roadmap */}
        <div className="space-y-5 pt-4">
          <div className="flex justify-between items-end px-1">
            <div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest leading-none">CarePlus Roadmap</h3>
              <p className="text-[13px] text-slate-500 font-medium mt-2">Visualizing your baby's 24-month clinical journey. <span className="text-primary font-bold">Click a phase to filter benefits.</span></p>
            </div>
            <button 
              onClick={() => setSelectedPhase(null)}
              className={twMerge(
                "text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg border transition-all shadow-sm",
                selectedPhase === null ? "bg-primary text-white border-primary" : "bg-white text-slate-400 border-slate-200 hover:border-primary hover:text-primary"
              )}
            >
              Show All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { id: 1, phase: '0-1 Month', title: 'Newborn Care', color: 'border-emerald-500', activeBg: 'bg-emerald-50', iconColor: 'text-emerald-500', items: ['Newborn checkups x4', 'Breastfeeding support', 'Vaccination guidance', 'Home visit x1'] },
              { id: 2, phase: '1-6 Months', title: 'Growth & Nutrition', color: 'border-blue-500', activeBg: 'bg-blue-50', iconColor: 'text-blue-500', items: ['Regular checkups x5', 'Vaccinations x6', 'Nutrition guidance', 'Dev. tracking'] },
              { id: 3, phase: '6-12 Months', title: 'Developmental Care', color: 'border-orange-500', activeBg: 'bg-orange-50', iconColor: 'text-orange-500', items: ['Regular checkups x4', 'Vaccinations x4', 'Milestone assessment', 'Diet & nutrition'] },
              { id: 4, phase: '12-24 Months', title: 'Healthy Toddler', color: 'border-pink-500', activeBg: 'bg-pink-50', iconColor: 'text-pink-500', items: ['Regular checkups x4', 'Vaccinations x4', 'Growth tracking', 'Emergency priority'] },
            ].map((p) => (
              <div 
                key={p.id} 
                onClick={() => setSelectedPhase(p.id)}
                className={twMerge(
                  "glass-card p-6 rounded-2xl border-t-8 transition-all cursor-pointer shadow-sm relative overflow-hidden",
                  p.color,
                  selectedPhase === p.id ? p.activeBg : "bg-white hover:scale-[1.02]"
                )}
              >
                {selectedPhase === p.id && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle2 size={20} className={p.iconColor} />
                  </div>
                )}
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{p.phase}</p>
                <h4 className="font-bold text-base text-slate-900 mb-4 leading-tight">{p.title}</h4>
                <ul className="space-y-2">
                  {p.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-[12px] text-slate-600 font-semibold">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Benefit Table */}
        <div className="space-y-4 pt-6">
          <div className="flex justify-between items-center px-1">
            <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">
              {selectedPhase ? `Phase ${selectedPhase} Benefit Details` : 'All Benefits — 24-Month Roadmap'}
            </h4>
            <span className="text-[11px] text-primary font-bold">Showing {filteredBenefits.length} Items</span>
          </div>
          <div className="glass-card rounded-2xl border border-slate-200 overflow-hidden shadow-md bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-widest">Benefit Item</th>
                  <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-widest text-center">Schedule</th>
                  <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-widest text-center">Entitled</th>
                  <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-widest text-center">Used</th>
                  <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-widest text-right">Remaining</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[13px]">
                {filteredBenefits.map((b, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4 font-bold text-slate-900">{b.name}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={twMerge(
                        "text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-widest",
                        b.phase === 'active' || b.phaseId === 1 ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                        b.phase === 'unlimited' ? "bg-blue-50 text-blue-500 border-blue-100" :
                        "bg-slate-50 text-slate-400 border-slate-100"
                      )}>
                        {b.phase}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center font-mono font-bold text-[14px]">{b.entitled}</td>
                    <td className="px-6 py-4 text-center font-mono font-bold text-[14px]">{b.used}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                          {typeof b.entitled === 'number' && (
                            <div className={twMerge("h-full transition-all duration-500", b.color)} style={{ width: `${(b.used / b.entitled) * 100}%` }}></div>
                          )}
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase w-14 text-right">
                          {typeof b.entitled === 'number' ? `${b.entitled - b.used} left` : 'Included'}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Global Membership Perks */}
        <div className="space-y-4 pt-6">
          <h4 className="text-[12px] font-bold px-1 text-slate-400 uppercase tracking-widest">Global CarePlus Benefits</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: '24×7 Pediatric Support', desc: 'Unlimited calls, any time', color: 'bg-primary/10' },
              { title: 'Digital Health Records', desc: 'Lifetime access via app', color: 'bg-blue-100/50' },
              { title: 'Lab & Pharmacy Discounts', desc: '20% Lab · 15% Pharmacy', color: 'bg-orange-100/50' },
              { title: 'Loyalty Points Program', desc: 'Earn on every visit', color: 'bg-emerald-100/50' },
              { title: 'Parent App Access', desc: 'iOS + Android', color: 'bg-purple-100/50' },
              { title: 'Emergency Priority', desc: 'First response access', color: 'bg-red-100/50' },
            ].map((b, i) => (
              <div key={i} className={twMerge("p-5 rounded-2xl border border-slate-200 shadow-sm hover:scale-[1.02] transition-all cursor-default", b.color)}>
                <p className="font-bold text-[15px] text-slate-900 mb-1 leading-tight">{b.title}</p>
                <p className="text-[13px] text-slate-600 font-semibold">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Library */}
        <div className="space-y-4 pt-8">
          <div className="flex justify-between items-end px-1">
             <h4 className="text-lg font-bold text-slate-900 uppercase tracking-widest">Clinical Knowledge Library</h4>
             <span className="text-xs text-slate-400 font-bold uppercase tracking-tight">Verified health guidance</span>
          </div>
          <div className="glass-card rounded-2xl border border-slate-200 overflow-hidden shadow-md bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-widest">Article Title</th>
                  <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-widest text-center">Category</th>
                  <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-widest">Target Age</th>
                  <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[15px]">
                {healthTips.map((tip) => (
                  <tr key={tip.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className={twMerge(
                          "w-10 h-10 rounded-xl flex items-center justify-center shadow-sm",
                          tip.color === 'blue' ? 'bg-blue-50 text-blue-500' :
                          tip.color === 'green' ? 'bg-primary/10 text-primary' :
                          'bg-orange-50 text-orange-500'
                        )}>
                          <Heart size={20} />
                        </div>
                        <span className="font-bold text-slate-900">{tip.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-500 uppercase tracking-widest">
                        {tip.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[14px] text-slate-500 font-bold">{tip.age}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary font-bold text-[12px] uppercase tracking-widest hover:underline flex items-center gap-1.5 ml-auto">
                        Read More <ArrowRight size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ServicePage>
  );
};

export default Guidelines;
