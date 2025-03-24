"use client";

import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import ScrollReveal from "../animations/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import ContactForm from "../forms/ContactForm";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <FiMail size={24} className="text-primary" />,
      title: "Email Us",
      details: [
        { label: "General Inquiries", value: "hello@metazapp.com" },
        { label: "Sales", value: "sales@metazapp.com" }
      ]
    },
    {
      icon: <FiPhone size={24} className="text-primary" />,
      title: "Call Us",
      details: [
        { label: "Support", value: "+91 90034 14321" }
      ]
    },
    {
      icon: <FiMapPin size={24} className="text-primary" />,
      title: "Visit Us",
      details: [
        { label: "Headquarters", value: "No.17 First Floor, Coimbatore - 641047" }
      ]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title="Get in Touch"
            subtitle="Have questions or ready to start your project? Reach out to us today."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-12">
          {contactInfo.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.5}>
              <div className="bg-white p-3 md:p-6 rounded-lg shadow-md text-center h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 mb-2 md:mb-4 mx-auto">
                  {React.cloneElement(item.icon, { size: 20 })}
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                <div className="flex-grow">
                  {item.details.map((detail, i) => (
                    <div key={i} className="mb-2">
                      <p className="text-gray-500 text-xs md:text-sm">{detail.label}</p>
                      {detail.value.includes('@') ? (
                        <a 
                          href={`mailto:${detail.value}`} 
                          className="text-xs md:text-sm text-gray-800 font-medium hover:text-primary transition-colors duration-300 break-words"
                        >
                          {detail.value}
                        </a>
                      ) : detail.value.includes('+') ? (
                        <a 
                          href={`tel:${detail.value}`} 
                          className="text-xs md:text-sm text-gray-800 font-medium hover:text-primary transition-colors duration-300 break-words"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-xs md:text-sm text-gray-800 font-medium break-words">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;