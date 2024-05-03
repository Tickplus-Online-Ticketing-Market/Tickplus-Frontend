import React, { useState, useEffect } from "react";
import moment from "moment";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { DeleteAuctionModal } from "./DeleteAuctionListingModal";
import { UpdateAuctionModal } from "./UpdateAuctionListingModal";
import { ViewAuctionModal } from "./ViewAuctionListingModal";

const TableDraw = (prpos) => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showUpdateModal, setShowUpdateeModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [auctionID, setauctionID] = useState("");

  const handleView = (id) => {
    setauctionID(id);
    setShowViewModal(true);
  };

  const handleUpdate = (id) => {
    setauctionID(id);
    setShowUpdateeModal(true);
  };

  const handleDelete = (id) => {
    setauctionID(id);
    setShowDeleteModal(true);
  };

  const handleOnClose = () => {
    setShowViewModal(false);
    setShowUpdateeModal(false);
    setShowDeleteModal(false);
    setauctionID("");
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
          <span className={rowDataStyles}>
            {moment(item.startDate).format("MMMM Do YYYY")}
          </span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className={rowDataStyles}>{item.auctionDays}</span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className={rowDataStyles}>{item.remainingDays}</span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className={rowDataStyles}>
            Rs. {item.startingPrice.toFixed(2)}
          </span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className={rowDataStyles}>{item.winningBid}</span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className={rowDataStyles}>{item.auctionStatus}</span>
        </td>
        <td className="px-6 py-4">
          <div className="flex justify-end gap-4 text-primary content-baseline">
            <button
              className="text-[1.55rem]"
              onClick={() => handleView(item._id)}
            >
              {<FaEye />}
            </button>
            <button
              className={`text-2xl ${
                item.auctionStatus === "Completed"
                  ? "text-text cursor-not-allowed"
                  : ""
              }`}
              onClick={() => handleUpdate(item._id)}
              disabled={item.auctionStatus === "Completed"}
            >
              {<MdEditSquare />}
            </button>
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
    return (
      <div className="flex justify-center p-10">
        No Auction Listings to Show!
      </div>
    );
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
              Start Date
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Auction Days
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Remaining Days
            </th>

            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Starting Price
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Winning Bid
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
      <ViewAuctionModal
        auctionID={auctionID}
        onClose={() => handleOnClose()}
        visible={showViewModal}
      />
      <UpdateAuctionModal
        auctionID={auctionID}
        onClose={() => handleOnClose()}
        visible={showUpdateModal}
      />
      <DeleteAuctionModal
        auctionID={auctionID}
        onClose={() => handleOnClose()}
        visible={showDeleteModal}
      />
    </div>
  );
};

export default TableDraw;
