import React from "react";
import { useMemo, useRef, useState } from "react";
import { Popover } from "@headlessui/react";
import { HiSearch } from "react-icons/hi";

export function AuctionListingSearch() {
  function MyPopover() {
    return (
      <Popover className="relative">
        <Popover.Button>Solutions</Popover.Button>

        <Popover.Panel className="absolute z-10">
          <div className="grid grid-cols-2">
            <a href="/analytics">Analytics</a>
            <a href="/engagement">Engagement</a>
            <a href="/security">Security</a>
            <a href="/integrations">Integrations</a>
          </div>

          <img src="/solutions.jpg" alt="" />
        </Popover.Panel>
      </Popover>
    );
  }

  return (
    <div className=" bg-background px-4 flex flex-row justify-between items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
      <span className="text-xl">{<HiSearch />}</span>
      <input
        type="text"
        placeholder="Search tickets, artists, events and more..."
        className=" bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary place-items-start border-none bg-none pb-0.5 italic"
      />
    </div>
  );
}
