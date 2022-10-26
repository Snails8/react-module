import { createStore, combineReducers } from "redux";

// 同じObjectで定義
const initialState = {
  count: 1,
  posts: [
    {id: 1, title: "redux"},
    {id: 2, title: "redux sample"}
  ]
};
const reducer = (state = initialState) => {
  return state;
};

// reducerを分割する
const countReducer = (state = {count: 50}) => {
  return state;
};

const postReducer = (
  state = {
    posts: [
      { id: 1, title: 'Reduxについて' },
      {
        id: 2,
        title: 'ReduxのHooksについて',
      },
    ],
  }
) => {
  return state;
};

const rootReducer = combineReducers({
  countReducer,
  postReducer,
});

// store作成
export const store = createStore(rootReducer);
export default store;