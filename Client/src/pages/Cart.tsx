import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import "../Style/Cart.css";
import { useState } from "react";
import Modal from "../components/Modal";
import ChangeAdd from "../components/ChangeAdd";

// ---- Added Types ----
interface CartProduct {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

interface CartState {
  products: CartProduct[];
  totalPrice: number;
}

const Cart = () => {
  const cart = useSelector((state: { cart: CartState }) => state.cart);

  const [isModelOpen, setIsModelOpen] = useState(false);

  // NEW: Address state
  const [address, setAddress] = useState("Your Address");

  return (
    <div className="cart-container">
      {cart?.products?.length > 0 ? (
        <div className="cart-wrapper">
          {/* LEFT — PRODUCTS */}
          <div className="cart-left">
            <h3>SHOPPING CART</h3>

            <div className="cart-header">
              <p>PRODUCTS</p>
              <div className="cart-header-details">
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>SUBTOTAL</p>
                <p>REMOVE</p>
              </div>
            </div>

            <div className="cart-items">
              {cart.products.map((product: CartProduct) => (
                <div className="cart-item" key={product.id}>
                  <div className="cart-item-info">
                    <img src={product.img} alt={product.title} />
                    <p className="item-title">{product.title}</p>
                    <p className="item-price">${product.price.toFixed(2)}</p>

                    <div className="quantity">
                      <button>-</button>
                      <p>{product.quantity}</p>
                      <button>+</button>
                    </div>
                  </div>

                  <p className="item-subtotal">
                    ${(product.quantity * product.price).toFixed(2)}
                  </p>

                  <button className="remove-btn">
                    <FaTrashAlt />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — SUMMARY */}
          <div className="cart-right">
            <div className="summary-box">
              <h4>Order Summary</h4>

              <div className="summary-row">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>

              <div className="summary-address">
                Shipping to <strong>{address}</strong>
                <button
                  className="change-btn"
                  onClick={() => setIsModelOpen(true)}
                >
                  Change
                </button>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>

              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>

          {/* MODAL */}
          <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAdd setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
          </Modal>
        </div>
      ) : (
        <div>No items in your cart.</div>
      )}
    </div>
  );
};

export default Cart;
