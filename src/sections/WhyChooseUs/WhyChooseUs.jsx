import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaHeadset, FaLeaf } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: 'Lightning Fast Delivery',
      description: 'Get your food delivered in 30 minutes or less'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safe & Hygienic',
      description: 'Strict safety protocols and contactless delivery'
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Customer Support',
      description: 'Round the clock assistance for your orders'
    },
    {
      icon: <FaLeaf />,
      title: 'Fresh Ingredients',
      description: '100% fresh and high-quality ingredients'
    }
  ];

  return (
    <section className="why-choose-us section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Why Choose FoodieRush?</h2>
          <p className="section-subtitle">We deliver exceptional experiences</p>
        </motion.div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;