// Transport.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/transport.css'; // Ensure you have this CSS file for styling

const Transport = () => {
    const whatsappLink = "https://wa.me/7860006321?text=Hi%20TBM%20Build%20Mart,%20I%20want%20to%20book%20transport%20services";

    return (
        <section className="transport-banner">
            <div className="video-container">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="transport-video"
                    poster="/assets/mart.jpg"
                >
                    <source src="/assets/travel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="content-container">
                <h2 className="banner-title">Need bulk material delivered?</h2>
                <p className="banner-text">We've got 8 powerful 16-wheelers ready to go!</p>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="book-button"
                >
                    <FaWhatsapp className="whatsapp-icon" />
                    Book Transport
                </a>
            </div>
        </section>
    );
};

export default Transport;