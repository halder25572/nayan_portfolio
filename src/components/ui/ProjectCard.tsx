import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
  index: number;
}

const ProjectCard = ({ title, category, image, tags, link, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
           <span className="text-gray-400 font-bold text-2xl uppercase">{title.split(" ")[0]}</span>
        </div>
        {/* <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" /> */}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Link href={link} className="p-3 rounded-full bg-white text-primary hover:scale-110 transition-transform">
            <ExternalLink size={24} />
          </Link>
          <Link href="#" className="p-3 rounded-full bg-white text-primary hover:scale-110 transition-transform">
            <Github size={24} />
          </Link>
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">{category}</span>
          <div className="flex gap-1">
             {tags.slice(0, 2).map(tag => (
               <span key={tag} className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full font-medium">{tag}</span>
             ))}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
