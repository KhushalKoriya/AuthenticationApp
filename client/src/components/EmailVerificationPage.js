// EmailVerificationPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmailVerificationPage = () => {
    const { token } = useParams();
    const [verificationStatus, setVerificationStatus] = useState('Verifying...');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/verify-email/${token}`);
                console.log(response,"response");
                setVerificationStatus(response.data);
            } catch (error) {
                setVerificationStatus('Error verifying email');
                console.error('Error verifying email:', error);
            }
        };

        verifyEmail();
    }, [token]);

    return (
        <div>
            <h1>Email Verification</h1>
            <p>{verificationStatus}</p>
        </div>
    );
};

export default EmailVerificationPage;
