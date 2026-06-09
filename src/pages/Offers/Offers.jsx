import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTag, FaClock, FaCopy, FaCheck } from 'react-icons/fa';
import './Offers.css';

const Offers = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const offers = [
    {
      id: 1,
      title: "50% OFF",
      description: "On your first order",
      code: "FOODIE50",
      validTill: "Dec 31, 2024",
      minOrder: 199,
      discount: "Up to ₹150",
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "On orders above ₹500",
      code: "FREEDEL",
      validTill: "Nov 30, 2024",
      minOrder: 500,
      discount: "Free Delivery",
      bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "₹100 Cashback",
      description: "On prepaid orders",
      code: "CASH100",
      validTill: "Dec 15, 2024",
      minOrder: 399,
      discount: "₹100 Cashback",
      bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "20% OFF",
      description: "On orders above ₹300",
      code: "SAVE20",
      validTill: "Dec 10, 2024",
      minOrder: 300,
      discount: "Up to ₹200",
      bgColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      title: "Buy 1 Get 1",
      description: "On selected items",
      code: "BOGO",
      validTill: "Dec 20, 2024",
      minOrder: 0,
      discount: "BOGO",
      bgColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 6,
      title: "Weekend Special",
      description: "Extra 15% off on weekends",
      code: "WEEKEND15",
      validTill: "Dec 31, 2024",
      minOrder: 250,
      discount: "15% OFF",
      bgColor: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ];

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="offers-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="offers-header"
        >
          <h1 className="section-title">Exclusive Offers 🎉</h1>
          <p className="section-subtitle">Great discounts and deals waiting for you</p>
        </motion.div>

        <div className="offers-grid">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="offer-card-enhanced"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="offer-banner" style={{ background: offer.bgColor }}>
                <div className="offer-badge">
                  <FaTag />
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </div>
              <div className="offer-details">
                <div className="offer-info">
                  <span className="offer-min">Min order: ₹{offer.minOrder}</span>
                  <span className="offer-discount">{offer.discount}</span>
                </div>
                <div className="offer-code-wrapper">
                  <div className="offer-code-display">
                    <span className="code-text">{offer.code}</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(offer.code)}
                    >
                      {copiedCode === offer.code ? <FaCheck /> : <FaCopy />}
                      {copiedCode === offer.code ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div className="offer-validity">
                  <FaClock />
                  <span>Valid till {offer.validTill}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;