# 🌍 Tax Calculator App

This is a full-stack web application that allows users to:

- Select a country
- Input their gross salary
- Calculate their **net income** based on tax rates from a database
- View the **average salary** in that country
- See how their salary compares to the country's average

Built using **React.js**, **Node.js**, **Express.js**, and **MongoDB**.

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Tooling:** Visual Studio Code, Git

---

## 🚀 Features

- Fetches country-specific tax rates and average salary from MongoDB
- Calculates net income after tax
- Displays average salary for selected country
- Tells user how their salary compares to national average
- Fully responsive for mobile, tablet, and desktop

---

## 📥 How to Install and Run Locally

### 📁 1. Clone the repository

```bash
git clone https://github.com/DimZel1/country-tax-app.git
cd income-tax-app

-Set up the Backend (Node.js + Express)
cd server
npm install


-Create a .env file inside /server:
MONGO_URI=your_mongo_connection_string
PORT=5000

-To start the backend server:
npm start

(The backend should run at http://localhost:5000)

-Set up the Frontend (React.js)
cd client
npm install
npm start

(This will open the app in your browser at http://localhost:3000)

Folder Structure:

income-tax-app/
├── client/          # React frontend
├── server/          # Express backend + MongoDB
├── .gitignore
├── README.md

This project is open source and available under the MIT License.