import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../users/AuthContext';

export default function LoginPage() {

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.login();
        navigate('/dashboard');
    };

  return (
    <>
        <h2>Login Page</h2>
        <button onClick={handleLogin}>Login</button>
    </>
  );
}l
