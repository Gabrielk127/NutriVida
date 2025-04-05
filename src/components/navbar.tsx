"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2 sm:py-3"
          : "bg-transparent py-3 sm:py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-green-100 p-1.5 sm:p-2 rounded-full">
              <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
            </div>
            <span className="font-bold text-lg sm:text-xl text-gray-900">
              NutriVida
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:text-green-600 font-medium rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base cursor-pointer">
              Agende uma consulta
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Menu className="h-8 w-8 sm:h-9 sm:w-9" />
                <span className="sr-only">Abrir menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="bg-green-100 p-1.5 sm:p-2 rounded-full">
                      <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    </div>
                    <span className="font-bold text-lg sm:text-xl text-gray-900">
                      NutriVida
                    </span>
                  </Link>
                </div>

                <nav className="flex flex-col space-y-2 sm:space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium rounded-md transition-colors text-base sm:text-lg"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-6 sm:pt-8 cursor-pointer">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base py-2.5 sm:py-3 cursor-pointer">
                    Agende uma consulta
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
