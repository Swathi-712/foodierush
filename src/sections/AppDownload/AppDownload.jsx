import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import './AppDownload.css';

const AppDownload = () => {
  return (
    <section className="app-download section">
      <div className="container">
        <div className="app-content">
          <motion.div
            className="app-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Get the FoodieRush App</h2>
            <p>Order faster, track delivery live, and get exclusive app-only offers</p>
            <div className="app-buttons">
              <button className="app-btn">
                <FaApple />
                <div>
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </button>
              <button className="app-btn">
                <FaGooglePlay />
                <div>
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>
          </motion.div>
          
          <motion.div
            className="app-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400" alt="App Mockup" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;