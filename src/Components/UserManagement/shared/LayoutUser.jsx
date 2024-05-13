import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function LayoutUser() {
  return (
    <div className=" bg-background">
      <div className="fixed inset-0 bg-background bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        {<Outlet />}
      </div>
      <ToastContainer />
    </div>
  );
}

export default LayoutUser;
