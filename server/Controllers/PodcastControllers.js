const Podcast = require('../models/Podcast'); // Corrected the variable name to match the model

const getPodcasts = async (req, res) => {
    try {
      const podcasts = await Podcast.find();
      res.status(200).json(podcasts);
    } catch (error) {
      console.error('Error fetching podcasts:', error.message);
      res.status(500).json({ message: 'Server error', details: error.message });
    }
  };
  

module.exports = { getPodcasts };  // Export the function
