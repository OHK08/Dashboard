import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Signup() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            alert("All fields are required.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/chedotech-85bbf/us-central1/omshree/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                login();
                navigate("/profile");
            } else {
                alert(data.message || "Signup failed. Try again.");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Failed to connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Signup</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? "Signing up..." : "Signup"}
                    </button>
                </form>
            </div>
        </div>
    );
}
