import React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
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
    <div>
      <div className="container_nav">
        <div style={{ width: "270px" }} className="sidebar">
          <div className="nav_item_main">
            <div>
              <div>
                <img src={Logo} alt="Logo" className="nav_logo" />
              </div>
              <p
                onClick={() => (window.location.href = "/events")}
                className="nav_item"
              >
                <HiOutlineClipboardList />
                My Events
              </p>
              <p
                onClick={() => (window.location.href = "/events/promo")}
                className="nav_item"
              >
                <HiOutlineFilm />
                Promotional Materials
              </p>
              <p
                className="nav_item"
                onClick={() => (window.location.href = "/events/consalt")}
              >
                <HiUsers />
                Consultation Services
              </p>
              <p
                className="nav_item"
                onClick={() => (window.location.href = "/events/spons")}
              >
                <RiMoneyDollarCircleFill />
                Sponsorship
              </p>
              <p
                onClick={() => (window.location.href = "/events/analyze")}
                className="nav_item"
              >
                <IoStatsChart />
                Analyze
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
    </div>
  );
};

export default Sidebar;
