import React, { useState } from "react";

const PiracyReport = () => {
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: send data to backend
    console.log("Piracy reported:", { link, description });
    setLink("");
    setDescription("");
    alert("Thank you for reporting! Our team will review it.");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🚫 Report Piracy</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter pirated site/movie link"
          required
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the issue (optional)"
          className="w-full px-4 py-2 mb-4 border rounded"
          rows="4"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default PiracyReport;
