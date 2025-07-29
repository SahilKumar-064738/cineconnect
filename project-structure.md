cineconnect/
├── client/                                  # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/                          # Images, logos, icons
│   │   ├── components/                      # Reusable components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Topbar.jsx
│   │   │   ├── MovieCard.jsx
│   │   │   └── FilterBar.jsx
│   │   ├── pages/
│   │   │   ├── Booking/                     # Booking + Refer flow
│   │   │   │   ├── Booking.jsx              # Main booking page
│   │   │   │   ├── MovieList.jsx            # Movie list display
│   │   │   │   └── ReferForm.jsx            # Refer a movie form/modal
│   │   │   ├── Subscriptions.jsx            # OTT combo plans
│   │   │   ├── Notifications.jsx
│   │   │   ├── PiracyReport.jsx
│   │   │   └── Settings.jsx
│   │   ├── utils/
│   │   │   └── api.js                       # Axios setup & helper functions
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── routes.js                        # React Router configuration
│   └── tailwind.config.js                   # Tailwind setup (if used)
├── server/                                  # Express Backend
│   ├── config/
│   │   └── db.js                            # MongoDB connection
│   ├── controllers/                         # Route logic
│   │   ├── authController.js
│   │   ├── movieController.js
│   │   ├── subscriptionController.js
│   │   ├── piracyController.js
│   │   └── notificationController.js
│   ├── middleware/
│   │   ├── authMiddleware.js                # JWT authentication
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js                          # Includes CineConnect ID generation
│   │   ├── Movie.js
│   │   ├── Subscription.js
│   │   ├── PiracyReport.js
│   │   └── Notification.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── movieRoutes.js
│   │   ├── subscriptionRoutes.js
│   │   ├── piracyRoutes.js
│   │   └── notificationRoutes.js
│   ├── .env                                 # Environment variables (DB_URI, JWT_SECRET, etc.)
│   ├── server.js                            # Backend entry point
│   └── package.json
├── project-structure.md                     # This structure documentation file
├── README.md
└── package.json                             # Root (for monorepo or shared scripts)
