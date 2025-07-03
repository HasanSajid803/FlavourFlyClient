import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import LoginPopup from "./components/LoginPopup";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const location = useLocation();
  const compactFooter = location.pathname === "/cart" || location.pathname === "/myorders";

  return (
    <>
      <div className="w-[80%] m-auto">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={ <MyOrders />} />
        </Routes>
      </div>
      <Footer compactMargin={compactFooter} />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </>
  );
}

export default App;
