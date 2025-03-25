"use client";

import ScrollReveal from "../animations/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { FiCode, FiSmartphone, FiCloud, FiCpu, FiServer, FiActivity } from "react-icons/fi";
import { services } from "@/app/utils/mockData";
import { JSX } from "react";
import React from "react";

const iconMap: Record<string, JSX.Element> = {
  CodeIcon: <FiCode size={28} className="text-primary" />,
  MobileIcon: <FiSmartphone size={28} className="text-primary" />,
  CloudIcon: <FiCloud size={28} className="text-primary" />,
  BrainIcon: <FiCpu size={28} className="text-primary" />,
  ServerIcon: <FiServer size={28} className="text-primary" />,
  LightbulbIcon: <FiActivity size={28} className="text-primary" />
};

const ServicesSection = () => {
  return (
    <section className="pt-8 pb-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of software development services tailored to your business needs."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 mt-12">
          {services.map((service) => (
            <div 
              key={service.id}
              className="p-4 sm:p-6 rounded-lg bg-gray-100 shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 hover:shadow-[4px_4px_12px_#d1d9e6,-4px_-4px_12px_#ffffff] hover:-translate-y-1"
              style={{ minHeight: "250px" }}
            >
              <div className="flex items-center justify-center mb-3">
                {React.cloneElement(iconMap[service.icon], { size: 32, className: "text-primary" })}
              </div>
              <h3 className="text-md font-bold text-gray-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{service.description}</p>

              <Button 
                href={`/services#${service.id}`}
                variant="outline"
                className="rounded-full border-gray-300 bg-white text-gray-700 hover:bg-gray-200 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="/services" variant="primary" className="rounded-full shadow-md hover:shadow-lg transition-all">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
