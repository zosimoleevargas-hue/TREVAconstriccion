"use client";

import { motion } from "framer-motion";
import {
  Clock,
  DollarSign,
  HeartHandshake,
  MapPin,
  Shield,
  Users,
} from "lucide-react";

const RAZONES = [
  {
    icon: Shield,
    title: "Calidad certificada",
    desc: "Concreto con resistencias certificadas para la durabilidad de tu obra.",
  },
  {
    icon: Clock,
    title: "Entrega puntual",
    desc: "Llegamos a tu obra a la hora acordada. El tiempo es dinero y lo sabemos.",
  },
  {
    icon: MapPin,
    title: "Cobertura total",
    desc: "Mexicali, Valle, ejidos y zonas agrícolas. Donde estés, llegamos.",
  },
  {
    icon: HeartHandshake,
    title: "Asesoría personalizada",
    desc: "Te guiamos para elegir el concreto ideal para tu proyecto.",
  },
  {
    icon: DollarSign,
    title: "Precio justo",
    desc: "La mejor relación calidad-precio. Cotiza sin compromiso.",
  },
  {
    icon: Users,
    title: "Experiencia comprobada",
    desc: "Más de 10 años en la industria respaldan cada entrega.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function PorQueElegirnos() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            ¿Por qué TREVA?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Más de 10 años respaldando obras en Mexicali y el Valle.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {RAZONES.map((r) => (
            <motion.div
              key={r.title}
              variants={cardVariants}
              className="group relative p-7 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 card-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <r.icon className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
