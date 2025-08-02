import React, { useState } from "react";
import "./ReferForm.css";

const ReferForm = ({ movie, onClose }) => {
  const [friendEmail, setFriendEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Movie "${movie.title}" referred to: ${friendEmail}`);
    onClose();
  };

  return (
    <div className="refer-modal-backdrop">
      <div className="refer-modal-box">
        <h2 className="refer-title">Refer Movie</h2>
        <p>
          You are referring: <b>{movie.title}</b>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={friendEmail}
            onChange={(e) => setFriendEmail(e.target.value)}
            placeholder="Friend's Email"
            required
            className="refer-input"
          />
          <div className="refer-actions">
            <button
              type="button"
              onClick={onClose}
              className="refer-cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="refer-send"
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
