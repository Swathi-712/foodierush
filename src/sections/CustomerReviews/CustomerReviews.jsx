import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { reviewsData } from '../../data/reviewsData';
import './CustomerReviews.css';

const CustomerReviews = () => {
  return (
    <section className="customer-reviews section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real experiences from real food lovers</p>
        </motion.div>
        
        <div className="reviews-grid">
          {reviewsData.map((review, index) => (
            <motion.div
              key={review.id}
              className="review-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < review.rating ? 'star filled' : 'star'} />
                ))}
              </div>
              <p className="review-comment">{review.comment}</p>
              <div className="reviewer-info">
                <img src={review.image} alt={review.name} className="reviewer-image" />
                <div>
                  <h4>{review.name}</h4>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;