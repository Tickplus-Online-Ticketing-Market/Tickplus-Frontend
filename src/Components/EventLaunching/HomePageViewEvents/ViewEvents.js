import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import NavBar from "../NavBar/NavBar";


const Events = () => {
  const [events, setEvents] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3030/events");
        setEvents(response.data.events);
      } catch (error) {
        setAlertMessage("Error fetching events."); // Display error message to the user
      }
    };

    fetchEvents();
  }, []);

  return (


    <div>
       <Sidebar />
       <NavBar />
      <br /> <br />
      <h1 className="topic"> Launched Events </h1>
      <br /> <br />
      
      {alertMessage && <div style={{ color: "red" }}>{alertMessage}</div>}

      <div className="box ">
            
      <div className="fulcard">
        {events.map((event) => (
          <div key={event._id} className="ewn_card">
            <h3 className="topic_name">{event.name}</h3>
            <img src={event.image} alt={event.name} className="img" />
            <p className="data_body">Venue: {event.venue}</p>
            <p className="data_body">
              Date: {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="data_body">Artist: {event.artist}</p>
            <p className="data_body">About: {event.about}</p>
            <p className="data_body">Time: {event.time} </p>
            <p className="data_body">Price: Rs.{event.price}</p>
            {isEventExpired(event.date) ? (
              <p className="data_body exprd">Expired</p>
            ) : (
              <p className="data_body">
                Remaining Time: {calculateRemainingTime(event.date)}
              </p>
            )}
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

const calculateRemainingTime = (eventDate) => {
  const currentTime = new Date();
  const difference = new Date(eventDate).getTime() - currentTime.getTime();
  const remainingMinutes = Math.floor(difference / (1000 * 60));
  const days = Math.floor(remainingMinutes / (60 * 24));
  const hours = Math.floor((remainingMinutes % (60 * 24)) / 60);
  const minutes = remainingMinutes % 60;
  return `${days} days, ${hours} hours, ${minutes} minutes`;
};

const isEventExpired = (eventDate) => {
  const today = new Date().setHours(0, 0, 0, 0); // Current date at midnight
  const eventDay = new Date(eventDate).setHours(0, 0, 0, 0); // Event date at midnight
  return eventDay < today;
};

export default Events;
