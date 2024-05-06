import React, { useEffect, useState } from "react";
import DashboardTicketCarousel from "./DashboardTicketCarousel";
import Barcharts from "./Chart01";
import Piecharts from "./Chart02";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer />
    </div>
  );
}
