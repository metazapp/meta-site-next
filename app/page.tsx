import { Metadata } from "next";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProductsShowcase from "./components/sections/ProductsShowcase";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import ContactSection from "./components/sections/ContactSection";
import ScrollReveal from "./components/animations/ScrollReveal";
import SectionHeading from "./components/ui/SectionHeading";
import Button from "./components/ui/Button";

export const metadata: Metadata = {
  title: "Metazapp - Innovative Software Solutions",
  description: "Metazapp provides innovative, reliable and secure software solutions for businesses and individuals.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <ServicesSection />
      
      <ProductsShowcase />
      
      <WhyChooseUs />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Ready to transform your ideas into reality?"
              subtitle="Let us help you build innovative software solutions that drive growth and success."
              centered
            />
          </ScrollReveal>
          
          <div className="flex justify-center mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </>
  );
}