"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

import { IconBox } from "@/components/ui/icon-box";

export function AboutSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-16 md:py-20 bg-green-50" id="sobre">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <motion.div
            className="w-full md:w-1/2 relative"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="relative h-[400px] mx-8 sm:mx-12 md:mx-0  sm:h-[400px] md:h-[550px] md:w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/nutri.jpg?height=800&width=600"
                alt="Nutricionista em consultório"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[250px] sm:max-w-xs">
              <p className="text-gray-700 italic text-xs sm:text-sm">
                Minha missão é ajudar você a encontrar o equilíbrio perfeito
                entre saúde e prazer na alimentação.
              </p>
              <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center">
                <p className="font-medium text-green-700 text-sm">
                  Dra. Ana Silva
                </p>
                <span className="hidden sm:inline-block mx-2 text-gray-300">
                  |
                </span>
                <p className="text-xs text-gray-500">Nutricionista CRN 12345</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 mt-12 md:mt-0"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Sobre <span className="text-green-600">Mim</span>
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6">
              Com mais de 10 anos de experiência em nutrição clínica, meu
              trabalho é baseado em evidências científicas e uma abordagem
              personalizada para cada paciente. Acredito que a alimentação
              saudável deve ser prazerosa e sustentável.
            </p>
            <p className="text-gray-600 mb-6 md:mb-8">
              Sou especialista em nutrição funcional, emagrecimento saudável e
              tratamento de distúrbios metabólicos. Minha abordagem integra
              aspectos físicos, emocionais e comportamentais relacionados à
              alimentação.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <FeatureItem
                title="Formação Acadêmica"
                description="Mestrado em Nutrição Clínica pela USP"
              />

              <FeatureItem
                title="Especialização"
                description="Nutrição Funcional e Comportamental"
              />

              <FeatureItem
                title="Atendimento"
                description="Presencial e Online"
              />

              <FeatureItem
                title="Abordagem"
                description="Personalizada e baseada em evidências"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <IconBox icon={<CheckCircle className="h-5 w-5 text-green-600" />} />
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
