// App.js
import React from "react";
// Admin-Event Adding
import AddEvent from "../Components/EventLaunching/Add_Event/AddEvent";
import Promotional from "../Components/EventLaunching/Promotional/Promotional";
import Consultation from "../Components/EventLaunching/Consultation/Consultation"
import ViewEvent from "../Components/EventLaunching/Event/ViewEvent";
import AdminEvents from "../Components/EventLaunching/Event/Events"
import Sponsorship from "../Components/EventLaunching/Sponsorship/Sponsorship";
import Analyze from "../Components/EventLaunching/Analyze/Analyze";
import ViewEvents from "../Components/EventLaunching/HomePageViewEvents/ViewEvents"
import HomePage from "../Components/HomePage/HomePage";




const EventLaunchingRoutes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/events/addevent",
      element: <AddEvent />,
    },
    {
      path: "/events",
      element: <AdminEvents />,
    },
    {
      path: "/events/admin-events/:id",
      element: <ViewEvent />,
    },
    {
        path: "/events/promo",
        element: <Promotional />,
      },
      {
        path: "/events/consalt",
        element: <Consultation />,
      },
      {
        path: "/events/spons",
        element: <Sponsorship />,
      },

      {
        path: "/events/analyze",
        element: <Analyze />,
    },
    //           <Route exact path="/events/viewevents" element={<ViewEvents />} />
    {
      path: "/events/viewevents",
      element: <ViewEvents />,
  },
];
      

    export default EventLaunchingRoutes;