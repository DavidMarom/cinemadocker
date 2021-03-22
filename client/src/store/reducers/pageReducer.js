const initialState = {
    pageName: '1'
};

export function pageReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'PAGE_NAME':
            return { pageName: action.name };

        default:
            return state
    }
}