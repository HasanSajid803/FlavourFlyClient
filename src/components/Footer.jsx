import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

function Footer({ compactMargin = false }) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-50 rounded-t-3xl shadow-2xl flex flex-col items-center gap-5 py-10 px-4 sm:px-10 ${compactMargin ? 'mt-8' : 'mt-24'}`}
    >
      <div className='w-full max-w-7xl grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-[80px]'>
        <div className='flex flex-col items-start gap-5'>
          <img src={assets.logo} alt='' className='w-32 mb-2'/>
          <p className='text-gray-700 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veniam velit consectetur hic, quae sit tempora aperiam, quidem, cum adipisci labore repudiandae obcaecati consequatur? Magni adipisci culpa nesciunt quos pariatur!</p>
          <div className='flex'>
            <motion.img whileHover={{ scale: 1.15, rotate: 8 }} className='w-10 mr-4 cursor-pointer' src={assets.facebook_icon} alt='Facebook' style={{ filter: 'invert(54%) sepia(94%) saturate(749%) hue-rotate(346deg) brightness(101%) contrast(101%)' }} />
            <motion.img whileHover={{ scale: 1.15, rotate: 8 }} className='w-10 mr-4 cursor-pointer' src={assets.twitter_icon} alt='Twitter' style={{ filter: 'invert(54%) sepia(94%) saturate(749%) hue-rotate(346deg) brightness(101%) contrast(101%)' }} />
            <motion.img whileHover={{ scale: 1.15, rotate: 8 }} className='w-10 mr-4 cursor-pointer' src={assets.linkedin_icon} alt='LinkedIn' style={{ filter: 'invert(54%) sepia(94%) saturate(749%) hue-rotate(346deg) brightness(101%) contrast(101%)' }} />
          </div>
        </div>
        <div className='flex flex-col items-start gap-5'>
          <h2 className='text-orange-600 text-2xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent'>COMPANY</h2>
          <ul className='list-none mb-2 cursor-pointer text-gray-700 font-medium'>
            <motion.li whileHover={{ color: '#f59e42', x: 6 }} transition={{ type: 'spring', stiffness: 200 }}>Home</motion.li>
            <motion.li whileHover={{ color: '#f59e42', x: 6 }} transition={{ type: 'spring', stiffness: 200 }}>About us</motion.li>
            <motion.li whileHover={{ color: '#f59e42', x: 6 }} transition={{ type: 'spring', stiffness: 200 }}>Delivery</motion.li>
            <motion.li whileHover={{ color: '#f59e42', x: 6 }} transition={{ type: 'spring', stiffness: 200 }}>Privacy Policy</motion.li>
          </ul>
        </div>
        <div id='contact-us' className='flex flex-col items-start gap-5'>
          <h2 className='text-orange-600 text-2xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent'>GET IN TOUCH</h2>
          <ul className='list-none mb-2 cursor-pointer text-gray-700 font-medium'>
            <motion.li whileHover={{ color: '#f59e42', x: 6 }} transition={{ type: 'spring', stiffness: 200 }}>+1-212-423-2356</motion.li>
            <motion.li whileHover={{ color: '#f59e42', x: 6 }} transition={{ type: 'spring', stiffness: 200 }}>contact@hasan.com</motion.li>
          </ul>
        </div>
      </div>
      <hr className='w-full h-[2px] bg-orange-100 border-none' />
      <p className='text-gray-500 font-medium'>Copyright 2025 @ Hasan.com - All Right Reserved.</p>
    </motion.footer>
  )
}

export default Footer