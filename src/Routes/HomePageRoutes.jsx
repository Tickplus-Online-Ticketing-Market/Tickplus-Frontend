import React from "react";
import HomePage from "../Components/HomePage/HomePage";

const homePageRoutes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>404 - Page Not Found</div>,
  },
];

export default homePageRoutes;