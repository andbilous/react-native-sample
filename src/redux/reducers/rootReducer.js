// flow
import { combineReducers } from 'redux';
import { creditCardInfoReducer } from '../creditCardInfo/creditCardInfo.reducer';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({ creditCardInfoReducer });
