"use client";

import { useEffect, useState, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxSectionProps = {
  children: ReactNode;
  bgImage?: string;
  bgColor?: string;
  bgGradient?: string;
  className?: string;
  speed?: number;
  overlayOpacity?: number;
};

const ParallaxSection = ({
  children,
  bgImage,
  bgColor,
  bgGradient,
  className = "",
  speed = 0.5,
  overlayOpacity = 0.5,
}: ParallaxSectionProps) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useScroll();

  // Transform the scrollY value to create a parallax effect
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [speed * 100, -speed * 100]
  );

  useEffect(() => {
    const element = document.getElementById("parallax-section");
    const handleResize = () => {
      if (element) {
        setElementTop(element.offsetTop);
        setClientHeight(window.innerHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundStyle = bgImage
    ? { backgroundImage: `url(${bgImage})` }
    : bgColor
    ? { backgroundColor: bgColor }
    : bgGradient
    ? { backgroundImage: bgGradient }
    : {};

  return (
    <div
      id="parallax-section"
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y, ...backgroundStyle }}
        className="absolute inset-0 bg-cover bg-center"
      ></motion.div>
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        }}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxSection;