import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import NavBar from "../NavBar/NavBar";
import "./ViewEvents.css";

const ViewEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    about: "",
    venue: "",
    date: "",
    artist: "",
    time: "",
    price: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `https://tickplus-backend.onrender.com/events/${id}`
        );
        setEvent(response.data.event);
        setFormData(response.data.event);
        setLoading(false);
      } catch (error) {
        setError("Error fetching event details.");
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://tickplus-backend.onrender.com/events/${id}`,
        formData
      );
      alert("Event updated successfully.");
      setEditMode(false);
    } catch (error) {
      // Handle error
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${event.name}?`
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `https://tickplus-backend.onrender.com/events/${id}`
        );
        alert("Event deleted successfully.");

        window.location.replace("/");
      } catch (error) {
        // Handle error
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event) {
    return <div>No event found.</div>;
  }

  const { name, image, venue, date, artist, about, time, price } = formData;

  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="event_profile">
        <h1 className="nameview">{editMode ? "Edit Event" : name}</h1>
        {editMode ? (
          <div className="item_full_box">
            <form className="item_form_admin" onSubmit={handleSubmit}>
              <div>
                <label className="form_box_item_lable">Name:</label>
                <input
                  className="form_box_item_input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form_box_item_lable">About:</label>
                <input
                  className="form_box_item_input"
                  type="text"
                  name="about"
                  value={about}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form_box_item_lable">Image:</label>
                <input
                  className="form_box_item_input"
                  type="text"
                  name="image"
                  value={image}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form_box_item_lable">Venue:</label>
                <input
                  className="form_box_item_input"
                  type="text"
                  name="venue"
                  value={venue}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form_box_item_lable">Date:</label>
                <input
                  className="form_box_item_input"
                  type="text"
                  name="date"
                  value={date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form_box_item_lable">Artist:</label>
                <input
                  className="form_box_item_input"
                  type="text"
                  name="artist"
                  value={artist}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form_box_item_lable">Time:</label>
                <input
                  className="form_box_item_input"
                  type="text"
                  name="time"
                  value={time}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form_box_item_lable">Price:</label>
                <input
                  className="form_box_item_input"
                  type="text"
                  name="price"
                  value={price}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="admin_form_cneter_btn">
                Update
              </button>
            </form>
          </div>
        ) : (
          <div className="view_post">
            <div>
              <br></br>
              <div>
                <img
                  src={image}
                  alt={name}
                  style={{ width: "100%", height: "300px" }}
                />
              </div>
              <p className="card_details" style={{ color: "blue" }}>
                {about}
              </p>
              <p className="card_details">Venue: {venue}</p>
              <p className="card_details">
                Date: {new Date(date).toLocaleDateString()}
              </p>
              <p className="card_details">Artist: {artist}</p>
              <p className="card_details">Time: {time} </p>
              <p className="card_details">Price: Rs.{price}</p>
              <div className="btn_controlset">
                <Link to={`/events`}>
                  <button className="btn_con_set" onClick={handleDelete}>
                    Delete
                  </button>
                </Link>
                <button
                  className="btn_con_set"
                  onClick={() => setEditMode(true)}
                >
                  Edit
                </button>
                <Link to={`/events`}>
                  <button className="btn_con_set">Back</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewEvent;
