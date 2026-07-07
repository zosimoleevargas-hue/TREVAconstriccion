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
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Galería
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Nuestro trabajo
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Conoce algunas de las obras que hemos realizado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 group cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="text-primary/40" size={64} strokeWidth={1} />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-medium text-sm">{item.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
