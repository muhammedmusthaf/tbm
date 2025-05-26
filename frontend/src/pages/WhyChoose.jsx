// WhyChoose.jsx
import React from 'react';
import "../styles/whychoose.css";

const WhyChoose = () => {
    return (
        <section className="why-choose-section">
            <div className="why-choose-header">
                <h2 className="section-title">Why Choose TBM Build Mart ?</h2>
                <p className="content-description">
                    At <strong>TBM Build Mart</strong>, we go beyond just supplying construction materials — 
                    we deliver quality, reliability, and unmatched customer service. From foundation 
                    to finish, we're your trusted partner every step of the way.
                </p>

            </div>

            <div className="benefits-container">
                <div className="benefit-card">
                    <div className="icon-container">
                        <img src="/assets/esteemed.png" alt="Quality" className="benefit-icon" />
                    </div>
                    <h3 className="benefit-title">Quality Materials</h3>
                    <p className="benefit-description">We source only premium building materials to ensure durability and reliability in every project.</p>
                </div>

                <div className="benefit-card">
                    <div className="icon-container">
                        <img src="/assets/truck.png" alt="Transport" className="benefit-icon" />
                    </div>
                    <h3 className="benefit-title">Own Transport Fleet</h3>
                    <p className="benefit-description">Our dedicated fleet ensures timely delivery of materials directly to your construction site.</p>
                </div>

                <div className="benefit-card">
                    <div className="icon-container">
                        <img src="/assets/trust.png" alt="Builders" className="benefit-icon" />
                    </div>
                    <h3 className="benefit-title">Trusted by Builders</h3>
                    <p className="benefit-description">With over 100+ satisfied contractors, we're the preferred choice for professional builders.</p>
                </div>

                <div className="benefit-card">
                    <div className="icon-container">
                        <img src="/assets/fast-delivery.png" alt="On-time" className="benefit-icon" />
                    </div>
                    <h3 className="benefit-title">On-time Delivery</h3>
                    <p className="benefit-description">We understand the importance of schedules and guarantee punctual deliveries every time.</p>
                </div>
            </div>


        </section>
    );
};

export default WhyChoose;