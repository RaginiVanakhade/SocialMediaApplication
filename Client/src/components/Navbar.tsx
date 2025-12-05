

import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "../Style/Navbar.css"
// import Footer from "./Footer";
const NavBar = () => {
  return (
    <nav className="">
      <div>
        <div>
          <Link to="/">e-SHOP</Link>
        </div>

        <div>
          <form action="">
            <input type="text" placeholder="Search Product" />
            <FaSearch />
          </form>
        </div>

        <div>
          <Link to="/cart" >
          <FaShoppingCart />
          <button> Login | Register</button>
          <button><FaUser /></button>
          </Link>
        </div>

        <div>
          <Link to="">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="">Contact</Link>
          <Link to="">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;