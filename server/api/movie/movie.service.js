const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    addMovie,query,remove
}

async function query() {
    const collection = await dbService.getCollection('movies');
    try {
        var movies = await collection.find().toArray();
        return movies;
    }
    catch (err) {
        console.log('ERROR: cannot find movies')
        throw err;
    }
}

async function addMovie(movie) {
    const collection = await dbService.getCollection('movies')
    try {
        await collection.insertOne(movie);
        return movie;
    } catch (err) {
        console.log(`ERROR: cannot insert movie`)
        throw err;
    }
}

async function remove(movId) {
    const collection = await dbService.getCollection('movies')
    try {
        await collection.deleteOne({ "_id": ObjectId(movId) })
    } catch (err) {
        console.log(`ERROR: cannot remove movie ${movId}`)
        throw err;
    }
}