import { httpService } from './httpService'

async function addMov(mov) {
    try {
        const res = await httpService.post(`movie/add`, mov);
        return res;
    } catch (err) {
        console.log(err);

    }
}

async function getAllMovies() {
    try {
        const res = await httpService.get(`movie/`);
        return res;
    } catch (err) {
        console.log(err);
    }
}

async function removeMov(movId) {
    try {
        const res = await httpService.delete(`movie/${movId}`)
        return res;
    } catch (err) {
        console.log(err);
    }
    
}

export const moviesService = {
    addMov,
    getAllMovies,
    removeMov
}