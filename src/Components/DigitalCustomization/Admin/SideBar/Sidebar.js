import React from "react";
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
  return (
    <div className="container_nav">
      <div style={{ width: "200px" }} className="sidebar">
        <div className="nav_item_main">
          <div>
            <div>
              <img src={Logo} alt="Logo" className="nav_logo" />
            </div>
            <p className="nav_item">
              <HiHome />
              Home
            </p>
            <p className="nav_item">
              <HiOutlineClipboardList />
              Ticket
            </p>

            <p
              className="nav_item lft"
              onClick={() => (window.location.href = "/digital-customization/requestdetails")}
            >
              New Jobs
            </p>
            <p
              className="nav_item lft"
              onClick={() => (window.location.href = "/digital-customization/ongoing")}
            >
              Ongoing Jobs
            </p>
            <p
              className="nav_item lft"
              onClick={() => (window.location.href = "/digital-customization/compleatereq")}
            >
              Complete Jobs
            </p>
            <p className="nav_item">
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


