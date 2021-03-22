const express = require('express')
const { getMovie } = require('./tmdb.controller')
const router = express.Router()

router.get('/:query', getMovie)

module.exports = router