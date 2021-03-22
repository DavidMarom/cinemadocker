import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { movReducer } from './reducers/movReducer';
import { showReducer } from './reducers/showReducer';
import { pageReducer } from './reducers/pageReducer';

const rootReducer = combineReducers({
    movReducer,
    showReducer,
    pageReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))