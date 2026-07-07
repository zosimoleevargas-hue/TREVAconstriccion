"use client";

import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const ENLACES = ["Inicio", "Servicios", "Calculadora", "FAQ", "Contacto"];

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

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">TREVA</h3>
            <p className="text-sm leading-relaxed mb-4">
              Venta y distribución de concreto premezclado en Mexicali y Valle
              de Mexicali.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              {CONTACTOS.map((c) => (
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
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <c.icon size={14} />
                      {c.label}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-sm">
                      <c.icon size={14} />
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2">
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
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Horarios
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Lun - Sáb</span>
                <span>8:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} TREVA Concreto. Todos los
            derechos reservados.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="https://instagram.com/trevaconstruccionesccccccyconcreto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Globe size={14} />
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Aviso de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
