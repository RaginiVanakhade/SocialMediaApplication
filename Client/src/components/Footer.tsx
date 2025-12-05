import "../Style/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2>E-Shop</h2>
          <p>Your one-stop online store for the latest products.</p>
        </div>

        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Customer Support</h3>
          <ul className="footer-support">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Order Tracking</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3 className="footer-title">Stay Updated</h3>
          <p>Subscribe for offers, updates, and more.</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button>Join</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
}
