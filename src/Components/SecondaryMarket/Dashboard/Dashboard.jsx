import React from "react";
import { Link } from "react-router-dom";
import DashboardTicketCarousel from "./DashboardTicketCarousel";
import { MdAddCircle } from "react-icons/md";
import { HiSearch } from "react-icons/hi";
import Barcharts from "./Chart01";
import Piecharts from "./Chart02";

export default function Dashboard() {
  return (
    <div className=" overflow-y-visible">
      <div className="h-1/3 bg-accent">
        <DashboardTicketCarousel />
      </div>

      <div className="flex flex-row justify-between bg-gray-200 border-none m-2 overflow-auto">
        <Barcharts />
        <Piecharts />
      </div>
    </div>
  );
}
