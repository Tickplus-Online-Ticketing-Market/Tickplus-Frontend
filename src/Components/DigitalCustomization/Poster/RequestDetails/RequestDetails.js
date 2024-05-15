import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import "../../request.css";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import Sidebar from "../../Admin/SideBar/Sidebar";
import NavBar from "../../Admin/NavBar/NavBar";

const URL = "https://tickplus-backend.onrender.com/digital-customization/poster";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function RequestDetails() {
  const [requests, setRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchHandler().then((data) => setRequests(data.reques));
  }, []);

  const history = useNavigate();
  const deleteHandler = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure you want to Decline this request?"
    );

    if (confirmed) {
      try {
        await axios.delete(`${URL}/${_id}`);
        window.alert("Decline successfully!");
        history("/digital-customization/poster/requestdetails");
        window.location.reload(); // Reload the page
      } catch (error) {
        console.error("Error Decline details:", error);
      }
    }
  };

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

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "Details Report",
    onafterprint: () => alert("Details Report Successfully Downloaded!"),
  });

  if (requests.length === 0) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }

  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="child_clas">
        <h1 className="topic_admin">Poster Request Details</h1>
        <div>
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
                            to={`/digital-customization/poster/acceptrequest/${item._id}`}
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
