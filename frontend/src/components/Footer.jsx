import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
import "../styles/footer.css";


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section logo-section">
                    <img src="/assets/logo.png" alt="TBM Buildmart Logo" className="footer-logo" />
                    <p className="company-description">
                        Your trusted partner for all building materials and home improvement needs.
                    </p>
                </div>
                
                <div className="footer-section">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/transport">Transport</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3 className="footer-heading">Contact Info</h3>
                    <ul className="contact-info">
                        <li><FaPhone /> +91 7860006321</li>
                        <li><FaEnvelope /> tabassambuildmart@gmail.com</li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3 className="footer-heading">Address</h3>
                    <p className="address">
                        <FaMapMarker /> tabassam al qasr, Kolavoor, mangalore, Karnataka 574144
                    </p>
                </div>
            </div>
            
            <div className="social-credit">
                <div className="social-links">
                    <a href="https://wa.me/7860006321" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/tabassam_transport_/?__pwa=1" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://facebook.com/tbmbuildmart" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="social-icon" />
                    </a>
                </div>
                
                <p className="credit-text">
                    This website is designed by Muhammed Musthafa
                </p>
            </div>
        </footer>
    );
};

export default Footer;