import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<div>Tickplus</div>} />
      </Routes>
    </Router>
  );
}
