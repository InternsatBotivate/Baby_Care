import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, UserCheck, Calendar, Video, Bell, 
  FileText, Activity, ClipboardList, BookOpen, AlertCircle, 
  FlaskConical, Pill, Stethoscope, Database, Settings, LogOut, UserCircle, Menu, X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { twMerge } from 'tailwind-merge';

const SidebarItem = ({ icon: Icon, label, path, active, onClick }) => (
  <Link
    to={path}
    onClick={onClick}
    className={twMerge(
      "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group text-[15px]",
      active 
        ? "bg-primary text-white shadow-lg shadow-primary/20" 
        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
    )}
  >
    <Icon size={18} className={active ? "text-white" : "text-slate-400 group-hover:text-slate-900"} />
    <span className={twMerge("font-bold", active ? "text-white" : "text-slate-500")}>{label}</span>
  </Link>
);

const MainLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const adminNav = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Users, label: 'All Patients', path: '/admin/patients' },
    { icon: UserCheck, label: 'Active Patients', path: '/admin/active' },
    { icon: Calendar, label: 'Appointments', path: '/admin/appointments' },
    { icon: Bell, label: 'Reminders', path: '/admin/reminders' },
    { icon: FileText, label: 'Health Records', path: '/admin/records' },
    { icon: Activity, label: 'Growth Care', path: '/admin/growth' },
    { icon: ClipboardList, label: 'Reports', path: '/admin/reports' },
    { icon: BookOpen, label: 'Guidelines', path: '/admin/guidelines' },
    { icon: AlertCircle, label: 'Emergency', path: '/admin/emergency' },
    { icon: FlaskConical, label: 'Lab', path: '/admin/lab' },
    { icon: Pill, label: 'Pharmacy', path: '/admin/pharmacy' },
    { icon: Stethoscope, label: 'Specialists', path: '/admin/specialists' },
    { icon: Database, label: 'Master Data', path: '/admin/master' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const userNav = [
    { icon: UserCircle, label: 'My Profile', path: '/user/profile' },
    { icon: Calendar, label: 'Appointments', path: '/user/appointments' },
    { icon: FileText, label: 'My Records', path: '/user/records' },
    { icon: BookOpen, label: 'Guidelines', path: '/user/guidelines' },
    { icon: AlertCircle, label: 'Emergency', path: '/user/emergency' },
  ];

  const navItems = user?.role === 'USER' ? userNav : adminNav;

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 border-r border-slate-200 bg-white p-4 flex-col gap-1 fixed h-screen overflow-y-auto scrollbar-hide z-50 shadow-sm">
        <div className="flex items-center gap-3 px-3 py-5 mb-4">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Activity className="text-white" size={22} />
          </div>
          <div>
            <h1 className="font-black text-xl tracking-tight text-slate-900 leading-tight">CarePlus</h1>
            <p className="text-[10px] text-primary font-black uppercase tracking-widest leading-none mt-1">Newborn ERP</p>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-0.5">
          {navItems.map((item) => (
            <SidebarItem 
              key={item.path}
              {...item}
              active={location.pathname === item.path}
            />
          ))}
        </nav>

        <div className="pt-4 mt-4 border-t border-slate-100">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all w-full text-[15px] font-bold"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-white p-6 shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-md">
                    <Activity className="text-white" size={18} />
                  </div>
                  <h1 className="font-black text-lg text-slate-900">CarePlus</h1>
               </div>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-lg text-slate-500">
                 <X size={20} />
               </button>
            </div>
            <nav className="flex-1 flex flex-col gap-1 overflow-y-auto pr-2">
              {navItems.map((item) => (
                <SidebarItem 
                  key={item.path}
                  {...item}
                  onClick={() => setIsMobileMenuOpen(false)}
                  active={location.pathname === item.path}
                />
              ))}
            </nav>
            <button 
              onClick={handleLogout}
              className="mt-8 flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 bg-red-50 font-bold text-sm"
            >
              <LogOut size={18} /> Logout
            </button>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 lg:px-8 lg:py-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 bg-slate-100 rounded-xl text-slate-600 shadow-sm border border-slate-200"
            >
              <Menu size={20} />
            </button>
            <div className="hidden lg:block">
              <h2 className="text-[11px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">System Environment</h2>
              <p className="text-[13px] font-bold text-slate-900 flex items-center gap-1.5">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div> Secure Clinical Node
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
             <div className="hidden md:flex flex-col text-right">
                <p className="text-[14px] font-black text-slate-900 leading-tight">{user?.name || 'Guest User'}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{user?.role || 'Visitor'}</p>
             </div>
             <button className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-900 relative border border-slate-100 shadow-sm transition-all">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
             <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center font-black text-white text-sm shadow-md shadow-primary/20">
               {user?.name?.[0].toUpperCase()}
             </div>
          </div>
        </header>
        
        <div className="flex-1 p-4 lg:p-8 overflow-x-hidden">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
