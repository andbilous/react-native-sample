import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/rootReducer';

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
