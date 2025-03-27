"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "./Button";
import type { Product } from "@/app/types";

type ProductModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent background scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl md:text-2xl font-bold truncate">{product.title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Scrollable content area */}
            <div className="overflow-y-auto flex-grow" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              {/* Product Content */}
              <div className="p-4 md:p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                    {product.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{product.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary font-bold mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Specifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={index}>
                        <span className="font-medium">{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Applications</h4>
                  <ul className="space-y-2">
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

            {/* Footer with action buttons - now sticky at bottom */}
            <div className="p-4 border-t bg-gray-50 flex flex-col sm:flex-row justify-end gap-3 sticky bottom-0 left-0 right-0">
              <Button 
                onClick={onClose} 
                variant="outline"
                className="w-full sm:w-auto"
              >
                Close
              </Button>
              <Button 
                variant="primary" 
                href="/contact"
                className="w-full sm:w-auto"
              >
                Request Demo
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;