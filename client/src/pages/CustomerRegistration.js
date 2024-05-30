// src/pages/CustomerRegistration.js
import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';

const CustomerRegistration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/register/customer', formData);
            alert(response.data.message);
        } catch (error) {
            console.error('Registration error:', error);
            setError(error.response?.data || 'An error occurred during registration. Please try again.');
        }
    };

    return (
        <div>
            <h2>Customer Registration</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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

export default CustomerRegistration;
