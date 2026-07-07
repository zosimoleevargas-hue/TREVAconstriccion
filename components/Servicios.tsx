"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Cable,
  Factory,
  GripVertical,
  Grid3x3,
  Headphones,
  Road,
  Sprout,
  Square,
  Truck,
  Waves,
} from "lucide-react";

const SERVICIOS = [
  { icon: Truck, title: "Concreto premezclado" },
  { icon: Building2, title: "Construcción de compuertas" },
  { icon: Waves, title: "Obras hidráulicas" },
  { icon: Cable, title: "Tuberías" },
  { icon: Road, title: "Pavimentos" },
  { icon: Grid3x3, title: "Cimentaciones" },
  { icon: Square, title: "Losas" },
  { icon: GripVertical, title: "Banquetas" },
  { icon: Factory, title: "Pisos industriales" },
  { icon: Sprout, title: "Proyectos agrícolas" },
  { icon: Headphones, title: "Asesoría técnica" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            ¿Qué ofrecemos?
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Soluciones integrales en concreto para todo tipo de proyectos de
            construcción.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {SERVICIOS.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="p-5 rounded-xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 text-center group cursor-default"
            >
              <s.icon
                className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform"
                size={28}
              />
              <p className="text-sm font-medium text-gray-800">{s.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
