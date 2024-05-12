import React, { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { MdAddCircle } from "react-icons/md";
import currentLoggedinUser from "../lib/helpers/getCurrentLoggedinUser";
import { ToastContainer } from "react-toastify";
import { HiSearch } from "react-icons/hi";
import moment from "moment";

import { CreateAuctionModal } from "./CreateAuctionListingModal";
import { RetriveMyAuctionListingsData } from "./RetriveMyAuctionListingsData";
import TableDraw from "./TableDraw";

export default function MyAuctionListings() {
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [auctionData, setAuctionData] = useState([]);
  const [tableUpdate, setTableUpdate] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getChanges = (data) => {
    setTableUpdate(data);
  };

  useEffect(() => {
    setLoading(true);
    RetriveMyAuctionListingsData(currentLoggedinUser.currentUserRoleId)
      .then((data) => {
        setAuctionData(data);
        setTableUpdate(false);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [showCreateModal, tableUpdate]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAuctionData = auctionData.filter((auction) => {
    const search = searchQuery.toLowerCase();
    const spectatorId = auction.spectatorId.toLowerCase();
    const ticketId = auction.ticketId.toLowerCase();
    const auctionStatus = auction.auctionStatus.toLowerCase();
    const startDate = moment(auction.startDate)
      .format("MMMM Do YYYY")
      .toLowerCase();

    // Check if any of the properties contain the search query
    return (
      spectatorId.includes(search) ||
      ticketId.includes(search) ||
      startDate.includes(search) ||
      auctionStatus.includes(search)
    );
  });

  return (
    <div className=" overflow-auto">
      <div
        id="loading-bg"
        className={`fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[5000] ${
          !loading && "hidden"
        }`}
      >
        <PulseLoader color="#ff7637" loading={loading} />
      </div>
      <div className=" overflow-visible flex flex-row justify-between bg-gray-200 border-none mx-6 my-5  min-h-10 max-h-12">
        <div className=" bg-background px-4 flex flex-row justify-between items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
          <span className="text-xl">{<HiSearch />}</span>
          <input
            type="search"
            placeholder="Search tickets, artists, events and more..."
            className=" bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary place-items-start border-none bg-none pb-0.5 italic"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <button
          type="button"
          className="text-white bg-primary hover:bg-background hover:text-primary border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
          onClick={() => setShowCreateModal(true)}
        >
          <span className=" text-2xl me-4">{<MdAddCircle />}</span>
          Add New Auction Listing
        </button>
      </div>

      <TableDraw
        tableData={
          searchQuery.toString === "" ? auctionData : filteredAuctionData
        }
        onUpdate={getChanges}
      />
      <CreateAuctionModal
        onClose={() => setShowCreateModal(false)}
        visible={showCreateModal}
      />
      <ToastContainer />
    </div>
  );
}
