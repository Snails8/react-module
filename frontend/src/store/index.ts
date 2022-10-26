import { createStore, combineReducers } from "redux";

// 同じObjectで定義
const initialState = {
  count: 1,
  posts: []
};
const reducer = (state = initialState) => {
  return state;
};

// reducerを分割する
const countReducer = (state = {count: 50}, action: any) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        count: state.count + 1,
      };
    case 'DECREASE_COUNT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }

  return state;
};

const postReducer = (state = {posts: []}, action: any) => {
  switch (action.type) {
    case 'GET_POST_DATA':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  countReducer,
  postReducer,
});

// store作成
export const store = createStore(rootReducer);
export default store;