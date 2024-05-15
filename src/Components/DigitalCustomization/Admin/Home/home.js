import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../Admin/NavBar/NavBar"; // Adjust the path as necessary
import Sidebar from "../../Admin/SideBar/Sidebar"; // Adjust the path as necessary

import BarChart from "../../Admin/RequestDetails/BarChart"; // Assuming BarChart.js exports the bar chart component

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data; // Assuming the API returns the array directly
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

const Home = () => {
  const [dataRequestDetails, setDataRequestDetails] = useState([]);
  const [dataPosterRequestDetails, setDataPosterRequestDetails] = useState([]);

  useEffect(() => {
    fetchData("http://localhost:3030/digital-customization").then((data) => {
      console.log("Request Details Data:", data); // Check what data is being received
      setDataRequestDetails(data); // Adjust this according to your actual data structure
    });
    fetchData("http://localhost:3030/digital-customization/poster").then(
      (data) => {
        console.log("Poster Request Details Data:", data); // Check what data is being received
        setDataPosterRequestDetails(data); // Adjust this according to your actual data structure
      }
    );
  }, []);

  return (
    <div>
      <Sidebar />
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // This centers the children horizontally
          width: "100%", // Ensures the container takes full width
        }}
      >
        <h2 style={{ textAlign: "center" }}>Request Details Chart</h2>
        <div
          style={{
            width: "400px", // Smaller fixed width for the chart
            height: "300px", // Fixed height for the chart
            marginBottom: "20px", // Adds bottom margin for spacing
          }}
        >
          <BarChart data={dataRequestDetails} />
        </div>
        <h2 style={{ textAlign: "center" }}>Poster Request Details Chart</h2>
        <div
          style={{
            width: "400px", // Smaller fixed width for the chart
            height: "300px", // Fixed height for the chart
            marginBottom: "20px", // Adds bottom margin for spacing
          }}
        >
          <BarChart data={dataPosterRequestDetails} />
        </div>
      </div>
    </div>
  );
};

export default Home;
