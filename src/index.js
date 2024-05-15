

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import homePageRoutes from "./Routes/homePageRoutes";
import EventLaunchingRoutes from "./Routes/EventLaunchingRoutes";

const allRoutes = [...homePageRoutes, ...EventLaunchingRoutes];
const router = createBrowserRouter(allRoutes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);