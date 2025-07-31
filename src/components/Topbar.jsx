import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="w-full bg-gray-100 flex justify-end items-center p-4 shadow-md">
      <Link to="/login" className="mr-4 text-gray-700 hover:text-blue-600">
        Sign In
      </Link>
      <Link
        to="/register"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default Topbar;
