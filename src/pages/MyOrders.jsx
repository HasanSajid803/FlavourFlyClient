import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import { assets } from '../assets/assets'
import axios from 'axios'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'

function MyOrders() {
  const { token, url } = useContext(StoreContext)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/userorders", { headers: { token } })
      if (response.data.success) {
        setData(response.data.data)
      }
    } catch (error) {
      console.error("Error fetching orders:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary border-solid mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your orders...</p>
        </div>
      </div>
    )
  }

  return (
    <section className="w-full py-12 mt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-border text-primary bg-transparent mb-6">
            📦 Order History
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Orders</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Track your previous orders and view their current status. All your delicious food adventures in one place.
          </p>
        </motion.div>

        {data.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <Card className="max-w-md mx-auto bg-card/50">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No orders yet</h3>
                <p className="text-muted-foreground mb-6">
                  You haven't placed any orders yet. Start your food journey by exploring our menu!
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = '/'}
                  className="border-border text-foreground hover:bg-accent/10"
                >
                  Browse Menu
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {data.map((order, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Card className="bg-card/80 hover:bg-card/90 transition-all duration-300 border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 items-center">
                      {/* Order Icon */}
                      <div className="flex justify-center md:justify-start">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <img className="w-6 h-6" src={assets.parcel_icon} alt="Order" />
                        </div>
                      </div>

                      {/* Order Items */}
                      <div className="md:col-span-2">
                        <h3 className="font-semibold text-foreground mb-2">Order Items</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {order.items.map((item, idx) => 
                            idx === order.items.length - 1 
                              ? `${item.name} x ${item.quantity}` 
                              : `${item.name} x ${item.quantity}, `
                          )}
                        </p>
                      </div>

                      {/* Amount */}
                      <div className="text-center">
                        <Badge variant="outline" className="px-3 py-1 text-lg font-bold text-primary border-primary bg-primary/10">
                          ${order.amount}.00
                        </Badge>
                      </div>

                      {/* Item Count */}
                      <div className="text-center">
                        <Badge variant="secondary" className="px-3 py-1">
                          {order.items.length} items
                        </Badge>
                      </div>

                      {/* Status and Actions */}
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <Badge variant="outline" className="text-xs font-medium">
                            {order.status}
                          </Badge>
                        </div>
                        
                        <Button 
                          size="sm"
                          variant="outline"
                          onClick={fetchOrders}
                          className="border-border text-foreground hover:bg-accent/10 transition-all duration-300"
                        >
                          Track Order
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Order Summary */}
        {data.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">{data.length}</div>
                    <div className="text-muted-foreground">Total Orders</div>
                  </div>
                  <Separator orientation="vertical" className="hidden md:block" />
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">
                      ${data.reduce((sum, order) => sum + order.amount, 0)}.00
                    </div>
                    <div className="text-muted-foreground">Total Spent</div>
                  </div>
                  <Separator orientation="vertical" className="hidden md:block" />
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">
                      {data.reduce((sum, order) => sum + order.items.length, 0)}
                    </div>
                    <div className="text-muted-foreground">Items Ordered</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default MyOrders