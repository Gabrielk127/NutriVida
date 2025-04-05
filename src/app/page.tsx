"use client";

import { motion, useScroll } from "framer-motion";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        className="h-1 bg-green-500 fixed top-0 left-0 right-0 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />

      <Footer />
    </div>
  );
}
