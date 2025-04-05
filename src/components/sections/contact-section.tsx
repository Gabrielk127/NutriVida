"use client";

import type React from "react";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import Image from "next/image";
import { Calendar, MessageSquare, Phone } from "lucide-react";

// import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { ContactForm } from "@/components/contact-form";
import { IconBox } from "@/components/ui/icon-box";

export function ContactSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-16 md:py-20" id="contato">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Entre em Contato"
          highlightedWord="Contato"
          description="Estou aqui para responder suas dúvidas e ajudá-lo a iniciar sua jornada para uma vida mais saudável."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col lg:flex-row gap-8 md:gap-12"
        >
          <motion.div
            className="w-full lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Envie uma mensagem
              </h3>
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="bg-green-50 rounded-xl p-6 sm:p-8 h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Informações de contato
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <ContactInfo
                  icon={
                    <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  }
                  title="Email"
                  content="contato@nutricionista.com.br"
                  description="Resposta em até 24 horas"
                />

                <ContactInfo
                  icon={
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  }
                  title="Telefone"
                  content="(11) 99999-9999"
                  description="Segunda a sexta, 8h às 18h"
                />

                <ContactInfo
                  icon={
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  }
                  title="Horário de atendimento"
                  content="Segunda a sexta: 8h às 19h"
                  description="Sábado: 8h às 12h"
                  showDescriptionAsContent
                />
              </div>

              {/* <div className="mt-8 sm:mt-10">
                <h4 className="font-medium text-gray-900 mb-3 sm:mb-4">
                  Localização
                </h4>
                <div className="rounded-xl overflow-hidden h-[150px] sm:h-[200px] relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Mapa da localização do consultório"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button variant="secondary" size="sm">
                      Ver no mapa
                    </Button>
                  </div>
                </div>
                <p className="text-gray-600 mt-2 sm:mt-3 text-sm">
                  Av. Paulista, 1000, Conjunto 101 - Bela Vista, São Paulo - SP
                </p>
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  description?: string;
  showDescriptionAsContent?: boolean;
}

function ContactInfo({
  icon,
  title,
  content,
  description,
  showDescriptionAsContent = false,
}: ContactInfoProps) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <IconBox size="lg" icon={icon} />
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm sm:text-base">{content}</p>
        {description && !showDescriptionAsContent && (
          <p className="text-xs sm:text-sm text-gray-500 mt-1">{description}</p>
        )}
        {showDescriptionAsContent && (
          <p className="text-gray-600 text-sm sm:text-base">{description}</p>
        )}
      </div>
    </div>
  );
}
