const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config(); 

const app = express();

app.use(cors());
app.use(express.json());

console.log("MONGO_URI =", process.env.MONGO_URI); 

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

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});