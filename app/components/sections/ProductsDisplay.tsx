"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import { products } from "@/app/utils/mockData";
import ProductModal from "@/app/components/ui/ProductModal";
import type { Product, ProductCategory } from "@/app/types";

const ProductsDisplay = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const categories: (ProductCategory | "All")[] = ["All", "Category A", "Category B", "Category C"];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mb-12">
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
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {filteredProducts.map((product) => (
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
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={() => handleOpenModal(product)}
                  variant="outline" 
                  className="flex-1"
                >
                  Quick View
                </Button>
                <Link href={`/products/${product.id}`} className="flex-1">
                  <Button variant="primary" className="w-full">
                    Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default ProductsDisplay;