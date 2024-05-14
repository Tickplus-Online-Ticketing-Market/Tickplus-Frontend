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

const URL = "http://localhost:3030/digital-customization";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function RequestDetails() {
  const [requests, setRequests] = useState([]);
  const chartRef = useRef();

  useEffect(() => {
    fetchHandler().then((data) => setRequests(data.reques));
  }, []);
/*
  useEffect(() => {
    if (requests.length > 0) {
      const ctx = chartRef.current.getContext("2d");
      const totalRequests = requests.length;
      const requestsNeedResponse = requests.filter(
        (request) => request.status !== "Accept"
      ).length;
      const requestsDone = requests.filter(
        (request) => request.status === "Accept"
      ).length;

      new Chart(ctx, {
        type: "bar",
        data: {
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
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [requests]);*/
  // Search Function
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filtered = data.reques.filter((request) =>
        Object.values(request).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setRequests(filtered);
      setNoResults(filtered.length === 0);
    });
  };

  // PDF Function
  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "Details Report",
    onafterprint: () => alert("Details Report Successfully Downloaded!"),
  });

  // Delete Function
  const history = useNavigate();
  const deleteHandler = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure you want to Decline this request?"
    );

    if (confirmed) {
      try {
        await axios.delete(`${URL}/${_id}`);
        window.alert("Decline successfully!");
        history("/requestdetails");
        window.location.reload(); // Reload the page
      } catch (error) {
        console.error("Error Decline details:", error);
      }
    }
  };
  if (requests.length === 0) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }
  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="child_clas">
        <h1 className="topic_admin">Request Details</h1>
        <div>
        <div className="barchart">
          <canvas ref={chartRef}></canvas>
        </div>
          <div className="dash_button_set">
            <span> </span>
            <tr>
              <td className="">
                <input
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  name="search"
                  className="serch_inpt"
                  placeholder="Search Here..."
                />
              </td>

              <td>
                <button onClick={handleSearch} className="btn_dash_admin">
                  Search
                </button>
              </td>
            </tr>
          </div>
          <div ref={ComponentsRef}>
            <table className="table_details_admin">
              <thead>
                <tr className="admin_tbl_tr">
                  <th className="admin_tbl_th">name</th>
                  <th className="admin_tbl_th">phone</th>
                  <th className="admin_tbl_th">message</th>
                  <th className="admin_tbl_th">status</th>
                  <th className="admin_tbl_th">Action</th>
                </tr>
              </thead>
              {noResults ? (
                <div>
                  <br></br>
                  <h1 className="con_topic">No Found</h1>
                </div>
              ) : (
                <tbody>
                  {requests.map((item, index) => (
                    <tr className="admin_tbl_tr" key={index}>
                      <td className="admin_tbl_td">{item.name}</td>
                      <td className="admin_tbl_td">{item.phone}</td>
                      <td className="admin_tbl_td">{item.message}</td>
                      <td className="admin_tbl_td">
                        {item.status ? item.status : "Not Yet Accept"}
                      </td>

                      <td className="admin_tbl_td">
                        <button className="spce_btnd">
                          <Link
                            to={`/digital-customization/acceptrequest/${item._id}`}
                            className="link_reoe"
                          >
                            <TiTick className="icon_detail_accept" />
                          </Link>
                        </button>
                        <button
                          onClick={() => deleteHandler(item._id)}
                          className="btn_dash_admin_dlt_tic"
                        >
                          <RxCross2 className="icon_detail_accept" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestDetails;
