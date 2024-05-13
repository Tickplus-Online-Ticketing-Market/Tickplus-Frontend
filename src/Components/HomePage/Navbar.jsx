import React, { useState } from "react";
import Logo from "../../Assets/HomePage/img/Logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <Link to="/">
          <img src={Logo} alt="Tick+" className=" max-w-3xl" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <Link to="#">Events</Link>
        <Link to="/ticket-launching">Tickets</Link>
        <Link to="#">Community</Link>
        <Link to="/secondary-market">Secondary Market</Link>
        <Link to="#">Sponsors</Link>
        <Link to="/user/login">
          <button className="primary-button">Sign In</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
