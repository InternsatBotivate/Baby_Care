import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (role) => {
    // role can be 'SUPER_ADMIN', 'ADMIN', or 'USER'
    const mockData = role === 'USER' ? { role, name: 'Meera Reddy', patientId: 'P003' } : { role, name: role.replace('_', ' ').toLowerCase() };
    setUser(mockData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
