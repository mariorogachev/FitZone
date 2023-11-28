// PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';
import { getDoc, updateDoc } from 'firebase/firestore';
import db from '../../Firebase/Firestore';


function PostDetail() {
  const { postId } = useParams();
  const { user } = useClerk();
  const [post, setPost] = useState(null);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    async function fetchPost() {
      try {
        const postRef = await getDoc(doc(db, 'blogPosts', postId));
        if (postRef.exists()) {
          setPost({ id: postRef.id, ...postRef.data() });
        }
      } catch (error) {
        console.error('Error fetching post: ', error);
      }
    }

    fetchPost();
  }, [postId]);

  const handleLikePost = async (postId) => {
    try {
      const postRef = doc(db, 'blogPosts', postId);
  
      const postDoc = await getDoc(postRef);
      if (postDoc.exists()) {
        const post = postDoc.data();
        const currentUser = user.id;
  
        // Check if the current user has already liked the post
        if (!post.likes || !post.likes.includes(currentUser)) {
          // If the user hasn't liked the post, add their ID to the likes array
          const updatedLikes = post.likes ? [...post.likes, currentUser] : [currentUser];
          await updateDoc(postRef, { likes: updatedLikes });
          fetchPosts(); // Fetch updated list of posts after the like is added
        } else {
          console.log('User already liked this post');
        }
      }
    } catch (error) {
      console.error('Error toggling like: ', error);
    }
  };

  const handleAddComment = async (postId) => {
    try {
      const postRef = doc(db, 'blogPosts', postId);
  
      // Fetch the post to append the comment
      const postDoc = await getDoc(postRef);
      if (postDoc.exists()) {
        const post = postDoc.data();
        const newComment = {
          text: commentText,
          userId: username1, // Add the user ID who posted the comment
        };
  
        const updatedComments = post.comments ? [...post.comments, newComment] : [newComment];
        await updateDoc(postRef, { comments: updatedComments });
        fetchPosts(); // Fetch updated list of posts after the comment is added
        setCommentText(''); // Clear commentText state after adding the comment
      }
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Posted by: {post.username}</p>
      <button onClick={handleLikePost}>Like</button>
      <input
        type="text"
        placeholder="Add a comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={handleAddComment}>Comment</button>
      {/* Display comments */}
      <div className="comments-section">
        {post.comments && post.comments.length > 0 ? (
          <div>
            <h3>Comments:</h3>
            {post.comments.map((comment, index) => (
              <div key={index} className="comment">
                <p>{comment.text}</p>
                <p>Commented by: {comment.userId}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No comments yet</p>
        )}
      </div>
    </div>
  );
}

export default PostDetail;
