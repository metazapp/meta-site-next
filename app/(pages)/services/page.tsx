import { Metadata } from "next";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Button from "@/app/components/ui/Button";
import { services } from "@/app/utils/mockData";
import { FiCode, FiSmartphone, FiCloud, FiCpu, FiServer, FiActivity } from "react-icons/fi";
import FaqAccordion from "@/app/components/sections/FaqAccordion";
import { faqs } from "@/app/utils/mockData";
import { JSX } from "react";
import Image from "next/image"; 

export const metadata: Metadata = {
  title: "Services - Metazapp",
  description: "Explore our comprehensive range of software development services tailored to your business needs.",
};

const iconMap: Record<string, JSX.Element> = {
  CodeIcon: <FiCode size={48} className="text-primary" />,
  MobileIcon: <FiSmartphone size={48} className="text-primary" />,
  CloudIcon: <FiCloud size={48} className="text-primary" />,
  BrainIcon: <FiCpu size={48} className="text-primary" />,
  ServerIcon: <FiServer size={48} className="text-primary" />,
  LightbulbIcon: <FiActivity size={48} className="text-primary" />
};

export default function ServicesPage() {
  // Filter FAQs related to services
  const servicesFaqs = faqs.filter(faq => 
    faq.category === "Services" || faq.category === "Process"
  );

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-40 pb-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90 mb-8">
              We offer comprehensive software development services to help you build innovative digital solutions for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id} 
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index !== 0 ? "mt-32" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="mb-6">{iconMap[service.icon]}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button href="/contact" variant="primary">
                  Request a Consultation
                </Button>
              </div>
              
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="relative h-80 w-full rounded-lg overflow-hidden neumorph">
                  {/* Add the actual image */}
                  <Image
                    src={service.image || `/images/services/${service.id}.jpg`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Optional overlay gradient for better text visibility if needed */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and processes."
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <FaqAccordion faqs={servicesFaqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your software development needs and get a free consultation.
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="text-primary hover:bg-gray-100"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}