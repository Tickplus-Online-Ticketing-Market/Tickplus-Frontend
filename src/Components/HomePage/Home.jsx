import React from "react";
import BannerBackground from "../../Assets/HomePage/img/home-banner-background.png";
import BannerImage from "../../Assets/HomePage/img/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Music Events at your fingertips
          </h1>
          <p className="primary-text">
            "Experience unforgettable melodies. Book your tickets now for an
            electrifying journey through music's finest moments!"
          </p>
          <button className="secondary-button">
            Search Tickets <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
