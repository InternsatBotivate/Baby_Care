import React from 'react';


const ServicePage = ({ title, icon: Icon, description, children }) => {
  return (
    <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary border border-slate-200 shadow-sm">
          <Icon size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 leading-tight">{title}</h1>
          <p className="text-xs text-slate-500">{description}</p>
        </div>
      </div>

      <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white shadow-sm min-h-[350px]">
        {children || (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-300">
               <Icon size={32} />
            </div>
            <h2 className="text-lg font-bold mb-1 text-slate-900">Module Active</h2>
            <p className="text-xs text-slate-500 max-w-xs">
              The {title} management system is ready. Data will appear here once connected to the hospital's central server.
            </p>
            <button className="mt-8 bg-primary text-black px-6 py-2 rounded-xl font-bold hover:scale-105 transition-all">
              Initialize Connection
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicePage;
