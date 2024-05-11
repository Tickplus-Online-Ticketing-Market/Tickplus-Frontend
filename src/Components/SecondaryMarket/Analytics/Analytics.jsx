import React, { useState, useEffect } from "react";
import Barcharts from "./Chart01";
import Piecharts from "./Chart02";
import { ToastContainer } from "react-toastify";

import { RetriveAuctionListingsByProfit } from "./RetriveAuctionListingsByProfit";
import { RetriveAuctionListingsByStatus } from "./RetriveAuctionListingsByStatus";

export default function Analytics() {
  const [auctionProfits, setAuctionProfits] = useState([]);
  const [auctionStatuses, setAuctionStatuses] = useState([]);

  useEffect(() => {
    RetriveAuctionListingsByProfit()
      .then((data) => {
        setAuctionProfits(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    RetriveAuctionListingsByStatus()
      .then((data) => {
        setAuctionStatuses(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className=" overflow-y-visible">
      <div className="flex flex-row justify-evenly border-none m-2 overflow-auto">
        <Barcharts data={auctionProfits} />
        <Piecharts data={auctionStatuses} />
      </div>
      <ToastContainer />
    </div>
  );
}
