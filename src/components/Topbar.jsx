import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="topbar-container">
      {/* Hamburger button for small screens */}
      <button
        className="hamburger-btn"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        ⫶
      </button>

      <div className="logo">CineConnect</div>

      <div className="search-dropdown-container">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>

        {/* Dropdown only visible on large screens */}
        <div
          className={`dropdown-menu-container ${
            dropdownOpen ? "open" : ""
          }`}
          ref={dropdownRef}
        >
          <button
            className="dropdown-toggle-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
             Menu » 
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/home" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Home</Link>
              <Link to="/booking" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Booking</Link>
              <Link to="/subscriptions" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Subscriptions</Link>
              <Link to="/notifications" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Notifications</Link>
              <Link to="/piracy-report" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Report Piracy</Link>
              <Link to="/settings" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Settings</Link>
            </div>
          )}
        </div>
      </div>

      <div className="nav-links">
        <Link to="/watchlist" className="nav-link">
          Watchlist
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
