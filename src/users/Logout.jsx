import React from 'react';
import { useAuth } from './AuthContext';

export default function Logout() {
    const { logout } = useAuth();

    return (
        <div className="container">
            <button 
                type="button" 
                className='btn btn-danger'
                onClick={logout}
            >
                Logout
            </button>
        </div>
    );
}
