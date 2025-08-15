import React from 'react';
import { motion as Motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between mt-8 mb-15 rounded-3xl shadow-xl px-4 md:px-12 py-12 bg-gradient-to-br from-background/80 via-card/90 to-background/80 overflow-hidden backdrop-blur-sm">
      {/* Animated background shapes */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.7, x: -100 }}
        animate={{ opacity: 0.08, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-3xl z-0"
      />
      <Motion.div
        initial={{ opacity: 0, scale: 0.7, x: 100 }}
        animate={{ opacity: 0.06, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tr from-secondary/20 via-primary/20 to-accent/20 rounded-full blur-3xl z-0"
      />

      {/* Left: Enhanced Text Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start gap-8 md:gap-10">
        {/* Top Badge */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Badge 
            variant="secondary" 
            className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-border rounded-full"
          >
            🚀 #1 Food Delivery Platform
          </Badge>
        </Motion.div>

        {/* Main Heading */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <h1 className="font-black text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
            <span className="block text-foreground">
              Order Your
            </span>
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Favourite Food
            </span>
            <span className="block text-foreground">
              Here
            </span>
          </h1>
        </Motion.div>

        {/* Subtitle */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-lg"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
            Experience culinary excellence with our curated selection of premium dishes. 
            <span className="text-primary font-semibold"> Fast delivery</span>, 
            <span className="text-accent font-semibold"> fresh ingredients</span>, and 
            <span className="text-secondary font-semibold"> unbeatable taste</span>.
          </p>
        </Motion.div>

        {/* Stats Row */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary/80 rounded-full"></div>
            <span>10K+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent/80 rounded-full"></div>
            <span>500+ Restaurants</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary/80 rounded-full"></div>
            <span>30min Delivery</span>
          </div>
        </Motion.div>

        {/* Action Buttons */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            🍽️ Explore Menu
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg font-bold border-2 border-border text-foreground hover:bg-accent/10 transition-all duration-300"
          >
            📱 Download App
          </Button>
        </Motion.div>
      </div>

      {/* Right: Spline 3D Robot Character */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <Motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-80 h-80 md:w-96 md:h-96 overflow-hidden bg-transparent"
        >
          {/* Spline 3D Robot Character */}
          <Spline scene="https://prod.spline.design/xw5ep2k8woccqVoX/scene.splinecode" />
        </Motion.div>
      </div>
    </section>
  );
}

export default Header;