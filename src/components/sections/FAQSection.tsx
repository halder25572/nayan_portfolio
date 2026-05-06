"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Find answers to some of the most common questions about my services and development process."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`border rounded-2xl transition-all duration-300 ${
                openId === faq.id ? "border-primary bg-accent/20" : "border-gray-100 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                {openId === faq.id ? (
                  <ChevronUp className="text-primary" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-100/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
