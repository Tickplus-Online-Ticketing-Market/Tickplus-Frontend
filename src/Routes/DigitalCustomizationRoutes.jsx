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
import Home from "../Components/DigitalCustomization/Admin/Home/home";
import AcceptRequestPost from "../Components/DigitalCustomization/Poster/AccceptRequest/AccceptRequest";
import RequestDetailsPost from "../Components/DigitalCustomization/Poster/RequestDetails/RequestDetails";
import OnGoingPost from "../Components/DigitalCustomization/Poster/OnGoing/OnGoing";
import CreatePostPost from "../Components/DigitalCustomization/Poster/CreatePost/CreatePost";
import OngoingStatusPost from "../Components/DigitalCustomization/Poster/OngoingStatus/OngoingStatus";
import CompleateRequestPost from "../Components/DigitalCustomization/Poster/CompleateRequest/CompleateRequest";
import UpdateRequestPost from "../Components/DigitalCustomization/Poster/UpdateRequest/UpdateRequest";
import UpdatePostPost from "../Components/DigitalCustomization/Poster/UpdatePost/UpdatePost";

const DigitalCustomizationRoutes = [
  {
    path: "/digital-customization/home",
    element: <Home />,
  },
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

  {
    path: "/digital-customization/poster",
    element: <OnGoingPost />,
  },
  {
    path: "/digital-customization/poster/requestdetails",
    element: <RequestDetailsPost />,
  },
  {
    path: "/digital-customization/poster/ongoing",
    element: <OnGoingPost />,
  },
  {
    path: "/digital-customization/poster/acceptrequest/:id",
    element: <AcceptRequestPost />,
  },
  {
    path: "/digital-customization/poster/createpost/:id",
    element: <CreatePostPost />,
  },
  {
    path: "/digital-customization/poster/compleatereq",
    element: <CompleateRequestPost />,
  },
  {
    path: "/digital-customization/poster/ongoingstatus/:id",
    element: <OngoingStatusPost />,
  },
  {
    path: "/digital-customization/poster/updatereq/:id",
    element: <UpdateRequestPost />,
  },
  {
    path: "/digital-customization/poster/updatepost/:id",
    element: <UpdatePostPost />,
  },
];

export default DigitalCustomizationRoutes;
