import React, { useState } from 'react'
import Header from '../components/Header/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'
import FeaturesSection from '../components/FeaturesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import TestimonialsSection from '../components/TestimonialsSection'
import AppDownload from '../components/AppDownload'
import NewsletterSection from '../components/NewsletterSection'
import ContactSection from '../components/ContactSection'
import { motion } from 'framer-motion'

function Home() {
  const [category, setCategory] = useState("All")

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <Header />
      
      {/* Menu Categories */}
      <ExploreMenu category={category} setCategory={setCategory} />
      
      {/* Food Display */}
      <FoodDisplay category={category} />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* How It Works */}
      <HowItWorksSection />
      
      {/* Customer Testimonials */}
      <TestimonialsSection />
      
      {/* App Download */}
      <AppDownload />
      
      {/* Newsletter Subscription */}
      <NewsletterSection />
      
      {/* Contact Section */}
      <ContactSection />
    </motion.div>
  )
}

export default Home