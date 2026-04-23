import React, { useState } from 'react';
import { mockPatients } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, X, User, Calendar, Baby, Heart, ArrowRight, MoreVertical, Phone } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const AllPatients = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [formData, setFormData] = useState({
    babyName: '',
    babyDOB: '',
    gender: 'Male'
  });

  const enquiries = mockPatients.filter(p => p.status === 'Enquiry');

  const handleSellPlan = (patient, e) => {
    e.stopPropagation();
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    navigate('/admin/active');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-1">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">Patient Enquiries</h1>
          <p className="text-[14px] text-slate-500 font-bold mt-1">Lead tracking for CarePlus memberships.</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search..." 
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
              <th className="px-6 py-4">Mother Profile</th>
              <th className="px-6 py-4">Contact</th>
              <th className="px-6 py-4">Status Type</th>
              <th className="px-6 py-4">Milestone Date</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[15px]">
            {enquiries.map((patient) => (
              <tr 
                key={patient.id} 
                onClick={() => navigate(`/admin/details/${patient.id}`)}
                className="hover:bg-slate-50 transition-colors group cursor-pointer"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm">
                      {patient.name[0]}
                    </div>
                    <span className="font-black text-slate-900">{patient.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-slate-600">{patient.contact}</td>
                <td className="px-6 py-4">
                  <span className={twMerge(
                    "text-[10px] font-black px-2.5 py-1 rounded-full border uppercase tracking-widest",
                    patient.type === 'Newborn' ? "bg-blue-50 text-blue-500 border-blue-100" : "bg-purple-50 text-purple-500 border-purple-100"
                  )}>
                    {patient.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500 font-black">{patient.dueDate || patient.birthDate}</td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={(e) => handleSellPlan(patient, e)}
                    className="bg-primary text-white text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg shadow-primary/10 hover:scale-105 transition-all"
                  >
                    Sell Plan
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {enquiries.map((patient) => (
          <div 
            key={patient.id} 
            onClick={() => navigate(`/admin/details/${patient.id}`)}
            className="bg-white p-5 rounded-[1.5rem] border border-slate-200 shadow-sm active:scale-[0.98] transition-transform"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-lg shadow-inner">
                  {patient.name[0]}
                </div>
                <div>
                  <h3 className="font-black text-slate-900 leading-tight">{patient.name}</h3>
                  <span className={twMerge(
                    "text-[9px] font-black px-2 py-0.5 rounded border uppercase tracking-widest mt-1 inline-block",
                    patient.type === 'Newborn' ? "bg-blue-50 text-blue-500 border-blue-100" : "bg-purple-50 text-purple-500 border-purple-100"
                  )}>
                    {patient.type}
                  </span>
                </div>
              </div>
              <button className="p-2 text-slate-300"><MoreVertical size={20} /></button>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50 text-[13px]">
              <div className="space-y-1">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><Phone size={10} /> Contact</p>
                <p className="font-bold text-slate-600">{patient.contact}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><Calendar size={10} /> Milestone</p>
                <p className="font-bold text-slate-600">{patient.dueDate || patient.birthDate}</p>
              </div>
            </div>

            <div className="pt-4 flex gap-2">
              <button 
                onClick={(e) => handleSellPlan(patient, e)}
                className="flex-1 bg-primary text-white text-[11px] font-black uppercase tracking-widest py-3 rounded-xl shadow-lg shadow-primary/10"
              >
                Sell Plan
              </button>
              <button className="flex-1 bg-slate-50 text-slate-600 text-[11px] font-black uppercase tracking-widest py-3 rounded-xl border border-slate-100">
                View History
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sell Plan Modal - Responsive */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden border border-white/20 transform transition-all animate-in zoom-in-95 duration-200">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 leading-none tracking-tight">Activate Plan</h2>
                  <p className="text-[13px] text-slate-500 font-bold mt-2">Newborn registration for CarePlus.</p>
                </div>
                <button onClick={() => setShowModal(false)} className="p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-colors text-slate-400">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mother Name</label>
                    <div className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-500 font-black text-[14px] shadow-inner">
                      {selectedPatient?.name}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">DOB/Age</label>
                    <div className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-500 font-black text-[14px] shadow-inner">
                      {selectedPatient?.motherAge} yrs
                    </div>
                  </div>
                </div>

                <div className="space-y-5 pt-6 border-t border-slate-50">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1 flex items-center gap-2">
                      <Baby size={12} className="text-primary" /> Baby Full Name
                    </label>
                    <input 
                      type="text" required placeholder="Enter name"
                      className="w-full bg-white border-2 border-slate-50 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all text-[15px] font-black text-slate-900 shadow-sm"
                      value={formData.babyName}
                      onChange={(e) => setFormData({...formData, babyName: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1 flex items-center gap-2">
                        <Calendar size={12} className="text-primary" /> Delivery Date
                      </label>
                      <input 
                        type="date" required
                        className="w-full bg-white border-2 border-slate-50 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all text-[15px] font-black text-slate-900 shadow-sm"
                        value={formData.babyDOB}
                        onChange={(e) => setFormData({...formData, babyDOB: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1 flex items-center gap-2">
                        <Heart size={12} className="text-primary" /> Gender
                      </label>
                      <select 
                        className="w-full bg-white border-2 border-slate-50 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all text-[15px] font-black text-slate-900 shadow-sm"
                        value={formData.gender}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    Confirm Activation <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPatients;
