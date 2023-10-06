// jokes.routes.js
const express = require('express');
const jokesController = require('../controller/jokes.controller');

const router = express.Router();

router.get('/jokes', jokesController.getAllJokes);
router.get('/jokes/:id', jokesController.getOneJoke);
router.post('/jokes', jokesController.createJoke);
router.put('/jokes/:id', jokesController.updateJoke);
router.delete('/jokes/:id', jokesController.deleteJoke);

module.exports = router;
router.get('/jokes/random', jokesController.getRandomJoke);