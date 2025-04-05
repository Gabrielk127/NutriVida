"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    content: string;
    image: string;
  };
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
          },
        },
      }}
    >
      <Card className="overflow-hidden border-none shadow-lg h-full m-2">
        <CardContent className="p-4 sm:p-6">
          <div className="bg-green-100 p-1.5 sm:p-2 rounded-full w-fit mb-4 sm:mb-6">
            <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
          </div>
          <p className="text-gray-600 mb-4 sm:mb-6 italic text-sm sm:text-base">
            {testimonial.content}
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm sm:text-base">
                {testimonial.name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500">
                {testimonial.role}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
