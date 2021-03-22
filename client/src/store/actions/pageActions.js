export function setPageName(name) {
    return dispatch => {
        dispatch({ type: 'PAGE_NAME', name });
    };
}