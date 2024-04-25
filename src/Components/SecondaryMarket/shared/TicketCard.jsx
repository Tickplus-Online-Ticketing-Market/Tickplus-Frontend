import React from "react";
import ticketDesign from "../../../Assets/SecondaryMarket/img/Ticket Design Size Example.png";

export default function TicketCard() {
  return (
    <div className=" mx-2 my-5 bg-background block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="relative overflow-hidden bg-cover bg-no-repeat aspect-video">
        <img class="rounded-t-lg" src={ticketDesign} alt="" />
      </div>

      <div className="p-4 aspect-video">
        <button
          type="button"
          class="absolute top-[8.5rem] right-4 z-50 rounded-lg px-3 py-1 font-bold bg-primary uppercase text-white"
        >
          Place Bid
        </button>
        <h5 className="mb-2 text-xl font-medium leading-tight text-text mt-4">
          Awesome Music Event
        </h5>
        <p className="mb-2 text-sm text-text">
          Explore Music Concerts events Happening in your area
        </p>
      </div>
    </div>
  );
}
