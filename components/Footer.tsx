import Image from "next/image";
import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { FOOTER_LINKS } from "@/lib/data";

const CONTACTOS = [
  { icon: Phone, label: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: COMPANY.whatsappUrl,
  },
  {
    icon: Mail,
    label: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: MapPin,
    label: COMPANY.address,
    href: "https://www.google.com/maps/search/Poblado+L%C3%B3pez+Portillo+Valle+de+Mexicali+B.C.",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Image
              src="/logo-treva.png"
              alt="TREVA Concreto Premezclado"
              width={180}
              height={59}
              className="h-16 w-auto mb-5"
            />
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
            <h4 className="text-primary text-xs font-semibold uppercase tracking-widest mb-5">
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
                        className="flex items-center gap-3 text-sm hover:text-accent transition-colors group"
                      >
                        <Icon size={14} className="text-gray-400 group-hover:text-accent transition-colors" />
                        {c.label}
                      </a>
                    ) : (
                      <span className="flex items-center gap-3 text-sm">
                        <Icon size={14} className="text-gray-400" />
                        {c.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-primary text-xs font-semibold uppercase tracking-widest mb-5">
              Enlaces
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link === "Inicio" ? "hero" : link.toLowerCase()}`}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary text-xs font-semibold uppercase tracking-widest mb-5">
              Horarios
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-500">Lun - Sáb</span>
                <span className="text-gray-700">7:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">Domingo</span>
                <span className="text-gray-500">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} TREVA Concreto. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 items-center">
            <a
              href={`https://instagram.com/${COMPANY.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-accent transition-colors"
            >
              <Globe size={14} />
              Instagram
            </a>
            <a
              href="/aviso-de-privacidad"
              className="text-gray-500 hover:text-accent transition-colors"
            >
              Aviso de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
