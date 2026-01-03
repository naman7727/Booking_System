Mini Court Booking Application

A full-stack mini booking application built as part of a Full Stack Developer Intern assignment.
The application allows users to view available court time slots, book a slot, and cancel a booking, demonstrating end-to-end frontend and backend development.

Features

View available court time slots

Book a slot with user identification

Cancel an existing booking

Real-time slot availability updates

Clean and mobile-responsive UI

RESTful API design

Tech Stack
Frontend

React.js

Tailwind CSS

Axios

Backend

Node.js

Express.js

JSON file storage (for simplicity)

Tools

Git & GitHub

Postman

Project Structure
mini-booking-app/
├── backend/
│   ├── data/
│   │   └── slots.json
│   ├── routes/
│   │   └── slotRoutes.js
│   ├── index.js
│   └── package.json
│
├── booking-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
└── README.md

Setup Instructions
Backend Setup
cd backend
npm install
npm run dev


Server will start at:

http://localhost:5000

Frontend Setup
cd booking-frontend
npm install
npm run dev


Frontend will start at:

http://localhost:5173

API Documentation
Base URL
http://localhost:5000/api

Sample Booking Request
{
  "slotId": 1,
  "user": "Naman"
}

Challenges Faced & Solutions

One challenge was maintaining consistent slot availability between the frontend and backend after booking and unbooking actions. This was solved by updating the backend data source and refetching slot data after each successful API call. Another challenge was designing a responsive and clean UI, which was addressed using Tailwind CSS utilities and grid layouts. Proper API validation and error handling ensured smooth user interactions.

Conclusion

This project demonstrates core full-stack development concepts including REST API design, frontend–backend integration, state management, and responsive UI development. It was built with simplicity and clarity in mind while aligning with real-world booking use cases.


