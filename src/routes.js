import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages

import Booking from "./pages/Booking/Booking";
import Home from "./pages/Home"
import Subscriptions from "./pages/Subscriptions";
import Notifications from "./pages/Notifications";
import PiracyReport from "./pages/PiracyReport";
import Settings from "./pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      {/* Other routes */}
      <Route path="/booking" element={<Booking />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/piracy-report" element={<PiracyReport />} />
      <Route path="/settings" element={<Settings />} />
      {/* Default route */}
      <Route path="*" element={<Booking />} />
    </Routes>
  );
};

export default AppRoutes;
