import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The food quality is exceptional! Every dish I've ordered has been fresh, delicious, and delivered right on time. FlavourFly has become my go-to for food delivery.",
      color: "from-orange-400 to-pink-400"
    },
    {
      name: "Michael Chen",
      role: "Business Executive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As someone who works long hours, FlavourFly has been a lifesaver. The delivery is always prompt, and the food tastes like it just came from the restaurant kitchen.",
      color: "from-pink-400 to-purple-400"
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Amazing service! The app is so easy to use, and I love how I can track my order in real-time. The food is always hot and fresh when it arrives.",
      color: "from-purple-400 to-blue-400"
    },
    {
      name: "David Thompson",
      role: "Chef",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Being a chef myself, I'm very particular about food quality. FlavourFly never disappoints. The ingredients are fresh and the preparation is top-notch.",
      color: "from-blue-400 to-green-400"
    },
    {
      name: "Lisa Wang",
      role: "Health Coach",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I love the healthy options available! The portion sizes are perfect and the nutritional information is clearly displayed. Great for maintaining a healthy lifestyle.",
      color: "from-green-400 to-yellow-400"
    },
    {
      name: "James Wilson",
      role: "Family Man",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Perfect for family dinners! The kids love the variety, and I appreciate the quick delivery. FlavourFly has made our family meals so much easier.",
      color: "from-yellow-400 to-orange-400"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ))
  }

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background shapes */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-200 to-orange-200 dark:from-pink-800 dark:to-orange-800 rounded-full blur-3xl opacity-30"
      />
      
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [180, 90, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tl from-yellow-200 to-pink-200 dark:from-yellow-800 dark:to-pink-800 rounded-full blur-3xl opacity-30"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-pink-200 dark:border-pink-600 text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20 mb-6">
            💬 Customer Reviews
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">What our </span>
            <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">customers</span>
            <span className="text-foreground"> say</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued customers have to say about their 
            FlavourFly experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full bg-card/80 hover:bg-card/90 backdrop-blur-sm border-2 border-border hover:border-pink-200 dark:hover:border-pink-600 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="flex justify-end mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} dark:from-pink-600 dark:to-orange-600 flex items-center justify-center text-white shadow-lg`}>
                      <Quote className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {testimonial.rating}.0
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-pink-200 dark:border-pink-600"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-2 border-pink-200 dark:border-pink-600">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                {renderStars(5)}
                <span className="text-2xl font-bold text-foreground ml-2">5.0</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Overall Customer Rating
              </h3>
              <p className="text-muted-foreground">
                Based on {testimonials.length * 100}+ verified reviews
              </p>
              <Badge variant="outline" className="mt-4 px-4 py-2 text-sm font-medium border-green-200 dark:border-green-600 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20">
                🏆 Excellent Service
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
