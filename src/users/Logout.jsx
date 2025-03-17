import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailContext from './EmailContext';

export default function Logout() {
    const { setEmail } = useContext(EmailContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        setEmail("");
        navigate("/login");
    }

    return (
        <>
            <button 
                type="button" 
                className='btn btn-danger'
                onClick={handleLogout}
            >
                Logout
            </button>
        </>
    );
}
