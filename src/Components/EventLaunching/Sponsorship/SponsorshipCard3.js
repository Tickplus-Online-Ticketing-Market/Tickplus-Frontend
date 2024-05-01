import React from "react";
import usericon from "./img/p2.jpeg";
import "./Sponsorship.css";
function SponsorshipCard3() {
  return (
    <div>
      <div>
        <div>
          <div className="card_conone_sponc">
            <div className="clm_on_img_sponc">
              <img
                src={usericon}
                alt={usericon}
                className="img_card_cn_sponc"
              />
            </div>
            <div className="detais_side_sponc">
              <p className="cord_name_sponc">Name: Mr.Natalie</p>
              <p className="con_id_sponc">Sponsorship ID: SID1234</p>
              <p className="con_details_sponc">
              "Discover how partnering with us can elevate your brand and connect you with a diverse audience passionate about our event's mission."      
            <p></p>
               Previously sponsored events: Ridma Musical Event, Thaala, Thanuwa musical show
              


              </p>
              <p className="phone_con_sponc">Phone Number : 0782345726</p>
              <p className="gmail_con_sponc">Email : natalie@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorshipCard3;
