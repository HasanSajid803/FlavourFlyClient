import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate()

  // Add state for profile menu
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  const navLinks = [
    {
      url: "/",
      id: "01",
      text: "home",
    },
    {
      url: "menu",
      id: "02",
      text: "menu",
    },
    {
      url: "mobile-app",
      id: "03",
      text: "mobile-app",
    },
    {
      url: "contact-us",
      id: "04",
      text: "contact-us",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-50/95 via-yellow-50/95 to-pink-50/95 backdrop-blur-md shadow-lg border-b border-orange-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/">
            <motion.img
              whileHover={{ scale: 1.05 }}
              className="w-[100px] sm:w-[120px] lg:w-[140px] drop-shadow-md"
              src={assets.logo}
              alt="Logo"
            />
          </Link>

          {/* Nav Links */}
          <ul className="hidden lg:flex list-none gap-8 text-gray-700 text-lg font-semibold tracking-wide">
            {navLinks.map((item) => (
              <motion.li
                key={item.id}
                className="relative capitalize cursor-pointer px-3 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setMenu(item.text);
                  const section = document.getElementById(`${item.url}`);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className="transition-colors duration-200 hover:text-orange-600">
                  {item.text}
                </span>
                <AnimatePresence>
                  {menu === item.text && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-0 w-full h-1 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 shadow-md"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>

          {/* Icons and Sign-in */}
          <div className="flex items-center gap-4 sm:gap-6">
            <motion.img
              whileHover={{ scale: 1.15 }}
              className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-all"
              src={assets.search_icon}
              alt="Search"
              style={{ filter: 'invert(0.4) sepia(1) saturate(2) hue-rotate(15deg)' }}
            />
            <div className="relative cursor-pointer">
              <Link to="/cart">
                <motion.img
                  whileHover={{ scale: 1.15 }}
                  className="w-5 h-5"
                  src={assets.basket_icon}
                  alt="Basket"
                  style={{ filter: 'invert(0.4) sepia(1) saturate(2) hue-rotate(15deg)' }}
                />
              </Link>
              <AnimatePresence>
                {getTotalCartItems() > 0 && (
                  <motion.div
                    key="cart-badge"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute min-w-[20px] min-h-[20px] bg-gradient-to-r from-orange-400 to-pink-400 text-white text-xs font-bold flex items-center justify-center rounded-full top-[-12px] right-[-12px] shadow-lg border-2 border-white"
                  >
                    {getTotalCartItems()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {!token ? (
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 4px 20px 0 rgba(255, 140, 0, 0.3)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 text-white font-bold py-2 px-6 sm:px-8 rounded-full cursor-pointer transition-all shadow-md text-sm sm:text-base"
              >
                Sign in
              </motion.button>
            ) : (
              <div
                className="relative"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-full border-2 border-orange-300 shadow-md cursor-pointer"
                  src={assets.profile_icon}
                  alt="Profile"
                  style={{ filter: 'invert(0.4) sepia(1) saturate(2) hue-rotate(15deg)' }}
                />
                <AnimatePresence>
                  {showMenu && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute flex flex-col gap-2 bg-white/95 backdrop-blur-md p-4 right-0 z-10 rounded-xl border border-orange-200 shadow-lg mt-2 min-w-[150px]"
                    >
                      <li onClick={() => navigate('/myorders')} className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors">
                        <img className="w-5 h-5" src={assets.bag_icon} alt="" style={{ filter: 'invert(0.4) sepia(1) saturate(2) hue-rotate(15deg)' }} />
                        <p className="font-medium">Orders</p>
                      </li>
                      <hr className="border-orange-200" />
                      <li onClick={logout} className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors">
                        <img className="w-5 h-5" src={assets.logout_icon} alt="" style={{ filter: 'invert(0.4) sepia(1) saturate(2) hue-rotate(15deg)' }} />
                        <p className="font-medium">Logout</p>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
