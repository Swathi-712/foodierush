import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrash, FaPlus, FaMinus, FaRupeeSign, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { removeItem, increaseQuantity, decreaseQuantity, clearCart } from '../../store/cartSlice';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount } = useSelector((state) => state.cart);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const deliveryCharge = totalAmount > 500 ? 0 : 40;
  const tax = totalAmount * 0.05;
  const grandTotal = totalAmount + deliveryCharge + tax;

  const handleCheckout = () => {
    setShowCheckoutModal(true);
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      dispatch(clearCart());
      setShowCheckoutModal(false);
      setOrderPlaced(false);
      navigate('/');
    }, 3000);
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="cart-empty">
        <div className="empty-cart-content">
          <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty Cart" className="empty-cart-img" />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet</p>
          <Link to="/menu">
            <button className="btn btn-primary">Browse Menu</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <Link to="/" className="back-link">
            <FaArrowLeft /> Continue Shopping
          </Link>
          <h1 className="section-title">Your Cart</h1>
        </div>

        <div className="cart-grid">
          <div className="cart-items">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  className="cart-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                >
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="restaurant">{item.restaurant}</p>
                    <div className="item-price">
                      <FaRupeeSign />
                      <span>{item.price}</span>
                    </div>
                  </div>
                  
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item.id))}>
                        <FaPlus />
                      </button>
                    </div>
                    <div className="item-total">
                      <FaRupeeSign />
                      <span>{item.totalPrice}</span>
                    </div>
                    <button 
                      className="remove-item"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal</span>
                <span><FaRupeeSign />{totalAmount}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Charge</span>
                <span>{deliveryCharge === 0 ? 'Free' : <><FaRupeeSign />{deliveryCharge}</>}</span>
              </div>
              <div className="summary-row">
                <span>Tax (5%)</span>
                <span><FaRupeeSign />{tax.toFixed(0)}</span>
              </div>
              <div className="summary-row total">
                <span>Grand Total</span>
                <span><FaRupeeSign />{grandTotal.toFixed(0)}</span>
              </div>
            </div>
            
            <button className="checkout-btn btn btn-primary" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            
            <button 
              className="clear-cart-btn"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckoutModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !orderPlaced && setShowCheckoutModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {!orderPlaced ? (
                <>
                  <h2>Checkout</h2>
                  <div className="checkout-form">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="Enter phone number" />
                    </div>
                    <div className="form-group">
                      <label>Delivery Address</label>
                      <textarea rows="3" placeholder="Enter your full address"></textarea>
                    </div>
                    <div className="payment-summary">
                      <h3>Payment Summary</h3>
                      <p>Total Amount: ₹{grandTotal.toFixed(0)}</p>
                    </div>
                    <button className="place-order-btn" onClick={handlePlaceOrder}>
                      Place Order
                    </button>
                  </div>
                </>
              ) : (
                <div className="order-success">
                  <FaCheckCircle className="success-icon" />
                  <h2>Order Placed Successfully!</h2>
                  <p>Your food will be delivered in 30-40 minutes</p>
                  <p className="order-id">Order ID: #{Math.floor(Math.random() * 1000000)}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;