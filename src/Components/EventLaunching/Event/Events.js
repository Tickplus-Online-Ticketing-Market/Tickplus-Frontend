import React, { useState, useEffect } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import NavBar from "../NavBar/NavBar";
import '../Promotional/events.css'

const Event = ({ event }) => {
  const { _id, name, date, artist, time, price } = event;
  const [remainingTime, setRemainingTime] = useState("");
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    calculateRemainingTime();
  }, []);

  const calculateRemainingTime = () => {
    const eventDate = new Date(date);
    const currentTime = new Date();
    const difference = eventDate.getTime() - currentTime.getTime();
    const remainingMinutes = Math.floor(difference / (1000 * 60));
    const days = Math.floor(remainingMinutes / (60 * 24));
    const hours = Math.floor((remainingMinutes % (60 * 24)) / 60);
    const minutes = remainingMinutes % 60;

    if (difference <= 0) {
      setIsExpired(true);
    } else {
      setIsExpired(false);
      setRemainingTime(`${days} days, ${hours} hours, ${minutes} minutes`);
    }
  };

  return (
    <tr className="admin_tbl_tr">
      <td>
        <Link className="idviewbtn" to={`/admin-events/${_id}`}>
          {_id.substring(0, 5)}
        </Link>
      </td>
      <td>{name}</td>
      <td>{new Date(date).toLocaleDateString()}</td>
      <td>{artist}</td>
      <td>{time} minutes</td>
      <td>${price}</td>
      <td>{isExpired ? "Expired" : remainingTime}</td>
      <td>
        <Link className="activebtn">
          <button className="activebtn">Active</button>
        </Link>
      </td>
    </tr>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [eventCount, setEventCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
     //   const response = await axios.get("http://localhost:3001/events");
      //  setEvents(response.data.events);
        //setEventCount(response.data.events.length);
      } catch (error) {
        setAlertMessage("Error fetching events.");
      }
    };

    fetchEvents();
  }, []);

  const handleSearch = () => {
    const filteredEvents = events.filter((event) =>
      Object.values(event).some((field) =>
        field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setEvents(filteredEvents);
    setNoResults(filteredEvents.length === 0);
  };

  return (
    <div>
      <Sidebar />
      <NavBar />
      <div>
        <div className="child_clas">
          <div className="dash_button_set">
            <button
              onClick={() => (window.location.href = "/addevent")}
              className="btn_dash_admin"
            >
              Add New Event
            </button>
            <tr>
              <td className="">
                <input
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  name="search"
                  className="serch_inpt"
                  placeholder="Search Here..."
                ></input>
              </td>

              <td>
                <button onClick={handleSearch} className="btn_dash_admin">
                  Search
                </button>
              </td>
            </tr>
          </div>
          <h1 className="topic_detils">My Event</h1>

          {alertMessage && <div style={{ color: "red" }}>{alertMessage}</div>}
          <div className="tbl_pernt">
            <h3 className="evttopic">Launched Events </h3>
            <table className="table_details_admin">
              <thead>
                <tr className="admin_tbl_tr">
                  <th className="admin_tbl_th">ID</th>
                  <th className="admin_tbl_th">Name</th>
                  <th className="admin_tbl_th">Date</th>
                  <th className="admin_tbl_th">Artist</th>
                  <th className="admin_tbl_th">Time</th>
                  <th className="admin_tbl_th">Price</th>
                  <th className="admin_tbl_th">Remaining Time</th>
                  <th className="admin_tbl_th">Action</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <Event key={event._id} event={event} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
