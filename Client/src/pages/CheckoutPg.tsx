import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "../Style/CheckoutPg.css";

// --- Types ---
type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartState = {
  products: Product[];
  totalPrice: number;
};

type ShippingInfo = {
  address: string;
  city: string;
  zip: string;
};

export type Order = {
  products: Product[];
  orderNumber: string;
  shippingInformation: ShippingInfo;
  totalPrice: number;
};

type CheckoutPgProps = {
  setOrder: (order: Order) => void;
};

// --- Component ---
const CheckoutPg = ({ setOrder }: CheckoutPgProps) => {
  const [billingOpen, setBillingOpen] = useState(true);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<'cod' | 'card'>('cod');
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    address: '',
    city: '',
    zip: ''
  });

  const cart = useSelector<{ cart: CartState }, CartState>(state => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder: Order = {
      products: cart.products,
      orderNumber: "1234",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice
    };
    setOrder(newOrder);
    navigate('/order-confirmation');
  };

  const handleShippingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

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
                <input type="text" id="billing-name" name="billing-name" placeholder='name' />
              </div>
              <div className="form-group">
                <label htmlFor="billing-email">Email</label>
                <input type="email" id="billing-email" name="billing-email" placeholder='email' />
              </div>
              <div className="form-group">
                <label htmlFor="billing-phone">Phone</label>
                <input type="tel" id="billing-phone" name="billing-phone" placeholder='phone' />
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
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" value={shippingInfo.address} onChange={handleShippingChange} placeholder='address' />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value={shippingInfo.city} onChange={handleShippingChange} placeholder='city' />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip Code</label>
                <input type="text" id="zip" name="zip" value={shippingInfo.zip} onChange={handleShippingChange} placeholder='zip code' />
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
                  onChange={() => setSelectedPayment("cod")}
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
                  onChange={() => setSelectedPayment("card")}
                />
                <label htmlFor="payment-card">Debit Card</label>
              </div>
              {selectedPayment === "card" && (
                <div className="card-form">
                  <h3>Debit card information</h3>
                  <div>
                    <label>Card Number</label>
                    <input type="text" placeholder="Card Number" />
                  </div>
                  <div>
                    <label>Card Holder Name</label>
                    <input type="text" placeholder="Card holder name" />
                  </div>
                  <div>
                    <label>Exp Date</label>
                    <input type="text" placeholder="Exp date" />
                  </div>
                  <div>
                    <label>CVV</label>
                    <input type="text" placeholder="CVV" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Order Summary */}
      <div className="right-side">
        <h3>Order Summary</h3>
        <div>
          {cart.products.map((product) => (
            <div key={product.id}>{product.name} - ₹{product.price} x {product.quantity}</div>
          ))}
        </div>
        <div>
          <span>Total Price :</span>
          <span>₹{cart.totalPrice}</span>
        </div>
        <button onClick={handleOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default CheckoutPg;
