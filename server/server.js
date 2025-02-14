const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const uploadRoutes = require('./Routes/UploadRoutes');
const connectDB = require('./config/db');

const app = express();

require('dotenv').config();


connectDB();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('uploads'));  //


// Middleware to parse incoming requests
app.use(express.json());

// Use the upload routes
app.use('/api', uploadRoutes);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
