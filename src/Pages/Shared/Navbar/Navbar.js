import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import logo from '../../../assets/icons/Keep Smile.png'
import './navbar.css'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="font-[sans-serif] text-[17px] text-[#454546] font-medium" to="/">Home</Link>
      </li>
      <li>
        <Link className="font-[sans-serif] text-[17px] text-[#454546] font-medium" to="/about">About</Link>
      </li>
      <li>
        <Link className="font-[sans-serif] text-[17px] text-[#454546] font-medium" to="/appointment">Appointment</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link className="font-[sans-serif] text-[17px] text-[#454546] font-medium" to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button className="btn btn-ghost font-semibold" onClick={handleLogOut}> Login out</button>
          </li>
        </>
      ) : (
        <li>
          <Link className="btn btn-ghost font-semibold" to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="logo">
          <p className="logo-text"><span className=" font-[sans-serif] text-[36px]">K</span>eep<span className=" font-[sans-serif] text-[36px]">S</span>mile</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {/* <Link className="text-white py-2 bg-orange-500 px-4 font-medium text-xl banner-btn">Get booking</Link> */}
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
