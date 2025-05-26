import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.css";
import WhyChoose from './WhyChoose';
import Product from './Product';
import Transport from './Transport';
import Testniomal from './Testniomal';


const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    '/assets/mart.jpg',
    '/assets/mart1.jpg',
    '/assets/mart2.jpg',
    '/assets/mart4.jpg',
    '/assets/mart5.jpg',
    '/assets/mart6.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === backgroundImages.length - 1 ? 0 : prevImage + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="home-container">
      {/* Background slideshow */}
      <div className="slideshow-container">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Your Trusted Construction Partner</h1>
          <p>Supplying quality materials & transport services</p>

          <div className="cta-buttons">
            <Link to="/products" className="cta-button">View Products</Link>
            <Link to="/contact" className="cta-button">Request Quote</Link>
          </div>
        </div>
      </div>

      {/* 🔽 These sections should come AFTER slideshow */}
      <div className="home-sections">
        <Product/>
        <WhyChoose />
        <Transport/>
        <Testniomal/>
       
      </div>
    </div>
  );
};

export default Home;
