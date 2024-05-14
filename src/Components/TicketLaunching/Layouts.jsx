import React from "react";
import { Outlet } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./shared/Sidebar";
import Header from "./shared/Header";

export default function Layouts() {
  return (
    <div className="flex flex-row bg-background h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4">
          <ToastContainer />
          {<Outlet />}
        </div>
      </div>
    </div>
  );
}
