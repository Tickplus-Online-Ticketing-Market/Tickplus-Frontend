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
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Card title
        </h5>
        <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-200">
          Some quick example text.
        </p>
      </div>
    </div>
  );
}
