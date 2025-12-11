import { Routes, Route } from "react-router-dom";
import SignInForm from "./auth/SignInForm";
import SignUpForm from "./auth/SignUpForm";
// import AuthLayout from "./auth/AuthLayout";
// import RootLayout from "./root/RootLayout";

import NavBar from "../src/components/Navbar"
import HomePg from "./pages/HomePg";
import Shop from "./pages/Shop";
import Footer from "../src/components/Footer"
import Cart from "./pages/Cart";
import CheckoutPg from "./pages/CheckoutPg";
import { useState } from "react";
import Order from "./pages/Order";


function App() {
  const [order, setOrder] = useState(null)
  return (
    <main>
      <NavBar />
      <Routes>
            <Route index element={<HomePg />} /> 
            <Route path="/shop" element={<Shop />} /> 
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/checkout" element={<CheckoutPg setOrder={setOrder} />} /> 
            <Route path="/order-confirmation" element={<Order order={order} />} /> 
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
