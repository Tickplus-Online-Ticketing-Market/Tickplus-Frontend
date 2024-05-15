import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import "../../request.css";
import Sidebar from "../../Admin/SideBar/Sidebar";
import NavBar from "../../Admin/NavBar/NavBar";

const URL = "https://tickplus-backend.onrender.com/digital-customization/poster";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function CompleateRequest() {
  const [reques, setRequest] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => {
      const acceptedRequests = data.reques.filter(
        (item) => item.onstatus === "Done"
      );
      setRequest(acceptedRequests);
    });
  }, []);

  const ComponentsRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: " Details Report",
    onafterprint: () => alert(" Details Report Successfully Download !"),
  });

  /*Delete Function */
  const history = useNavigate();
  const deleteHandler = async (_id) => {
    // Define _id as a parameter
    const confirmed = window.confirm(
      "Are you sure you want to delete this Details?"
    );

    if (confirmed) {
      try {
        await axios.delete(`${URL}/${_id}`); // Correct URL construction
        window.alert("delete successfully!");
        history("/digital-customization/poster/compleatereq");
        window.location.reload(); // Reload the page
      } catch (error) {
        // Handle deletion error if needed
        console.error("Error Decline details:", error);
      }
    }
  };
  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="child_clas">
        <h1 className="topic_admin">Compleate Request</h1>
        <div>
          <div className="dash_button_set">
            <button className="btn_dash_admin" onClick={handlePrint}>
              Generate Report
            </button>
          </div>
          <div ref={ComponentsRef}>
            <table className="table_details_admin">
              <thead>
                <tr className="admin_tbl_tr">
                  <th className="admin_tbl_th">ticket id</th>
                  <th className="admin_tbl_th">name</th>
                  <th className="admin_tbl_th">phone</th>
                  <th className="admin_tbl_th">ticket</th>
                  <th className="admin_tbl_th">action</th>
                </tr>
              </thead>
              <tbody>
                {reques.map((item, index) => (
                  <tr className="admin_tbl_tr" key={index}>
                    <td className="admin_tbl_td">{item._id}</td>
                    <td className="admin_tbl_td">{item.name}</td>
                    <td className="admin_tbl_td">{item.phone}</td>
                    <td className="admin_tbl_td">
                      <img
                        src={`https://tickplus-backend.onrender.com/${item.profilePicture}`}
                        alt="POSTER"
                        className="tblposte"
                      />
                    </td>
                    <td className="admin_tbl_td">
                      {/* Pass item._id to deleteHandler */}

                      <Link
                        to={`/digital-customization/poster/updatepost/${item._id}`}
                        className="btn_dash_admin_updt"
                      >
                        Update
                      </Link>

                      <button
                        onClick={() => deleteHandler(item._id)}
                        className="btn_dash_admin_dlt"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleateRequest;
