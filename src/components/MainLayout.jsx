import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, UserCheck, Calendar, Video, Bell, 
  FileText, Activity, ClipboardList, BookOpen, AlertCircle, 
  FlaskConical, Pill, Stethoscope, Database, Settings, LogOut, UserCircle, Menu, X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { twMerge } from 'tailwind-merge';
import Header from './Header';

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

  // Dynamic path tracking for patient context
  const getNavItems = () => {
    const items = user?.role === 'USER' ? userNav : adminNav;
    
    // Extract patient ID from current URL if present
    const patientMatch = location.pathname.match(/\/(details|records|growth|reports)\/(P\d+)/);
    const selectedId = patientMatch ? patientMatch[2] : null;

    return items.map(item => {
      // If we have a selected patient, append their ID to relevant clinical routes
      if (selectedId && (
        item.path.includes('details') || 
        item.path.includes('records') || 
        item.path.includes('growth') || 
        item.path.includes('reports')
      )) {
        // Ensure we don't double-append
        const basePath = item.path.split('/P')[0];
        return { ...item, path: `${basePath}/${selectedId}` };
      }
      return item;
    });
  };

  const navItems = getNavItems();

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 border-r border-slate-200 bg-white p-4 flex-col gap-1 fixed h-screen overflow-y-auto scrollbar-hide z-50 shadow-sm pt-4">
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
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
        
        <div className="flex-1 p-4 lg:p-8 overflow-x-hidden">
          {children}
        </div>

        {/* Footer */}
        <footer className="px-4 py-6 lg:px-8 border-t border-slate-100 flex justify-center items-center bg-white/50 backdrop-blur-sm">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
            Powered By 
            <a 
              href="https://www.botivate.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary-dark transition-colors border-b border-primary/20 hover:border-primary pb-0.5"
            >
              Botivate
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default MainLayout;
