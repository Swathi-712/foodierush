import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order in real-time from the 'My Orders' section. We'll also send you SMS and email updates at every step."
    },
    {
      question: "What is the estimated delivery time?",
      answer: "Delivery typically takes 25-35 minutes depending on your location and restaurant preparation time."
    },
    {
      question: "How can I cancel my order?",
      answer: "Orders can be cancelled within 2 minutes of placing them. Go to 'My Orders' and click on cancel order."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer full refunds for cancelled orders or if there's an issue with your delivery. Contact customer support."
    },
    {
      question: "Is there a minimum order value?",
      answer: "Minimum order value varies by restaurant, typically ₹99 - ₹199."
    }
  ];

  return (
    <section className="faq-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Got questions? We've got answers</p>
        </motion.div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;