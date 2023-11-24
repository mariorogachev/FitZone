import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = ({ isRegisterForm, toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., authenticate with a server)
    console.log(`Username: ${username}, Password: ${password}`);
    // You can perform authentication logic here
    // For a basic example, just logging the login data to the console
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{isRegisterForm ? 'Register' : 'Login'}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          {isRegisterForm ? 'Register' : 'Login'}
        </button>
      </form>
      {isRegisterForm ? (
        <div>
          <Link to="/login" className="form-link">

            Already have an account?
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/forgot-password" className="form-link">
            Forgot Password?
          </Link>
          
          <Link to="/register" className="toggle-button" onClick={toggleForm}>
            Create an Account
          </Link>
        </div>
      )}
    </div>
  );
};

export default LogIn;

