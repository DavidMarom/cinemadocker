const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    addShow,query,remove,update
}

async function query() {
    const collection = await dbService.getCollection('shows');
    try {
        var shows = await collection.find().sort( { "ts": 1 } ).toArray();
        return shows;
    }
    catch (err) {
        console.log('ERROR: cannot find shows')
        throw err;
    }
}

async function addShow(show) {
    const collection = await dbService.getCollection('shows')
    try {
        await collection.insertOne(show);
        return show;
    } catch (err) {
        console.log(`ERROR: cannot insert show`)
        throw err;
    }
}

async function remove(showId) {
    const collection = await dbService.getCollection('shows')
    try {
        await collection.deleteOne({ "_id": ObjectId(showId) })
    } catch (err) {
        console.log(`ERROR: cannot remove movie ${showId}`)
        throw err;
    }
}

async function update(show) {
    const collection = await dbService.getCollection('shows')
    show._id = ObjectId(show._id);

    try {
        await collection.updateOne({ _id: show._id }, { $set: show })
        return show
    } catch (err) {
        console.log(`ERROR: cannot update show ${show._id}`)
        throw err;
    }
}