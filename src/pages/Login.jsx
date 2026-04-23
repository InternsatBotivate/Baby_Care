import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Activity, Shield, User, Heart } from 'lucide-react';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (role) => {
    setLoading(true);
    setTimeout(() => {
      login(role);
      navigate(role === 'USER' ? '/user/profile' : '/admin/dashboard');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-md glass-card rounded-[2.5rem] p-10 border border-slate-200 shadow-xl relative z-10 bg-white">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)] mb-6">
            <Activity className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">CarePlus ERP</h1>
          <p className="text-slate-500 text-center">Select your access level to continue to the newborn care portal.</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleLogin('SUPER_ADMIN')}
            disabled={loading}
            className="w-full p-4 rounded-2xl bg-white border border-slate-100 hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center gap-4 group shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Shield size={24} />
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900">Super Admin</p>
              <p className="text-xs text-slate-400">System control & oversight</p>
            </div>
          </button>

          <button
            onClick={() => handleLogin('ADMIN')}
            disabled={loading}
            className="w-full p-4 rounded-2xl bg-white border border-slate-100 hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center gap-4 group shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50/50 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
              <User size={24} />
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900">Staff / Admin</p>
              <p className="text-xs text-slate-400">Manage patients & subscriptions</p>
            </div>
          </button>

          <button
            onClick={() => handleLogin('USER')}
            disabled={loading}
            className="w-full p-4 rounded-2xl bg-white border border-slate-100 hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center gap-4 group shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-50/50 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
              <Heart size={24} />
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900">Parent / User</p>
              <p className="text-xs text-slate-400">Track baby's health & growth</p>
            </div>
          </button>
        </div>

        {loading && (
          <div className="mt-8 flex justify-center">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">© 2026 CarePlus Hospital Systems. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
