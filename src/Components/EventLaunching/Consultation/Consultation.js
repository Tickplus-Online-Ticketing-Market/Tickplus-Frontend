import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "./consultation.css";
import Sidebar from "../SideBar/Sidebar";
import NavBar from "../NavBar/NavBar";
import ConsultationCard from "./ConsultationCard";

const RequesConsultant = () => {
  const navigate = useNavigate();          // navigate  a different location application.
  const [inputs, setInputs] = useState({
    organizer_name:"",
    oranizer_Conatct:"",
    event_ID: "",
    event_Details: "",
   
  });
  const [error, setError] = useState("");                 // Define a state variable 'error' to store error messages


  const handleChange = (e) => {                          //updates the 'inputs' state based on user input
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {                    //handles form submission
    e.preventDefault();                                  // Prevent the default form submission behavior
    try {
   //   await axios.post("http://localhost:3001/consultant/", inputs);      //  add a new event using the 'inputs'
      alert("Request sended successfully.");                             

      window.location.reload(); // Navigate to events page after successful submission
    } catch (error) {
      console.error("Error submitting event:", error);
      // Handle error and provide feedback to the user
    }
  };

  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="child_clas">
        <div className="dash_button_set">
          <h1 className="topic_detils">Our Consultation</h1>
          
        </div>
        <div className="div_con_box">
          <div className="con_ful_box">
            <ConsultationCard />
           
            
          </div>

          <div className="leftbox">
        


         <form className="from_evt" onSubmit={handleSubmit}>
              <h3 className="topic_from">Request Consultation Servicess</h3>

           
            <div>
              <label className="ev_lbl">Organizer Name:</label>
              <input
                className="form_box_item_input"
                type="text"
                name="organizer_Name"
                value={inputs.organizer_Name}
                onChange={handleChange}
                required                                 //form validation

              />
            </div>
            <div>
              <label className="ev_lbl">Organizer Conatct Details:</label>
              <input
                className="form_box_item_input"
                type="number"
                name="organizer_Contact"
                value={inputs.oganizer_Conatct}
                onChange={handleChange}
                required                                 //form validation
              />
            </div>
            <div>
              <label className="ev_lbl">Event Id:</label>
              <input
                className="form_box_item_input"
                type="number"
                name="event_ID"
                value={inputs.event_ID}
                onChange={handleChange}
                required                                 //form validation

              />
            </div>
            <div>
              <label className="ev_lbl">Event Details:</label>
              <input
                className="form_box_item_input"
                type="text"
                name="event_Details"
                value={inputs.event_Details}
                onChange={handleChange}
                required                  
                style={{ height: '200px' }}                //form validation
              />
            </div>

           
            
            {error && <p className="event-error-message">{error}</p>}
           
                <button type="submit" className="admin_form_cneter_btn " >
              Request 
            </button>
          
          </form>


          </div>
        </div>
      </div>
    </div>
  );
  }

export default RequesConsultant;
