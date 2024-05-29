// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Application</h1>
            <p>
                <Link to="/register/customer">Customer Registration</Link>
            </p>
            <p>
                <Link to="/register/admin">Admin Registration</Link>
            </p>
            <p>
                <Link to="/login/admin">Admin Login</Link>
            </p>
        </div>
    );
};

export default Home;
