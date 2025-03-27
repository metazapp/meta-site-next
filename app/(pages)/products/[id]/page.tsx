import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import { products } from "@/app/utils/mockData";
import { FiArrowLeft } from "react-icons/fi";
import Image from "next/image";

// Define the proper types for Next.js App Router
type PageParams = {
  id: string;
};

type PageProps = {
  params: PageParams;
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Generate static paths for all products
export function generateStaticParams(): Promise<PageParams[]> {
  return Promise.resolve(products.map((product) => ({
    id: product.id,
  })));
}

// Generate metadata for each product
export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  // Await params before accessing its properties
  const params = await props.params;
  
  // Use the ID to find the product
  const id = String(params.id);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return {
      title: "Product Not Found - Metazapp",
    };
  }

  return {
    title: `${product.title} - Metazapp Products`,
    description: product.description,
  };
}

export default async function ProductPage(props: PageProps) {
  // Await params before accessing its properties
  const params = await props.params;
  
  // Use the ID to find the product
  const id = String(params.id);
  const product = products.find(p => p.id === id);
  
  // If product not found, show 404
  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-40 pb-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <Link 
              href="/products" 
              className="inline-flex items-center text-white/90 hover:text-white mb-4"
            >
              <FiArrowLeft className="mr-2" /> Back to all products
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{product.title}</h1>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-white/20 rounded-full">
                {product.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
              <Image 
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div>
              <p className="text-lg text-gray-600 mb-8">{product.description}</p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button href="/contact" variant="primary" size="lg">
                Request a Demo
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Specifications</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <dl className="grid grid-cols-1 gap-4">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 py-2 border-b border-gray-100">
                      <dt className="font-medium text-gray-500">{key}</dt>
                      <dd className="col-span-2">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Applications</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="space-y-3">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team for a personalized demo of {product.title} and discover how it can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Request a Demo
            </Button>
            <Button href="/products" variant="outline" size="lg">
              Explore Other Products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}