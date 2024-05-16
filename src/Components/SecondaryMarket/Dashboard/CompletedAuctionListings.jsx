import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import TableDraw from "./TableDraw";

import { RetriveCompletedAuctionListingsData } from "./RetriveCompletedAuctionListingsData";

export default function CompletedAuctionListings() {
  const [auctionData, setAuctionData] = useState([]);

  useEffect(() => {
    RetriveCompletedAuctionListingsData()
      .then((data) => {
        setAuctionData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className=" overflow-auto">
      <div className="text-gray-700 m-4 font-bold">Recently Ended Auctions</div>
      <TableDraw tableData={auctionData} />
      <ToastContainer />
    </div>
  );
}
