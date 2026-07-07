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
  { icon: Building2, title: "Compuertas" },
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
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {SERVICIOS.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 transition-all duration-300 text-center cursor-default card-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                  <s.icon className="text-primary" size={22} />
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
