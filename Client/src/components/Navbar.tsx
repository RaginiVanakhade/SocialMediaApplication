import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "../Style/Navbar.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <Link to="/">e-SHOP</Link>
        </div>

        <div className="search">
          <form>
            <input type="text" placeholder="Search Product" />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>

        <div className="user-cart">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            {products.length > 0 && <span className="cart-badge">{products.length}</span>}
          </Link>

          <button type="button">Login | Register</button>
          <button type="button">
            <FaUser />
          </button>
        </div>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;
