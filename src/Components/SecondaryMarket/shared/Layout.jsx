import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 h-screen w-4/5 overflow-auto">
        <Header />
        <div className="p-0  overflow-hidden">{<Outlet />}</div>
      </div>
    </div>
  );
}
