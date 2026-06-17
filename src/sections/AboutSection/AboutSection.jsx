import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaLeaf, FaAward, FaUsers, FaHeart, FaStar } from 'react-icons/fa';
import './AboutSection.css';

const AboutSection = () => {
  const stats = [
    { icon: <FaUsers />, number: "50,000+", label: "Happy Customers" },
    { icon: <FaTruck />, number: "30 min", label: "Avg Delivery Time" },
    { icon: <FaLeaf />, number: "100+", label: "Healthy Options" },
    { icon: <FaAward />, number: "4.8 ★", label: "Customer Rating" }
  ];

  const milestones = [
    { year: "2020", title: "Journey Begins", description: "Started with 10 restaurants" },
    { year: "2021", title: "50+ Partners", description: "Expanded to 50+ restaurants" },
    { year: "2022", title: "1M Orders", description: "Served 1 million orders" },
    { year: "2023", title: "Top Rated", description: "4.8★ rating on all platforms" }
  ];

  return (
    <section id="about-section" className="about-section">
      <div className="container">
        {/* Hero Section */}
        <motion.div 
          className="about-hero"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-hero-content">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="about-icon-animation"
            >
              <FaHeart className="pulse-icon" />
            </motion.div>
            <h1 className="about-title">
              More Than Just 
              <span className="gradient-text"> Food Delivery</span>
            </h1>
            <p className="about-subtitle">
              We're on a mission to connect food lovers with the best culinary experiences 
              in your city, making every meal memorable.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div 
          className="story-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Stories</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Founded in 2020, <strong>FoodieRush</strong> started with a simple idea: 
                bring the best local restaurants to your doorstep with lightning-fast delivery 
                and exceptional service.
              </p>
              <p>
                Today, we've grown into a community of <strong>50,000+ food lovers</strong> 
                partnering with <strong>100+ premium restaurants</strong> to deliver 
                happiness, one meal at a time.
              </p>
              <div className="mission-vision">
                <div className="mission">
                  <FaStar className="mission-icon" />
                  <h4>Our Mission</h4>
                  <p>To revolutionize food delivery by combining technology, quality, and care.</p>
                </div>
                <div className="vision">
                  <FaStar className="vision-icon" />
                  <h4>Our Vision</h4>
                  <p>To become India's most loved food delivery platform.</p>
                </div>
              </div>
            </div>
            <div className="story-image">
              <motion.img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500" 
                alt="Our Story"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Milestones Timeline */}
        <motion.div 
          className="milestones-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          className="values-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Speed</h3>
              <p>Lightning fast delivery to satisfy your cravings instantly</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💚</div>
              <h3>Quality</h3>
              <p>Partnering only with the best restaurants and chefs</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust</h3>
              <p>Transparent pricing and secure payments</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>24/7 customer support and satisfaction guarantee</p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="team-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Behind The Scenes</h2>
          <p className="section-subtitle">Meet the passionate team making it happen</p>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" />
              <h4>Rahul Sharma</h4>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team Member" />
              <h4>Priya Patel</h4>
              <p>Head of Operations</p>
            </div>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Team Member" />
              <h4>Amit Kumar</h4>
              <p>Tech Lead</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;