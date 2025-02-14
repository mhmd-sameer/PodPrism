const express = require('express');
const { upload, uploadPodcast } = require('../Controllers/UploadControllers');
const { getPodcasts } = require('../Controllers/PodcastControllers'); // Import the getPodcasts controller
const router = express.Router();

// POST route to handle podcast upload
router.post('/uploads', upload.single('file'), uploadPodcast);

// GET route to fetch all podcasts
router.get('/podcasts', getPodcasts);

module.exports = router;
