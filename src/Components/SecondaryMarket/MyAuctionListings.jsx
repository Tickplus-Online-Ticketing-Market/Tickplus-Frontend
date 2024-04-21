import React, { useState } from "react";
import moment from "moment";

import { HiSearch } from "react-icons/hi";
import { MdAddCircle } from "react-icons/md";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";

import currentLoggedinUser from "./lib/helpers/getCurrentLoggedinUser";
import { CreateModal } from "./CreateAuctionListingModal";
import { RetriveMyAuctionListingsData } from "./RetriveMyAuctionListingsData";

export default function MyAuctionListings() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" overflow-auto">
      <div className=" overflow-auto flex flex-row justify-between bg-gray-200 border-none mx-6 my-5">
        <div className=" bg-background px-4 flex flex-row justify-between items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
          <span className="text-xl">{<HiSearch />}</span>
          <input
            type="text"
            placeholder="Search tickets, artists, events and more..."
            className=" bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary place-items-start border-none bg-none pb-0.5 italic"
          />
        </div>

        <button
          type="button"
          class="text-white bg-primary hover:bg-background hover:text-primary border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
          onClick={() => setShowModal(true)}
        >
          <span className=" text-2xl me-4">{<MdAddCircle />}</span>
          Add New Auction Listing
        </button>
      </div>
      <DataValidation data={RetriveMyAuctionListingsData()} />
      <CreateModal onClose={() => setShowModal(false)} visible={showModal} />
    </div>
  );
}

function DataValidation({ data }) {
  if (data === null) {
    return <div className="flex justify-center p-10">No data received!</div>;
  } else {
    const filteredData = data.filter(
      (item) => item.spectatorId == currentLoggedinUser.currentUserRoleId
    );
    return <TableDraw tableData={filteredData} />;
  }
}

function TableDraw({ tableData }) {
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
          {tableData.map((item) => (
            <TableRowDraw key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableRowDraw({ item }) {
  const [showModal, setShowModal] = useState(false);
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
        <span className={rowDataStyles}>{item.startingPrice}</span>
      </td>
      <td className="px-6 py-4 text-center">
        <span className={rowDataStyles}>{item.winningBid}</span>
      </td>
      <td className="px-6 py-4 text-center">
        <span className={rowDataStyles}>{item.auctionStatus}</span>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-end gap-4 text-primary content-baseline">
          <button className="text-[1.55rem]" x-data="{ tooltip: 'View' }">
            {<FaEye />}
          </button>
          <button className="text-2xl" x-data="{ tooltip: 'Edit' }">
            {<MdEditSquare />}
          </button>
          <button className="text-[1.25rem]" x-data="{ tooltip: 'Delete' }">
            {<FaTrashAlt />}
          </button>
        </div>
      </td>
    </tr>
  );
}
