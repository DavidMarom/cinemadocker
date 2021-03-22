const movieService = require('./movie.service')

async function addMovie(req, res) {
    const movie = await movieService.addMovie(req.body)
    res.send(movie)
}

async function getMovies(req, res) {
    const movies = await movieService.query(req.query)
    res.send(movies)
}

async function deleteMovie(req, res) {
    const movie = await movieService.remove(req.params.id)
    res.send(movie)
}

module.exports = {
    addMovie,
    getMovies,
    deleteMovie
}