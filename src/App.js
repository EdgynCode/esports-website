import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./app/pages/home";
import Schedule from "./app/pages/schedule";
import Contract from "./app/pages/contract";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contract" element={<Contract />} />
      </Routes>
    </Router>
  );
}

export default App;
