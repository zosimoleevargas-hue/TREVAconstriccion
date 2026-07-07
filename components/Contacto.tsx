"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const DATOS = [
  { icon: Phone, label: "Teléfono", value: "+52 686 306 2340", href: "tel:+526863062340" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+52 686 306 2340",
    href: "https://wa.me/526863062340",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ventas@trevaconcreto.com",
    href: "mailto:ventas@trevaconcreto.com",
  },
  { icon: MapPin, label: "Ubicación", value: "Poblado López Portillo, Valle de Mexicali, B.C." },
  { icon: Clock, label: "Horario", value: "Lun - Sáb: 8:00 - 18:00" },
];

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Hola TREVA, soy ${nombre}.%0A%0ATel: ${telefono}%0A%0A${mensaje}`;
    window.open(
      `https://wa.me/526863062340?text=${encodeURIComponent(texto).replace(/%20/g, "%0A")}`,
      "_blank"
    );
  };

  return (
    <section id="contacto" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Solicita tu cotización
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Estamos listos para atenderte. Contáctanos por el medio que
            prefieras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {DATOS.map((d) => (
              <div
                key={d.label}
                className="bg-white/5 border border-gray-700 rounded-xl p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <d.icon className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        d.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-white font-medium hover:text-primary transition-colors"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-white text-lg font-semibold mb-6">
                Envíanos un mensaje
              </h3>
              <form
                className="space-y-4"
                onSubmit={enviarWhatsApp}
              >
                <input
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-primary outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-primary outline-none transition-colors"
                />
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-primary outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary-dark transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
