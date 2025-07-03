import React from 'react';
import { motion } from 'framer-motion';
import { menu_list } from '../../src/assets/assets.js';

function ExploreMenu({ category, setCategory }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  return (
    <section id='menu' className="relative w-full py-16 rounded-3xl shadow-xl px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50" />
      
      {/* Animated background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -100 }}
        animate={{ opacity: 0.1, scale: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-300 via-yellow-300 to-pink-300 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 0.08, scale: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tl from-pink-300 via-yellow-300 to-orange-300 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Explore our <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">menu</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center gap-6 md:gap-8 lg:gap-10 py-8 overflow-x-auto overflow-y-hidden scroll-smooth"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#f97316 #fef3c7'
          }}
        >
          {menu_list.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              className="flex flex-col items-center min-w-fit cursor-pointer group"
            >
              <motion.div 
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  category === item.menu_name 
                    ? 'ring-4 ring-orange-400 shadow-2xl' 
                    : 'hover:ring-2 hover:ring-orange-300 hover:shadow-xl'
                }`}
                whileHover={{ 
                  boxShadow: category === item.menu_name 
                    ? "0 25px 50px -12px rgba(255, 140, 0, 0.4)"
                    : "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="p-2 bg-gradient-to-br from-orange-50 to-pink-50">
                  <img 
                    src={item.menu_image} 
                    alt={item.menu_name}
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.div>
              <motion.p 
                className={`mt-4 text-sm md:text-base font-semibold transition-colors duration-300 ${
                  category === item.menu_name 
                    ? 'text-orange-600' 
                    : 'text-gray-700 group-hover:text-orange-500'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.menu_name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="h-px w-full bg-gradient-to-r from-transparent via-orange-300 to-transparent"
        />
      </div>
    </section>
  );
}

export default ExploreMenu;