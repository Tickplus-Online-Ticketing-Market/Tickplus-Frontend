// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Admin-Event Adding
import AddEvent from "./Components/EventLaunching/Add_Event/AddEvent";
import Promotional from "./Components/EventLaunching/Promotional/Promotional";
import Consultation from "./Components/EventLaunching/Consultation/Consultation";
import ViewEvent from "./Components/EventLaunching/Event/ViewEvent";
import AdminEvents from "./Components/EventLaunching/Event/Events";
import Sponsorship from "./Components/EventLaunching/Sponsorship/Sponsorship";
import Analyze from "./Components/EventLaunching/Analyze/Analyze";
import ViewEvents from "./Components/EventLaunching/HomePageViewEvents/ViewEvents";

function App() {
  return (
    <div>
      <Router>
        <Routes>
      
           
      
          <Route exact path="/events/addevent" element={<AddEvent />} />
          <Route exact path="/events" element={<AdminEvents />} />
          <Route exact path="/events/admin-events/:id" element={<ViewEvent />} />
          <Route exact path="/events/promo" element={<Promotional />} />
          <Route exact path="/events/consalt" element={<Consultation />} />
          <Route exact path="/events/spons" element={<Sponsorship />} />
          <Route exact path="/events/analyze" element={<Analyze />} />

       
          <Route exact path="/events/viewevents" element={<ViewEvents />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
