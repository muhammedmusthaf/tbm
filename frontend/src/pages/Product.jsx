// Product.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/product.css';
import { FaBuilding, FaTint, FaBolt, FaCube, FaPaintRoller, FaCubes } from 'react-icons/fa';

const Product = () => {
  const products = [
    { id: 1, name: 'Cement', icon: <FaBuilding /> },
    { id: 2, name: 'Pipes', icon: <FaTint /> },
    { id: 3, name: 'Steel Rods', icon: <FaBolt /> },
    { id: 4, name: 'Sand', icon: <FaCube /> },
    { id: 5, name: 'Bricks', icon: <FaCubes /> },
    { id: 6, name: 'Paints', icon: <FaPaintRoller /> },
  ];

  return (
    <section className="product-section">
      <h2 className="product-title">Top Products Preview</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-icon">{product.icon}</div>
            <h3 className="product-name">{product.name}</h3>
            <Link to="/products" className="view-more-btn">
              View More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;