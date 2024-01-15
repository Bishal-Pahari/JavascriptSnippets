import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="text-center mt-4">Loading...</h2>;
  }

  return (
    <ul className="posts-container">
      {posts.map((post) => (
        <li key={post.id} className="post-item">
          <span className="post-title">{post.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
