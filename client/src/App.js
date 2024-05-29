import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CustomerRegistration from './pages/CustomerRegistration';
import AdminRegistration from './pages/AdminRegistration';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import EmailVerificationPage from './components/EmailVerificationPage'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/customer" element={<CustomerRegistration />} />
        <Route path="/register/admin" element={<AdminRegistration />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/verify-email/:token" element={<EmailVerificationPage/>} />
        <Route path="/admin/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
