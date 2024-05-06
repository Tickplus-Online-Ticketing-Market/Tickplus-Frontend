import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from "axios";

import { FaEye} from "react-icons/fa";
import { IoIosCheckmarkCircle,
         IoIosCloseCircle
        } from "react-icons/io";

import MyModal from "./MyModal";

export default function Sponsorrequests({ requests: requestsData }) {

  const [requests, setRequests] = useState(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await axios.get('http://localhost:3000/requests' );
      setRequests(res.data.requests);
      console.log(res)
    } catch (error) {
      toast.error("Cannot Connect to Database");
      setRequests([]);
    }
  };

  const deleteRequest = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/requests/${id}` );

      toast.success("Deleted");
      fetchRequests()
      } catch (error) {
      toast.error("Cannot delete");
      setRequests([]);
    }
  };

  const handleDelete = (id) => {
    console.log("Deleting item with ID:", id);
    deleteRequest(id)
  };

  function TableRowDraw({ item, onDelete }) {


    const [showMyModal, setShowMyModal] = useState(false);
    const handleOnClose = () => setShowMyModal(false);
 
  
    return (
      <tr className="bg-tbg hover:bg-secondary text-black">
        <td className="flex gap-3 px-6 py-4 font-normal text-black">
          <div className="text-base">
            <div className="font-bold text-xl ">{item.sponsorName}</div>
            <div>{item.addNote.slice(0, 20) + " ..."}</div>
          </div>
        </td>
        <td className="px-6 py-4">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-black">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            {item.sponsorId}
          </span>
        </td>
        <td className="px-6 py-4">{item.brandName}</td>
        <td className="px-6 py-4">
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-black">
              {item.email}
            </span>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-black">
              {item.budget}
            </span>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex justify-end gap-4 content-baseline">
          <button onClick={() => setShowMyModal(true)} className="text-[1.55rem] text-accent" x-data="{ tooltip: 'View' }" >
          <FaEye onClick={() => setShowMyModal(true)} />
            </button>
  
            <button
            type="button"
            class="text-primary text-base font-bold bg-accent hover:bg-accept hover:text-background border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-3 py-1 text-center inline-flex items-center">
            <span className=" text-xl me-1">{<IoIosCheckmarkCircle />}</span>
            Accept
          </button>
  
          <button onClick={() => handleDelete(item._id)}
            type="button"
            class="text-primary text-base font-bold bg-accent hover:bg-reject hover:text-background border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-3 py-1 text-center inline-flex items-center">
            <span className=" text-xl me-1">{<IoIosCloseCircle />}</span>
            Reject
          </button>
  
          </div>
          <MyModal onClose={handleOnClose} visible={showMyModal} addNote={item.addNote} />
        </td>
      </tr>
    );
  }
  

  return (
    <div className="overflow-hidden rounded-2xl border-none shadow-md m-5">
      <table className="w-full border-collapse bg-tbg text-left text-black">
        <thead className="bg-accent text-2xl">
          <tr>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Sponsor ID
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Brand name
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              E-mail
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Budget
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary"></th>
          </tr>
        </thead>
        <tbody className="divide-background divide-y-4 border-t-4 border-t-background">
        {requests && requests.length > 0 ? (
          requests.map((item, index) => (
        <TableRowDraw key={index} item={item} />
  ))
) : (
            <tr>
              <td colSpan="6" className="px-6 py-4 text-center">
                No requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

