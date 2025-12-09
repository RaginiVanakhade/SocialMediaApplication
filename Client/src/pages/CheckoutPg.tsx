import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import "../Style/CheckoutPg.css";

const CheckoutPg = () => {
  const [billingOpen, setBillingOpen] = useState(true);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');

  return (
    <div className="checkout-page">
      <div className="left-side">
        {/* Billing Section */}
        <div className="main-section">
          <div className="section-header" onClick={() => setBillingOpen(!billingOpen)}>
            <h3>Billing Information</h3>
            {billingOpen ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {billingOpen && (
            <div className="section-form">
              <div className="form-group">
                <label htmlFor="billing-name">Name</label>
                <input type="text" id="billing-name" name="billing-name" />
              </div>
              <div className="form-group">
                <label htmlFor="billing-email">Email</label>
                <input type="email" id="billing-email" name="billing-email" />
              </div>
              <div className="form-group">
                <label htmlFor="billing-phone">Phone</label>
                <input type="tel" id="billing-phone" name="billing-phone" />
              </div>
            </div>
          )}
        </div>

        {/* Shipping Section */}
        <div className="main-section">
          <div className="section-header" onClick={() => setShippingOpen(!shippingOpen)}>
            <h3>Shipping Information</h3>
            {shippingOpen ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {shippingOpen && (
            <div className="section-form">
              <div className="form-group">
                <label htmlFor="shipping-address">Address</label>
                <input type="text" id="shipping-address" name="shipping-address" />
              </div>
              <div className="form-group">
                <label htmlFor="shipping-city">City</label>
                <input type="text" id="shipping-city" name="shipping-city" />
              </div>
              <div className="form-group">
                <label htmlFor="shipping-zip">Zip Code</label>
                <input type="text" id="shipping-zip" name="shipping-zip" />
              </div>
            </div>
          )}
        </div>

        {/* Payment Section */}
        <div className="main-section">
          <div className="section-header" onClick={() => setPaymentOpen(!paymentOpen)}>
            <h3>Payment Method</h3>
            {paymentOpen ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {paymentOpen && (
            <div className="section-form">
              <div
                className={`payment-option ${selectedPayment === 'cod' ? 'selected' : ''}`}
                onClick={() => setSelectedPayment('cod')}
              >
                <input
                  type="radio"
                  id="payment-cod"
                  name="payment-method"
                  checked={selectedPayment === 'cod'}
                  readOnly
                />
                <label htmlFor="payment-cod">Cash on Delivery</label>
              </div>
              <div
                className={`payment-option ${selectedPayment === 'card' ? 'selected' : ''}`}
                onClick={() => setSelectedPayment('card')}
              >
                <input
                  type="radio"
                  id="payment-card"
                  name="payment-method"
                  checked={selectedPayment === 'card'}
                  readOnly
                />
                <label htmlFor="payment-card">Debit Card</label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="right-side">
        <h3>Order Summary</h3>
        <p>Add content soon</p>
      </div>
    </div>
  );
};

export default CheckoutPg;
