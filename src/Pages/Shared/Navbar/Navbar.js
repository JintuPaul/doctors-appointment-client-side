import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {user} = "hello"
    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        {
            user?.uid ? 
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button> Login out</button></li>
            </>
            :
            <li><Link to='/login'>Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menuItems}
            </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl">Doctor Portal</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
            {menuItems}
            </ul>
        </div>
        <div className="navbar-end">
            <Link className="text-white py-2 bg-orange-500 px-4 font-semibold text-xl banner-btn">Get started</Link>
        </div>
        <label  htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;