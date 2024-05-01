// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Admin-Event Adding
import AddEvent from "./Components/EventLaunching/Add_Event/AddEvent";
import Promotional from "./Components/EventLaunching/Promotional/Promotional";
import Consultation from "./Components/EventLaunching/Consultation/Consultation";
import AdminEvents from "./Components/EventLaunching/Event/Events";
import Sponsorship from "./Components/EventLaunching/Sponsorship/Sponsorship";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/addevent" element={<AddEvent />} />
          <Route exact path="/" element={<AdminEvents />} />
          <Route exact path="/promo" element={<Promotional />} />
          <Route exact path="/consalt" element={<Consultation />} />
          <Route exact path="/spons" element={<Sponsorship />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
