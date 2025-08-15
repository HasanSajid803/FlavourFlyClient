import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

function AppDownload() {
  return (
    <motion.section
      id='mobile-app'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='max-w-4xl mx-auto mt-24 mb-16 px-4 sm:px-6 lg:px-8'
    >
      <Card className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl border-0">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-yellow-100/20 to-pink-100/20 dark:from-orange-900/20 dark:via-yellow-900/20 dark:to-pink-900/20" />
        
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-300 to-pink-300 dark:from-orange-600 dark:to-pink-600 rounded-full blur-3xl opacity-30"
        />
        
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-yellow-300 to-orange-300 dark:from-yellow-600 dark:to-orange-600 rounded-full blur-3xl opacity-30"
        />

        <CardContent className="relative z-10 p-8 sm:p-12">
          <div className="text-center mb-12">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-orange-200 dark:border-orange-600 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 mb-6">
              📱 Mobile App
            </Badge>
            
            <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Download our </span>
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">mobile app</span>
            </CardTitle>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get the best food delivery experience with our mobile app. Order your favorite dishes with just a few taps and track your delivery in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: App features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 dark:from-orange-600 dark:to-pink-600 flex items-center justify-center text-white text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Easy Ordering</h3>
                    <p className="text-muted-foreground">Browse our extensive menu and place orders with just a few taps</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-yellow-400 dark:from-pink-600 dark:to-yellow-600 flex items-center justify-center text-white text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Tracking</h3>
                    <p className="text-muted-foreground">Track your order from kitchen to doorstep with live updates</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-green-400 dark:from-yellow-600 dark:to-green-600 flex items-center justify-center text-white text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Exclusive Offers</h3>
                    <p className="text-muted-foreground">Get app-only discounts and special promotions</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-black hover:bg-black/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img src={assets.app_store} alt="App Store" className="w-6 h-6 mr-3" />
                  Download on App Store
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img src={assets.play_store} alt="Play Store" className="w-6 h-6 mr-3" />
                  Get it on Google Play
                </Button>
              </div>
            </motion.div>

            {/* Right: App mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20"
                >
                  <Card className="w-64 h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border-4 border-gray-700 overflow-hidden">
                    <CardContent className="p-0 w-full h-full">
                      <div className="w-full h-full bg-gradient-to-br from-orange-400 via-pink-400 to-yellow-400 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-6xl mb-4">📱</div>
                          <p className="text-xl font-bold">FlavourFly</p>
                          <p className="text-sm opacity-80">Mobile App</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-80"
                />
                
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  )
}

export default AppDownload