import React, { useState, useEffect } from "react";
import moment from "moment";

const TableDraw = (prpos) => {
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
          <span className={rowDataStyles}>
            Rs. {item.startingPrice.toFixed(2)}
          </span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className={rowDataStyles}>
            {item.winningBid === "No Bids Placed"
              ? item.winningBid
              : `Rs. ${parseFloat(item.winningBid).toFixed(2)}`}
          </span>
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
              Starting Price
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Winning Bid
            </th>
          </tr>
        </thead>
        <tbody className="divide-white divide-y-4 border-t-4 border-t-white">
          {prpos.tableData.map((item) => (
            <TableRowDraw key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDraw;
