"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Building2,
  HardHat,
  Grid3x3,
  GanttChartSquare,
  Wrench,
  Warehouse,
} from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Camiones revolvedores" },
  { icon: Building2, label: "Cimentaciones" },
  { icon: HardHat, label: "Descarga de concreto" },
  { icon: Grid3x3, label: "Losas" },
  { icon: GanttChartSquare, label: "Compuertas" },
  { icon: Wrench, label: "Instalación de tuberías" },
  { icon: Warehouse, label: "Obras terminadas" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Galería
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
            Nuestro trabajo
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Conoce algunas de las obras que hemos realizado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: "easeOut" as const,
                }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="text-accent/30 group-hover:text-accent/50 group-hover:scale-110 transition-all duration-300" size={72} strokeWidth={1} />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-gray-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Ver más +</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
