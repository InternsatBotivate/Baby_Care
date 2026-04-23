import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';

// Import Admin Pages
import Dashboard from './pages/Dashboard';
import AllPatients from './pages/AllPatients';
import ActivePatients from './pages/ActivePatients';
import CompleteDetails from './pages/CompleteDetails';
import Appointments from './pages/Appointments';
import Reminders from './pages/Reminders';
import HealthRecords from './pages/HealthRecords';
import GrowthCare from './pages/GrowthCare';
import Guidelines from './pages/Guidelines';
import Emergency from './pages/Emergency';
import Inventory from './pages/Inventory';
import { MasterData, SettingsPage } from './pages/Management';

const Placeholder = ({ title }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
      <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
    </div>
    <h1 className="text-3xl font-bold mb-2">{title}</h1>
    <p className="text-gray-400 max-w-md">Building this module for the complete ERP experience.</p>
  </div>
);

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" />;
  return <MainLayout>{children}</MainLayout>;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Admin Routes */}
          <Route path="/admin/*" element={
            <ProtectedRoute allowedRoles={['ADMIN', 'SUPER_ADMIN']}>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="patients" element={<AllPatients />} />
                <Route path="active" element={<ActivePatients />} />
                
                {/* Unified Patient Command Center Routes */}
                <Route path="details/:id" element={<CompleteDetails />} />
                <Route path="records/:id" element={<CompleteDetails />} />
                <Route path="growth/:id" element={<CompleteDetails />} />
                <Route path="reports/:id" element={<CompleteDetails />} />
                
                <Route path="appointments" element={<Appointments isAdmin={true} />} />
                <Route path="reminders" element={<Reminders />} />
                <Route path="guidelines" element={<Guidelines />} />
                <Route path="emergency" element={<Emergency />} />
                <Route path="lab" element={<Inventory type="Lab" />} />
                <Route path="pharmacy" element={<Inventory type="Pharmacy" />} />
                <Route path="specialists" element={<Placeholder title="Specialist Consultations" />} />
                <Route path="master" element={<MasterData />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="*" element={<Navigate to="dashboard" />} />
              </Routes>
            </ProtectedRoute>
          } />

          {/* User Routes */}
          <Route path="/user/*" element={
            <ProtectedRoute allowedRoles={['USER']}>
              <Routes>
                {/* Unified Patient Portal Routes */}
                <Route path="profile" element={<CompleteDetails />} />
                <Route path="records" element={<CompleteDetails />} />
                <Route path="growth" element={<CompleteDetails />} />
                <Route path="reports" element={<CompleteDetails />} />
                
                <Route path="appointments" element={<Appointments isAdmin={false} />} />
                <Route path="guidelines" element={<Guidelines />} />
                <Route path="emergency" element={<Emergency />} />
                <Route path="*" element={<Navigate to="profile" />} />
              </Routes>
            </ProtectedRoute>
          } />

          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
