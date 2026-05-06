import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

const TestimonialCard = ({ name, role, content, avatar, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm relative group hover:shadow-lg transition-all"
    >
      <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
        <Quote size={48} />
      </div>
      
      <p className="text-gray-600 mb-8 italic leading-relaxed relative z-10">
        "{content}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-400">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
