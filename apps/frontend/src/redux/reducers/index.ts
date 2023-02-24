import { createStore, combineReducers } from 'redux';
import countReducer from './countReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  countReducer,
  postReducer,
});

// store作成
export const store = createStore(rootReducer);
export default store;
