import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Login() {
    const auth = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async () => {
        if (!formData.email.trim() || !formData.password.trim()) {
            alert("Please enter both email and password.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/chedotech-85bbf/us-central1/omshree/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                auth.login();  // Use context login method
                navigate("/profile");  // Redirect to profile after successful login
            } else {
                alert(data.message || "Login failed. Invalid email or password.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Failed to connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                <h2 className="text-center mb-4">Login</h2>

                <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button
                    className="btn btn-primary w-100"
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <div className="text-center mt-3">
                    Don't have an account? <Link to="/signup">Signup</Link>
                </div>
            </div>
        </div>
    );
}
