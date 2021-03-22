import { moviesService } from '../../services/moviesService';

export function loadMov() {
    return async dispatch => {
        try {
            const allMov = await moviesService.getAllMovies();
            dispatch({ type: 'LOAD_MOV', allMov });
        } catch (err) {
            console.log('SettingsActions: err in getAllMovies', err);
        }
    };
}

export function addMov(mov) {
    return async dispatch => {
        try {
            const _mov = await moviesService.addMov(mov);
            dispatch({ type: 'ADD_MOV', _mov })
        } catch (err) {
            console.log('SettingsActions: err in addMov', err);
        }
    }
}

export function removeMov(movId) {
    return async dispatch => {
        try {
            await moviesService.removeMov(movId);
            dispatch({ type: 'REMOVE_MOV', movId });
        } catch (err) {
            console.log('AnnActions: err in removeMov', err);
        }
    };
}