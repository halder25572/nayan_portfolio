import React from "react";
import { motion } from "framer-motion";

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  index: number;
}

const ProcessCard = ({ step, title, description, index }: ProcessCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm group hover:border-primary/30 transition-all"
    >
      <div className="text-5xl font-black text-gray-50 mb-6 absolute top-4 right-8 group-hover:text-primary/5 transition-colors">
        {step}
      </div>
      <div className="w-12 h-12 rounded-xl bg-accent text-primary flex items-center justify-center font-bold text-xl mb-6 relative z-10">
        {step}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{title}</h3>
      <p className="text-gray-500 leading-relaxed relative z-10">
        {description}
      </p>
    </motion.div>
  );
};

export default ProcessCard;
