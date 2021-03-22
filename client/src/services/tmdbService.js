import { httpService } from './httpService'

function getMovie(query) {
    return httpService.get(`tmdb/${query}`);
}

export const tmdbService = {
    getMovie
}