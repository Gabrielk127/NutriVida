"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SectionTitle } from "@/components/ui/section-title";
import { TestimonialCard } from "@/components/testimonial-card";
import { MobileTestimonialsCarousel } from "@/components/mobile-testimonials-carousel";

export function TestimonialsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Perdeu 15kg em 6 meses",
      content:
        "A abordagem da nutricionista mudou minha relação com a comida. Consegui emagrecer sem passar fome e mantive o peso mesmo após o fim do acompanhamento.",
      image: "/testimonials/mariana.jpg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Carlos Oliveira",
      role: "Atleta amador",
      content:
        "Meu desempenho nos treinos melhorou significativamente após seguir o plano alimentar. Tenho mais energia e minha recuperação está muito mais rápida.",
      image: "/testimonials/carlos.jpg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      role: "Mãe de 2 filhos",
      content:
        "Aprendi a preparar refeições saudáveis e práticas para toda a família. As crianças adoram e eu recuperei minha forma após a gravidez.",
      image: "/testimonials/juliana.jpg?height=80&width=80",
      rating: 4,
    },
    {
      name: "Roberto Almeida",
      role: "Empresário",
      content:
        "Mesmo com a rotina corrida, consegui implementar as orientações nutricionais. Minha disposição melhorou e os exames de sangue normalizaram.",
      image: "/testimonials/roberto.jpg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Fernanda Santos",
      role: "Superou intolerâncias alimentares",
      content:
        "O acompanhamento nutricional funcional foi essencial para identificar minhas intolerâncias. Hoje vivo sem dores e desconfortos intestinais.",
      image: "/testimonials/fernanda.jpg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Paulo Mendes",
      role: "Ganhou 8kg de massa muscular",
      content:
        "O plano alimentar foi fundamental para meu ganho de massa muscular. As refeições são saborosas e consigo seguir sem dificuldades.",
      image: "/testimonials/paulo.jpg?height=80&width=80",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-16 md:py-20 bg-green-50" id="depoimentos">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="O Que Meus Pacientes Dizem"
          highlightedWord="Pacientes Dizem"
          description="Histórias reais de pessoas que transformaram sua saúde e qualidade de vida através da nutrição personalizada."
        />

        {/* Desktop Grid View */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <MobileTestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
