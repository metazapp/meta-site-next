import { Metadata } from "next";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Button from "@/app/components/ui/Button";
import { products } from "@/app/utils/mockData";

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
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <button
                className="px-4 py-2 rounded-md bg-primary text-white shadow-md transition-all duration-300"
              >
                All Products
              </button>
              <button
                className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300"
              >
                Category A
              </button>
              <button
                className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300"
              >
                Category B
              </button>
              <button
                className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300"
              >
                Category C
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Product Image</span>
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button href={`/products/${product.id}`} variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
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