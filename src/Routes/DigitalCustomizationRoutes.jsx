import React from "react";
import AddRequest from "../Components/DigitalCustomization/User/AddRequest/AddRequest";
import AcceptRequest from "../Components/DigitalCustomization/Admin/AccceptRequest/AccceptRequest";
import RequestDetails from "../Components/DigitalCustomization/Admin/RequestDetails/RequestDetails";
import OnGoing from "../Components/DigitalCustomization/Admin/OnGoing/OnGoing";
import CreatePost from "../Components/DigitalCustomization/Admin/CreatePost/CreatePost";
import OngoingStatus from "../Components/DigitalCustomization/Admin/OngoingStatus/OngoingStatus";
import CompleateRequest from "../Components/DigitalCustomization/Admin/CompleateRequest/CompleateRequest";
import UpdateRequest from "../Components/DigitalCustomization/Admin/UpdateRequest/UpdateRequest";
import UpdatePost from "../Components/DigitalCustomization/Admin/UpdatePost/UpdatePost";

const DigitalCustomizationRoutes = [
  {
    path: "/digital-customization",
    element: <OnGoing />,
  },
  {
    path: "/digital-customization/requestdetails",
    element: <RequestDetails />,
  },
  {
    path: "/digital-customization/ongoing",
    element: <OnGoing />,
  },
  {
    path: "/digital-customization/acceptrequest/:id",
    element: <AcceptRequest />,
  },
  {
    path: "/digital-customization/createpost/:id",
    element: <CreatePost />,
  },
  {
    path: "/digital-customization/compleatereq",
    element: <CompleateRequest />,
  },
  {
    path: "/digital-customization/ongoingstatus/:id",
    element: <OngoingStatus />,
  },
  {
    path: "/digital-customization/updatereq/:id",
    element: <UpdateRequest />,
  },
  {
    path: "/digital-customization/updatepost/:id",
    element: <UpdatePost />,
  },
];

export default DigitalCustomizationRoutes;
