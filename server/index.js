const dotenv = require('dotenv'); //Imports dotenv to load environment variables from a .env file into process.env.
const express = require('express'); //Imports the Express.js library, which helps us create web APIs easily.
const mongoose = require('mongoose'); //Imports Mongoose, a library that allows us to work with MongoDB using JavaScript objects.
const cors = require('cors'); //Imports CORS middleware, which allows the frontend (running on a different port) to access the backend.

dotenv.config();  //Loads environment variables from a .env file into process.env, making them accessible in the application.

const app = express(); //Creates an Express app instance — this app will handle incoming HTTP requests.

app.use(cors()); //Enables CORS for all routes. This is required because your frontend will be running on localhost:3000 and backend on localhost:5000.
app.use(express.json()); //Middleware to parse incoming JSON data in POST or PUT requests.

console.log("MONGO_URI =", process.env.MONGO_URI);  //Logs the MongoDB URI to the console for debugging purposes.

// Connect to MongoDB Atlas
// This connects to the MongoDB Atlas database using the URI stored in the environment variable MONGO_URI.
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB Atlas");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Schema and model
const CountrySchema = new mongoose.Schema({
  name: String,
  taxRate: Number,
  averageSalary: Number,
});

const Country = mongoose.model('Country', CountrySchema);

// API route
app.get('/api/countries', async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching countries' });
  }
});

// Import news routes and use them
// This imports the news routes defined in the news.js file and mounts them on the /api
const newsRoutes = require('./routes/news');
app.use('/api/news', newsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

