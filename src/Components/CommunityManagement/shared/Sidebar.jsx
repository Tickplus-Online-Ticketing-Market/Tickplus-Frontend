import React from "react";
import {
  SIDEBAR_BOTTOM_LINKS,
  SIDEBAR_LINKS,
} from "../library/consts/navigate";
import { Link, useLocation } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import image from "../../../Assets/CommunityManagement/logo.png"

const linkclasses =
  "flex item-center gap-2 font-light px-3 py-2 hover:bg-accent-700 active:bg-accent-400 rounded-5m text-poppins";

export default function Sidebar() {
  return (
    // <div className = 'flex flex-row bg-background h-screen w-screen overflow-auto'></div>
    <div className="bg-accent w-60 p-3 flex flex-col text-secondary fontfamily-poppins ">
      <div className="flex items-center gap-2 px-1 py-3">
        <img src={image} alt="logo" />
      </div>

      <div className="flex-1 py-8  flex flex-col gap-2 text-secondary">
        {SIDEBAR_LINKS.map((item) => (
          <SidebarLinks key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col px-5 gap-0.5 pt-2 border-t border-text">
        {SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLinks key={item.key} item={item} />
        ))}

        <div className={`${linkclasses} px-3 text-text-normal cursor-pointer`}>
          <span className="text-xl">
            <IoLogOut />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

function SidebarLinks({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={`${linkclasses} ${pathname === item.path ? "text-primary" : ""}`}
      //className={classNames(pathname === item.path ? 'text-white' :'', linkclasses)}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
