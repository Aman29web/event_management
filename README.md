
**Event Website**
```
This repository contains my submission for the Web Developer Technical Test.
The project includes a React + Tailwind CSS frontend and a Node.js + Express + MongoDB backend, designed to display event information, pages, sections, and a working contact form.

Live Demo
Add your deployed link here

Features

Fully responsive event website
Modern UI using React + Tailwind CSS
Component-based architecture
Smooth transitions and animations
Contact form connected to backend API
MongoDB database for storing contact submissions
Pages for event details, overview, sponsors, and more
Clean, reusable file structure
Designed based on professional event websites


Tech Stack

Frontend
React.js 
Tailwind CSS
JavaScript

Backend

Node.js
Express.js
MongoDB

Tools

Git / GitHub

📁 Folder Structure
Frontend (React + Vite + Tailwind)
frontend/
│
├── node_modules/
│
├── public/
│   └── vite.svg
│
├── src/
│   │
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── EventOverview.jsx
│   │   ├── WhoWillMeet.jsx
│   │   ├── TopicHighlights.jsx
│   │   ├── WhyAttend.jsx
│   │   ├── WhySponsor.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── EventPage.jsx
│   │
│   ├── data/
│   │   └── eventsData.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

Backend (Node.js + Express + MongoDB)
backend/
│
├── node_modules/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── contactController.js
│   │
│   ├── models/
│   │   └── Contact.js
│   │
│   ├── routes/
│   │   └── contactRoutes.js
│   │
│   ├── server.js
│   └── utils/          # (optional helpers)
│
├── .env
├── .gitignore
├── package.json
└── README.md (optional)

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/yourusername/project-name.git
cd project-name

🎨 Frontend Setup
Install dependencies:
cd frontend
npm install

Run development server:
npm run dev

Build for production:
npm run build

🖥️ Backend Setup
Install dependencies:
cd backend
npm install

Add environment variables:

Create .env inside backend/:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Start backend server:
npm start

🔌 API Documentation
POST /api/contact

Submit contact form data.

Request Body
{
  "name": "Aman",
  "email": "aman@example.com",
  "message": "Hello, I want to know more about the event."
}

Response
{
  "success": true,
  "message": "Message received successfully"
}

🔗 Connecting Frontend ↔ Backend

Modify ContactForm component:

fetch("http://localhost:5000/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

VS Code

Postman (API testing)
```
