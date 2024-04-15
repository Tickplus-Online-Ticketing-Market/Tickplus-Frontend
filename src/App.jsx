import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import SecondaryMarketRoutes from "./Routes/SecondaryMarketRoutes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      Test01
      <SecondaryMarketRoutes />
    </Router>
  );
}
