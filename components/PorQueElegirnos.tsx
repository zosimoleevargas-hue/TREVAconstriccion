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
    title: "Material de alta calidad",
    desc: "Concreto con resistencias certificadas para garantizar la durabilidad de tu obra.",
  },
  {
    icon: Clock,
    title: "Entrega puntual",
    desc: "Llegamos a tu obra a la hora acordada. Sabemos que el tiempo es dinero.",
  },
  {
    icon: MapPin,
    title: "Cobertura total",
    desc: "Atendemos Mexicali, Valle de Mexicali, ejidos y zonas agrícolas.",
  },
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    desc: "Te asesoramos para elegir el concreto ideal para tu proyecto.",
  },
  {
    icon: DollarSign,
    title: "Precios competitivos",
    desc: "La mejor relación calidad-precio del mercado. Cotiza sin compromiso.",
  },
  {
    icon: Users,
    title: "Personal con experiencia",
    desc: "Equipo capacitado con años de experiencia en la industria.",
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            ¿Por qué TREVA?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
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
              className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <r.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
