"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { COMPANY, WHATSAPP_MESSAGE } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";

const schema = z.object({
  nombre: z.string().min(2, "Tu nombre es obligatorio"),
  telefono: z.string().min(8, "Teléfono inválido"),
  mensaje: z.string().min(5, "Cuéntanos qué necesitas"),
});

type FormData = z.infer<typeof schema>;

const DATOS = [
  { icon: Phone, label: "Teléfono", value: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: COMPANY.phone,
    href: COMPANY.whatsappUrl,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  { icon: MapPin, label: "Ubicación", value: COMPANY.address },
  { icon: Clock, label: "Horario", value: COMPANY.hours },
];

export default function Contacto() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const enviarWhatsApp = (data: FormData) => {
    const texto = WHATSAPP_MESSAGE.cotizacion(data);
    window.open(
      `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(texto).replace(/%20/g, "%0A")}`,
      "_blank"
    );
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contacto"
          title="Solicita tu cotización"
          subtitle="Sin compromiso. Te respondemos el mismo día."
          dark
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
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
                className="glass-dark rounded-2xl p-5 flex items-center gap-4 hover:border-accent/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <d.icon className="text-accent" size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
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
                      className="text-white font-medium hover:text-accent transition-colors"
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
            <div className="glass-dark rounded-3xl p-8">
              <h3 className="text-white text-lg font-semibold mb-2">
                Envíanos un mensaje
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Cuéntanos tu proyecto y te cotizamos.
              </p>
              <form
                className="space-y-4"
                onSubmit={handleSubmit(enviarWhatsApp)}
                noValidate
              >
                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    {...register("nombre")}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-gray-700 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-xs mt-1">{errors.nombre.message}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Tu teléfono"
                    {...register("telefono")}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-gray-700 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                  {errors.telefono && (
                    <p className="text-red-400 text-xs mt-1">{errors.telefono.message}</p>
                  )}
                </div>
                <div>
                  <textarea
                    placeholder="¿Qué necesitas? (ej: 10 m³ para losa)"
                    rows={4}
                    {...register("mensaje")}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-gray-700 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                  />
                  {errors.mensaje && (
                    <p className="text-red-400 text-xs mt-1">{errors.mensaje.message}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-white py-3.5 rounded-xl font-medium hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
                >
                  <Send size={16} />
                  Enviar cotización
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
