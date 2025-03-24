"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import type { FAQ } from "@/app/types";

type FaqAccordionProps = {
  faqs: FAQ[];
};

const FaqAccordion = ({ faqs }: FaqAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden neumorph"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="flex items-center justify-between w-full p-6 text-left"
            aria-expanded={openIndex === index}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <span className="ml-4 flex-shrink-0">
              {openIndex === index ? (
                <FiMinus className="text-primary" />
              ) : (
                <FiPlus className="text-primary" />
              )}
            </span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;