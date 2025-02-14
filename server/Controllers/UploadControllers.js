const multer = require('multer');
const path = require('path');
const Podcast = require('../models/Podcast'); // Import your Podcast model

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage }); // Multer middleware

// Controller to handle file upload and saving to MongoDB
const uploadPodcast = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  // Extract the form data from the request
  const { title, description } = req.body;

  // Make sure title and description are provided
  if (!title || !description) {
    return res.status(400).send('Title and description are required');
  }

  // Create a new podcast object
  const newPodcast = new Podcast({
    title,
    description,
    filePath: req.file.path, // Save the file path of the uploaded file
    fileName: req.file.filename, // Save the file name
  });

  try {
    // Save the new podcast to MongoDB
    await newPodcast.save();

    res.status(200).send({
      message: 'Podcast uploaded successfully',
      podcast: newPodcast, // Return the saved podcast data
    });
  } catch (error) {
    console.error('Error saving podcast to MongoDB:', error);
    res.status(500).send('Error saving podcast');
  }
};

module.exports = { upload, uploadPodcast };
  