// BlogPost.js

import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  // Fetch blog post by ID or use a hardcoded object
  const post = { id: 1, title: 'First Post', content: 'Content of the first post' };
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
