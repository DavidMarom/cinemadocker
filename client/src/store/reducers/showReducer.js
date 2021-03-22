const initialState = {
    show: []
};

export function showReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_SHOW':
            return { show: action.allShow };

        case 'ADD_SHOW':
            return { ...state, show: [...state.show, state.show.map(show => (action._show._id === show._id) ? action._show : show)] }

        case 'REMOVE_SHOW':
            return { ...state, show: state.show.filter(show => show._id !== action.showId) };

        case 'UPDATE_SHOW':
            return { ...state, show: state.show.map(show => (action._show._id === show._id) ? action._show : show) }

        default:
            return state
    }
}