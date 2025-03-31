import React from 'react';
import Navbar from './Navbar';
import { Outlet, Link } from 'react-router-dom';

export default function About() {

    return (
        <>
        <Navbar /> 
            <h2>About</h2>
            <Link to="history">About History</Link>
            <br/>
            <Link to="team">About Team</Link>
            <Outlet/>
        </>
    );
}
