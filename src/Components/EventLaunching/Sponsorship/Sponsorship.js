import React from "react";
import Sidebar from "../SideBar/Sidebar";
import NavBar from "../NavBar/NavBar";
import SponsorshipCard from "./SponsorshipCard";
import SponsorshipCard2 from "./SponsorshipCard2";
import SponsorshipCard3 from "./SponsorshipCard3";

function Sponsorship() {
  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="child_clas">
        <div className="dash_button_set">
          <h1 className="topic_detils">Our Sponsors</h1>
          <div className="spn_btn_new">
            <button className="btn_dash_admin">Invitations +</button>
            
          </div>
        </div>
        <div className="con_ful_box_sponc">
          <SponsorshipCard />
          <SponsorshipCard2 />
          <SponsorshipCard3 />
          
        </div>
      </div>
    </div>
  );
}

export default Sponsorship;
