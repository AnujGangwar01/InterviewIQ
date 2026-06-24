# 🚀 InterviewIQ – AI-Powered Mock Interview Platform

<div align="center">

<h1>🎯 InterviewIQ</h1>

<p>
AI-powered interview preparation platform that helps students and professionals practice technical & HR interviews with personalized AI-generated questions, instant feedback, and performance tracking.
</p>

<p>
<a href="https://interviewiq-frontend-ixyk.onrender.com/">🌐 Live Demo</a> •
<a href="https://github.com/AnujGangwar01/InterviewIQ">📂 Repository</a>
</p>

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Google Gemini](https://img.shields.io/badge/AI-Gemini-8E75B2)
![Render](https://img.shields.io/badge/Deployment-Render-46E3B7)
![License](https://img.shields.io/badge/License-MIT-blue)

</div>

---

## 📌 Overview

InterviewIQ is a full-stack AI interview preparation platform built using the MERN Stack and Google Gemini AI.

The platform simulates real interview experiences by generating personalized interview questions, evaluating responses, and providing intelligent feedback to help users improve communication, technical knowledge, and confidence.

Whether you're preparing for:

* 🎓 Campus Placements
* 💼 Software Engineering Roles
* 🚀 Internships
* 📊 Technical Interviews
* 🗣️ HR Interviews

InterviewIQ helps you practice smarter and perform better.

---

## ✨ Key Features

### 🔐 Authentication & Security

* Secure JWT Authentication
* User Registration & Login
* Password Hashing using bcrypt
* Protected Routes

### 🤖 AI-Powered Interviews

* Dynamic Question Generation
* Technical & HR Interview Support
* Personalized Interview Sessions
* Google Gemini Integration

### 📊 Smart Feedback System

* AI-generated Performance Review
* Strength & Weakness Analysis
* Improvement Suggestions
* Interview Score Evaluation

### 📁 Resume Management

* Upload Resume
* Store Candidate Information
* Generate Customized Questions

### 📈 Progress Tracking

* Interview History
* Previous Attempts
* Performance Monitoring
* Learning Progress Analysis

### 📱 Modern UI/UX

* Fully Responsive Design
* Clean Dashboard Interface
* Mobile Friendly
* Fast & Interactive Experience

---

## 🏗️ System Architecture

```text
                    ┌─────────────────┐
                    │     Client      │
                    │   React + Vite  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   Express API   │
                    │     Node.js     │
                    └────────┬────────┘
                             │
          ┌──────────────────┼──────────────────┐
          ▼                  ▼                  ▼
 ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
 │ MongoDB Atlas│   │ JWT Auth     │   │ Gemini AI    │
 │ Database     │   │ Security     │   │ Question Gen │
 └──────────────┘   └──────────────┘   └──────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

| Technology   | Purpose         |
| ------------ | --------------- |
| React.js     | UI Development  |
| Vite         | Fast Build Tool |
| Tailwind CSS | Styling         |
| Axios        | API Requests    |
| React Router | Routing         |

### Backend

| Technology    | Purpose             |
| ------------- | ------------------- |
| Node.js       | Runtime Environment |
| Express.js    | REST APIs           |
| MongoDB Atlas | Database            |
| Mongoose      | ODM                 |
| JWT           | Authentication      |
| bcrypt.js     | Password Security   |
| Multer        | File Uploads        |

### AI

| Technology        | Purpose                                  |
| ----------------- | ---------------------------------------- |
| Google Gemini API | Interview Question Generation & Feedback |

---

## 📂 Project Structure

```bash
InterviewIQ
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── services
│   │   └── assets
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── uploads
│   └── package.json
│
└── README.md
```

---

## 🌍 Live Application

### 🚀 Demo

https://interviewiq-frontend-ixyk.onrender.com/

---

# 📸 Screenshots

## 🏠 Landing Page

<img width="100%" src="./screenshoot/Hero page.png"/>

> Modern landing page introducing InterviewIQ with AI-powered interview features.

---

## 🔐 Authentication

<img width="100%" src="./screenshoot/Google Sign In Popup.png"/>

> Google Authentication for secure and seamless sign-in.

---

## 🎯 Interview Setup

<img width="100%" src="./screenshoot/Interview Setup Form.png"/>

> Select job role, experience level, interview type, and optionally upload a resume.

---

## 📊 AI Features

<img width="100%" src="./screenshoot/AI Capabilities.png"/>

> AI answer evaluation, resume-based interviews, performance analytics, and downloadable reports.

---

## 🎭 Interview Modes

<img width="100%" src="./screenshoot/Multiple Modes.png"/>

> Multiple interview modes including Technical and HR interviews.

---

## 💳 Pricing Plans

<img width="100%" src="./screenshoot/Pricing Page.png"/>

> Flexible pricing plans with interview credits and premium features.

---

## 💳 Secure Payment Gateway

<img width="100%" src="./screenshoot/Razorpay Payment.png"/>

> Razorpay integration for secure and seamless payments.

---

## 🤖 AI Interview Setup

<img width="100%" src="./screenshoot/Screenshot 2026-06-25 003657.png"/>

> Configure interview role, experience, interview type, and resume before starting the AI interview.
---

## 🎯 Future Improvements

* 🎙️ Voice-Based Interviews
* 🎥 Webcam Recording
* 📊 Advanced Analytics Dashboard
* 📅 Interview Scheduling
* 🏢 Company-Specific Interview Sets
* 🌙 Dark Mode
* 📧 Email Reports
* 📱 Progressive Web App (PWA)
* 🧠 AI Resume Scoring
* 🎯 Personalized Learning Roadmaps

---

## 📊 Project Highlights

✅ Full-Stack MERN Application

✅ AI-Powered Interview Generation

✅ Secure JWT Authentication

✅ Resume Upload System

✅ Real-Time Feedback Engine

✅ Cloud Database Integration

✅ Production Deployment on Render

---

## 👨‍💻 Developer

### Anuj Gangwar

🎓 Integrated Master of Technology (Applied Geophysics)

🏛️ IIT (ISM) Dhanbad

🔗 GitHub: https://github.com/AnujGangwar01

🔗 LinkedIn: https://www.linkedin.com/in/anujgangwar01/

---
---

## ⭐ Support

If you found this project useful:

🌟 Star the Repository

🍴 Fork the Project

📢 Share with Others

Your support motivates me to build more impactful open-source projects.

---

## 📄 License

This project is licensed under the MIT License.

Made with ❤️ by Anuj Gangwar
