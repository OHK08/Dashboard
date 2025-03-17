import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailContext from './EmailContext';

export default function Login() {
    const { setEmail } = useContext(EmailContext);
    const [newEmail, setNewEmail] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        setEmail(newEmail);
        navigate(`/profile`);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                <h2 className="text-center mb-4">Login</h2>
                <input 
                    type="email" 
                    className="form-control mb-3"
                    placeholder="Enter email" 
                    id="email" 
                    name="email" 
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                <button className="btn btn-primary w-100" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}
