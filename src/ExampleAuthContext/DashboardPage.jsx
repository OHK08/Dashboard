import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../users/AuthContext';

export default function DashboardPage() {

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/login');
    };

  return (
    <>
        <h2>Dashboard Page</h2>
        <button onClick={handleLogout}>Logout</button> 
    </>
  )
}
