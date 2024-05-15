import React, { useState } from 'react'
import Logo from '../../Assets/HomePage/img/Logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="w-full bg-gray-800">
            <nav className="flex justify-between items-center max-w-2xl">
                <div className="nav-logo-container ml-0 mr-8">
                    <Link to="/">
                        <img src={Logo} alt="Tick+" className="max-w-3xl" />
                    </Link>
                </div>
                <div className="navbar-links-container flex gap-1">
                    <div className="flex gap-1 py-3">
                        <Link to="/event-launching" className="text-white hover:text-gray-300 text-center">
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
                    </div>

                    <Link to="/ticket-purchase" className="text-white hover:text-gray-300 w-fit min-w-fit">
                        <button className="primary-button">Buy Tickets</button>
                    </Link>
                    <Link to="/user/login" className="text-white hover:text-gray-300 w-fit min-w-fit">
                        <button className="primary-button">Sign In</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
