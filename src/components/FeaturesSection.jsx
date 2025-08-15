import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, MapPin, Shield, Truck, Star, Heart } from 'lucide-react'

function FeaturesSection() {
  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Get your food delivered in 30 minutes or less, guaranteed fresh and hot.",
      color: "from-orange-400 to-pink-400"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Wide Coverage",
      description: "We deliver to all major areas in your city with real-time tracking.",
      color: "from-pink-400 to-purple-400"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Secure",
      description: "Contactless delivery and strict hygiene protocols for your safety.",
      color: "from-purple-400 to-blue-400"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Delivery",
      description: "Free delivery on orders above $25. No hidden charges ever.",
      color: "from-blue-400 to-green-400"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Partner with the best restaurants and use only fresh ingredients.",
      color: "from-green-400 to-yellow-400"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Our customer support team is always here to help you.",
      color: "from-yellow-400 to-orange-400"
    }
  ]

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-orange-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-200 to-pink-200 dark:from-orange-800 dark:to-pink-800 rounded-full blur-3xl opacity-30"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tl from-yellow-200 to-orange-200 dark:from-yellow-800 dark:to-orange-800 rounded-full blur-3xl opacity-30"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-orange-200 dark:border-orange-600 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 mb-6">
            ✨ Why Choose Us
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Delivering </span>
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">excellence</span>
            <span className="text-foreground"> to your doorstep</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just delivering food, we're delivering experiences. Every order is crafted with care, 
            delivered with speed, and served with a smile.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full bg-card/80 hover:bg-card/90 backdrop-blur-sm border-2 border-border hover:border-orange-200 dark:hover:border-orange-600 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} dark:from-orange-600 dark:to-pink-600 flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <CardTitle className="text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-2 border-orange-200 dark:border-orange-600">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400">10K+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400">500+</div>
                  <div className="text-muted-foreground">Restaurant Partners</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-600 dark:text-yellow-400">30min</div>
                  <div className="text-muted-foreground">Average Delivery</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">99%</div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
