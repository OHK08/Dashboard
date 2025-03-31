import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
      <h4 className="text-black">NxtStep</h4>

      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-black" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/contact">Contact</Link>
          </li>
          
          <li className="nav-item dropdown">
            <a 
              className="nav-link dropdown-toggle text-black" 
              href="#" 
              id="navbarDropdown" 
              role="button" 
              data-bs-toggle="dropdown"
            >
              User
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="/profile">Profile</Link>
              </li>
              <li>
                <Logout />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
