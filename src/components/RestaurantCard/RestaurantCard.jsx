import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaRupeeSign, FaHeart } from 'react-icons/fa';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant, onFavorite, isFavorite }) => {
  return (
    <motion.div
      className="restaurant-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-image">
        <img src={restaurant.image} alt={restaurant.name} />
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onFavorite(restaurant)}
        >
          <FaHeart />
        </button>
        {restaurant.isPremium && <span className="premium-badge">Premium</span>}
      </div>
      
      <div className="card-content">
        <h3 className="restaurant-name">{restaurant.name}</h3>
        
        <div className="rating">
          <FaStar className="star-icon" />
          <span>{restaurant.rating}</span>
          <span className="dot">•</span>
          <span>{restaurant.deliveryTime}</span>
        </div>
        
        <div className="price-info">
          <FaRupeeSign />
          <span>{restaurant.priceForTwo} for two</span>
        </div>
        
        <div className="offers">
          {restaurant.offers.map((offer, index) => (
            <span key={index} className="offer-tag">{offer}</span>
          ))}
        </div>
        
        <div className="categories">
          {restaurant.categories.map((cat, index) => (
            <span key={index} className="category">{cat}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;