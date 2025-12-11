import { Routes, Route } from "react-router-dom";
import NavBar from "../src/components/Navbar";
import HomePg from "./pages/HomePg";
import Shop from "./pages/Shop";
import Footer from "../src/components/Footer";
import Cart from "./pages/Cart";
import CheckoutPg from "./pages/CheckoutPg";
import { useState } from "react";
import Order from "./pages/Order";

// Import the Order type from CheckoutPg or define it here
import  type { Order as OrderType } from "./pages/CheckoutPg";

function App() {
  // Type the state as Order | null
  const [order, setOrder] = useState<OrderType | null>(null);

  return (
    <main>
      <NavBar />
      <Routes>
        <Route index element={<HomePg />} /> 
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/checkout" element={<CheckoutPg setOrder={setOrder} />} /> 
        <Route path="/order-confirmation" element={<Order order={order} />} /> 
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
