import { Popover } from "@headlessui/react";
import React from "react";
import { HiOutlineBell, HiOutlineChatAlt } from "react-icons/hi";

export default function Header() {
  return (
    <div className="bg-secondary h-20 px-3 flex justify-between items-center">
      <div className="realtive text-primary text-2xl pl-4 font-bold">
        {" "}
        Hello! Devram
      </div>

      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative ">
          {({ open }) => (
            <>
              <Popover.Button className="inline-flex items-center rounded-sm p-1.5 text-boxclick hover:text-opacity-100 focus:outline-none active:bg-boxclickm">
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
            </>
          )}
        </Popover>
        <HiOutlineBell fontSize={24} />
      </div>
    </div>
  );
}
