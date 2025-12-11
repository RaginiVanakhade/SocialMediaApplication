import { useNavigate } from "react-router-dom";
import "../Style/Order.css";

type Product = {
  name: string;
  quantity: number;
  price: number;
};

type ShippingInfo = {
  address: string;
  city: string;
  zip: string;
};

type OrderType = {
  orderNumber: string;
  shippingInformation: ShippingInfo;
  products: Product[];
  totalPrice: number;
};

interface OrderProps {
  order: OrderType | null;
}

const Order: React.FC<OrderProps> = ({ order }) => {
  const navigate = useNavigate();

  if (!order) {
    return <p>No order data found.</p>;
  }

  return (
    <div className="order-container">
      <h2>Thank you for your order</h2>
      <p>Your order has been placed successfully. You will receive an email.</p>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Order Number: {order.orderNumber}</p>
      </div>

      <div className="shipping-info">
        <h3>Shipping Information</h3>
        <p>{order.shippingInformation.address}</p>
        <p>{order.shippingInformation.city}</p>
        <p>{order.shippingInformation.zip}</p>
      </div>

      <div className="products-list">
        <h3>Products Ordered</h3>
        {order.products.map((product) => (
          <div className="product-item" key={product.name}>
            <p>{product.name} × {product.quantity}</p>
            <p>${product.price * product.quantity}</p>
          </div>
        ))}
      </div>

      <div className="order-total">
        <span>Total Price:</span>
        <span>${order.totalPrice}</span>
      </div>

      <div className="button-group">
        <button>Order Tracking</button>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default Order;
