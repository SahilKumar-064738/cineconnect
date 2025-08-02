import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const user = {
  name: "John Doe",
  dp: "https://i.pravatar.cc/40"
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={toggleSidebar}
        aria-hidden={!isOpen}
      ></div>

      <aside className={`box sidebar ${isOpen ? "open" : ""}`}>
        <nav className="flex flex-col space-y-6 menu">
          <div className="menu-links">
            <div className="user-profile">
              <img src={user.dp} alt="User Profile" className="user-dp" />
              <p className="user-name">{user.name}</p>
            </div>
            <Link to="/home" className="menu-link" onClick={toggleSidebar}>Home</Link>
            <Link to="/booking" className="menu-link" onClick={toggleSidebar}>Booking</Link>
            <Link to="/subscriptions" className="menu-link" onClick={toggleSidebar}>Subscriptions</Link>
            <Link to="/notifications" className="menu-link" onClick={toggleSidebar}>Notifications</Link>
            <Link to="/piracy-report" className="menu-link" onClick={toggleSidebar}>Report Piracy</Link>
            <Link to="/settings" className="menu-link" onClick={toggleSidebar}>Account</Link>
          </div>
        </nav>

      </aside>
    </>
  );
};

export default Sidebar;
