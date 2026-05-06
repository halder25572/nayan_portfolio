"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessCard from "@/components/ui/ProcessCard";
import { steps } from "@/data/process";

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="How I Work"
          title="My Development Process"
          subtitle="A systematic approach to bringing your digital ideas to life, ensuring quality and transparency at every step."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <ProcessCard
              key={item.id}
              step={item.step}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
