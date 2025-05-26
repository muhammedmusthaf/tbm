// Loader.jsx
import React, { useEffect, useState } from 'react';
import "../styles/loader.css"; // Assuming you have a CSS file for styles

const Loader = ({ onLoadComplete, logoSrc }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
        setLoadingProgress(prev => {
          const nextProgress = prev + 5;
      
          if (nextProgress >= 100) {
            clearInterval(interval);
            if (onLoadComplete) {
              setTimeout(() => {
                onLoadComplete();
              }, 500);
            }
            return 100; // Make sure it STAYS at 100
          }
      
          return nextProgress;
        });
      }, 100); // Adjust the interval time as needed (100ms = 10% per second)
      
    
    return () => clearInterval(interval);
  }, [onLoadComplete]);
  
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="tbm-logo">
          {/* Use the provided logo image */}
          <img 
            src={logoSrc || '/assets/logo.png'} 
            alt="TBM Build Mart Logo" 
            className="logo-image"
          />
        </div>
        
        <h2 className="loading-text">Loading TBM Build Mart<span className="loading-dots">...</span></h2>
        
        <div className="spinner-container">
          <div className="spinner"></div>
          <div className="progress-text">{loadingProgress}%</div>
        </div>
        
        <p className="tagline">Your trusted partner in construction</p>
      </div>
    </div>
  );
};

export default Loader;