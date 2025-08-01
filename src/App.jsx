import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AppRoutes from "./routes";
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <Router>
      <Topbar toggleSidebar={toggleSidebar} />
      <div className="app-container">
        {/* Sidebar is only visible on mobile via toggling */}
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
