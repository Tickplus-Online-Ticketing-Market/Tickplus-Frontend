import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Promotional/events.css'
import Sidebar from "../SideBar/Sidebar";
import NavBar from "../NavBar/NavBar";

const AddEvent = () => {
  const navigate = useNavigate();          // navigate  a different location application.
  const [inputs, setInputs] = useState({
    name: "",
    image: "",
    venue: "",
    date: "",
    artist: "",
    about: "",
    time: "",
    price: "",
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
   //   await axios.post("http://localhost:3001/events/", inputs);      //  add a new event using the 'inputs'
      alert("Event added successfully.");                             

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
        <h1 className="topic_admin">Create New Event</h1>
        <div className="item_full_box">
          <form className="item_form_admin" onSubmit={handleSubmit}>
            <div>
              <label className="form_box_item_lable">Name:</label>
              <input
                className="form_box_item_input"
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                required                //form validation
              />
            </div>
            <div>
              <label className="form_box_item_lable">Image URL:</label>
              <input
                className="form_box_item_input"
                type="text"
                name="image"
                value={inputs.image}
                onChange={handleChange}
                required                                 //form validation

              />
            </div>
            <div>
              <label className="form_box_item_lable">Venue:</label>
              <input
                className="form_box_item_input"
                type="text"
                name="venue"
                value={inputs.venue}
                onChange={handleChange}
                required                                 //form validation
              />
            </div>
            <div>
              <label className="form_box_item_lable">Date:</label>
              <input
                className="form_box_item_input"
                type="date"
                name="date"
                value={inputs.date}
                onChange={handleChange}
                required                                 //form validation

              />
            </div>
            <div>
              <label className="form_box_item_lable">Artist:</label>
              <input
                className="form_box_item_input"
                type="text"
                name="artist"
                value={inputs.artist}
                onChange={handleChange}
                required                                 //form validation
              />
            </div>

            <div>
              <label className="form_box_item_lable">Time:</label>
              <input
                className="form_box_item_input"
                type="time"
                name="time"
                value={inputs.time}
                onChange={handleChange}
                required                                 //form validation
              />
            </div>
            <div>
              <label className="form_box_item_lable">Price:</label>
              <input
                className="form_box_item_input"
                type="number"
                name="price"
                value={inputs.price}
                onChange={handleChange}
                required                                 //form validation
              />
            </div>
            <div>
              <label className="form_box_item_lable">About:</label>
              <textarea
                className="form_box_item_input"
                name="about"
                value={inputs.about}
                onChange={handleChange}
                required                                 //form validation
              />
            </div>
            {error && <p className="event-error-message">{error}</p>}
           
                <button type="submit" className="admin_form_cneter_btn " >
                  Submit
               </button>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
