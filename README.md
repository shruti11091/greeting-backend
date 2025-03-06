# 🚀 Greeting API (Backend)

This is the **backend** of the Greeting App, built using **Node.js** and **Express**. It provides an API endpoint that returns a personalized greeting.

---

## 🌟 Features
- 📩 Accepts a `GET` request with a `name` query parameter.
- 📝 Returns a personalized greeting message.
- ⚠️ Handles missing `name` input with an error response.
- 📁 Organized structure with `models/` and `routes/`.
- 🌍 Supports **CORS** for frontend integration.

---

## 📂 Folder Structure
backend/ │-- src/ │ │-- models/ │ │ └── Greet.js │ │-- routes/ │ │ └── greet.js │ └── index.js │-- package.json │-- .gitignore │-- README.md


---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

git clone https://github.com/shruti11091/greeting-backend.git
cd greeting-app/backend
2️⃣ Install Dependencies
npm install
3️⃣ Start the Server
node src/server.js
The API will be available at http://localhost:5000/api/greet?name=YourName.
