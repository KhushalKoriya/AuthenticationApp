// src/pages/AdminRegistration.js
import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';

const AdminRegistration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/register/admin', formData);
            alert(response.data.message);
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <div>
            <h2>Admin Registration</h2>
            <form onSubmit={handleSubmit}>
                <InputField label="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                <InputField label="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
                <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default AdminRegistration;
