const initialState = {
    mov: []
};

export function movReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_MOV':
            return { mov: action.allMov };

        case 'ADD_MOV':
            return { ...state, mov: [...state.mov, state.mov.map(mov => (action._mov._id === mov._id) ? action._mov : mov)] }
            
        case 'REMOVE_MOV':
            return { ...state, mov: state.mov.filter(mov => mov._id !== action.movId) };

        default:
            return state
    }
}