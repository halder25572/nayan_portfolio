import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ProcessSection />
      <ServicesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <FAQSection />
      
      {/* Contact CTA Section */}
      <section id="contact" className="py-24 bg-primary">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Start Your Next <br /> Digital Project?
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Let's collaborate to build something amazing that stands out and delivers results.
          </p>
          <div className="pt-4">
            <a 
              href="mailto:contact@nayan.com" 
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Get In Touch Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
