import React from "react";
import { Briefcase, GraduationCap, Code, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  code: Code,
  "book-open": BookOpen,
};

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: string;
  isLast: boolean;
  index: number;
}

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon,
  isLast,
  index,
}: ExperienceCardProps) => {
  const Icon = iconMap[icon] || Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-8 group"
    >
      {/* Timeline Line & Icon */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-accent border-4 border-white shadow-sm flex items-center justify-center text-primary z-10 group-hover:scale-110 transition-transform">
          <Icon size={20} />
        </div>
        {!isLast && <div className="w-0.5 h-full bg-gray-100 -mt-1 mb-2" />}
      </div>

      {/* Content */}
      <div className="pb-12 flex-1">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <p className="text-primary font-semibold">{company}</p>
            </div>
            <span className="px-4 py-1 rounded-full bg-gray-50 text-gray-500 text-sm font-bold border border-gray-100">
              {period}
            </span>
          </div>
          <p className="text-gray-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
