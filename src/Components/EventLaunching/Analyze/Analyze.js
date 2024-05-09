import React, { useState, useEffect } from "react";
import Sidebar from "../SideBar/Sidebar";
import NavBar from "../NavBar/NavBar";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import axios from "axios";

function Analyze() {
  const [eventCount, setEventCount] = useState(0);
  const [totalEditCount, setTotalEditCount] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3001/events");
        const events = response.data.events;
        setEventCount(events.length);
        const totalEditCount = events.reduce(
          (acc, event) => acc + event.editCount,
          0
        );
        setTotalEditCount(totalEditCount);

      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);
  



  const data = [
    { name: "Launched", users: eventCount },
    { name: "Default", users: 1},
    { name: "Customized", users: 2 },
  ];

  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="child_clas">
        <div className="Numbers">
          <div style={{ display: 'flex' }}>
            <div style={boxStyle}>Total No of events:<br />{eventCount}</div>
            <div style={boxStyle}>Total No of default template Usage:<br />1</div>
            <div style={boxStyle}>Total No of Consultation service Usage:<br />2</div>
          </div>
        </div>
        <div className="tbl_pernt">
          <div>
            <strong style={{ color: 'White', fontSize: '24px' }}>Usage Analyze</strong>
          </div>
          <div className="charts" style={{ display: 'flex', marginTop: '100px' }}>
            <div style={{ textAlign: "center", marginRight: '90px' }}>
              <div className="App">
                <p style={{ color: '#ffffff', fontSize: '20px', marginBottom: '30px', paddingLeft: '90px' }}>Organizer Activity Analyze</p>
                <BarChart
                  width={400}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="name"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="users" fill="#FF5733 " background={{ fill: "#eee" }} />
                </BarChart>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="App">
                <p style={{ color: '#ffffff', fontSize: '20px', marginBottom: '30px' }}>Event Poster Template Usage</p>
                <PieChart width={400} height={300}>
                  <Pie
                    dataKey="users"
                    isAnimationActive={false}
                    data={data}
                    cx={200}
                    cy={150}
                    outerRadius={80}
                    fill="#FF5733 "
                    label
                  />
                  <Tooltip />
                </PieChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const boxStyle = {
  flex: 1,
  margin: '5px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  background: 'lightblue'
};

export default Analyze;
