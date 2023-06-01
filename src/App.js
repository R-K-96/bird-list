// src/App.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost, likePost } from './actions';

const App = ({ posts, addPost, likePost }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddPost = () => {
    if (inputValue.trim() !== '') {
      addPost(inputValue);
      setInputValue('');
    }
  };

  const handleLikePost = (postId) => {
    likePost(postId);
  };

  return (
    <div>
      <h1>Bird Post App</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddPost}>Add Post</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.text} - Likes: {post.likes}
            <button onClick={() => handleLikePost(post.id)}>Like</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  addPost,
  likePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
