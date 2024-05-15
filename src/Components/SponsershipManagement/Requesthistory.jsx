import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import MyModal3 from "./MyModal3";
import { toast } from "react-toastify";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function RequestHistory() {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch requests and their event details when component mounts
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3030/sponsership-management/request"
      );
      const req = res.data.requests;
      setRequests(req);
      console.log(requests);
    } catch (error) {
      console.error("Error fetching requests:", error);
      toast.error("Cannot Connect to Database");
    }
  };

  const handleRequestSubmitted = (newRequest) => {
    fetchRequests(); // Re-fetch the requests to get the latest data
  };

  const handleDeleteRequest = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3030/sponsership-management/request/${id}`
      );
      toast.success("Request deleted successfully");
      fetchRequests(); // Refresh the list of requests
    } catch (error) {
      console.error("Error deleting request:", error);
      toast.error("Failed to delete request");
    }
  };

  // Prepare data for pie chart
  const statusData = [
    {
      name: "Accepted",
      value: requests.filter((item) => item.status === "Accepted").length,
    },
    {
      name: "Rejected",
      value: requests.filter((item) => item.status === "Rejected").length,
    },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className="overflow-hidden rounded-2xl border-none shadow-md m-5">
      <div>
        <table className="w-full border-collapse text-left">
          <thead className="bg-accent text-2xl">
            <tr>
              <th scope="col" className="px-6 py-4 font-bold text-primary">
                Event
              </th>
              <th scope="col" className="px-6 py-4 font-bold text-primary">
                Venue
              </th>
              <th scope="col" className="px-6 py-4 font-bold text-primary">
                Date/Time
              </th>
              <th scope="col" className="px-6 py-4 font-bold text-primary">
                Artists
              </th>
              <th scope="col" className="px-6 py-4 font-bold text-primary">
                Status
              </th>
              <th scope="col" className="px-6 py-4 font-bold text-primary"></th>
            </tr>
          </thead>
          <tbody className="divide-white divide-y-4 border-t-4 border-t-white">
            {requests.map((item, index) => (
              <TableRow
                key={index}
                item={item}
                setSelectedRequest={setSelectedRequest}
                setShowModal={setShowModal}
                handleDeleteRequest={handleDeleteRequest}
              />
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <MyModal3
          visible={showModal}
          onClose={() => setShowModal(false)}
          SponserRequest={selectedRequest}
          onRequestSubmitted={handleRequestSubmitted}
        />
      )}
      <div className="mt-6">
        <strong className="text-primary font-bold text-2xl">
          Requests Status
        </strong>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {statusData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function TableRow({
  item,
  setSelectedRequest,
  setShowModal,
  handleDeleteRequest,
}) {
  const confirmAndDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      handleDeleteRequest(id);
    }
  };

  return (
    <tr className="bg-tbg hover:bg-secondary">
      <td className="px-6 py-4">
        <div>
          <div className="font-bold text-2xl text-black">{item.eventName}</div>
          <div className="text-black">{item.eventId}</div>
        </div>
      </td>
      <td className="px-6 py-4">{item.venue}</td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xl font-semibold text-black">
            {item.date}
            {item.time}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xl font-semibold text-black">
            {item.artists}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xl font-semibold text-black">
            {item.status}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-end gap-4 text-primary content-baseline">
          <button
            onClick={() => {
              setSelectedRequest(item);
              setShowModal(true);
            }}
            className="text-2xl"
            x-data="{ tooltip: 'Edit' }"
          >
            <MdEditSquare />
          </button>
          <button
            onClick={() => confirmAndDelete(item._id)}
            className="text-[1.25rem]"
            x-data="{ tooltip: 'Delete' }"
          >
            <FaTrashAlt />
          </button>
        </div>
      </td>
    </tr>
  );
}
