import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

function Footer({ compactMargin }) {
  const socialIcons = [
    { icon: assets.facebook_icon, name: 'Facebook', href: '#' },
    { icon: assets.twitter_icon, name: 'Twitter', href: '#' },
    { icon: assets.linkedin_icon, name: 'LinkedIn', href: '#' }
  ]

  const companyLinks = [
    'About Us',
    'Our Services',
    'Privacy Policy',
    'Terms of Service',
    'Contact Us'
  ]

  const contactLinks = [
    'Help Center',
    'Support',
    'Feedback',
    'Partnership'
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br from-background via-card to-background rounded-t-3xl shadow-2xl flex flex-col items-center gap-8 py-12 px-4 sm:px-8 lg:px-12 ${compactMargin ? 'mt-8' : 'mt-24'}`}
    >
      <div className='w-full max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16 lg:gap-20'>
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className='flex flex-col items-start gap-6'
          >
            <Card className="bg-transparent border-0 shadow-none p-0">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              FlavourFly
            </span>
                  <Badge variant="outline" className="px-3 py-1 text-xs font-medium border-border text-primary">
                    🍽️ Fresh & Delicious
                  </Badge>
                </div>
                
                <p className='text-muted-foreground font-medium leading-relaxed mb-6'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veniam velit consectetur hic, quae sit tempora aperiam, quidem, cum adipisci labore repudiandae obcaecati consequatur? Magni adipisci culpa nesciunt quos pariatur!
                </p>

                {/* Social Icons */}
                <div className='flex items-center gap-4'>
                  {socialIcons.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-card/80 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name} 
                        className='w-5 h-5'
                      />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Company Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex flex-col items-start gap-6'
          >
            <Card className="bg-transparent border-0 shadow-none p-0">
              <CardContent className="p-0">
                <h2 className='text-2xl font-extrabold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'>
                  COMPANY
                </h2>
                <ul className='space-y-3'>
                  {companyLinks.map((link, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className='cursor-pointer text-muted-foreground font-medium hover:text-foreground transition-colors duration-300'
                    >
                      {link}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className='flex flex-col items-start gap-6'
          >
            <Card className="bg-transparent border-0 shadow-none p-0">
              <CardContent className="p-0">
                <h2 className='text-2xl font-extrabold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'>
                  GET IN TOUCH
                </h2>
                <ul className='space-y-3'>
                  {contactLinks.map((link, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className='cursor-pointer text-muted-foreground font-medium hover:text-foreground transition-colors duration-300'
                    >
                      {link}
                    </motion.li>
                  ))}
                </ul>

                {/* Newsletter Signup */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Stay Updated</h3>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 rounded-lg border border-border bg-background/80 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                    <Button size="sm" className="px-4 py-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground text-sm font-medium rounded-lg transition-all duration-300">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Separator className="w-full bg-border" />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className='text-muted-foreground font-medium'>
          Copyright 2025 @ Hasan.com - All Right Reserved.
        </p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <Badge variant="outline" className="text-xs px-2 py-1 border-border text-primary">
            🍽️ Made with love
          </Badge>
          <Badge variant="outline" className="text-xs px-2 py-1 border-border text-accent">
            🚀 Powered by React
          </Badge>
        </div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer