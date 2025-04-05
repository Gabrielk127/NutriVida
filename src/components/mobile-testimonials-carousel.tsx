"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { TestimonialCard } from "@/components/testimonial-card";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

interface MobileTestimonialsCarouselProps {
  testimonials: TestimonialProps[];
}

export function MobileTestimonialsCarousel({
  testimonials,
}: MobileTestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="relative px-4">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <TestimonialCard
              testimonial={testimonials[current]}
              index={current}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 text-green-500 rounded-full p-2 z-10 shadow-md"
        onClick={prev}
        aria-label="Depoimento anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 text-green-500 rounded-full p-2 z-10 shadow-md"
        onClick={next}
        aria-label="Próximo depoimento"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false);
              setCurrent(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-green-500 w-6" : "bg-green-500/30 w-2"
            }`}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
