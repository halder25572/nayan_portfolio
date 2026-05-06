"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Marquee } from "@/components/ui/marquee";

const firstRow = projects.slice(0, projects.length / 2);
const secondRow = projects.slice(projects.length / 2);

const ProjectImageCard = ({ image, title }: { image: string, title: string }) => {
  return (
    <div className="relative w-[350px] h-[220px] rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover"
      />
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="container-custom text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          My all selected works
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Explore some of my latest projects showcasing modern web and mobile applications. Each work reflects clean code, scalable architecture, and user-friendly design
        </p>
      </div>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center gap-6 overflow-hidden bg-white">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((project) => (
            <ProjectImageCard key={project.id} image={project.image} title={project.title} />
          ))}
          {/* Duplicate for smoother loop if needed, Marquee usually handles this but adding more items helps if the list is short */}
          {firstRow.map((project) => (
            <ProjectImageCard key={`${project.id}-dup`} image={project.image} title={project.title} />
          ))}
        </Marquee>
        
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((project) => (
            <ProjectImageCard key={project.id} image={project.image} title={project.title} />
          ))}
          {secondRow.map((project) => (
            <ProjectImageCard key={`${project.id}-dup`} image={project.image} title={project.title} />
          ))}
        </Marquee>

        {/* Gradient Fades for Marquee */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;
