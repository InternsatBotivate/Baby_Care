import React from 'react';
import { Activity, Bell, Menu, UserCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { twMerge } from 'tailwind-merge';

const Header = ({ onMenuClick, isLoginPage = false }) => {
  const { user } = useAuth();

  return (
    <header className={twMerge(
      "sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 lg:px-8 lg:py-4 flex justify-between items-center shadow-sm transition-all",
      isLoginPage ? "bg-white/40" : ""
    )}>
      <div className="flex items-center gap-4 lg:gap-8">
        {!isLoginPage && (
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 bg-slate-100 rounded-xl text-slate-600 shadow-sm border border-slate-200 hover:bg-slate-200 transition-all"
          >
            <Menu size={20} />
          </button>
        )}
        
        {/* Logo - Always visible in Header for consistency */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Activity className="text-white" size={20} />
          </div>
          <div className={isLoginPage ? "flex flex-col" : "hidden sm:flex flex-col"}>
            <h1 className="font-black text-lg lg:text-xl tracking-tight text-slate-900 leading-tight">CarePlus</h1>
            <p className="text-[10px] text-primary font-black uppercase tracking-widest leading-none">Newborn ERP</p>
          </div>
        </div>

        {!isLoginPage && (
          <div className="hidden lg:flex items-center gap-4 border-l border-slate-200 pl-8">
            <div>
              <h2 className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">System Environment</h2>
              <p className="text-[12px] font-bold text-slate-900 flex items-center gap-1.5">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div> Secure Node
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 lg:gap-6">
        {user ? (
          <>
            <div className="hidden md:flex flex-col text-right">
              <p className="text-[14px] font-black text-slate-900 leading-tight">{user.name}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{user.role}</p>
            </div>
            <button className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-900 relative border border-slate-100 shadow-sm transition-all">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center font-black text-white text-sm shadow-md shadow-primary/20">
              {user.name?.[0].toUpperCase()}
            </div>
          </>
        ) : (
          <div className="flex items-center gap-4">
             <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest hidden sm:block">V 1.0.4 Clinical Release</span>
             <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300">
               <UserCircle size={24} />
             </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
