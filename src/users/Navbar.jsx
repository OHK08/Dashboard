import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import UserProfile from './UserProfile';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">NxtStep</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
              User
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <UserProfile/>
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
