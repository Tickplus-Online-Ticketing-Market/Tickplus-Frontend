import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import "../../request.css";
import Sidebar from "../SideBar/Sidebar";
import NavBar from "../NavBar/NavBar";

const URL = "http://localhost:8080/request";

//one that with the create button
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function OnGoing() {
  const [reques, setRequest] = useState([]);
  
  useEffect(() => {
    fetchHandler().then((data) => {
      const acceptedRequests = data.reques.filter((request) => request.status === "Accept");
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
      const acceptedFiltered = filtered.filter((request) => request.status === "Accept");
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
                {reques.map((item, index) => (      //map send all the details of the each id(disply array)
                  <tr className="admin_tbl_tr" key={index}>     
                    <td className="admin_tbl_td">{item._id}</td>
                    <td className="admin_tbl_td">{item.name}</td>
                    <td className="admin_tbl_td">{item.phone}</td>
                    <td className="admin_tbl_td">
                      <Link
                        to={`/createpost/${item._id}`} //link to the compiler
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
