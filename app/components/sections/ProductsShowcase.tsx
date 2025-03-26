"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { products } from "@/app/utils/mockData";
import ProductModal from "../ui/ProductModal";
import type { ProductCategory, Product } from "@/app/types";
import Image from "next/image";

const ProductsShowcase = () => {
  const [activeCategory] = useState<ProductCategory | "All">("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  
  const filteredProducts = activeCategory === "All" 
  ? products.slice(0, 4) 
  : products.filter(product => product.category === activeCategory).slice(0, 4);
  
  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title="Our Products"
            subtitle="Discover our innovative software products designed to meet your business needs."
            centered
          />
        </ScrollReveal>

      
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mt-8">
  <AnimatePresence>
    {filteredProducts.map((product) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift"
      >
       <div className="relative h-32 md:h-40 lg:h-48 overflow-hidden">
  <Image 
    src={product.image}
    alt={product.title}
    fill
    className="object-cover"
  />
</div>
        <div className="p-2 md:p-4">
          <span className="inline-block px-2 py-0.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-2">
            {product.category}
          </span>
          <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1">{product.title}</h3>
          <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
          <div className="flex gap-1">
            <div className="flex-1">
              <Button 
                onClick={() => handleOpenModal(product)} 
                variant="primary" 
                className="w-full text-[10px] md:text-xs lg:text-sm py-1 px-1 md:px-2"
              >
                View
              </Button>
            </div>
            <div className="flex-1">
              <Link href={`/products/${product.id}`} className="block w-full">
                <Button 
                  variant="primary" 
                  className="w-full text-[10px] md:text-xs lg:text-sm py-1 px-1 md:px-2"
                >
                  Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</div>

        <div className="flex justify-center mt-12">
          <Button href="/products" variant="primary">
            View All Products
          </Button>
        </div>
      </div>
      
      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default ProductsShowcase;