import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {rootReducer} from './reducers/rootReducer'

// createReducer

export const store = createStore(rootReducer, applyMiddleware(thunk,logger));

