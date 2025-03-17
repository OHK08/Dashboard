import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailContext from './users/EmailContext';
import About from './users/About';
import Contact from './users/Contact';
import UserProfile from './users/UserProfile';
import Login from './users/Login';

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
    </EmailContext.Provider>
  );
}
