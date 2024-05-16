import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import './nav.css'
function NavBar() {
  return (
    <div>
      <div className="nav_bar_main">
      <h1 className="topic_nav_bar" style={{ paddingLeft: '20px', fontSize: '24px' }}>Best place to find and sell your event ticket</h1>
      <div style={{ display: 'flex' }}>
            <FaBell className="bell_nav" />
            <FaCircleUser className="user_icon_nav" />
     </div>

      </div>
    </div>
  );
}

export default NavBar;
