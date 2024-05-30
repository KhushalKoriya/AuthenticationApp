// src/components/RegistrationTabs.js
import React, { useState } from 'react';
import CustomerRegistration from '../pages/CustomerRegistration';
import AdminRegistration from '../pages/AdminRegistration';
import './RegistrationTabs.css';

const RegistrationTabs = () => {
    const [activeTab, setActiveTab] = useState('customer');

    return (
        <div>
            <div className="tabs">
                <button onClick={() => setActiveTab('customer')} className={activeTab === 'customer' ? 'active' : ''}>Customer Registration</button>
                <button onClick={() => setActiveTab('admin')} className={activeTab === 'admin' ? 'active' : ''}>Admin Registration</button>
            </div>
            <div className="tab-content">
                {activeTab === 'customer' && <CustomerRegistration />}
                {activeTab === 'admin' && <AdminRegistration />}
            </div>
        </div>
    );
};

export default RegistrationTabs;
