import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "../styles/aboutus.css"; // Assuming you have a CSS file for styles
import { Shield, Truck, Package, MapPin, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="about-containerfe">
            {/* Header Section */}
            <motion.div
                className="header-sectionfe"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8 }}
            >
                <h1>About TBM Build Mart</h1>
                <p className="taglinefe">Supplying Strength, Supporting Dreams</p>
                <div className="banner-imagefe">
                    {/* Large banner image placeholder */}
                    <img src="/assets/i-mart.jpg" alt="TBM Build Mart warehouse" className="responsive-imgfe" />
                </div>
            </motion.div>

            {/* Our Story Section */}
            <motion.div
                className="story-sectionfe"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="section-contentfe">
                    <div className="text-contentfe">
                        <h2 className="section-titlefe">Our Story</h2>
                        <ul className="list-contentfe">
                            <li className="list-itemfe">Founded in 2010 by construction professionals who understood the challenges of sourcing quality materials</li>
                            <li className="list-itemfe">Inspired by the vision to create a one-stop solution for builders and contractors of all sizes</li>
                            <li className="list-itemfe">Committed to providing construction excellence through superior products and exceptional service</li>
                        </ul>
                    </div>
                    <div className="image-contentfe">
                        <img src="/assets/build-mart.jpg" alt="TBM Build Mart storefront" className="responsive-imgfe" />
                    </div>
                </div>
            </motion.div>

            {/* What Makes Us Different Section */}
            <motion.div
                className="difference-sectionfe"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h2 className="section-titlefe">What Makes Us Different</h2>
                <div className="cards-containerfe">
                    <motion.div
                        className="cardfe"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Shield size={48} />
                        <h3 className="card-titlefe">Quality Assured</h3>
                        <p className="card-textfe">Rigorously tested materials meeting industry standards</p>
                    </motion.div>

                    <motion.div
                        className="cardfe"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Truck size={48} />
                        <h3 className="card-titlefe">Fast Delivery</h3>
                        <p className="card-textfe">Same-day delivery options for urgent project needs</p>
                    </motion.div>

                    <motion.div
                        className="cardfe"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Package size={48} />
                        <h3 className="card-titlefe">All Materials Under One Roof</h3>
                        <p className="card-textfe">Comprehensive inventory saving you time and hassle</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Mission & Values Section */}
            <motion.div
                className="mission-values-sectionfe"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <h2 className="section-titlefe">Our Mission & Values</h2>
                <div className="mission-values-containerfe">
                    <div className="mission-containerfe">
                        <MapPin size={48} />
                        <h3 className="subsection-titlefe">Mission</h3>
                        <ul className="mission-listfe">
                            <li className="mission-itemfe">Empower builders with quality materials</li>
                            <li className="mission-itemfe">Streamline construction supply processes</li>
                            <li className="mission-itemfe">Support sustainable building practices</li>
                        </ul>
                    </div>

                    <div className="values-containerfe">
                        <Heart size={48} />
                        <h3 className="subsection-titlefe">Values</h3>
                        <ul className="values-listfe">
                            <li className="values-itemfe">Integrity in every transaction</li>
                            <li className="values-itemfe">Reliability you can count on</li>
                            <li className="values-itemfe">Safety as our top priority</li>
                            <li className="values-itemfe">Service that exceeds expectations</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Materials in Action Section */}
            <motion.div
                className="materials-action-sectionfe"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <div className="section-contentfe">
                    <div className="text-contentfe">
                        <h2 className="section-titlefe">Materials in Action</h2>
                        <p className="action-textfe">We've proudly supplied 500+ builders & 1000+ projects</p>
                    </div>
                    <div className="action-image-containerfe">
                        <img src="/assets/proj.jpg" alt="TBM materials at construction site" className="responsive-imgfe" />
                        <div className="overlay-textfe">
                            <h3 className="overlay-titlefe">See how TBM powers real-world builds...</h3>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Trusted By Many Section */}
            <motion.div
                className="trusted-sectionfe"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 1.0 }}
            >
                <h2 className="section-titlefe">Trusted By Many</h2>
                <div className="testimonial-carouselfe">
                    {/* This would be expanded with actual testimonials */}
                    <div className="testimonialfe">
                        <p className="testimonial-textfe">"TBM's quality materials and reliable delivery have been essential to our success."</p>
                        <p className="client-namefe">- Cornerstone Construction</p>
                    </div>
                </div>
            </motion.div>

            {/* Call to Action Section */}
            <motion.div
                className="cta-sectionfe"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <h3 className="cta-titlefe">Want to build with the best?</h3>
                <div className="button-containerfe">
                    <motion.button
                        className="cta-buttonfe primaryfe"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/products")} // Redirect to products page
                    >
                        View Our Products
                    </motion.button>
                    <motion.button
                        className="cta-buttonfe secondaryfe"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/contact")} // Redirect to contact page
                    >
                        Contact Us
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutUs;