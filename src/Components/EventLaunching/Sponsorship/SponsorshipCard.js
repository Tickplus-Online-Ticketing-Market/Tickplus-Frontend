import React from "react";
import usericon from "./img/spon.jpg";
import "./Sponsorship.css";
function SponsorshipCard() {
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
              <p className="cord_name_sponc">Name: Mr.Jacod</p>
              <p className="con_id_sponc">Sponsorship ID: SID234</p>
              <p className="con_details_sponc">
             " Partnering with us offers unique opportunities to showcase your brand and connect with our audience. Let's create a memorable event together."<p>
              
             </p>
              Previously sponsored events: Naada Musical Event, Beat Blast, Rhythm Revival


              </p>
              <p className="phone_con_sponc">Phone Number : 0784523332</p>
              <p className="gmail_con_sponc">Email : jacob@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorshipCard;
