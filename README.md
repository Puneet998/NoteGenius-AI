# 🚀 AI StudyForge – Smart AI Notes & Learning Platform

> A production-ready AI-powered full-stack educational platform built using the MERN stack.  
> Generate structured notes, AI images, graphs, questions, and downloadable PDFs — all in one place.

---

## 📌 Overview

AI StudyForge is a modern AI-based learning platform that helps students and self-learners generate intelligent study materials instantly.

This application integrates Google Gemini AI, Stripe payment gateway, Firebase Google Authentication, and dynamic PDF generation to deliver a real-world SaaS-style experience.

The project demonstrates advanced full-stack development skills including authentication, payments, AI API integration, database management, and data visualization.

---

## ✨ Core Features

### 🧠 AI Notes Generator
- Topic-based structured notes
- Clean, readable, and exam-ready format
- Powered by Google Gemini API
- Fast AI response system

### 📊 AI Graph Generator
- Generates visual graphs based on topic/data queries
- Useful for statistics, economics, and analytical subjects
- Interactive and dynamic charts

### 🖼️ AI Image Generation
- Topic-related AI-generated images
- Enhances visual learning experience

### ❓ Question Generator
- AI-generated practice questions
- Exam preparation and revision support
- Custom topic-based question creation

### 📄 PDF Export System
- Download generated notes as PDF
- Clean formatting and printable layout

### 🔐 Authentication System
- Secure Google Login using Firebase Authentication
- Protected routes and user sessions

### 💳 Stripe Payment Integration
- Integrated Stripe Payment Gateway
- Premium feature unlock system
- Real-world payment infrastructure

### 🗂️ User Data Management
- Save user-generated notes
- Maintain user history
- Database storage with MongoDB

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Chart.js / Recharts (for graph rendering)
- CSS / Tailwind CSS

### Backend
- Node.js
- Express.js
- RESTful APIs

### Database
- MongoDB

### Authentication
- Firebase Google Authentication

### AI Integration
- Google Gemini API

### Payments
- Stripe Payment Gateway

### File Generation
- PDF generation library

---

## 🏗️ Architecture

User  
↓  
React Frontend  
↓  
Express Backend  
↓  
MongoDB (Data Storage)  
Gemini API (AI Content Generation)  
Stripe API (Payment Processing)  
Firebase Auth (Authentication)  

---

## 🚀 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ai-studyforge.git
cd ai-studyforge
```

### 2️⃣ Backend Setup

```bash
cd server
npm install
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server folder and add:

```
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
FIREBASE_API_KEY=your_firebase_key
```

⚠️ Never push `.env` file to GitHub.

---

## 🎯 Learning Outcomes

- Full MERN stack implementation
- Secure authentication integration
- Payment gateway implementation
- AI API integration
- Data visualization
- PDF generation system
- REST API development
- Scalable backend structure

---

## 🔮 Future Enhancements

- Subscription model (monthly/yearly)
- Admin dashboard
- Analytics panel
- Multi-language support
- Dark mode
- AI chat assistant
- Note sharing system

---

## 📸 Demo

(Add screenshots or live demo link here)

---

## 👨‍💻 Author

Puneet Prajapati  
B.Tech Computer Science Engineering  
Full Stack Developer | AI Enthusiast  

---

## 📜 License

This project is developed for educational and portfolio purposes.

---

⭐ If you like this project, consider giving it a star on GitHub!