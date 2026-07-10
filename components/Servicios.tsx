"use client";

import { motion } from "framer-motion";
import {
  Car,
  Factory,
  Grid3x3,
  GripVertical,
  Home,
  Layout,
  Road,
  Square,
  Truck,
} from "lucide-react";

const SERVICIOS = [
  { icon: Truck, title: "Concreto premezclado" },
  { icon: Factory, title: "Pisos industriales" },
  { icon: Home, title: "Pisos para vivienda" },
  { icon: Square, title: "Losas y cubiertas" },
  { icon: GripVertical, title: "Columnas y trabes" },
  { icon: Grid3x3, title: "Cimentaciones y zapatas" },
  { icon: Layout, title: "Muros estructurales" },
  { icon: Car, title: "Estacionamientos" },
  { icon: Road, title: "Pavimentos y senderos" },
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
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
            Todo el concreto que necesitas
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Soluciones integrales para cualquier tipo de proyecto.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-accent/5 text-accent text-sm sm:text-base font-semibold px-6 py-2.5 rounded-full border border-accent/30 shadow-sm shadow-accent/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            Respaldados por Holcim
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-5"
        >
          {SERVICIOS.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-accent/20 transition-all duration-300 text-center cursor-default card-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                  <s.icon className="text-accent" size={22} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  {s.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
