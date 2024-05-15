import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Sidebar from "../SideBar/Sidebar";
import Home from "./PostEdit/Home";
import DataProvider from "./PostEdit/context/DataProvider";
import NavBar from "../NavBar/NavBar";
function UpdatePost() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState();
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(`https://tickplus-backend.onrender.com/digital-customization/${id}`);
        setInputs(response.data.reques);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHandler();
  }, [id]);

  const photoUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    await axios
      .post(`https://tickplus-backend.onrender.com/digital-customization/${id}`, formData)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendRequest = async () => {
    await axios
      .put(`https://tickplus-backend.onrender.com/digital-customization/${id}`, {
        name: String(inputs.name),
        phone: String(inputs.phone),
        code: String(inputs.code),
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

    photoUpload();

    sendRequest().then(() => {
      window.alert("Status Add successfully!");
      history("/digital-customization/compleatereq");
    });
  };
  return (
    <div>
      <div>
        <Sidebar />
        <NavBar />
        <div className="child_clas">
          <h1 className="topic_admin">Update Ticket</h1>
          <div>
            <DataProvider>
              <Home />
            </DataProvider>
          </div>
          <div className="item_full_box">
            <form className="item_form_admin" onSubmit={handleSubmit}>
              <label className="form_box_item_lable">user name</label>
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
                <option value="Done">Done</option>
                <option value="Not Yet">Not Yet</option>
              </select>
              <br></br>
              <label className="form_box_item_lable">code</label>
              <br></br>
              <textarea
                className="form_box_item_input"
                type="text"
                value={inputs.code}
                onChange={handleChange}
                name="code"
                required
              />
                          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <br></br>

              <button type="submit" className="admin_form_cneter_btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePost;
