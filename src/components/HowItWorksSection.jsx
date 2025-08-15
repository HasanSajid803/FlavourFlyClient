import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Search, ShoppingCart, Truck, CheckCircle } from 'lucide-react'

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: <Search className="h-8 w-8" />,
      title: "Browse & Choose",
      description: "Explore our extensive menu with hundreds of delicious dishes from top restaurants in your area.",
      color: "from-orange-400 to-pink-400",
      features: ["Search by cuisine", "Filter by dietary preferences", "View detailed descriptions"]
    },
    {
      number: "02",
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Add to Cart & Order",
      description: "Select your favorite dishes, customize your order, and proceed to checkout with secure payment options.",
      color: "from-pink-400 to-purple-400",
      features: ["Customize portions", "Add special instructions", "Secure payment"]
    },
    {
      number: "03",
      icon: <Truck className="h-8 w-8" />,
      title: "Track & Receive",
      description: "Track your order in real-time and receive fresh, hot food delivered right to your doorstep.",
      color: "from-purple-400 to-blue-400",
      features: ["Real-time tracking", "Estimated delivery time", "Contactless delivery"]
    },
    {
      number: "04",
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Enjoy & Rate",
      description: "Savor your delicious meal and share your experience with ratings and reviews.",
      color: "from-blue-400 to-green-400",
      features: ["Rate your experience", "Share feedback", "Earn rewards"]
    }
  ]

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background shapes */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 45, 90],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-full blur-3xl opacity-30"
      />
      
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [90, 45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-tl from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full blur-3xl opacity-30"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-blue-200 dark:border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 mb-6">
            🚀 How It Works
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Ordering food has never been </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">easier</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get your favorite food delivered in just 4 simple steps. From browsing to enjoying, 
            we've made the entire process seamless and enjoyable.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
            >
              {/* Left/Right Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} dark:from-blue-600 dark:to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {step.number}
                  </div>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} dark:from-blue-600 dark:to-purple-600 flex items-center justify-center text-white shadow-lg`}>
                    {step.icon}
                  </div>
                </div>
                
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {step.title}
                </CardTitle>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-500"></div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right/Left Visual */}
              <div className="flex-1">
                <Card className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-blue-200 dark:hover:border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${step.color} dark:from-blue-600 dark:to-purple-600 flex items-center justify-center text-white text-6xl opacity-80`}>
                      {step.icon}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-600">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to get started?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who are already enjoying the convenience 
                of FlavourFly food delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Ordering Now
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-bold border-2 border-blue-200 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection
