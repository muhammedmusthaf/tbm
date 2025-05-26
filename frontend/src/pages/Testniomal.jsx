// Testimonials.jsx
import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "../styles/testniomal.css"

const Testniomal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Muhammed Azeez",
      text: "TBM Build Mart has been our go-to supplier for quality materials. Their timely delivery and professional service is unmatched in the industry.",
      role: "Construction Manager"
    },
    {
      name: "Mohan",
      text: "The consistency in material quality and reliable transport services have significantly improved our project timelines. Highly recommended!",
      role: "Project Lead"
    },
    {
      name: "Muhammed Musthaf",
      text: "Best construction material provider in the region. Their 24/7 support and technical expertise make them our preferred partner.",
      role: "Client"
    },
    {
      name: "Kalandar",
      text: "TBM Build Mart has been a game changer for our construction projects. Their materials are top-notch and the delivery is always on time.",
      role: "Site Supervisor"
    },
    {
      name: "Muddassir",
      text: "We trust TBM Build Mart for all our construction needs. Their quality assurance and customer service are exceptional.",
      role: "Architect"
    },
    {
      name: "Sadiq",
      text: "The best place to get construction materials. Their team is knowledgeable and always ready to assist.",
      role: "General Contractor"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Client Testimonials</h2>
        <div className="controls">
          <button onClick={prevTestimonial} className="nav-btn">
            <FaChevronLeft />
          </button>
          <button onClick={nextTestimonial} className="nav-btn">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="carousel-container">
        {testimonials.map((testimonial, index) => (
          <div 
            className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            key={index}
          >
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="client-info">
              <h3 className="client-name">{testimonial.name}</h3>
              <p className="client-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dots-container">
        {testimonials.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testniomal;