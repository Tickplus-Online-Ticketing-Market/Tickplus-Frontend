import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import currentLoggedinUser from "../lib/helpers/getCurrentLoggedinUser";
import { ToastContainer } from "react-toastify";

import RetriveMyBidsData from "./RetriveBidData";
import CreateBidModal from "./CreateBidModal";
import TableDraw from "./TableDraw";
import { AuctionListingSearch as SearchBox } from "../MyAuctionListings/AuctionListingSearch";

export default function MyAuctionListings() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [auctionData, setAuctionData] = useState([]);
  const [tableUpdate, setTableUpdate] = useState(false);
  const getChanges = (data) => {
    setTableUpdate(data);
  };

  useEffect(() => {
    RetriveMyBidsData(currentLoggedinUser.currentUserRoleId)
      .then((data) => {
        setAuctionData(data);
        setTableUpdate(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [showCreateModal, tableUpdate]);

  return (
    <div className=" overflow-auto">
      <div className=" overflow-auto flex flex-row justify-between bg-gray-200 border-none mx-6 my-5 min-h-10 max-h-12">
        <SearchBox />
      </div>

      <TableDraw tableData={auctionData} onUpdate={getChanges} />
      <CreateBidModal
        onClose={() => setShowCreateModal(false)}
        visible={showCreateModal}
      />
      <ToastContainer />
    </div>
  );
}
