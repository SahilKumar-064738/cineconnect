import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

const user = {
  name: "John Doe",
  dp: "https://i.pravatar.cc/40",
};

const Topbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const notifDropdownRef = useRef();

  // Close dropdown if clicked outside (for profile dropdown)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
      if (
        notifDropdownRef.current &&
        !notifDropdownRef.current.contains(event.target)
      ) {
        setNotifDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Detect screen width to disable profile dropdown on smaller devices
  // Instead of effect, just conditionally render or ignore clicks based on window size
  // Use useState + useEffect to track width
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      setDropdownOpen(false);
      setNotifDropdownOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="topbar-container">
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
      </div>

      <div className="nav-links">


        {/* Bell Icon dropdown for notifications - only desktop */}
        {isDesktop && (
          <div
            className="notifications-dropdown-container"
            ref={notifDropdownRef}
            style={{ position: "relative" }}
          >
            <button className="notifications">
              {/* You can replace with an SVG or SVG component */}
              <Link to="/notifications" className="dropdown-link" onClick={() => setDropdownOpen(false)}>🔔</Link>
            </button>

            {notifDropdownOpen && (
              <div className="dropdown-menu notifications-dropdown-menu">
                <Link to="/notifications" className="dropdown-link" onClick={() => setNotifDropdownOpen(false)}>
                  Notifications
                </Link>
                {/* Add any other notification-related links if needed */}
              </div>
            )}
          </div>
        )}
        <Link to="/watchlist" className="nav-link">
          Watchlist
        </Link>
        {/* Profile Avatar acting as dropdown toggle - only on desktop */}
        <div
          className="profile-dropdown-container"
          ref={dropdownRef}
          style={{ position: "relative" }}
        >
          <img
            src={user.dp}
            alt={`${user.name} Profile`}
            className="profile-avatar"
            onClick={() => isDesktop && setDropdownOpen(!dropdownOpen)}
            tabIndex={0}
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === " ") && isDesktop) {
                e.preventDefault();
                setDropdownOpen(!dropdownOpen);
              }
            }}
          />

          {dropdownOpen && (
            <div className="dropdown-menu profile-dropdown-menu">
              <Link to="/settings" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Account</Link>
              <Link to="/home" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Home</Link>
              <Link to="/booking" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Booking</Link>
              <Link to="/subscriptions" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Subscriptions</Link>
              
              <Link to="/piracy-report" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Report Piracy</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
