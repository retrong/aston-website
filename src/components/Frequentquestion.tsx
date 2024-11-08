// components/FAQCarousel.js

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "What is the service about?", answer: "Our service offers..." },
  { question: "How can I sign up?", answer: "You can sign up by..." },
  { question: "What payment methods are accepted?", answer: "We accept..." },
  { question: "Is there a free trial available?", answer: "Yes, we offer..." },
  // Add more FAQ items as needed
];

export function FAQCarousel() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left text-lg font-medium flex justify-between items-center text-gray-700"
            >
              {faq.question}
              <span className="text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
