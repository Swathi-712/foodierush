import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { restaurantsData } from '../../data/restaurantsData';
import { addToFavorites, removeFromFavorites } from '../../store/favoritesSlice';
import './TopRestaurants.css';

const TopRestaurants = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const topRestaurants = restaurantsData; // Show all 6 restaurants

  const handleFavorite = (restaurant) => {
    const isFavorite = favorites.some(item => item.id === restaurant.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(restaurant.id));
    } else {
      dispatch(addToFavorites({ ...restaurant, type: 'restaurant' }));
    }
  };

  const isFavorite = (id) => favorites.some(item => item.id === id);

  return (
    <section className="top-restaurants section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Top Rated Restaurants</h2>
          <p className="section-subtitle">Most loved restaurants in your city</p>
        </motion.div>
        
        <div className="restaurants-grid">
          {topRestaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <RestaurantCard
                restaurant={restaurant}
                onFavorite={handleFavorite}
                isFavorite={isFavorite(restaurant.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRestaurants;