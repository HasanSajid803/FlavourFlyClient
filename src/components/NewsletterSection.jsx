import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Gift, Bell, Star, CheckCircle } from 'lucide-react'

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', email)
      setIsSubscribed(true)
      setEmail('')
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const benefits = [
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Exclusive Offers",
      description: "Get access to special discounts and promotions before anyone else"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "New Menu Alerts",
      description: "Be the first to know about new dishes and restaurant additions"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "VIP Rewards",
      description: "Earn points and unlock exclusive member benefits"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Early Access",
      description: "Get priority access to limited-time offers and events"
    }
  ]

  if (isSubscribed) {
    return (
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card/90 backdrop-blur-sm border-2 border-green-200 dark:border-green-600 shadow-2xl">
              <CardContent className="p-16">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
                  <CheckCircle className="h-12 w-12" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Welcome to the Family! 🎉
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Thank you for subscribing to our newsletter! You're now part of our exclusive community 
                  and will receive the latest updates, special offers, and insider information.
                </p>
                
                <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-green-200 dark:border-green-600 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20">
                  ✨ Subscription Confirmed
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background shapes */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 45, 90],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-200 to-blue-200 dark:from-green-800 dark:to-blue-800 rounded-full blur-3xl opacity-30"
      />
      
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [90, 45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-full blur-3xl opacity-30"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-green-200 dark:border-green-600 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 mb-6">
            📧 Stay Updated
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Never miss out on </span>
            <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">amazing deals</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Subscribe to our newsletter and be the first to know about exclusive offers, new menu items, 
            and special promotions. Join thousands of food lovers who are already getting the best deals!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/90 backdrop-blur-sm border-2 border-green-200 dark:border-green-600 shadow-2xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Subscribe to Our Newsletter
                </CardTitle>
                <p className="text-muted-foreground">
                  Get exclusive access to the best food deals and updates
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-email">Email Address</Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="border-green-200 dark:border-green-600 focus:border-green-400 dark:focus:border-green-500 text-lg py-3"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-bold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Subscribe Now
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By subscribing, you agree to our privacy policy and terms of service. 
                    You can unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Subscribe?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Join our newsletter community and unlock exclusive benefits that will enhance 
                your FlavourFly experience.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <Card className="bg-card/80 hover:bg-card/90 backdrop-blur-sm border-2 border-border hover:border-green-200 dark:hover:border-green-600 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-blue-400 dark:from-green-600 dark:to-blue-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            {benefit.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-2 border-green-200 dark:border-green-600">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">50K+</div>
                      <div className="text-sm text-muted-foreground">Subscribers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-2 border-green-200 dark:border-green-600">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Trusted by Food Lovers Worldwide
              </h3>
              <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                {['Fast Delivery', 'Fresh Food', 'Great Prices', '24/7 Support', 'Easy Ordering', 'Secure Payment'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSection
