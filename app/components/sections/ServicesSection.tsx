"use client";

import ScrollReveal from "../animations/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { FiCode, FiSmartphone, FiCloud, FiCpu, FiServer, FiActivity } from "react-icons/fi";
import { services } from "@/app/utils/mockData";
import { JSX } from "react";
import React from "react";

const iconMap: Record<string, JSX.Element> = {
  CodeIcon: <FiCode size={36} className="text-primary" />,
  MobileIcon: <FiSmartphone size={36} className="text-primary" />,
  CloudIcon: <FiCloud size={36} className="text-primary" />,
  BrainIcon: <FiCpu size={36} className="text-primary" />,
  ServerIcon: <FiServer size={36} className="text-primary" />,
  LightbulbIcon: <FiActivity size={36} className="text-primary" />
};

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of software development services tailored to your business needs."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-12">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              variant="neumorph"
               className="p-3 md:p-6"
              delay={index}
            >
             <div className="mb-4">
  {React.cloneElement(iconMap[service.icon], { size: 24 })}
</div>
<h3 className="text-xl font-bold mb-3">{service.title}</h3>
<p className="text-gray-600 mb-6">{service.description}</p>

              <Button 
                href={`/services#${service.id}`}
                variant="outline"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;