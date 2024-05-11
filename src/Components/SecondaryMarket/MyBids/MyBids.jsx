import React, { useEffect, useState } from "react";
import currentLoggedinUser from "../lib/helpers/getCurrentLoggedinUser";
import { ToastContainer } from "react-toastify";
import { HiSearch } from "react-icons/hi";
import moment from "moment";

import RetriveMyBidsData from "./RetriveBidData";
import CreateBidModal from "./CreateBidModal";
import TableDraw from "./TableDraw";

export default function MyAuctionListings() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [bidData, setBidData] = useState([]);
  const [tableUpdate, setTableUpdate] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getChanges = (data) => {
    setTableUpdate(data);
  };

  useEffect(() => {
    RetriveMyBidsData(currentLoggedinUser.currentUserRoleId)
      .then((data) => {
        setBidData(data);
        setTableUpdate(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [showCreateModal, tableUpdate, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBidData = bidData.filter((auction) => {
    const search = searchQuery.toLowerCase();
    const auctionId = auction.auctionId.toLowerCase();
    const ticketId = auction.ticketId.toLowerCase();
    const bidValue = auction.bidValue.toString().toLowerCase();
    const bidStatus = auction.bidStatus.toLowerCase();
    const bidDate = moment(auction.bidDate)
      .format("MMMM Do YYYY")
      .toLowerCase();

    // Check if any of the properties contain the search query
    return (
      auctionId.includes(search) ||
      ticketId.includes(search) ||
      bidValue.includes(search) ||
      bidDate.includes(search) ||
      bidStatus.includes(search)
    );
  });

  return (
    <div className=" overflow-auto">
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
      </div>

      <TableDraw
        tableData={searchQuery.toString === "" ? bidData : filteredBidData}
        onUpdate={getChanges}
      />
      <CreateBidModal
        onClose={() => setShowCreateModal(false)}
        visible={showCreateModal}
      />
      <ToastContainer />
    </div>
  );
}
