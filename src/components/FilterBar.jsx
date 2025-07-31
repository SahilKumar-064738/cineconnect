import React from "react";

const FilterBar = ({ selected, setSelected }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <button
        onClick={() => setSelected("all")}
        className={`px-4 py-2 rounded ${
          selected === "all"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setSelected("referred")}
        className={`px-4 py-2 rounded ${
          selected === "referred"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        Referred
      </button>
      <button
        onClick={() => setSelected("unreferred")}
        className={`px-4 py-2 rounded ${
          selected === "unreferred"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        Unreferred
      </button>
    </div>
  );
};

export default FilterBar;
