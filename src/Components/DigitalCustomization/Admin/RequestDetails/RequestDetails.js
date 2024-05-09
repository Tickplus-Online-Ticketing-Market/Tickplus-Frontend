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

const URL = "http://localhost:8080/request";

const fetchHandler = async () => {    //display data from request form
  return await axios.get(URL).then((res) => res.data);//axois connects backend and front end //returns res.data from from
};

function RequestDetails() {// state updater function allows to change sateV request(display new stae)
  const [requests, setRequests] = useState([]);//initialize the empty object
  const chartRef = useRef();

  useEffect(() => {
    fetchHandler().then((data) => setRequests(data.reques));//dta is the content returned from fetch//requst is a property of data
  }, []);

  useEffect(() => {
    if (requests.length > 0) {
      const ctx = chartRef.current.getContext("2d"); //calling data for the barchart
      const totalRequests = requests.length;
      const requestsNeedResponse = requests.filter(  
        (request) => request.status !== "Accept"
      ).length;
      const requestsDone = requests.filter(
        (request) => request.status === "Accept" //if status =accept add to the request done
      ).length;

//bar chart

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
                "rgba(255, 99, 132, 0.6)", 
                "rgba(54, 162, 235, 0.6)",  
                "rgba(255, 206, 86, 0.6)",  
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",  
                "rgba(54, 162, 235, 1)",  
                "rgba(255, 206, 86, 1)",  
              ],
              borderWidth: 2,  
              
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
  }, [requests]);

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

  // Delete Function of the requests
  const history = useNavigate();
  const deleteHandler = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure you want to Decline this request?"
    );

    if (confirmed) {
      try {
        await axios.delete(`${URL}/${_id}`);//Axios sends an delete msg request to the endpoint
        window.alert("Decline successfully!");
        history("/requestdetails");
        window.location.reload(); // Reload the page
      } catch (error) {
        console.error("Error Decline details:", error);
      }
    }
  };
  if (requests.length === 0) {
    return <div>Loading...</div>; 
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
                  <h1 className="con_topic">Not Found</h1>
                </div>
                //to get status item.status
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
  {/* Accept Button */}
  <button className="button button-accept">  {/* Apply the "Accept" button style */}
    <Link
      to={`/acceptrequest/${item._id}`}  /* Link to the acceptance route */
      className="link_reoe"  /* Ensure the link has no underline */
    >
      Accept
    </Link>
  </button>

  {/* Decline Button */}
  <button 
    className="button button-decline"  /* Apply the "Decline" button style */
    onClick={() => deleteHandler(item._id)}  /* Click event handler for decline action */
  >
    Decline
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
