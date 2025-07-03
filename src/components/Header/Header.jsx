import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between mt-35 mb-15 rounded-3xl shadow-xl px-4 md:px-12 py-12 bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-50 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, x: -100 }}
        animate={{ opacity: 0.15, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-orange-400 via-yellow-300 to-pink-400 rounded-full blur-3xl z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7, x: 100 }}
        animate={{ opacity: 0.12, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tr from-pink-400 via-green-300 to-yellow-300 rounded-full blur-3xl z-0"
      />

      {/* Left: Text Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start gap-6 md:gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-orange-600 leading-tight drop-shadow-sm"
        >
          Order your <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">favourite food</span> here
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-700 max-w-xl"
        >
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255, 140, 0, 0.25)' }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-2 md:mt-4 text-white font-bold py-3 px-8 bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 rounded-full shadow-lg text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
        >
          View Menu
        </motion.button>
      </div>

      {/* Right: Food Image Placeholder with animated border */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-white/80 shadow-2xl flex items-center justify-center border-4 border-dashed border-orange-200"
        >
          {/* Placeholder for food image */}
          <span className="text-3xl text-orange-300 font-bold">Food Image</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Header;