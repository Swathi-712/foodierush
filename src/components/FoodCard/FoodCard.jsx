import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaRupeeSign, FaHeart, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';
import './FoodCard.css';

const FoodCard = ({ food, onAddToCart, onFavorite, isFavorite, cartQuantity }) => {
  const [quantity, setQuantity] = useState(cartQuantity || 0);

  const handleAddToCart = () => {
    onAddToCart(food);
    setQuantity(prev => prev + 1);
  };

  const handleIncrement = () => {
    onAddToCart(food);
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      // This would need a remove from cart action
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <motion.div
      className="food-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="food-image">
        <img src={food.image} alt={food.name} />
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onFavorite(food)}
        >
          <FaHeart />
        </button>
        {food.isVegetarian && <span className="veg-badge">Veg</span>}
      </div>
      
      <div className="food-content">
        <div className="food-header">
          <h3 className="food-name">{food.name}</h3>
          <div className="rating">
            <FaStar className="star-icon" />
            <span>{food.rating}</span>
          </div>
        </div>
        
        <p className="restaurant-name">{food.restaurant}</p>
        <p className="food-description">{food.description}</p>
        
        <div className="food-footer">
          <div className="price">
            <FaRupeeSign />
            <span>{food.price}</span>
          </div>
          
          {quantity === 0 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              <FaShoppingCart /> Add
            </motion.button>
          ) : (
            <div className="quantity-controls">
              <button onClick={handleDecrement} className="qty-btn">
                <FaMinus />
              </button>
              <span className="quantity">{quantity}</span>
              <button onClick={handleIncrement} className="qty-btn">
                <FaPlus />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;