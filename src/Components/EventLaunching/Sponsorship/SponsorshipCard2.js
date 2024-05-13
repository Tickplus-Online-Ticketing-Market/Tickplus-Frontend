import React from "react";
import usericon from "./img/p1.jpeg";
import "./Sponsorship.css";
function SponsorshipCard2() {
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
              <p className="cord_name_sponc">Name: Mr.Rosalie</p>
              <p className="con_id_sponc">Sponsorship ID: SID2356</p>
              <p className="con_details_sponc">
              "Explore the benefits of sponsoring our event! Your support will not only enhance your brand's visibility but also demonstrate your commitment to our shared values and community."
              <p></p>
              Previously sponsored events: Harmony Fest, Musical festival, Acoustic Aura


              </p>
              <p className="phone_con_sponc">Phone Number : 0723456372</p>
              <p className="gmail_con_sponc">Email : rosalie@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorshipCard2;
