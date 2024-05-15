import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import "../../request.css";
import Sidebar from "../../Admin/SideBar/Sidebar";
import NavBar from "../../Admin/NavBar/NavBar";

const URL = "http://localhost:3030/digital-customization/poster";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function OnGoing() {
  const [reques, setRequest] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => {
      const acceptedRequests = data.reques.filter(
        (request) => request.status === "Accept"
      );
      setRequest(acceptedRequests);
    });
  }, []);
  /*Search Function */
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filtered = data.reques.filter((reques) =>
        Object.values(reques).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      const acceptedFiltered = filtered.filter(
        (request) => request.status === "Accept"
      );
      setRequest(acceptedFiltered);
      setNoResults(acceptedFiltered.length === 0);
    });
  };
  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="child_clas">
        <h1 className="topic_admin">On Going Project</h1>
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
              ></input>
            </td>

            <td>
              <button onClick={handleSearch} className="btn_dash_admin">
                Search
              </button>
            </td>
          </tr>
        </div>
        <div>
          <table className="table_details_admin">
            <thead>
              <tr className="admin_tbl_tr">
                <th className="admin_tbl_th">ticket id</th>
                <th className="admin_tbl_th">user name</th>
                <th className="admin_tbl_th">phone</th>
                <th className="admin_tbl_th">Upload</th>
              </tr>
            </thead>
            {noResults ? (
              <div>
                <br></br>
                <h1 className="con_topic">
                  No <span className="clo_us"> Found</span>{" "}
                </h1>
              </div>
            ) : (
              <tbody>
                {reques.map((item, index) => (
                  <tr className="admin_tbl_tr" key={index}>
                    <td className="admin_tbl_td">{item._id}</td>
                    <td className="admin_tbl_td">{item.name}</td>
                    <td className="admin_tbl_td">{item.phone}</td>
                    <td className="admin_tbl_td">
                      <Link
                        to={`/digital-customization/poster/createpost/${item._id}`}
                        className="btn_dash_admin"
                      >
                        Create
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default OnGoing;
