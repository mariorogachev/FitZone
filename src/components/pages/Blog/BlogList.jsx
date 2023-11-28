import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import '../../../../public/assets/css/Blog.css'
import { useClerk } from '@clerk/clerk-react';
import { getDoc,getFirestore, collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from '../../Firebase/Firestore';
import filled from '../../../../public/assets/images/filled.png'
import outlined from '../../../../public/assets/images/outline.png'


function BlogList() {
  const { user } = useClerk();
    const [editMode, setEditMode] = useState(null);
  const [editedPosts, setEditedPosts] = useState({});
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
const [updatedPost, setUpdatedPost] = useState({ title: '', content: '' });
const [commentText, setCommentText] = useState(''); // State to manage comment text
const [liked, setLiked] = useState(false);

const username1 = user.username;
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsRef = collection(db, 'blogPosts');
      const snapshot = await getDocs(postsRef);
      const postsData = snapshot.docs.map((doc) => {
        const post = { id: doc.id, ...doc.data() };
        if (!post.likes) {
          post.likeCount = 0; // Set like count to 0 if 'likes' field is absent or empty
        } else {
          post.likeCount = post.likes.length;
        }
        return post;
      });
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts: ', error);
    }
  };

  const handleAddPost = async () => {
    try {
      const postRef = collection(db, 'blogPosts');
  
      const postData = {
        title: newPost.title,
        content: newPost.content,
        username: username1, // Include the username fetched from Clerk
      };
  
      await addDoc(postRef, postData);
      setNewPost({ title: '', content: '' });
      fetchPosts(); // Fetch updated list of posts
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  
  
  const handleEditPost = async (postId) => {
    try {
      const postRef = doc(db, 'blogPosts', postId);

      const updatedData = {
        title: editedPosts[postId]?.title || posts.find(post => post.id === postId)?.title,
        content: editedPosts[postId]?.content || posts.find(post => post.id === postId)?.content,
      };

      await updateDoc(postRef, updatedData);
      await fetchPosts();
      setEditMode(null);
      setEditedPosts({ ...editedPosts, [postId]: {} }); // Reset edited content for the post
    } catch (error) {
      console.error('Error editing document: ', error);
    }
  };
  

  const handleDeletePost = async postId => {
    try {
      const postRef = doc(db, 'blogPosts', postId);
      await deleteDoc(postRef);
      fetchPosts(); // Fetch updated list of posts
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

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
        } else {
          // If the user already liked the post, remove their ID from the likes array
          const updatedLikes = post.likes.filter((userId) => userId !== currentUser);
          await updateDoc(postRef, { likes: updatedLikes });
        }
  
        fetchPosts(); // Fetch updated list of posts after the like status is toggled
      }
    } catch (error) {
      console.error('Error toggling like: ', error);
    }
  };
  
  // Define a function to add comments to a post
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
  



return (
  <div className="App">
    <header>
      <h1>Welcome, {username1}</h1>
    </header>
    <main className="scrollable-content">
      <section id="addPost" className="add-post">
        {/* Style for adding new post */}
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className="input-field"
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          className="input-field"
        ></textarea>
        <button onClick={handleAddPost}>Add Post</button>
      </section>
      <section id="blogPosts" className="blog-posts">
        {/* Display blog posts */}
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            {editMode === post.id ? (
              <div>
                {/* Style for editing posts */}
                <input
                  type="text"
                  value={editedPosts[post.id]?.title || post.title}
                  onChange={(e) =>
                    setEditedPosts({
                      ...editedPosts,
                      [post.id]: { ...editedPosts[post.id], title: e.target.value },
                    })
                  }
                />
                <textarea
                  value={editedPosts[post.id]?.content || post.content}
                  onChange={(e) =>
                    setEditedPosts({
                      ...editedPosts,
                      [post.id]: { ...editedPosts[post.id], content: e.target.value },
                    })
                  }
                ></textarea>
                <button onClick={() => handleEditPost(post.id)}>Save</button>
              </div>
            ) : (
              <div>
                {/* Style for displaying posts */}
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <p>Posted by: {post.username}</p>
                <button onClick={() => handleLikePost(post.id)}>
  {post.likes && post.likes.includes(user.id) ? (
    <img
      src={filled} // Path to your filled thumbs-up icon
      alt="thumbs up filled"
      width="24"
      height="24"
    />
  ) : (
    <img
      src={outlined} // Path to your outline thumbs-up icon
      alt="thumbs up outline"
      width="24"
      height="24"
    />
  )}
</button><span>{post.likeCount}</span>
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="input-field"
                />
                <button className='commentButton' onClick={() => handleAddComment(post.id)}>Comment</button>
                {/* Style for displaying comments */}
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
                {/* Style for edit and delete buttons */}
                {post.username === username1 && (
                  <div className="edit-delete-buttons">
                    <button className='editButton' onClick={() => setEditMode(post.id)}>Edit</button>
                    <button className='deleteButton' onClick={() => handleDeletePost(post.id)}>Delete</button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  </div>
);

            }

export default BlogList;




