"use client";

import React from "react";
import { FiShield, FiUsers, FiTrendingUp, FiRefreshCw, FiGrid,FiHeadphones  } from "react-icons/fi";
import ScrollReveal from "../animations/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: <FiShield size={36} />,
    title: "Security",
    description: "We prioritize the security of your data and applications, implementing industry-standard practices and protocols."
  },
  {
    icon: <FiUsers size={36} />,
    title: "User-centricity",
    description: "We create intuitive and engaging user experiences that keep your customers coming back for more."
  },
  {
    icon: <FiTrendingUp size={36} />,
    title: "Innovation",
    description: "We stay on the cutting edge of technology to provide you with the most innovative solutions available."
  },
  {
    icon: <FiRefreshCw size={36} />,
    title: "Adaptability",
    description: "Our solutions are designed to adapt and scale as your business grows and evolves."
  },
  {
    icon: <FiGrid size={36} />,
    title: "Reliability",
    description: "We build robust, reliable software that you can count on, day in and day out."
  },
  {
    icon: <FiHeadphones size={36} />,
    title: "Support",
    description: "Our dedicated support team is available to assist you with any questions or issues you may encounter."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.3) 2px, transparent 0)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="down">
          <SectionHeading
            title="Why Choose Us"
            subtitle="We combine technical expertise with business acumen to deliver exceptional software solutions."
            centered
            light
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-12">
  {features.map((feature, index) => (
    <ScrollReveal key={index} delay={index * 0.5}>
      <div className="neumorph-dark p-3 md:p-6 h-full flex flex-col">
        <div className="text-white mb-4">
          {feature.icon}
        </div>
        <h3 className="text-base md:text-xl font-bold mb-1 md:mb-3 text-white">{feature.title}</h3>
        <p className="text-xs md:text-sm text-white/90 line-clamp-4 md:line-clamp-none">{feature.description}</p>
      </div>
    </ScrollReveal>
  ))}
</div>
      </div>
    </section>
  );
};

export default WhyChooseUs;