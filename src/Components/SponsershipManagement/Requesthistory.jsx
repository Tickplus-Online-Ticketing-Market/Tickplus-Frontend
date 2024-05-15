import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import MyModal3 from "./MyModal3";
import { toast } from 'react-toastify';

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
      const res = await axios.get('http://localhost:3030/sponsership-management/request');
      const requests = res.data.requests;
      setRequests(requests);
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
      await axios.delete(`http://localhost:3030/sponsership-management/request/${id}`);
      toast.success("Request deleted successfully");
      fetchRequests(); // Refresh the list of requests
    } catch (error) {
      console.error("Error deleting request:", error);
      toast.error("Failed to delete request");
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border-none shadow-md m-5">
      <div>
        <table className="w-full border-collapse text-left">
          <thead className="bg-accent text-2xl">
            <tr>
              <th scope="col" className="px-6 py-4 font-bold text-primary">Event</th>
              <th scope="col" className="px-6 py-4 font-bold text-primary">Venue</th>
              <th scope="col" className="px-6 py-4 font-bold text-primary">Date</th>
              <th scope="col" className="px-6 py-4 font-bold text-primary">Artists</th>
              <th scope="col" className="px-6 py-4 font-bold text-primary">Attendees</th>
              <th scope="col" className="px-6 py-4 font-bold text-primary">Status</th>
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

        <div className="flex justify-center text-3xl text-primary font-bold mt-20">
          Here you can find out about events that you are interested in
        </div>
      </div>
      {showModal && (
        <MyModal3 
          visible={showModal} 
          onClose={() => setShowModal(false)} 
          request={selectedRequest} 
          onRequestSubmitted={handleRequestSubmitted} 
        />
      )}
    </div>
  );
}

function TableRow({ item, setSelectedRequest, setShowModal, handleDeleteRequest }) {
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
            {item.attendees}
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
          <button onClick={() => {
            setSelectedRequest(item);
            setShowModal(true);
          }} className="text-2xl" x-data="{ tooltip: 'Edit' }">
            <MdEditSquare />
          </button>
          <button onClick={() => confirmAndDelete(item._id)} className="text-[1.25rem]" x-data="{ tooltip: 'Delete' }">
            <FaTrashAlt />
          </button>
        </div>
      </td>
    </tr>
  );
}
