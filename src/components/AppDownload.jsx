import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

function AppDownload() {
  return (
    <motion.section
      id='mobile-app'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
      viewport={{ once: true }}
      className='max-w-2xl m-auto mt-24 mb-16 rounded-3xl bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-50 shadow-xl p-8 sm:p-12 flex flex-col items-center'
    >
      <p className='text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent text-center drop-shadow'>
        For Better Experience Download <br /> Hasan App
      </p>
      <motion.div
        className='flex justify-center gap-6 mt-8'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
      >
        <motion.img
          className='w-[120px] sm:w-[150px] max-w-[180px] cursor-pointer rounded-xl shadow-lg'
          src={assets.play_store}
          alt='Play Store'
          whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255, 140, 0, 0.15)' }}
          transition={{ type: 'spring', stiffness: 200 }}
        />
        <motion.img
          className='w-[120px] sm:w-[150px] max-w-[180px] cursor-pointer rounded-xl shadow-lg'
          src={assets.app_store}
          alt='App Store'
          whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255, 140, 0, 0.15)' }}
          transition={{ type: 'spring', stiffness: 200 }}
        />
      </motion.div>
    </motion.section>
  )
}

export default AppDownload