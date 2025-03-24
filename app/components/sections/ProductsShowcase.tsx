"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { products } from "@/app/utils/mockData";
import type { ProductCategory } from "@/app/types";

const ProductsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");
  
  const categories: (ProductCategory | "All")[] = ["All", "Category A", "Category B", "Category C"];
  
  const filteredProducts = activeCategory === "All" 
  ? products.slice(0, 4) 
  : products.filter(product => product.category === activeCategory).slice(0, 4);

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

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

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
        <div className="relative h-28 md:h-32 lg:h-40 overflow-hidden">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-xs md:text-sm">Product Image</span>
          </div>
        </div>
        <div className="p-2 md:p-4">
          <span className="inline-block px-2 py-0.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-2">
            {product.category}
          </span>
          <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1">{product.title}</h3>
          <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
          <Button href={`/products/${product.id}`} variant="outline" className="w-full text-xs md:text-sm py-1">
            View Details
          </Button>
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
    </section>
  );
};

export default ProductsShowcase;