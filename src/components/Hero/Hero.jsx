import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-text"
          >
            <span className="hero-badge">🔥 Food Delivery Made Easy</span>
            <h1 className="hero-title">
              Craving Something{' '}
              <span className="gradient-text">Delicious?</span>
            </h1>
            <p className="hero-description">
              Order from the best restaurants in your city. Fast delivery, 
              amazing discounts, and mouth-watering food delivered right to your doorstep.
            </p>
            
            <div className="hero-buttons">
              <Link to="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                >
                  Order Now <FaArrowRight />
                </motion.button>
              </Link>
              <Link to="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary"
                >
                  Explore Menu
                </motion.button>
              </Link>
            </div>

            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search for restaurants or dishes..."
                className="search-input"
              />
              <button className="search-btn">Search</button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <h3>100+</h3>
                <p>Restaurants</p>
              </div>
              <div className="stat">
                <h3>50k+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>30 min</h3>
                <p>Avg Delivery</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-image"
          >
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600"
                alt="Delicious Food"
                className="hero-img"
              />
              <div className="floating-card card-1">
                <span>⭐ 4.8</span>
                <p>20% OFF</p>
              </div>
              <div className="floating-card card-2">
                <span>🚚 Free Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;