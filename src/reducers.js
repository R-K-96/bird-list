// src/reducers.js
const initialState = {
    posts: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_POST':
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
      case 'LIKE_POST':
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload.id ? { ...post, likes: post.likes + 1 } : post
          ),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  