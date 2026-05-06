"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container-custom">
        <SectionHeading
          badge="Testimonials"
          title="What My Clients Are Saying"
          subtitle="Don't just take my word for it. Here's what some of my previous clients and partners have to say about working with me."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
