import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";//pass to backend through http
import "../../request.css";


function AddRequest() {

  const navigate = useNavigate(); // Changed variable name /to navigate
  //creating variables
  const [inputs, setInputs] = useState({    //[current state,update state]
    name: "", //empty bcs needs to collect data
    phone: "",
    message: "",
  });
        //onchange
  const handleChange = (e) => {  //Extracting the current values
    const { name, value } = e.target;//setter eka through assign krnwa
    setInputs((prevInputs) => ({ //assigning value
      ...prevInputs,
      [name]: value,//creating new object with the name
    }));
  };
        //onsubmit
  const handleSubmit = async (e) => {
    e.preventDefault();//keeps the default one without reloading
    console.log(inputs);
    await sendRequest();
    window.alert("Request Send successfully!");
    window.location.reload();//resetting to the inital state
  };
//Axios returns promises //data fetching
  const sendRequest = async () => {
    await axios.post("https://tickplus-backend.onrender.com/digital-customization", { //routers in server-data sends to the server by POST
      name: inputs.name,   //passing the object as parameter to the server
      phone: inputs.phone,
      message: inputs.message,
    });

  };


  return (
    <div>
      <h1 className="topic_admin">Add Request For Create Ticket</h1>
      <div className="item_full_box">
        <form className="item_form_admin" onSubmit={handleSubmit}>
          <label className="form_box_item_lable">name</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="text"
            value={inputs.name}
            onChange={handleChange}//
            name="name"
            required //must have a value
          />
          <br></br>
          <label className="form_box_item_lable">phone</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="text"
            value={inputs.phone}
            onChange={handleChange}
            name="phone"
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number"
            required
          />
          <br></br>
          <label className="form_box_item_lable">message</label>
          <br></br>
          <textarea
            className="form_box_item_input"
            type="text"
            value={inputs.message}
            onChange={handleChange}
            name="message"
            required
          />
          <br></br>
          <button type="submit" className="admin_form_cneter_btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRequest;