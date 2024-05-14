import React, { useState } from 'react'
import Logo from '../../Assets/HomePage/img/Logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="w-full bg-gray-800">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="nav-logo-container">
                    <Link to="/">
                        <img src={Logo} alt="Tick+" className="max-w-3xl" />
                    </Link>
                </div>
                <div className="navbar-links-container flex space-x-4 gap-4 text-center">
                    <Link to="/event-launching" className="text-white hover:text-gray-300">
                        Events
                    </Link>
                    <Link to="/ticket-launching" className="text-white hover:text-gray-300">
                        Tickets
                    </Link>
                    <Link to="/community-page" className="text-white hover:text-gray-300">
                        Community
                    </Link>
                    <Link to="/secondary-market" className="text-white hover:text-gray-300">
                        Auction
                    </Link>
                    <Link to="/sponsorship-management" className="text-white hover:text-gray-300">
                        Sponsorship
                    </Link>
                    <Link to="/digital-customization" className="text-white hover:text-gray-300">
                        Customize
                    </Link>
                    <Link to="/ticket-purchase" className="text-white hover:text-gray-300">
                        Buy Tickets
                    </Link>
                    <Link to="/user/login">
                        <button className="primary-button">Sign In</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
