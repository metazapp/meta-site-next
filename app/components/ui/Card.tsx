import React from "react";
import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "neumorph" | "neumorph-dark" | "gradient";
  hover?: boolean;
  delay?: number;
};

const Card = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  delay = 0,
}: CardProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay * 0.1, // stagger effect
      }
    },
  };
  
  const hoverClass = hover ? "hover-lift" : "";
  
  const cardStyles = {
    default: `bg-white rounded-lg shadow-lg h-full ${hoverClass}`,
    neumorph: `neumorph h-full ${hoverClass}`,
    "neumorph-dark": `neumorph-dark h-full ${hoverClass}`,
    gradient: `bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg h-full ${hoverClass}`,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={`${cardStyles[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;