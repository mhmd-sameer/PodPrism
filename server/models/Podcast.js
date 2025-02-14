const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  filePath: { type: String, required: true },
  fileName: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
});

const Podcast = mongoose.model('Podcast', podcastSchema);
module.exports = Podcast;
