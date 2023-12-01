import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import '../../../../public/assets/css/Blog.css'
import { useClerk } from '@clerk/clerk-react';
import { getDoc,getFirestore, collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from '../../Firebase/Firestore';
import filled from '../../../../public/assets/images/filled.png'
import outlined from '../../../../public/assets/images/outline.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function BlogList() {
  const { user } = useClerk();
  const navigate = useNavigate();
  const [isPostValid, setIsPostValid] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [editedPosts, setEditedPosts] = useState({});
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState({});
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    fetchPosts();
  }, []);

  const isLoggedIn = !!user;

  const fetchPosts = async () => {
    try {
      const postsRef = collection(db, 'blogPosts');
      const snapshot = await getDocs(postsRef);
      const postsData = snapshot.docs.map((doc) => {
        const post = { id: doc.id, ...doc.data() };
        if (!post.likes) {
          post.likeCount = 0;
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
    if (!newPost.title.trim() || !newPost.content.trim()) {
      setErrorMessage('Title and Content cannot be empty.');
      return;
    }
  
    try {
      const postRef = collection(db, 'blogPosts');
      const postData = {
        title: newPost.title,
        content: newPost.content,
        username: user.username,
      };
      await addDoc(postRef, postData);
      setNewPost({ title: '', content: '' });
      setErrorMessage(''); // Clear error message if successful
      fetchPosts();
    } catch (error) {
      console.error('Error adding document: ', error);
      setErrorMessage('Failed to add the post. Please try again.'); // Set error message on failure
    }
  };
  useEffect(() => {
    // Check if both title and content are not empty strings
    setIsPostValid(newPost.title.trim() !== '' && newPost.content.trim() !== '');
  }, [newPost])

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

  

  const handleLikePost = async (postId) => {
    try {
      if (!isLoggedIn) {
        history.push('/sign-in'); // Redirect to sign-in if not logged in
        return;
      }

      const postRef = doc(db, 'blogPosts', postId);
      const postDoc = await getDoc(postRef);

      if (postDoc.exists()) {
        const post = postDoc.data();
        const currentUser = user.id;

        if (!post.likes || !post.likes.includes(currentUser)) {
          const updatedLikes = post.likes ? [...post.likes, currentUser] : [currentUser];
          await updateDoc(postRef, { likes: updatedLikes });
        } else {
          const updatedLikes = post.likes.filter((userId) => userId !== currentUser);
          await updateDoc(postRef, { likes: updatedLikes });
        }

        fetchPosts();
      }
    } catch (error) {
      console.error('Error toggling like: ', error);
    }
  };

  const handleAddComment = async (postId) => {
    if (!user) {
      navigate('/sign-in');
      return;
    }
  
    try {
      const postRef = doc(db, 'blogPosts', postId);
      const postDoc = await getDoc(postRef);
  
      if (postDoc.exists()) {
        const post = postDoc.data();
        const newCommentText = commentText.trim(); // Remove leading/trailing spaces
        const newComment = {
          text: newCommentText, // Use the comment text directly without appending the username
          userId: user.username,
        };
  
        const updatedComments = comments[postId] ? [...comments[postId], newComment] : [newComment];
        await updateDoc(postRef, { comments: updatedComments });
        setComments({ ...comments, [postId]: updatedComments });
        setCommentText(''); // Clear the input field after adding a comment
        fetchPosts(); // Refresh posts after updating comments
      }
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };
const handleDeleteComment = async (postId, commentIndex) => {
  try {
    const postRef = doc(db, 'blogPosts', postId);
    const postDoc = await getDoc(postRef);

    if (postDoc.exists()) {
      const post = postDoc.data();
      const updatedComments = [...post.comments];
      updatedComments.splice(commentIndex, 1); // Remove the comment at the specified index

      await updateDoc(postRef, { comments: updatedComments });

      // Update the state 'comments' with the modified comments array
      setComments({ ...comments, [postId]: updatedComments });
    }
  } catch (error) {
    console.error('Error deleting comment: ', error);
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
  
const fetchCommentsFromDB = async (postId) => {
  try {
    const postRef = doc(db, 'blogPosts', postId);
    const postDoc = await getDoc(postRef);

    if (postDoc.exists()) {
      const post = postDoc.data();
      if (post.comments) {
        setComments({ ...comments, [postId]: post.comments });
      }
    }
  } catch (error) {
    console.error('Error fetching comments: ', error);
  }
};

useEffect(() => {
  posts.forEach((post) => {
    if (!comments[post.id]) {
      fetchCommentsFromDB(post.id);
    }
  });
}, [comments, posts]);

  return (
    <div className="App">
      <header className='header1'>
        <h1>Welcome, {user ? user.username : 'Guest'}</h1>
      </header>
      <main className="scrollable-content">
      <section id="addPost" className="add-post">
        {isLoggedIn && (
          <React.Fragment>
            {/* Error message display */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
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
          </React.Fragment>
        )}
      </section>
        <section id="blogPosts" className="blog-posts">
          {posts.map((post) => (
            <div key={post.id} className={`blog-post ${editMode === post.id ? 'edit-mode' : ''}`}>
              {editMode === post.id ? (
              <div>
              {/* Edit mode style - matching the structure with post display */}
              <h2>
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
              </h2>
              <p>
                <textarea
                  value={editedPosts[post.id]?.content || post.content}
                  onChange={(e) =>
                    setEditedPosts({
                      ...editedPosts,
                      [post.id]: { ...editedPosts[post.id], content: e.target.value },
                    })
                  }
                ></textarea>
              </p>
              <p>Posted by: {post.username}</p>
              <button onClick={() => handleEditPost(post.id)}>Save</button>
            </div>
            ) : (
              <div>
                {/* Style for displaying posts */}
                <h2 className='title'>{post.title}</h2>
                <p className='content'>{post.content}</p>
                <p className='username'>Posted by: {post.username}</p>
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
  <span className='counter'>{post.likeCount}</span>

</button>
                    {/* like button logic */}
                  
                  
                  {isLoggedIn && (
                    <React.Fragment>
                      <input
  type="text"
  placeholder="Add a comment"
  value={commentText}
  onChange={(e) => setCommentText(e.target.value)}
  className="input-field"
/>


                      <button className="commentButton" onClick={() => handleAddComment(post.id)}>
                        Comment
                      </button>
                    </React.Fragment>
                  )}
                  {/* comment section */}
                  <div className="comments-section">
                  {comments[post.id] && comments[post.id].length > 0 ? (
  <div className="comments-section">
    <h3>Comments:</h3>
    {comments[post.id].map((comment, index) => (
      <div key={index} className="comment">
        <div className="comment-content">
            <p>{comment.userId}: {comment.text}</p>
          </div>
        {user && user.username === comment.userId && ( // Show delete button for the user's comments
          <button className="deleteButton"  onClick={() => handleDeleteComment(post.id, index)}>
            Delete
          </button>
        )}
      </div>
    ))}
  </div>
) : (
  <p>No comments yet</p>
)}</div>
                  {post.username === user?.username && (
                    <div className="edit-delete-buttons">
                      <button className='editButton' onClick={() => setEditMode(post.id)}>
                        Edit
                        </button>
                      <button className="deleteButton" onClick={() => handleDeletePost(post.id)}>
                        Delete
                      </button>
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





