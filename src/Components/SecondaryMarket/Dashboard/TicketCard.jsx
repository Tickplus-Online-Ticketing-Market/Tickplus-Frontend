import React, { useEffect, useState } from "react";
import moment from "moment";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ticketDesign from "../../../Assets/SecondaryMarket/img/Ticket Design Size Example.png";
import { FaRupeeSign, FaClock, FaCrown } from "react-icons/fa6";

const TicketCard = (props) => {
  return (
    <div className=" mx-2 my-5 bg-background block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="relative overflow-hidden bg-cover bg-no-repeat aspect-video">
        <img class="rounded-t-lg" src={ticketDesign} alt="" />
      </div>

      <div className="p-4 aspect-video">
        <button
          type="button"
          class="absolute top-[8.5rem] right-4 z-50 rounded-lg px-3 py-1 font-bold bg-primary uppercase text-white"
          onClick={() => props.onBtnClicked(props.item._id)}
        >
          Place Bid
        </button>
        <h5 className="mb-1 text-xl font-medium leading-tight text-text mt-4">
          {props.item.ticketId}
        </h5>
        <p className="mb-4 text-sm text-text">
          {moment(props.item.startDate).format("MMMM Do YYYY")}
        </p>
        <div className="flex flex-row text-sm text-primary font-semibold">
          {/* Starting Price */}
          <div
            className="basis-1/3 flex items-center"
            data-tooltip-id="starting-tooltip"
            data-tooltip-content="Starting Price"
          >
            <FaRupeeSign className="mr-1" />
            {props.item.startingPrice.toFixed(2)}
            <ReactTooltip id="starting-tooltip" />
          </div>

          {/* Remaining Days */}
          <div
            className="basis-1/3 flex items-center"
            data-tooltip-id="remaining-tooltip"
            data-tooltip-content="Remaining Days"
          >
            <FaClock className="mr-1" />
            {props.item.remainingDays} days
            <ReactTooltip id="remaining-tooltip" data-tooltip-place="bottom" />
          </div>

          {/* Winning Bid */}
          <div
            className="basis-1/3 flex items-center"
            data-tooltip-id="winning-tooltip"
            data-tooltip-content="Winning Bid"
          >
            <FaCrown className="mr-1" />
            {props.item.winningBid === "No Bids Placed"
              ? "None"
              : props.item.winningBid}
            <ReactTooltip id="winning-tooltip" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
