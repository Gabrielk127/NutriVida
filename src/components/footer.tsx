import Link from "next/link";
import {
  Facebook,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 sm:mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="bg-green-100 p-1.5 sm:p-2 rounded-full">
                <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <span className="font-bold text-lg sm:text-xl text-gray-900">
                NutriVida
              </span>
            </Link>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Transformando vidas através da nutrição personalizada e baseada em
              evidências.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Link
                href="#"
                className="bg-green-100 p-1.5 sm:p-2 rounded-full text-green-600 hover:bg-green-200 transition-colors"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-green-100 p-1.5 sm:p-2 rounded-full text-green-600 hover:bg-green-200 transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-green-100 p-1.5 sm:p-2 rounded-full text-green-600 hover:bg-green-200 transition-colors"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-green-100 p-1.5 sm:p-2 rounded-full text-green-600 hover:bg-green-200 transition-colors"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 sm:mb-6 text-base sm:text-lg">
              Links Rápidos
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm sm:text-base"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm sm:text-base"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm sm:text-base"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#depoimentos"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm sm:text-base"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm sm:text-base"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 sm:mb-6 text-base sm:text-lg">
              Contato
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5" />
                <span className="text-gray-600 text-sm sm:text-base">
                  Av. Paulista, 1000, Conjunto 101 - Bela Vista, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                <span className="text-gray-600 text-sm sm:text-base">
                  (11) 99999-9999
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                <span className="text-gray-600 text-sm sm:text-base">
                  contato@nutrivida.com.br
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 sm:mb-6 text-base sm:text-lg">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Receba dicas de nutrição e bem-estar diretamente no seu email.
            </p>
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <Input
                type="email"
                placeholder="Seu email"
                className="border-green-200 focus:border-green-500 focus:ring-green-500 text-sm sm:text-base"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full text-sm sm:text-base">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-0">
              &copy; {new Date().getFullYear()} NutriVida. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link
                href="#"
                className="text-gray-500 hover:text-green-600 text-xs sm:text-sm"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-green-600 text-xs sm:text-sm"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
