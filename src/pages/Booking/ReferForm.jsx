import React, { useState } from "react";

const ReferForm = ({ movie, onClose }) => {
  const [friendEmail, setFriendEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: call API to refer movie
    console.log(`Movie "${movie.title}" referred to: ${friendEmail}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Refer Movie</h2>
        <p className="mb-4">You are referring: <strong>{movie.title}</strong></p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={friendEmail}
            onChange={(e) => setFriendEmail(e.target.value)}
            placeholder="Friend's Email"
            required
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Send Refer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferForm;
