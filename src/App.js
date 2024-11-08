import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HomePage, Schedule, Contract, VCT2025, LoL2025 } from "./app/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/vct-2025" element={<VCT2025 />} />
        <Route path="/lol-2025" element={<LoL2025 />} />
      </Routes>
    </Router>
  );
}

export default App;
