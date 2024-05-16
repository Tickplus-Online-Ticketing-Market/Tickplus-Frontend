import React from "react";
import "./Promotional.css";
import Sidebar from "../SideBar/Sidebar";
import NavBar from "../NavBar/NavBar";

import Template from "./Template";
function Promotional() {
  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="child_clas">
        <div className="dash_button_set">
          <h1 className="topic_detils">Your Gallery</h1>
         
        </div>
        <div className="tbl_pernt">
          <h1 className="topic_detils_pro">Promotional Materials</h1>
          <h1 className="topic_detils_pro_sub">Evet Poster Template</h1>
          
          <Template/>

        </div>
      </div>
    </div>
  );
}

export default Promotional;
