"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SectionTitle } from "@/components/ui/section-title";
import { ServiceCard } from "@/components/service-card";
import { MobileServiceCarousel } from "@/components/mobile-service-carousel";

export function ServicesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      title: "Avaliação Nutricional Completa",
      description:
        "Análise detalhada do seu estado nutricional, histórico alimentar e objetivos para criar um plano personalizado.",
      icon: "clipboard",
      color: "green",
    },
    {
      title: "Emagrecimento Saudável",
      description:
        "Estratégias eficazes para perda de peso sustentável, sem dietas restritivas ou efeito sanfona.",
      icon: "scale",
      color: "emerald",
    },
    {
      title: "Nutrição Esportiva",
      description:
        "Planos alimentares específicos para melhorar seu desempenho físico e recuperação muscular.",
      icon: "dumbbell",
      color: "teal",
    },
    {
      title: "Reeducação Alimentar",
      description:
        "Aprenda a fazer escolhas alimentares conscientes e desenvolva uma relação saudável com a comida.",
      icon: "apple",
      color: "lime",
    },
    {
      title: "Nutrição Funcional",
      description:
        "Tratamento de condições de saúde através da alimentação, suplementação e mudanças no estilo de vida.",
      icon: "activity",
      color: "green",
    },
    {
      title: "Acompanhamento Contínuo",
      description:
        "Suporte constante para ajustes no plano alimentar e solução de dúvidas durante todo o processo.",
      icon: "message-circle",
      color: "emerald",
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-16 md:py-20" id="servicos">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Meus Serviços"
          highlightedWord="Serviços"
          description="Ofereço uma variedade de serviços nutricionais personalizados para atender às suas necessidades específicas e ajudá-lo a alcançar seus objetivos de saúde."
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
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <MobileServiceCarousel services={services} />
        </div>
      </div>
    </section>
  );
}
