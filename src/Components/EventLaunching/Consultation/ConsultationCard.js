import React from "react";
import "./consultation.css";
import usericon from "./img/consultant.jpg";
function ConsultationCard() {
  return (
    <div>
    
      

        <div className="card_conone" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="clm_on_img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <img src={usericon} alt={usericon} className="img_card_cn" />
            </div>
            <div className="details_side">
                 <p className="cord_name">Name: Mr. Perera</p>
                 <p className="con_details">
                <strong> Qualifications</strong>
                <ul>
                     <li>Proficient in graphic design software such as Adobe Creative Suite
                             <ul>
                               <li>Photoshop</li>
                               <li>Illustrator</li>
                               <li>InDesign</li>
                               </ul>
                      </li>
                      <li>Strong understanding of design principles</li>
                      <li>Excellent communication skills to interact with clients</li>
                      <li>Attention to detail and accuracy in design work</li>
                 </ul>
              
                </p>
                <strong> Previous Work </strong>
                     <ul>
                      <li> Naada</li> 
                      <li> Wiramaya</li>
                      <li> Thaala</li>
                     </ul>
                <strong> Conatct Us</strong>
                     <li>  Phone Number: 078459632</li> 
                     <li>  Email: perera@gmail.com</li> 

            </div>
        </div>




  </div>
  );
}

export default ConsultationCard;