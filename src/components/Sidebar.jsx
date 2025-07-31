import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-5">
      <h1 className="text-2xl font-bold mb-8">CineConnect</h1>
      <nav className="flex flex-col space-y-4">
        <Link to="/booking" className="hover:text-yellow-400">🎟 Booking</Link>
        <Link to="/subscriptions" className="hover:text-yellow-400">📺 Subscriptions</Link>
        <Link to="/notifications" className="hover:text-yellow-400">🔔 Notifications</Link>
        <Link to="/piracy-report" className="hover:text-yellow-400">🚫 Report Piracy</Link>
        <Link to="/settings" className="hover:text-yellow-400">⚙️ Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
