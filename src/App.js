import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AddEventPage from "./pages/AddEventPage";
import EventDisplayPage from "./pages/EventDisplayPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="/events" element={<EventDisplayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
