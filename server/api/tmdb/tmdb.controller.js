const movieService = require('./tmdb.service')

async function getMovie(req, res) {
    const movie = await movieService.getByQuery(req.params.query)
    res.send(movie)
}

module.exports = {
    getMovie
}