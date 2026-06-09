import React from 'react';
import Hero from '../../components/Hero/Hero';
import TopRestaurants from '../../sections/TopRestaurants/TopRestaurants';
import TrendingFoods from '../../sections/TrendingFoods/TrendingFoods';
import WhyChooseUs from '../../sections/WhyChooseUs/WhyChooseUs';
import CustomerReviews from '../../sections/CustomerReviews/CustomerReviews';
import AppDownload from '../../sections/AppDownload/AppDownload';
import OffersSection from '../../sections/OffersSection/OffersSection';
import FAQSection from '../../sections/FAQSection/FAQSection';
import Newsletter from '../../sections/Newsletter/Newsletter';
import AboutSection from '../../sections/AboutSection/AboutSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutSection />
      <TopRestaurants />
      <TrendingFoods />
      <WhyChooseUs />
      <OffersSection />
      <CustomerReviews />
      <AppDownload />
      <FAQSection />
      <Newsletter />
    </div>
  );
};

export default Home;