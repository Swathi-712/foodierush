import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { FaTrash, FaHeart } from 'react-icons/fa';
import { removeFromFavorites } from '../../store/favoritesSlice';
import { addItem } from '../../store/cartSlice';
import './Favorites.css';

const Favorites = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.favorites);

  if (items.length === 0) {
    return (
      <div className="favorites-empty">
        <div className="empty-favorites-content">
          <FaHeart className="empty-icon" />
          <h2>No favorites yet</h2>
          <p>Start adding your favorite dishes and restaurants</p>
          <button className="btn btn-primary" onClick={() => window.location.href = '/menu'}>
            Explore Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="container">
        <h1 className="section-title">Your Favorites</h1>
        <p className="section-subtitle">Items you've saved for later</p>
        
        <div className="favorites-grid">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="favorite-item"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={item.image} alt={item.name} className="favorite-image" />
              <div className="favorite-details">
                <h3>{item.name}</h3>
                <p className="restaurant">{item.restaurant || 'Restaurant'}</p>
                <div className="price">₹{item.price}</div>
              </div>
              <div className="favorite-actions">
                <button 
                  className="add-to-cart-fav"
                  onClick={() => dispatch(addItem(item))}
                >
                  Add to Cart
                </button>
                <button 
                  className="remove-fav"
                  onClick={() => dispatch(removeFromFavorites(item.id))}
                >
                  <FaTrash />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;