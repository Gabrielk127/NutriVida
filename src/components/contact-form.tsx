"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-green-50 p-4 sm:p-6 rounded-lg text-center"
      >
        <div className="bg-green-100 p-2 sm:p-3 rounded-full w-fit mx-auto mb-3 sm:mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          Mensagem enviada!
        </h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Obrigado pelo seu contato. Retornaremos em breve.
        </p>
        <Button
          variant="outline"
          className="border-green-600 text-green-600 hover:bg-green-50"
          onClick={() => setIsSubmitted(false)}
        >
          Enviar nova mensagem
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5 sm:space-y-2">
          <Label htmlFor="name" className="text-sm sm:text-base">
            Nome
          </Label>
          <Input
            id="name"
            placeholder="Seu nome completo"
            required
            className="border-gray-200 focus:border-green-500 focus:ring-green-500 text-sm sm:text-base"
          />
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <Label htmlFor="email" className="text-sm sm:text-base">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            required
            className="border-gray-200 focus:border-green-500 focus:ring-green-500 text-sm sm:text-base"
          />
        </div>
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <Label htmlFor="phone" className="text-sm sm:text-base">
          Telefone
        </Label>
        <Input
          id="phone"
          placeholder="(00) 00000-0000"
          className="border-gray-200 focus:border-green-500 focus:ring-green-500 text-sm sm:text-base"
        />
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <Label htmlFor="subject" className="text-sm sm:text-base">
          Assunto
        </Label>
        <Input
          id="subject"
          placeholder="Motivo do contato"
          required
          className="border-gray-200 focus:border-green-500 focus:ring-green-500 text-sm sm:text-base"
        />
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <Label htmlFor="message" className="text-sm sm:text-base">
          Mensagem
        </Label>
        <Textarea
          id="message"
          placeholder="Sua mensagem"
          rows={4}
          required
          className="border-gray-200 focus:border-green-500 focus:ring-green-500 text-sm sm:text-base"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base py-2 sm:py-2.5"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensagem"
        )}
      </Button>
    </form>
  );
}
