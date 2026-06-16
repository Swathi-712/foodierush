import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaHeart, FaBars, FaTimes, FaUser, FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const cartQuantity = useSelector((state) => state.cart?.totalQuantity || 0);
  const favoritesCount = useSelector((state) => state.favorites?.items?.length || 0);

  const scrollToOffers = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const offersSection = document.getElementById('offers-section');
        if (offersSection) {
          offersSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const offersSection = document.getElementById('offers-section');
      if (offersSection) {
        offersSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const scrollToAbout = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/', action: null },
    { name: 'About', path: null, action: scrollToAbout },
    { name: 'Menu', path: '/menu', action: null },
    { name: 'Offers', path: null, action: scrollToOffers },
    { name: 'Contact', path: '/contact', action: null },
  ];

  const handleLinkClick = (link) => {
    if (link.action) {
      link.action();
    } else if (link.path) {
      navigate(link.path);
    }
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/menu?search=${searchQuery}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <span className="logo-text">Foodie</span>
          <span className="logo-dot">Rush</span>
        </Link>

        <div className="search-wrapper">
          <form onSubmit={handleSearch} className="nav-search-form">
            <FaSearch className="search-icon-small" />
            <input
              type="text"
              placeholder="Search for restaurants or dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="nav-search-input"
            />
          </form>
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link)}
              className="nav-link-btn"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="nav-icons">
          <Link to="/favorites" className="nav-icon" onClick={() => setIsOpen(false)}>
            <FaHeart />
            {favoritesCount > 0 && <span className="badge">{favoritesCount}</span>}
          </Link>
          
          <Link to="/cart" className="nav-icon" onClick={() => setIsOpen(false)}>
            <FaShoppingCart />
            {cartQuantity > 0 && <span className="badge">{cartQuantity}</span>}
          </Link>

          <Link to="/profile" className="nav-icon" onClick={() => setIsOpen(false)}>
            <FaUser />
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
          {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link)}
              className="mobile-link-btn"
            >
              {link.name}
            </button>
          ))}
          <Link to="/favorites" className="mobile-link" onClick={() => setIsOpen(false)}>
            Favorites
          </Link>
          <Link to="/cart" className="mobile-link" onClick={() => setIsOpen(false)}>
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;