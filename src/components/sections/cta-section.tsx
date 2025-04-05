"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/10 rounded-full -mr-16 sm:-mr-32 -mt-16 sm:-mt-32" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/10 rounded-full -ml-16 sm:-ml-32 -mb-16 sm:-mb-32" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Pronto para transformar sua saúde através da alimentação?
              </h2>
              <p className="text-green-50 mb-4 md:mb-6 md:pr-12 text-sm sm:text-base">
                Agende sua consulta hoje mesmo e dê o primeiro passo em direção
                a uma vida mais saudável e equilibrada. Atendimento presencial e
                online.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <CTAFeature text="Primeira consulta detalhada" />
                <CTAFeature text="Plano personalizado" />
                <CTAFeature text="Suporte contínuo" />
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0"
            >
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 shadow-lg px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg w-full md:w-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agende sua consulta
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTAFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/20 px-3 py-1 sm:px-4 sm:py-2 rounded-full">
      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
      <span className="text-white text-xs sm:text-sm">{text}</span>
    </div>
  );
}
