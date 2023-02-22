export const postReducer = (state = { posts: [] }, action: any) => {
  switch (action.type) {
    case 'GET_POST_DATA':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
export default postReducer;