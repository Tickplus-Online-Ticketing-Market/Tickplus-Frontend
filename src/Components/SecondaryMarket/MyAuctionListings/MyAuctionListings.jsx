import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import currentLoggedinUser from "../lib/helpers/getCurrentLoggedinUser";
import { ToastContainer } from "react-toastify";

import { CreateAuctionModal } from "./CreateAuctionListingModal";
import { RetriveMyAuctionListingsData } from "./RetriveMyAuctionListingsData";
import { TableDraw } from "./TableDraw";
import { AuctionListingSearch as SearchBox } from "./AuctionListingSearch";

export default function MyAuctionListings() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [auctionData, setAuctionData] = useState([]);

  useEffect(() => {
    RetriveMyAuctionListingsData(currentLoggedinUser.currentUserRoleId)
      .then((data) => {
        setAuctionData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [showCreateModal]);

  return (
    <div className=" overflow-auto">
      <div className=" overflow-auto flex flex-row justify-between bg-gray-200 border-none mx-6 my-5">
        <SearchBox />
        <button
          type="button"
          class="text-white bg-primary hover:bg-background hover:text-primary border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
          onClick={() => setShowCreateModal(true)}
        >
          <span className=" text-2xl me-4">{<MdAddCircle />}</span>
          Add New Auction Listing
        </button>
      </div>

      <TableDraw tableData={auctionData} />
      <CreateAuctionModal
        onClose={() => setShowCreateModal(false)}
        visible={showCreateModal}
      />
      <ToastContainer />
    </div>
  );
}
