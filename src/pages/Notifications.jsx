import React from "react";

const Notifications = () => {
  // Later: fetch notifications from backend
  const mockNotifications = [
    { id: 1, message: "Your booking for Inception is confirmed!" },
    { id: 2, message: "New movie added: Avatar 2" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🔔 Notifications</h1>
      {mockNotifications.length > 0 ? (
        <ul className="space-y-3">
          {mockNotifications.map((n) => (
            <li
              key={n.id}
              className="bg-white p-3 rounded shadow text-gray-800"
            >
              {n.message}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No notifications yet.</p>
      )}
    </div>
  );
};

export default Notifications;
