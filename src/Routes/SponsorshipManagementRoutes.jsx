import React from "react";
import Layout from "../Components/SponsershipManagement/shared/Layout";
import Dashboard from "../Components/SponsershipManagement/Dashboard";
import Requesthistory from "../Components/SponsershipManagement/Requesthistory";
import Sponsorrequests from "../Components/SponsershipManagement/Sponsorrequests";

const SponsorshipManagementRoutes = [
  {
    path: "/sponsorship-management",
    element: <Layout />,
    children: [
      {
        path: "/sponsorship-management",
        element: <Dashboard />,
      },
      {
        path: "/sponsorship-management/request-history",
        element: <Requesthistory />,
      },
      {
        path: "/sponsorship-management/sponsor-requests",
        element: <Sponsorrequests />,
      },
    ],
  },
];

export default SponsorshipManagementRoutes;
