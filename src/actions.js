// src/actions.js
let nextPostId = 1;

export const addPost = (text) => ({
  type: 'ADD_POST',
  payload: {
    id: nextPostId++,
    text,
    likes: 0,
  },
});

export const likePost = (id) => ({
  type: 'LIKE_POST',
  payload: {
    id,
  },
});
