import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchPostById = async () => {
      try {
        // Perform the actual fetch here using the ID parameter
        const response = await fetch(`YOUR_API_ENDPOINT/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const postData = await response.json();
        setPost(postData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPostById();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;

