import React, { useState } from "react";
import "./sidebar.css";
import {
  HiHome,
  HiOutlineClipboardList,
  HiOutlineFilm,
  HiUsers,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";
import Logo from "./img/logo.png";

const Sidebar = ({ children }) => {
  const [showTicketDropdown, setShowTicketDropdown] = useState(false);
  const [showPosterDropdown, setShowPosterDropdown] = useState(false);

  const toggleTicketDropdown = () => {
    setShowTicketDropdown(!showTicketDropdown);
    setShowPosterDropdown(false); // Close poster dropdown when ticket dropdown is opened
  };

  const togglePosterDropdown = () => {
    setShowPosterDropdown(!showPosterDropdown);
    setShowTicketDropdown(false); // Close ticket dropdown when poster dropdown is opened
  };

  const handleMenuItemClick = (path) => {
    window.location.href = path;
  };

  return (
    <div className="container_nav">
      <div className="sidebar">
        <div className="nav_item_main">
          <div>
            <img src={Logo} alt="Logo" className="nav_logo" />
            <p className="nav_item" onClick={() => (window.location.href = "/digital-customization/home")}>
              <HiHome /> Home
            </p>
            <div className="nav_item_dropdown">
              <p className="nav_item" onClick={toggleTicketDropdown}>
                <HiOutlineClipboardList /> Ticket
              </p>
              {showTicketDropdown && (
                <div className="dropdown_menu">
                  <p className="dropdown_item" onClick={() => handleMenuItemClick("/digital-customization/requestdetails")}>
                    <span className="dropdown_text">New Jobs</span>
                  </p>
                  <p className="dropdown_item" onClick={() => handleMenuItemClick("/digital-customization/ongoing")}>
                    <span className="dropdown_text">Ongoing Jobs</span>
                  </p>
                  <p className="dropdown_item" onClick={() => handleMenuItemClick("/digital-customization/compleatereq")}>
                    <span className="dropdown_text">Complete Jobs</span>
                  </p>
                </div>
              )}
            </div>
            <div className="nav_item_dropdown">
              <p className="nav_item" onClick={togglePosterDropdown}>
                <HiOutlineFilm /> Posters
              </p>
              {showPosterDropdown && (
                <div className="dropdown_menu">
                  <p className="dropdown_item" onClick={() => handleMenuItemClick("/digital-customization/poster/requestdetails")}>
                    <span className="dropdown_text">New Jobs</span>
                  </p>
                  <p className="dropdown_item" onClick={() => handleMenuItemClick("/digital-customization/poster/ongoing")}>
                    <span className="dropdown_text">Ongoing Jobs</span>
                  </p>
                  <p className="dropdown_item" onClick={() => handleMenuItemClick("/digital-customization/poster/compleatereq")}>
                    <span className="dropdown_text">Complete Jobs</span>
                  </p>
                </div>
              )}
            </div>
            <div className="botmcon mt-3">
              <p className="nav_item">
                <HiOutlineQuestionMarkCircle /> Support
              </p>
              <p className="nav_item">
                <HiOutlineCog /> Settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
