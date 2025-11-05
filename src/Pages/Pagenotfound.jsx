import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pagenotfound.css';

const PageNotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="pagenotfound-container">
      <img src="https://png.pngtree.com/png-vector/20210219/ourmid/pngtree-colorful-neon-glitch-404-text-png-image_2928701.jpg" alt="404 Not Found" className="pagenotfound-image" />
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <p>Maybe you took a wrong turn while building your resume?</p>
      <button onClick={goHome}>Back to Home</button>
    </div>
  );
};

export default PageNotFound;
