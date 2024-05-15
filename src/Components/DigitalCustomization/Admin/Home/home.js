import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import "../../request.css";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import Sidebar from "../SideBar/Sidebar";
import NavBar from "../NavBar/NavBar";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const URL = "https://tickplus-backend.onrender.com/digital-customization";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function RequestDetails() {
  const [requests, setRequests] = useState([]);
  const [dataset, setdataset] = useState({
    labels: [
      "Requests needing response",
      "Total requests",
      "Completed requests",
    ],
    datasets: [
      {
        label: "Number of Requests",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });
  const chartRef = useRef();
  // let dataset = {}

  useEffect(() => {
    fetchHandler().then((data) => setRequests(data.reques));
  }, []);

  useEffect(() => {
    if (requests.length > 0) {
      // const ctx = chartRef.current.getContext("2d");
      const totalRequests = requests.length;
      const requestsNeedResponse = requests.filter(
        (request) => request.status !== "Accept"
      ).length;
      const requestsDone = requests.filter(
        (request) => request.status === "Accept"
      ).length;

      setdataset({
        labels: [
          "Requests needing response",
          "Total requests",
          "Completed requests",
        ],
        datasets: [
          {
            label: "Number of Requests",
            data: [requestsNeedResponse, totalRequests, requestsDone],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });

      
    }
  }, [requests]);
    
  if (requests.length === 0) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }
  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="child_clas">
        <h1 className="topic_admin">Ticket Detail Report</h1>
        <div>
          <div className="barchart">
            {/* <canvas id="0"></canvas> */}
            <Bar
              data={dataset}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
                   
                
        </div>
      </div>
    </div>
  );
}

export default RequestDetails;
