import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailContext from './EmailContext';
import Navbar from './Navbar';

export default function About() {
    const { email } = useContext(EmailContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!email) {
            navigate('/login');
        }
    }, [email, navigate]);

    return (
        <>
        <Navbar /> 
            <h2>About</h2>
            <h3>About: {email} !</h3>
        </>
    );
}
