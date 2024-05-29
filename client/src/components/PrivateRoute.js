import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  return isAuthenticated && userRole === 'admin' ? (
    children
  ) : (
    <Navigate to="/login/admin" />
  );
};

export default PrivateRoute;
