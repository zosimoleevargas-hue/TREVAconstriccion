"use client";

import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const CONTACTOS = [
  { icon: Phone, label: "+52 686 306 2340", href: "tel:+526863062340" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/526863062340",
  },
  {
    icon: Mail,
    label: "ventas@trevaconcreto.com",
    href: "mailto:ventas@trevaconcreto.com",
  },
  { icon: MapPin, label: "Poblado López Portillo, Valle de Mexicali, B.C." },
];

const ENLACES = ["Inicio", "Servicios", "Calculadora", "FAQ", "Contacto"];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">TREVA</h3>
            <p className="text-sm leading-relaxed text-gray-500 mb-6">
              Venta y distribución de concreto premezclado en Mexicali y Valle
              de Mexicali.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-500">Disponibles ahora</span>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Contacto
            </h4>
            <ul className="space-y-4">
              {CONTACTOS.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={
                          c.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          c.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-3 text-sm hover:text-primary transition-colors group"
                      >
                        <Icon size={14} className="text-gray-600 group-hover:text-primary transition-colors" />
                        {c.label}
                      </a>
                    ) : (
                      <span className="flex items-center gap-3 text-sm">
                        <Icon size={14} className="text-gray-600" />
                        {c.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Enlaces
            </h4>
            <ul className="space-y-3">
              {ENLACES.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link === "Inicio" ? "hero" : link.toLowerCase()}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Horarios
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-500">Lun - Sáb</span>
                <span className="text-gray-300">8:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">Domingo</span>
                <span className="text-gray-500">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} TREVA Concreto. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 items-center">
            <a
              href="https://instagram.com/trevaconstruccionesccccccyconcreto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors"
            >
              <Globe size={14} />
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Aviso de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
