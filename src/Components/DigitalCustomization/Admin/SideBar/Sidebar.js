import React, { useState } from "react";
import "./sidebar.css";
import {
  HiHome,
  HiOutlineClipboardList,
  HiOutlineFilm,
  HiUsers,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";
import Logo from "./img/logo.png";

const Sidebar = ({ children }) => {
  const [ticketOpen, setTicketOpen] = useState(false); // State to manage the drop-down

  const toggleTicket = () => {
    setTicketOpen(!ticketOpen); // Toggle the drop-down
  };

  return (
    <div className="container_nav">
      <div style={{ width: "200px" }} className="sidebar">
        <div className="nav_item_main">
          <div>
            <div>
              <img src={Logo} alt="Logo" className="nav_logo" />
            </div>
            <p
              className="nav_item"
              onClick={() => (window.location.href = "/home")}
            >
              <HiHome />
             Home
            </p>
            

            <div className="dropdown">
              <p className="nav_item" onClick={toggleTicket}>
                <HiOutlineClipboardList />
                Ticket
                {ticketOpen ? <HiChevronUp /> : <HiChevronDown />}
              </p>
              {ticketOpen && (
                <div className="dropdown_content">
                  <p
                    className="nav_item lft"
                    onClick={() => (window.location.href = "/requestdetails")}
                  >
                    New Jobs
                  </p>
                  <p
                    className="nav_item lft"
                    onClick={() => (window.location.href = "/ongoing")}
                  >
                    Ongoing Jobs
                  </p>
                  <p
                    className="nav_item lft"
                    onClick={() => (window.location.href = "/compleatereq")}
                  >
                    Completed Jobs
                  </p>
                </div>
              )}
            </div>

            <p
              className="nav_item"
              onClick={() => (window.location.href = "/posters")}
            >
              <HiOutlineFilm />
              Posters
            </p>
            
            <p className="nav_item">
              <HiUsers />
              Trailers
            </p>
            
            <div className="botmcon">
              <p className="nav_item">
                <HiOutlineQuestionMarkCircle />
                Support
              </p>
              <p className="nav_item">
                <HiOutlineCog />
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

