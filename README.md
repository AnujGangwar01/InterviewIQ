# 🚀 InterviewIQ

An AI-powered mock interview platform designed to help students and professionals ace technical and HR interviews through personalized AI-generated questions, real-time feedback, and granular performance tracking.

🌐 **Live Demo:** [interviewiq-frontend-ixyk.onrender.com](https://interviewiq-frontend-ixyk.onrender.com/)

---

## 📊 Tech Stack & Badges

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-v20-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-AI-8E44AD?style=for-the-badge&logo=googlegemini&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

---

## 📖 About the Project

**InterviewIQ** is a comprehensive full-stack MERN platform that bridges the gap between preparation and execution. By leveraging the **Google Gemini API**, it provides dynamic, resume-tailored interview simulations that mimic real-world technical and behavioral hiring loops. 

Whether you are preparing for tech internships, campus placements, or lateral corporate transitions, InterviewIQ provides a comprehensive analytics playground to fine-tune your performance.

### ✨ Key Features

* 🔐 **Secure Authentication:** Robust JWT-based registration, login, and protected routing.
* 📄 **Smart Resume Parsing:** Upload your resume to contextually ground the AI's question bank.
* 🤖 **AI Interviewer:** Dynamic, multi-turn mock interview sessions driven by LLMs.
* 📊 **Deep-Dive Feedback:** Instant breakdown scoring your technical accuracy, communication style, and areas of improvement.
* 📈 **History Dashboard:** Track your historical mock scores over time with comprehensive visual analytics.
* 📱 **Fully Responsive UI:** Polished user interface built with Vite, React, and Tailwind CSS optimized for all viewports.

---

## 🛠️ Architecture & Tech Stack

### Frontend
* **Core:** React.js (v19) & React Router DOM
* **Styling:** Tailwind CSS
* **Build Tool:** Vite
* **HTTP Client:** Axios

### Backend
* **Runtime & Framework:** Node.js, Express.js
* **Database:** MongoDB Atlas via Mongoose ODM
* **Security:** JSON Web Tokens (JWT), `bcrypt.js` (password hashing), CORS
* **File Handling:** Multer (for seamless resume parsing uploads)

### AI Integration
* **Engine:** Google Gemini API 

---

## 📂 Project Structure

```text
InterviewIQ
│
├── client/              # Frontend React application (Vite setup)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/              # Backend Express REST API
│   ├── config/          # Database & configuration setups
│   ├── controllers/     # Request handlers & logic layers
│   ├── middleware/      # Auth & validation middlewares
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express route declarations
│   ├── utils/           # Helper scripts & Gemini prompts
│   └── package.json
│
└── README.md
