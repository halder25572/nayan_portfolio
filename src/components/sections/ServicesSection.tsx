"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container-custom">
        <SectionHeading
          badge="Our Services"
          title="Expertise That I Can Provide"
          subtitle="I offer a wide range of digital services to help you build and grow your online presence with cutting-edge technology."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
