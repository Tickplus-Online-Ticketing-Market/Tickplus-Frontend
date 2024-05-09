import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Sidebar from "../SideBar/Sidebar";
import NavBar from "../NavBar/NavBar";

function UpdateRequest() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;
  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/request/${id}`);
        setInputs(response.data.reques);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHandler();
  }, [id]);
  const sendRequest = async () => {
    await axios
      .put(`http://localhost:8080/request/${id}`, {
        name: String(inputs.name),
        phone: String(inputs.phone),
        message: String(inputs.message),
        status: String(inputs.status),
      })
      .then((res) => res.data);
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    sendRequest().then(() => {
      window.alert("Status Add successfully!");
      history("/compleatereq");
    });
  };
  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="child_clas">
        <h1 className="topic_admin">Update Request</h1>
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
              required
            />
            <br></br>
            <label className="form_box_item_lable">phone</label>
            <br></br>
            <input
              className="form_box_item_input"
              type="text"
              value={inputs.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              name="phone"
              required
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
              required
            />
            <br></br>
            <label className="form_box_item_lable">status</label>
            <br></br>
            <select
              className="form_box_item_input"
              value={inputs.status}
              onChange={handleChange}
              name="status"
              required
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

export default UpdateRequest;
