import { showsService } from '../../services/showsService';

export function loadShow() {
    return async dispatch => {
        try {
            const allShow = await showsService.getAllShows();
            dispatch({ type: 'LOAD_SHOW', allShow });
        } catch (err) {
            console.log('err in getAllShows', err);
        }
    };
}

export function addShow(show) {
    return async dispatch => {
        try {
            const _show = await showsService.addShow(show);
            dispatch({ type: 'ADD_SHOW', _show })
        } catch (err) {
            console.log('err in addShow', err);
        }
    }
}

export function removeShow(showId) {
    return async dispatch => {
        try {
            await showsService.removeShow(showId);
            dispatch({ type: 'REMOVE_SHOW', showId });
        } catch (err) {
            console.log('err in removeShow', err);
        }
    };
}

export function updateShow(show) {
    return async dispatch => {
        try {
            const _show = await showsService.update(show);
            dispatch({ type: 'UPDATE_SHOW', _show : _show });
        } catch (err) {
            console.log('err in updateShow', err);
        }
    };
}