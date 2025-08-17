# 📌 ConvoAI – Chatbot Application  

ConvoAI is a full-stack chatbot application built with **React (frontend)** and **Express + OpenAI API (backend)**.  
It allows users to send messages to an AI assistant and receive intelligent responses in real-time.  

---

## 🚀 Features  

- 💬 Real-time chatbot interface  
- 🎨 Clean UI with **React + TailwindCSS + Lucide icons**  
- ⚡ Backend powered by **Express.js** and **OpenAI API**  
- 🌍 Cross-origin support using `cors`  
- 🔐 Secure API key handling via `.env`  

---

## 🛠️ Tech Stack  

**Frontend:**  
- React (Vite)  
- TailwindCSS 

**Backend:**  
- Node.js + Express.js  
- OpenAI API (`gpt-4`)  
- dotenv for environment variables  

---

## 📂 Project Structure  
ConvoAI/
│── backend/ # Express server
│ ├── app.js # Entry point
│ └── .env # Environment variables (ignored in Git)

│── frontend/ # React client (Vite)
│ ├── src/
│ │ ├── components/ # UI components and backend connection
| | | ├── Chat.jsx/ # main functionlity of the ConvoAI holds in this- interaction with the user, responses, output.
| | | ├── ChatMessage.jsx/ # Carry out basic functionality and posses reusable UI component for displaying a single chat bubble (message) inside the chat window.

│ └── vite.config.js # Vite configuration
│
└── README.md # Documentation
