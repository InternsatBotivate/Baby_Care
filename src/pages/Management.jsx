import React from 'react';
import ServicePage from '../components/ServicePage';
import { Database, Settings, Shield, Globe, Bell, CreditCard, ChevronRight } from 'lucide-react';

export const MasterData = () => (
  <ServicePage title="Master Data Management" icon={Database} description="Configure global hospital parameters, plan prices, and doctor lists.">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { title: "Membership Plans", desc: "Define pricing and benefit durations", icon: CreditCard },
        { title: "Doctor Registry", desc: "Manage specialized care providers", icon: Shield },
        { title: "Service Inventory", desc: "Lab tests and pharmacy catalogs", icon: Database },
        { title: "Regional Settings", desc: "Languages and branch locations", icon: Globe },
      ].map((item, i) => (
        <div key={i} className="glass-card p-4 rounded-xl border border-slate-200 hover:border-primary transition-all cursor-pointer flex justify-between items-center group bg-white shadow-sm">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary transition-all">
              <item.icon size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
              <p className="text-[11px] text-slate-500">{item.desc}</p>
            </div>
          </div>
          <ChevronRight size={16} className="text-slate-300 group-hover:text-primary" />
        </div>
      ))}
    </div>
  </ServicePage>
);

export const SettingsPage = () => (
  <ServicePage title="System Settings" icon={Settings} description="Manage your account preferences and notification settings.">
    <div className="max-w-xl space-y-6">
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest px-1">Profile Settings</h3>
        <div className="grid grid-cols-2 gap-3">
           <div className="space-y-1">
              <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest px-1">Full Name</label>
              <input type="text" defaultValue="Admin User" className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 outline-none focus:border-primary text-xs shadow-sm" />
           </div>
           <div className="space-y-1">
              <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest px-1">Email Address</label>
              <input type="email" defaultValue="admin@careplus.com" className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 outline-none focus:border-primary text-xs shadow-sm" />
           </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest px-1">Notifications</h3>
        <div className="space-y-2">
          {[
            { label: "Email Alerts", desc: "Weekly reports and plan renewals" },
            { label: "SMS Notifications", desc: "Emergency and appointment alerts" },
            { label: "WhatsApp Updates", desc: "Daily health tips and guidelines" },
          ].map((opt, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div>
                <p className="font-bold text-[13px] text-slate-900">{opt.label}</p>
                <p className="text-[10px] text-slate-500">{opt.desc}</p>
              </div>
              <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-xs hover:scale-105 transition-all shadow-md">
        Save Changes
      </button>
    </div>
  </ServicePage>
);
