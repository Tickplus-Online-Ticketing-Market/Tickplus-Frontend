import React, { useState, useEffect } from "react";
import moment from "moment";
import { FaTrashAlt } from "react-icons/fa";
import DeleteBidModal from "./DeleteBidModal";

const TableDraw = (prpos) => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showUpdateModal, setShowUpdateeModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bidID, setBidID] = useState("");

  const handleView = (id) => {
    setBidID(id);
    setShowViewModal(true);
  };

  const handleUpdate = (id) => {
    setBidID(id);
    setShowUpdateeModal(true);
  };

  const handleDelete = (id) => {
    setBidID(id);
    setShowDeleteModal(true);
  };

  const handleOnClose = () => {
    setShowViewModal(false);
    setShowUpdateeModal(false);
    setShowDeleteModal(false);
    setBidID("");
    prpos.onUpdate(true);
  };

  const TableRowDraw = ({ item }) => {
    const rowDataStyles =
      "inline-flex items-center gap-1 text-xs font-semibold text-text text-center";
    return (
      <tr className=" bg-secondary hover:bg-gray-50">
        <td className="px-6 py-4">
          <span className={rowDataStyles}>{item.ticketId}</span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className={rowDataStyles}>{item.auctionId}</span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className={rowDataStyles}>
            {moment(item.bidDate).format("MMMM Do YYYY")}
          </span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className={rowDataStyles}>Rs. {item.bidValue.toFixed(2)}</span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className={rowDataStyles}>{item.bidStatus}</span>
        </td>
        <td className="px-6 py-4">
          <div className="flex justify-end gap-4 text-primary content-baseline">
            <button
              className="text-[1.25rem]"
              onClick={() => handleDelete(item._id)}
            >
              {<FaTrashAlt />}
            </button>
          </div>
        </td>
      </tr>
    );
  };

  if (prpos.tableData === null || prpos.tableData.length == 0) {
    return <div className="flex justify-center p-10">No Bids to Show!</div>;
  }
  return (
    <div className="overflow-hidden rounded-2xl border-none shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-gray-500">
        <thead className="bg-accent">
          <tr>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Ticket ID
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Auction ID
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Bid Date
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Bid Price
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Status
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary"></th>
          </tr>
        </thead>
        <tbody className="divide-white divide-y-4 border-t-4 border-t-white">
          {prpos.tableData.map((item) => (
            <TableRowDraw key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <DeleteBidModal
        bidID={bidID}
        onClose={() => handleOnClose()}
        visible={showDeleteModal}
      />
    </div>
  );
};

export default TableDraw;
