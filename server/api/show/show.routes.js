const express = require('express')
const { addShow, getShows, deleteShow,updateShow } = require('./show.controller')
const router = express.Router()

router.get('/', getShows)
router.post('/add', addShow)
router.put('/update', updateShow)
router.delete('/:id', deleteShow)

module.exports = router