import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import "../../request.css";
import Sidebar from "../SideBar/Sidebar";
import NavBar from "../NavBar/NavBar";
//form after accepting

function AccceptRequest() {
  const [inputs, setInputs] = useState({}); //initialize the empty object
  const history = useNavigate(); //history("/requestdetails")
  const id = useParams().id;

  useEffect(() => {  //execute the code when id dependency changes
    //data fetching
    const fetchHandler = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/request/${id}`);
        setInputs(response.data.reques);//disply retrived data only show the one that we want them to show
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHandler();
  }, [id]);

  //PUT for updating existing resources   creating new resource-post


  const sendRequest = async () => {
    await axios      //PUT update curruntly avilable data
      .put(`http://localhost:8080/request/${id}`, {   //PUT sends an object containing STRING name phone msg status
        name: String(inputs.name),
        phone: String(inputs.phone),
        message: String(inputs.message),
        status: String(inputs.status),
      })
      .then((res) => res.data);
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState, //creating new object without reffecting exissting 
      [e.target.name]: e.target.value, //e updates the inputs state based on the name attribute 
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    sendRequest().then(() => {
      window.alert("Status Add successfully!");
      history("/digital-customization/requestdetails");
    });
  };
  return (
    <div>
      <Sidebar />
      <NavBar />
      //after accepting the form
      <div className="child_clas">
        <h1 className="topic_admin">Accept Request</h1>
        <div className="item_full_box">
          <form className="item_form_admin" onSubmit={handleSubmit}>
            <label className="form_box_item_lable">name</label>
            <br></br>
            <input
              className="form_box_item_input"
              type="text"
              value={inputs.name}
              onChange={handleChange}
              name="name"
              readOnly
            />
            <br></br>
            <label className="form_box_item_lable">phone</label>
            <br></br>
            <input
              className="form_box_item_input"
              type="text"
              value={inputs.phone}
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              onChange={handleChange}
              name="phone"
              readOnly
            />
            <br></br>
            <label className="form_box_item_lable">message</label>
            <br></br>
            <input
              className="form_box_item_input"
              type="text"
              value={inputs.message}
              onChange={handleChange}
              name="message"
              readOnly
            />
            <br></br>
            <label className="form_box_item_lable">status</label>
            <br></br>
            <select
              className="form_box_item_input"
              value={inputs.status}
              onChange={handleChange}
              name="status"
              readOnly
            >
              <option value="">Select</option>
              <option value="Accept">Accept</option>
              <option value="Decline">Decline</option>
            </select>

            <br></br>
            <button type="submit" className="admin_form_cneter_btn">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccceptRequest;
