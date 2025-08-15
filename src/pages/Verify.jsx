import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

function Verify() {
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [verificationStatus, setVerificationStatus] = useState(null)

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const sessionId = searchParams.get('session_id')
        if (sessionId) {
          // Simulate API call to verify payment
          await new Promise(resolve => setTimeout(resolve, 2000))
          setVerificationStatus('success')
        } else {
          setVerificationStatus('error')
        }
      } catch (error) {
        console.error('Payment verification error:', error)
        setVerificationStatus('error')
      } finally {
        setLoading(false)
      }
    }

    verifyPayment()
  }, [searchParams])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-card to-background">
        <Card className="max-w-md mx-auto bg-card/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-foreground mb-4">Verifying Payment</h2>
            <p className="text-muted-foreground">Please wait while we confirm your payment...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (verificationStatus === 'success') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-card to-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-lg mx-auto bg-card/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-4xl text-white">✓</span>
              </motion.div>
              
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Payment Successful!
              </CardTitle>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Your order has been confirmed and payment has been processed successfully. 
                You will receive an email confirmation shortly.
              </p>

              <div className="space-y-4">
                <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-green-300 text-green-600 bg-green-50">
                  🎉 Order Confirmed
                </Badge>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={() => window.location.href = '/myorders'}
                    className="flex-1 bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-primary-foreground"
                  >
                    View Orders
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/'}
                    className="flex-1 border-border text-foreground hover:bg-accent/10"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  if (verificationStatus === 'error') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-card to-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-lg mx-auto bg-card/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-4xl text-white">✗</span>
              </motion.div>
              
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Payment Verification Failed
              </CardTitle>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We couldn't verify your payment. This might be due to a session timeout or an error in the payment process. 
                Please check your order status or contact support if you believe this is an error.
              </p>

              <div className="space-y-4">
                <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-red-300 text-red-600 bg-red-50">
                  ⚠️ Verification Failed
                </Badge>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={() => window.location.href = '/cart'}
                    className="flex-1 bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-primary-foreground"
                  >
                    Return to Cart
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/'}
                    className="flex-1 border-border text-foreground hover:bg-accent/10"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return null
}

export default Verify
