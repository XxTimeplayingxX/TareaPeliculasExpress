const express = require('express');
const HTTPError = require('../MODELS/http-error');

const MovieController = require('./../Controller/movie-controller');
const HttpError = require('../MODELS/http-error');

const router = express.Router();

router.get('/', MovieController.getAllMovies);

router.get('/:mid', MovieController.getMovieById);

router.get('/movie/:tuid', MovieController.getByTitulo);

router.post('/', MovieController.saveMovie);



module.exports = router;