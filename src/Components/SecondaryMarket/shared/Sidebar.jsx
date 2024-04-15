import React from "react";
import logoWhite from "../../../Assets/SecondaryMarket/img/tickplus_logo_white.png";
import { Link, useLocation } from "react-router-dom";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../lib/constants/sidebarNav";
import { HiOutlineLogout } from "react-icons/hi";
import classNames from "classnames";

const sidebarNavLinkClasses =
  "flex items-center gap-2 px-3 py-2 hover:bg-neutral-700" +
  "hover:no-underline active:bg-neutral-600 rounded-sm" +
  "active:text-primary hover:text-primary font-semibold";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-1/5 bg-accent p-3 text-white  ">
      <div className="flex">
        <img className="pt-2 p-3 " src={logoWhite} alt="Tick+" />
      </div>
      <div className="flex flex-col flex-1 ps-4 py-10 gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <div>
            <SidebarLink key={item.key} item={item} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 ps-4 pb-3">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <div>
            <SidebarLink key={item.key} item={item} />
          </div>
        ))}
        <div
          className={classNames(
            sidebarNavLinkClasses,
            "px-3",
            "cursor-pointer"
          )}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  const hoverStyle = pathname == item.path ? "text-primary" : "text-secondary";
  return (
    <Link
      to={item.path}
      className={classNames(sidebarNavLinkClasses, hoverStyle)}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
