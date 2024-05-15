import React from "react";
import { FaBell } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { Popover } from "@headlessui/react";

export default function Header() {
  return (
    <div className="bg-secondary h-20 px-4 flex justify-between items-center">
      <div className="flex flex-col justify-around -space-y-1 ps-4">
        <h1 className=" text-primary font-bold text-2xl">
          Welcome to Secondary Market
        </h1>
        <h3 className=" text-text text-base  ps-0.5">
          Here you can auction your tickets & win others ticket by bidding!
        </h3>
      </div>
      <div className="h-16 px-6 flex justify-between items-center gap-6">
        <NotificationPopover />

        <div>
          <FaUserCircle
            fontSize={36}
            className=" text-primary cursor-pointer"
          />
          <span className=" sr-only">Your Profile</span>
        </div>
      </div>
    </div>
  );
}

function NotificationPopover() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="focus:outline-none active:outline-none active:text-primary">
            <FaBell fontSize={18} className={open ? "text-primary" : ""} />
          </Popover.Button>

          <Popover.Panel className="absolute z-10 bg-background right-0 mt-2.5 w-80 p-4 rounded-lg shadow-md ring-text">
            <strong className=" text-text">
              New Auction Listing Available
            </strong>
            <div className="mt-2">Become the first person to bid!🎉</div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
