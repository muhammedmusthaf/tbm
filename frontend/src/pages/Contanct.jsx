import React from "react";
import axios from "axios";
import "../styles/contact.css"; // Your CSS file
import { MapPin, Phone, Clock, Truck, Mail } from "lucide-react";

const Contanct = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await axios.post("http://localhost:4000/api/contact/contact-submit", data);
      console.log("Success:", response.data);
      alert("Message sent successfully!");
      // Clear form
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    } catch (error) {
      console.error("Error sending message:", error.response || error.message);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="tbm-contact-container">
      <div className="tbm-contact-header">
        <h1>NEED HELP OR HAVE A QUESTION?</h1>
        <p>Reach out to us—we're here to help you build better.</p>
      </div>

      <div className="tbm-contact-section tbm-location-section">
        <h2>OUR LOCATION</h2>
        <div className="tbm-location-details">
          <div className="tbm-info-card">
            <div className="tbm-info-icon">
              <MapPin size={28} />
            </div>
            <div className="tbm-info-content">
              <h3> Tabassam Build Mart Hardware & Construction Supplies</h3>
              <p>tabassam al qasr, Kolavoor, mangalore, Karnataka 574162</p>
              <p>kolavoor, Karnataka, 574162</p>
            </div>
          </div>

          <div className="tbm-info-row">
            <div className="tbm-info-card">
              <div className="tbm-info-icon">
                <Phone size={28} />
              </div>
              <div className="tbm-info-content">
                <h4>Phone</h4>
                <p>+91 7860006321</p>
              </div>
            </div>

            <div className="tbm-info-card">
              <div className="tbm-info-icon">
                <Mail size={28} />
              </div>
              <div className="tbm-info-content">
                <h4>Email</h4>
                <p>support@buildmart.com</p>
              </div>
            </div>
          </div>

          <div className="tbm-info-row">
            <div className="tbm-info-card tbm-info-card-wide">
              <div className="tbm-info-icon">
                <Clock size={28} />
              </div>
              <div className="tbm-info-content">
                <h4>Business Hours</h4>
                <div className="tbm-hours-grid">
                  <div className="tbm-hours-day">Monday – Saturday:</div>
                  <div className="tbm-hours-time">07:30 AM – 07:30 PM</div>
                  <div className="tbm-hours-day">Sunday:</div>
                  <div className="tbm-hours-time">07:00 AM – 12:30 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="tbm-info-card tbm-delivery-card">
            <div className="tbm-info-icon tbm-truck-icon">
              <Truck size={28} />
            </div>
            <div className="tbm-info-content">
              <h4>Delivery Service</h4>
              <p>We own 8 transport vehicles for smooth and timely delivery across the region.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tbm-contact-section tbm-form-section">
        <h2>GET IN TOUCH WITH US</h2>
        <div className="tbm-contact-form">
          <div className="tbm-form-row">
            <div className="tbm-form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="tbm-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
          </div>
          <div className="tbm-form-row">
            <div className="tbm-form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" />
            </div>
            <div className="tbm-form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
            </div>
          </div>
          <div className="tbm-form-row">
            <div className="tbm-form-group tbm-form-group-full">
              <label htmlFor="message">Message / Inquiry</label>
              <textarea id="message"></textarea>
            </div>
          </div>
          <div className="tbm-form-actions">
            <button className="tbm-send-button" onClick={handleSubmit}>
              SEND MESSAGE
            </button>
            <p className="tbm-response-time">We usually respond within 24 hours.</p>
          </div>
        </div>
      </div>

      <div className="tbm-contact-section tbm-map-section">
        <h2>FIND US</h2>
        <div className="tbm-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.247369392044!2d74.984033!3d12.9695397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a95e4468e5e3%3A0xc149c852fbc64991!2sTabassam%20Build%20Mart!5e0!3m2!1sen!2sin!4v1715422438409!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Build Mart Location"
            className="tbm-google-map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contanct;
