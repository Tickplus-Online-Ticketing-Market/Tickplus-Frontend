import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Sidebar from "../../Admin/SideBar/Sidebar";
import Home from "./PostEdit/Home";
import DataProvider from "./PostEdit/context/DataProvider";
import NavBar from "../../Admin/NavBar/NavBar";
function CreatePost() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState();
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3030/digital-customization/poster/${id}`
        );
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
      .post(
        `http://localhost:3030/digital-customization/poster/${id}`,
        formData
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:3030/digital-customization/poster/${id}`, {
        name: String(inputs.name),
        phone: String(inputs.phone),
        code: String(inputs.code),

        onstatus: String(inputs.onstatus),
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
      window.alert("status Add successfully!");
      history("/digital-customization/poster/ongoing");
    });
  };
  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="child_clas">
        <h1 className="topic_admin">Create Post</h1>
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
            <label className="form_box_item_lable">onstatus</label>
            <br></br>
            <select
              className="form_box_item_input"
              value={inputs.onstatus}
              onChange={handleChange}
              name="onstatus"
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
  );
}

export default CreatePost;
