import React from "react";
import AboutBackground from "../../Assets/HomePage/img/about-background.png";
import AboutBackgroundImage from "../../Assets/HomePage/img/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Launch Your Tickets</p>
        <h1 className="primary-heading">Are you an Artist or an Organiser?</h1>
        <p className="primary-text">
          Launch your Tickets, Publish Your ticket with Tick+
        </p>
        <p className="primary-text">
          Reach an extrodinary amounts of fans. Get the attention of many
          Sponsors.
        </p>
        <div className="about-buttons-container">
          <Link to="#">
            <button className="secondary-button">Launch Event</button>
          </Link>

          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
