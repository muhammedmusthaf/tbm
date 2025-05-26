import { FaTruck, FaMapMarkerAlt, FaClock, FaMapMarkedAlt, FaMoneyBillWave, FaIdBadge, FaWeightHanging } from 'react-icons/fa';
import axios from 'axios';
import "../styles/transportt.css";
import React, { useRef } from 'react';


const Transportt = () => {
  const vehicles = [
    { type: '16-Wheeler', capacity: '30 Tons', availability: 'Available', useCases: ['Cement', 'Steel Beams'], img: 'assets/truck1.jpg' },
    { type: 'Mini-Truck', capacity: '5 Tons', availability: 'Limited', useCases: ['Tiles', 'Tools'], img: 'assets/laka.jpg' },
    { type: 'Pickup Van', capacity: '2 Tons', availability: 'Available', useCases: ['Hardware', 'Pipes'], img: 'assets/pickup.jpg' },
  ];

  const serviceAreas = ['Andhra Pradesh','Tamil Nadu','Kerala','Karnataka','Telangana','Maharashtra','Goa','Puducherry','Delhi','Gujarat'];
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const locationRef = useRef();
  const materialRef = useRef();
  const weightRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transportData = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      location: locationRef.current.value,
      material: materialRef.current.value,
      weight: weightRef.current.value
    };

    try {
      const res = await axios.post("https://tbm-fqrq.onrender.com/api/transport/submit", transportData);
      console.log("Transport data submitted:", res.data);
      alert("Inquiry submitted successfully!");
    } catch (err) {
      console.error("Error submitting transport data:", err);
      alert("Failed to submit inquiry.");
    }
  };




  return (
    <div className="trns-container">
      {/* Hero Section */}
      <section className="trns-hero">
        <div className="trns-hero-content">
          <h1 className="trns-hero-title">Reliable Transport Services</h1>
          <p className="trns-hero-subtitle">Delivering construction essentials across the region with safety and speed</p>
          <button className="trns-hero-cta" onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}>
            Book a Delivery <FaTruck className="trns-cta-icon" />
          </button>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="trns-fleet">
        <h2 className="trns-section-title">Our Transport Fleet</h2>
        <div className="trns-fleet-grid">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="trns-fleet-card">
              <div className="trns-card-image-container">
                <img src={vehicle.img} alt={vehicle.type} className="trns-vehicle-image" />
                <span className={`trns-availability-badge ${vehicle.availability === 'Available' ? 'trns-available' : 'trns-limited'}`}>
                  {vehicle.availability}
                </span>
              </div>
              <div className="trns-vehicle-info">
                <h3><FaTruck className="trns-vehicle-icon" /> {vehicle.type}</h3>
                <p className="trns-capacity"><strong>Capacity:</strong> {vehicle.capacity}</p>
                <div className="trns-use-cases">
                  <p className="trns-use-cases-label">Best for:</p>
                  <div className="trns-use-cases-tags">
                    {vehicle.useCases.map((useCase, i) => (
                      <span key={i} className="trns-use-case-tag">{useCase}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas - Redesigned */}
      <section className="trns-service-areas">
        <h2 className="trns-section-title">
          <FaMapMarkerAlt className="trns-section-icon" /> Our Service Areas
        </h2>
        <div className="trns-areas-container">
          {serviceAreas.map((area, index) => (
            <div key={index} className="trns-area-item">
              <div className="trns-area-marker">
                <FaMapMarkerAlt />
              </div>
              <span className="trns-area-name">{area}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form - Redesigned */}
      <section className="trns-booking" id="booking">
        <h2 className="trns-section-title">Transport Inquiry</h2>
        <form className="trns-booking-form" onSubmit={handleSubmit}>
          <div className="trns-form-row">
            <div className="trns-input-group">
              <label><FaIdBadge /> Name</label>
              <input type="text" placeholder="Your name" ref={nameRef} />
            </div>
            <div className="trns-input-group">
              <label><FaIdBadge /> Contact Number</label>
              <input type="tel" placeholder="Phone number" ref={phoneRef} />
            </div>
          </div>

          <div className="trns-form-row">
            <div className="trns-input-group">
              <label><FaMapMarkerAlt /> Email</label>
              <input type="email" placeholder="Email address" ref={emailRef} />
            </div>
            <div className="trns-input-group">
              <label><FaMapMarkerAlt /> Delivery Location</label>
              <input type="text" placeholder="Delivery address" ref={locationRef} />
            </div>
          </div>

          <div className="trns-form-row">
            <div className="trns-input-group">
              <label><FaTruck /> Material Type</label>
              <input type="text" placeholder="e.g., Cement, Steel" ref={materialRef} />
            </div>
            <div className="trns-input-group">
              <label><FaWeightHanging /> Approx. Weight</label>
              <input type="text" placeholder="Estimated weight" ref={weightRef} />
            </div>
          </div>

          <button className="trns-submit-button">
            Request Quote <FaTruck className="trns-button-icon" />
          </button>
        </form>
      </section>
    </div>





















































































  );
};

export default Transportt;