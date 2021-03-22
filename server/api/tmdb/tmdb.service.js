const Axios = require('axios');
var axios = Axios.create({ withCredentials: true });

async function ajax(endpoint, method = 'get', data = null) {
    try {
        const res = await axios({
            url: `${endpoint}`,
            method,
            data
        })
        return res.data;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`);
        console.dir(err);
        if (err.response && err.response.status === 401) {
            window.location.assign('/#/login');
        }
        throw err;
    }
}

module.exports = {
    getByQuery
}

async function getByQuery(query) {
    try {
        return ajax(`http://api.themoviedb.org/3/search/keyword?api_key=fbee9c6188286a5d20cf549e6bbeea4e&query=${query}&page=1`, 'GET', null)
    } catch {
        console.log(`Cant get movies from TMDB`);
        throw err;
    }
}