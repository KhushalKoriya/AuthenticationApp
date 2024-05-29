// src/pages/AdminLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login/admin', formData);
            console.log(response,"response");
            const { role, token } = response.data;
console.log(role,"role");
            if (role === 'admin') {
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
                navigate('/admin/dashboard');
            } else {
                alert('You are not allowed to login from here');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Invalid login credentials or you are not allowed to login here');
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
                <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
