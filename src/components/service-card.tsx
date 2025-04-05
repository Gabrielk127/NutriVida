"use client";

import { motion } from "framer-motion";
import {
  Clipboard,
  Scale,
  Dumbbell,
  Apple,
  Activity,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface ServiceCardProps {
  service: ServiceProps;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const icons = {
    clipboard: Clipboard,
    scale: Scale,
    dumbbell: Dumbbell,
    apple: Apple,
    activity: Activity,
    "message-circle": MessageCircle,
  };

  const colorClasses = {
    green: "bg-green-100 text-green-600",
    emerald: "bg-emerald-100 text-emerald-600",
    teal: "bg-teal-100 text-teal-600",
    lime: "bg-lime-100 text-lime-600",
  };

  const IconComponent = icons[service.icon as keyof typeof icons] || Activity;
  const colorClass =
    colorClasses[service.color as keyof typeof colorClasses] ||
    "bg-green-100 text-green-600";

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div variants={cardVariants}>
      <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow m-2">
        <CardContent className="p-6">
          <div
            className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center mb-4`}
          >
            <IconComponent className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
          <p className="text-muted-foreground">{service.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
