import React, { useState } from "react";

const Settings = () => {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  const handleSave = (e) => {
    e.preventDefault();
    // Later: update user profile via API
    console.log("Updated:", { username, email });
    alert("Profile updated successfully!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">⚙️ Settings</h1>
      <form onSubmit={handleSave} className="max-w-md">
        <label className="block mb-2 text-gray-700">Name</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
        />

        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
