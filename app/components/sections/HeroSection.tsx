"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

// Define the images that correspond to each keyword
const heroImages = [
  {
    src: "/images/hero-1-main.jpg",
    alt: "Innovative Software Development",
    keyword: "innovative"
  },
  {
    src: "/images/hero-2-main.jpg", 
    alt: "Powerful Mobile App Development",
    keyword: "powerful"
  },
  {
    src: "/images/hero-3-main.jpg",
    alt: "Scalable Cloud Solutions",
    keyword: "scalable"
  },
  {
    src: "/images/hero-1-sub1.jpg",
    alt: "Secure Data Solutions",
    keyword: "secure"
  },
  {
    src: "/images/hero-2-sub1.jpg",
    alt: "Intelligent AI Solutions",
    keyword: "intelligent"
  }
];

// Keywords array
const keywords = ["innovative", "powerful", "scalable", "secure", "intelligent"];

const HeroSection = () => {
  // Track current active keyword index
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize interval for keyword rotation
  useEffect(() => {
    // Set up interval for keyword rotation
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % keywords.length);
    }, 2500);

    // Clean up interval on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // The current active keyword
  const activeKeyword = keywords[activeIndex];

  return (
    <section className="min-h-[700px] pt-6 pb-8 md:pt-6 md:pb-6 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We build{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeKeyword}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text inline-block"
                >
                  {activeKeyword}
                </motion.span>
              </AnimatePresence>
              {" "}software solutions
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Transforming ideas into reality with cutting-edge technology 
              that drives growth and enhances user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/services" 
                variant="primary" 
                size="lg"
              >
                Our Services
              </Button>
              
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                icon={<FiArrowRight />}
                iconPosition="right"
              >
                Get in Touch
              </Button>
            </div>
            
            {/* Carousel Indicators */}
            <div className="hidden md:flex items-center mt-12 space-x-3">
              {keywords.map((keyword, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    // Reset the interval when manually changing
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    intervalRef.current = setInterval(() => {
                      setActiveIndex(prev => (prev + 1) % keywords.length);
                    }, 5000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? "bg-primary w-6" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to ${keyword}`}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Carousel Side */}
          <div className="order-1 md:order-2 relative w-full h-[300px] sm:h-[350px] md:h-[420px] lg:h-[450px] flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Background pattern */}
              <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              {/* Card Stack Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[75%] h-[65%]">
                  {/* Render all the cards in the stack */}
                  {heroImages.map((image, index) => {
                    // Calculate if this card should be active
                    const isActive = index === activeIndex;
                    
                    // Get the original order (0-4 for 5 cards)
                    const position = (index - activeIndex + 5) % 5;
                    
                    // Define the visual properties of each card position
                    const cardStyles = [
                      // Position 0: Active card (front and center)
                      {
                        zIndex: 50,
                        scale: 1.1,
                        x: 0,
                        y: 0,
                        opacity: 1,
                        filter: 'brightness(1.1)',
                        shadow: '16px 16px 32px rgba(0,0,0,0.1), -16px -16px 32px rgba(255,255,255,0.7)'
                      },
                      // Position 1: First card directly behind (left side)
                      {
                        zIndex: 40,
                        scale: 0.85,
                        x: '-18%',
                        y: 0,
                        opacity: 0.9,
                        filter: 'brightness(1)',
                        shadow: '8px 8px 16px rgba(0,0,0,0.05), -8px -8px 16px rgba(255,255,255,0.5)'
                      },
                      // Position 2: Second card behind (right side)
                      {
                        zIndex: 40,
                        scale: 0.85,
                        x: '18%',
                        y: 0,
                        opacity: 0.9,
                        filter: 'brightness(1)',
                        shadow: '8px 8px 16px rgba(0,0,0,0.05), -8px -8px 16px rgba(255,255,255,0.5)'
                      },
                      // Position 3: Third card (far left) 
                      {
                        zIndex: 30,
                        scale: 0.75,
                        x: '-32%',
                        y: 0,
                        opacity: 0.8,
                        filter: 'brightness(0.95)',
                        shadow: '4px 4px 8px rgba(0,0,0,0.05), -4px -4px 8px rgba(255,255,255,0.5)'
                      },
                      // Position 4: Fourth card (far right)
                      {
                        zIndex: 30,
                        scale: 0.75,
                        x: '32%',
                        y: 0,
                        opacity: 0.8,
                        filter: 'brightness(0.95)',
                        shadow: '4px 4px 8px rgba(0,0,0,0.05), -4px -4px 8px rgba(255,255,255,0.5)'
                      }
                    ];
                    
                    // Get the style for this card
                    const style = cardStyles[position];
                    
                    return (
                      <motion.div
                        key={image.keyword}
                        className="absolute rounded-xl neumorph overflow-hidden"
                        style={{
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          width: '100%',
                          height: '100%',
                          transformOrigin: "center center",
                        }}
                        initial={false}
                        animate={{
                          scale: style.scale,
                          x: style.x,
                          y: style.y,
                          zIndex: style.zIndex,
                          opacity: style.opacity,
                          filter: style.filter,
                          boxShadow: style.shadow
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 50,
                          mass: 1
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-xs md:text-sm font-medium">{image.alt}</span>
                        </div>
                        {/* Replace with actual images */}
                        <Image 
                          src={image.src} 
                          alt={image.alt}
                          fill
                          className="object-cover"
                          priority={isActive} // Add priority for the active image
                         />
                        
                        {/* Subtle glow for active item */}
                        {isActive && (
                          <motion.div
                            className="absolute -inset-2 rounded-2xl pointer-events-none z-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.15 }}
                            style={{ 
                              background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                              filter: 'blur(15px)'
                            }}
                          />
                        )}
                        
                        {/* Gradient overlay */}
                        <motion.div 
                          className="absolute inset-0 pointer-events-none"
                          animate={{
                            background: isActive ? 
                              `linear-gradient(135deg, rgba(99, 102, 241, 0.4), transparent 70%)` : 
                              `linear-gradient(135deg, rgba(107, 114, 128, 0.2), transparent 70%)`
                          }}
                        />
                        
                        {/* Name label at the bottom of active card */}
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-2 md:py-3 px-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <span className="text-gray-800 text-xs md:text-sm font-medium">
                              {image.alt}
                            </span>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Carousel Indicators - Fixed positioning for better alignment */}
            <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center space-x-3 md:hidden">
              {keywords.map((keyword, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    // Reset the interval when manually changing
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    intervalRef.current = setInterval(() => {
                      setActiveIndex(prev => (prev + 1) % keywords.length);
                    }, 5000);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-primary w-5" : "bg-gray-300"
                  }`}
                  aria-label={`Go to ${keyword}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;