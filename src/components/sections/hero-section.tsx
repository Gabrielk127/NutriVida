"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle, ChevronDown, Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden pt-24 min-h-screen justify-center items-center flex">
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center">
        <motion.div
          className="w-full md:w-1/2 mb-20 md:mt-0 md:mb-0 md:pr-10"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nutrição que transforma
          </motion.span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-12 sm:mb-4 md:mb-6 leading-tight">
            Alimente seu corpo,{" "}
            <span className="text-green-600">nutra sua vida</span>
          </h1>

          {/* IMAGE HERO MOBILE */}
          <motion.div
            className="sm:hidden w-full md:w-1/2 relative mb-16"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/hero.jpg?height=1000&width=800"
                alt="Nutricionista com alimentos saudáveis"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
            </div>
            <motion.div
              className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">+500</p>
                  <p className="text-xs text-gray-500">Vidas transformadas</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">10+ anos</p>
                  <p className="text-xs text-gray-500">De experiência</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* IMAGE HERO MOBILE */}

          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Descubra como uma alimentação equilibrada pode transformar sua saúde
            e bem-estar com orientação nutricional personalizada.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white w-full cursor-pointer"
              >
                Agende uma consulta <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 w-full cursor-pointer"
              >
                Conheça nossos serviços
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* IMAGE HERO DESKTOP */}
        <motion.div
          className="hidden sm:block w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-[300px] sm:h-[400px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/hero.jpg?height=1000&width=800"
              alt="Nutricionista com alimentos saudáveis"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
          </div>
          <motion.div
            className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">+500</p>
                <p className="text-xs text-gray-500">Vidas transformadas</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">10+ anos</p>
                <p className="text-xs text-gray-500">De experiência</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* IMAGE HERO DESKTOP */}
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 sm:pb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <ChevronDown className=" h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
      </motion.div>
    </section>
  );
}
