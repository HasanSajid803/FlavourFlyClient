import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion as Motion } from 'framer-motion'

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext)

  const filteredFood = category === "All" 
    ? food_list 
    : food_list.filter(item => item.category === category)

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-border text-primary bg-transparent mb-6">
            🍽️ Featured Dishes
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            <span className="text-foreground">Top dishes </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">near you</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the most popular and delicious dishes from our curated menu, prepared with fresh ingredients and authentic flavors.
          </p>
        </Motion.div>

        {filteredFood.length === 0 ? (
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <Card className="max-w-md mx-auto bg-card/50">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No dishes found</h3>
                <p className="text-muted-foreground mb-6">
                  {category === "All" 
                    ? "We're currently updating our menu. Please check back soon!" 
                    : `No dishes found in the "${category}" category.`
                  }
                </p>
                {category !== "All" && (
                  <Button 
                    variant="outline" 
                    onClick={() => window.location.reload()}
                    className="border-border text-foreground hover:bg-accent/10"
                  >
                    View All Categories
                  </Button>
                )}
              </CardContent>
            </Card>
          </Motion.div>
        ) : (
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 md:gap-8"
          >
            {filteredFood.map((item, index) => (
              <Motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <FoodItem 
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                />
              </Motion.div>
            ))}
          </Motion.div>
        )}

        {/* Category summary */}
        {category !== "All" && filteredFood.length > 0 && (
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="max-w-2xl mx-auto bg-card/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {category} Collection
                </h3>
                <p className="text-muted-foreground mb-6">
                  Found {filteredFood.length} delicious {category.toLowerCase()} dishes for you to enjoy!
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {filteredFood.slice(0, 5).map((item, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {item.name}
                    </Badge>
                  ))}
                  {filteredFood.length > 5 && (
                    <Badge variant="outline" className="px-3 py-1">
                      +{filteredFood.length - 5} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </Motion.div>
        )}
      </div>
    </section>
  )
}

export default FoodDisplay