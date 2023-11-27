import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import '../../../../public/assets/css/Blog.css'
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC3sLIbRGiSq6e12YLrHEz6OwzPqven5aA",
    authDomain: "fitzonelast.firebaseapp.com",
    databaseURL: "https://fitzonelast-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fitzonelast",
    storageBucket: "fitzonelast.appspot.com",
    messagingSenderId: "239081987995",
    appId: "1:239081987995:web:f780f05f8e29c0fe2d4b3e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function BlogList() {
    const [editMode, setEditMode] = useState(null);
  const [editedPosts, setEditedPosts] = useState({});
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
const [updatedPost, setUpdatedPost] = useState({ title: '', content: '' });
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const postsRef = collection(db, 'blogPosts');
    const snapshot = await getDocs(postsRef);
    const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPosts(postsData);
  };

  const handleAddPost = async () => {
    try {
      const postRef = collection(db, 'blogPosts');
      await addDoc(postRef, newPost); // Assuming `newPost` is an object with `title` and `content` properties
      setNewPost({ title: '', content: '' }); // Clear the input fields after adding the post
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
  

  return (
    <div className="App">
      <header>
        <h1>Welcome to BlogList</h1>
      </header>
      <main>
        <section id="addPost" className="add-post">
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
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <button onClick={() => setEditMode(post.id)}>Edit</button>
                  <button onClick={() => handleDeletePost(post.id)}>Delete</button>
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




