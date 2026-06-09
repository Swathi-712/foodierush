import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import FoodCard from '../../components/FoodCard/FoodCard';
import { foodsData } from '../../data/foodsData';
import { addItem, increaseQuantity } from '../../store/cartSlice';
import { addToFavorites, removeFromFavorites } from '../../store/favoritesSlice';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [location]);

  const categories = ['All', ...new Set(foodsData.map(food => food.category))];

  const filteredFoods = foodsData.filter(food => {
    const matchesCategory = activeCategory === 'All' || food.category === activeCategory;
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          food.restaurant.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (food) => {
    const existingItem = cart.find(item => item.id === food.id);
    if (existingItem) {
      dispatch(increaseQuantity(food.id));
    } else {
      dispatch(addItem(food));
    }
  };

  const handleFavorite = (food) => {
    const isFavorite = favorites.some(item => item.id === food.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(food.id));
    } else {
      dispatch(addToFavorites(food));
    }
  };

  const isFavorite = (id) => favorites.some(item => item.id === id);
  const getCartQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="menu-page">
      <div className="container">
        <div className="menu-header">
          <h1 className="section-title">Our Menu</h1>
          <p className="section-subtitle">Explore our delicious offerings</p>
        </div>

        <div className="menu-controls">
          <div className="search-wrapper-enhanced">
            <input
              type="text"
              placeholder="Search for dishes or restaurants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="menu-search-enhanced"
            />
          </div>

          <div className="category-filters">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {filteredFoods.length > 0 ? (
          <div className="menu-grid">
            {filteredFoods.map((food, index) => (
              <motion.div
                key={food.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <FoodCard
                  food={food}
                  onAddToCart={handleAddToCart}
                  onFavorite={handleFavorite}
                  isFavorite={isFavorite(food.id)}
                  cartQuantity={getCartQuantity(food.id)}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No items found</h3>
            <p>Try searching for something else</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;