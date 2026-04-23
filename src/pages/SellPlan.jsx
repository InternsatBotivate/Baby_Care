import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockPatients } from '../data/mockData';
import ServicePage from '../components/ServicePage';
import { User, Calendar, Baby, Heart, ArrowRight, ShieldCheck, X } from 'lucide-react';

const SellPlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const patient = mockPatients.find(p => p.id === id) || mockPatients[0];

  const [formData, setFormData] = useState({
    babyName: '',
    babyDOB: '',
    gender: 'Male'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate updating the patient status to 'Active'
    // In a real app, this would be an API call
    navigate('/admin/active');
  };

  return (
    <ServicePage 
      title="Activate CarePlus Membership" 
      icon={ShieldCheck}
      description="Register the newborn and finalize the 2-year clinical care plan."
    >
      <div className="max-w-2xl mx-auto pb-12">
        <div className="glass-card rounded-[2rem] border border-slate-200 overflow-hidden bg-white shadow-xl">
          <div className="bg-primary/5 p-8 border-b border-slate-100 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black text-slate-900 leading-tight">Registration Form</h2>
              <p className="text-[13px] text-slate-500 font-medium mt-1">Please verify mother details and enter baby information.</p>
            </div>
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 shadow-sm border border-transparent hover:border-slate-100">
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Section: Mother Details */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-6 bg-primary rounded-full"></div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Mother Information (Verified)</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <User size={14} className="text-primary" /> Full Name
                  </label>
                  <div className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-slate-500 font-bold text-[15px]">
                    {patient.name}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={14} className="text-primary" /> Date of Birth & Age
                  </label>
                  <div className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-slate-500 font-bold text-[15px]">
                    {patient.motherDOB} ({patient.motherAge} years)
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Baby Details */}
            <div className="space-y-5 pt-8 border-t border-slate-50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-6 bg-primary rounded-full"></div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Newborn Details</h3>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Baby size={14} className="text-primary" /> Baby Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter full name of the baby"
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all text-[16px] font-bold text-slate-900 shadow-sm"
                  value={formData.babyName}
                  onChange={(e) => setFormData({...formData, babyName: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={14} className="text-primary" /> Delivery Date (DOB)
                  </label>
                  <input 
                    type="date" 
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all text-[16px] font-bold text-slate-900 shadow-sm"
                    value={formData.babyDOB}
                    onChange={(e) => setFormData({...formData, babyDOB: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Heart size={14} className="text-primary" /> Baby Gender
                  </label>
                  <select 
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all text-[16px] font-bold text-slate-900 shadow-sm"
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <button 
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 text-lg"
              >
                Activate CarePlus Plan <ArrowRight size={24} />
              </button>
              <p className="text-center text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-4">
                By activating, you confirm the details are accurate as per medical records.
              </p>
            </div>
          </form>
        </div>
      </div>
    </ServicePage>
  );
};

export default SellPlan;
