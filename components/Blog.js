const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  subHeading: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: new Date()
  }
});

const Blog = mongoose.model('Register', blogSchema);

module.exports = Blog;
