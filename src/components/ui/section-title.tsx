"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  highlightedWord: string;
  description: string;
}

export function SectionTitle({
  title,
  highlightedWord,
  description,
}: SectionTitleProps) {
  return (
    <motion.div
      className="text-center mb-10 sm:mb-12 md:mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
        {title.replace(highlightedWord, "")}
        <span className="text-green-600">{highlightedWord}</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}
