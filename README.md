#  Country Tax Calculator App

This is a full-stack web application built with React.js, Node.js, Express, and MongoDB (Atlas).  
It allows users to:
- Select a country
- Input their salary
- Calculate their net income based on the tax rate of that country
- Compare their salary to the average salary in that country

---

##  Technologies Used

- Frontend: React.js
- Backend: Node.js + Express
- Database: MongoDB Atlas (cloud-based)
- Styling: CSS (responsive design)
- Tooling: dotenv, mongoose, cors

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/country-tax-app.git
cd country-tax-app
```

### 2.  Set Up the Server

```bash
cd server
npm install
```

####  Create a `.env` File in `/server`

Inside the `server/` folder, create a file named `.env`:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

> Replace `your_mongodb_atlas_connection_string` with your real MongoDB Atlas URI.

### 3.  Seed the Database

Still inside `server/`, run:

```bash
node seed.js
```

You should see:
```
Seeded DB!
```

This adds initial country data to MongoDB.

### 4. Run the Server

```bash
npm start
```

Expected output:
```
 Connected to MongoDB Atlas
 Server running on port 5000
```

---

### 5.  Set Up and Run the Frontend

Open a **new terminal window**:

```bash
cd client
npm install
npm start
```

This will open the React frontend at:
```
http://localhost:3000
```

---

##  Features

-  Country selection with tax rate
-  Calculate net salary based on tax
-  Compare user salary with country's average salary
-  Fully responsive layout for desktop and mobile

---

##  Troubleshooting

- Make sure MongoDB Atlas is set up and IP access is configured.
- Ensure `.env` file is correctly created **inside `/server`**.
- If you see `Failed to fetch`, check that the backend is running and CORS is enabled.
- Restart both server and frontend if you make changes.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
