// jokes.controller.js
const Joke = require('../model/jokes.model');

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getOneJoke = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) {
      return res.status(404).json({ error: 'Joke not found' });
    }
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createJoke = async (req, res) => {
  try {
    const { content, category } = req.body;
    if (!content || !category) {
      return res.status(400).json({ error: 'Content and category are required' });
    }
    const newJoke = await Joke.create({ content, category });
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateJoke = async (req, res) => {
  try {
    const { content, category } = req.body;
    if (!content || !category) {
      return res.status(400).json({ error: 'Content and category are required' });
    }
    const updatedJoke = await Joke.findByIdAndUpdate(
      req.params.id,
      { content, category },
      { new: true }
    );
    if (!updatedJoke) {
      return res.status(404).json({ error: 'Joke not found' });
    }
    res.json(updatedJoke);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteJoke = async (req, res) => {
  try {
    const deletedJoke = await Joke.findByIdAndDelete(req.params.id);
    if (!deletedJoke) {
      return res.status(404).json({ error: 'Joke not found' });
    }
    res.json(deletedJoke);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomJoke = await Joke.findOne().skip(randomIndex);
    res.json(randomJoke);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
