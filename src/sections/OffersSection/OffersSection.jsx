import React from 'react';
import { motion } from 'framer-motion';
import { FaTag, FaClock } from 'react-icons/fa';
import './OffersSection.css';

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      title: "50% OFF",
      description: "On your first order",
      code: "FOODIE50",
      validTill: "Dec 31, 2024"
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "On orders above ₹500",
      code: "FREEDEL",
      validTill: "Nov 30, 2024"
    },
    {
      id: 3,
      title: "₹100 Cashback",
      description: "On prepaid orders",
      code: "CASH100",
      validTill: "Dec 15, 2024"
    }
  ];

  return (
    <section id="offers-section" className="offers-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Exclusive Offers 🎉</h2>
          <p className="section-subtitle">Great discounts and deals for you</p>
        </motion.div>
        
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="offer-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="offer-icon">
                <FaTag />
              </div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <div className="offer-code">{offer.code}</div>
              <div className="offer-valid">
                <FaClock />
                <span>Valid till {offer.validTill}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;