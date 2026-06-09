import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import FoodCard from '../../components/FoodCard/FoodCard';
import { foodsData } from '../../data/foodsData';
import { addItem, increaseQuantity } from '../../store/cartSlice';
import { addToFavorites, removeFromFavorites } from '../../store/favoritesSlice';
import './TrendingFoods.css';

const TrendingFoods = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const cart = useSelector((state) => state.cart.items);
  const trendingFoods = foodsData.slice(0, 6); // Show first 6 foods as trending

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
    <section className="trending-foods section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Trending Now 🔥</h2>
          <p className="section-subtitle">Most popular dishes this week</p>
        </motion.div>
        
        <div className="foods-grid">
          {trendingFoods.map((food, index) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
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
      </div>
    </section>
  );
};

export default TrendingFoods;