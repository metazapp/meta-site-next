import { Metadata } from "next";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Button from "@/app/components/ui/Button";
import ProductsDisplay from "@/app/components/sections/ProductsDisplay";

export const metadata: Metadata = {
  title: "Products - Metazapp",
  description: "Explore our innovative software products designed to help your business grow and succeed in the digital age.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-40 pb-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-white/90">
              Innovative software solutions designed to meet your business needs and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ProductsDisplay />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Need a Custom Solution?"
            subtitle="Our team can develop tailored software solutions to meet your specific business requirements."
            centered
          />
          
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}