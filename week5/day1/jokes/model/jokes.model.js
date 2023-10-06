// jokes.model.js
const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;
