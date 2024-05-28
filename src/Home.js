import React, { useState } from 'react';
import './App.css';

const Home = () => {
  // State variables for username and login status
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Handle login action
  const handleLogin = () => {
    if (username) {
      setLoggedIn(true);
    }
  };

  // Handle logout action
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="container home">
      {!loggedIn ? (
        <div className="form-inline">
          {/* Input for username */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Login button */}
          <button className="btn btn-primary" onClick={handleLogin} disabled={!username}>Login</button>
        </div>
      ) : (
        <>
          {/* Welcome message */}
          <h1>Welcome {username}</h1>
          {/* Logout button */}
          <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Home;
