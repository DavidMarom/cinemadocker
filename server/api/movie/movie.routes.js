const express = require('express')
const { addMovie, getMovies, deleteMovie } = require('./movie.controller')
const router = express.Router()

router.get('/', getMovies)
router.post('/add', addMovie)
router.delete('/:id', deleteMovie)

module.exports = router