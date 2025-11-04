// These are the tools we need
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Create our app
const app = express();

// Allow frontend to talk to backend
app.use(cors());
app.use(express.json());

// Simple test - like saying "Hello World"
app.get('/', (req, res) => {
  res.json({ message: 'E-Commerce Backend is running!' });
});

// Connect to MongoDB Cloud
mongoose.connect('mongodb+srv://himayameedumee_db_user:Vhm200123@cluster0.omvppzh.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('MongoDB Connected to Cloud Database'))
.catch(err => console.log('Database connection error:', err.message));

// Start the server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});