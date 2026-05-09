"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-40 pb-20 overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-orange-100/30 blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-600 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Develop modern web applications
              </div>
              
              <div className="space-y-2">
                <p className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  👋 Hi! I'm Nayan Halder
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                  Frontend Developer
                </h1>
              </div>

              <p className="text-base text-gray-600 leading-relaxed max-w-lg">
                I am a Frontend developer skilled in React JS, Next.js, React Native, Node.js, Express.js, and MongoDB. I build scalable web and mobile applications and MVPs with high performance, responsive design, and reliable backend solutions.
              </p>
            </div>

            {/* Satisfied Clients */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden flex items-center justify-center text-[10px] font-bold text-gray-400">
                    U{i}
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-gray-700">100+ Happy And Satisfied Clients</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="#portfolio" className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                View Portfolio
              </Link>
              <Link href="#blogs" className="bg-white border-2 border-primary/20 text-primary px-8 py-3.5 rounded-xl font-bold hover:bg-primary/5 transition-colors">
                Read Blogs
              </Link>
            </div>

            <p className="text-sm font-medium text-gray-500 italic">
              Passionate about creating modern, fast, and scalable digital experiences.
            </p>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end pt-12 lg:pt-0"
          >
            <div className="relative w-full max-w-[480px] aspect-[4/5] lg:aspect-square">
               {/* Background blob for style */}
               <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl -z-10" />
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
               
               <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
                  <Image 
                    src="/images/nayan.png" 
                    alt="Nayan" 
                    fill
                    className="object-contain object-bottom transition-transform duration-500 hover:scale-105"
                    priority
                  />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
