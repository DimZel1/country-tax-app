//here is our seed to populate the database with initial data

const mongoose = require('mongoose');
require('dotenv').config(); 

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Connection error:', err));

// Schema and model
// This schema defines the structure of the Country documents in the MongoDB collection.
// Each country will have a name, tax rate, and average salary.
const CountrySchema = new mongoose.Schema({
  name: String,
  taxRate: Number,
  averageSalary: Number, 
});

// This creates a Mongoose model named 'Country' based on the CountrySchema.
const Country = mongoose.model('Country', CountrySchema);

// Seed data
const seedData = [
  { name: "USA", taxRate: 21, averageSalary: 55000 },
  { name: "Canada", taxRate: 15, averageSalary: 48000 },
  { name: "Germany", taxRate: 30, averageSalary: 47000 },
  { name: "France", taxRate: 28, averageSalary: 45000 },
  { name: "UK", taxRate: 19, averageSalary: 46000 },
  { name: "Japan", taxRate: 23, averageSalary: 42000 },
  { name: "Australia", taxRate: 30, averageSalary: 51000 },
  { name: "India", taxRate: 25, averageSalary: 7000 },
  { name: "Brazil", taxRate: 34, averageSalary: 8500 },
  { name: "South Africa", taxRate: 28, averageSalary: 12000 },
  { name: "Mexico", taxRate: 30, averageSalary: 10000 },
  { name: "Italy", taxRate: 24, averageSalary: 40000 },
  { name: "Russia", taxRate: 20, averageSalary: 12000 },
  { name: "Spain", taxRate: 25, averageSalary: 39000 },
  { name: "China", taxRate: 25, averageSalary: 13000 },
  { name: "South Korea", taxRate: 22, averageSalary: 35000 },
  { name: "Netherlands", taxRate: 25, averageSalary: 48000 },
  { name: "Sweden", taxRate: 22, averageSalary: 52000 },
  { name: "Norway", taxRate: 22, averageSalary: 55000 },
  { name: "Switzerland", taxRate: 18, averageSalary: 60000 }
];

// Insert seed data into the database
Country.insertMany(seedData)
  .then(() => {
    console.log('Seeded DB!');
    mongoose.connection.close();
  })
  .catch(err => console.log('Seeding error:', err));