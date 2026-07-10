"use client";

import { motion } from "framer-motion";
import { Building2, Shield, Truck } from "lucide-react";

const VALORES = [
  { icon: Truck, label: "Entregas puntuales" },
  { icon: Shield, label: "Calidad garantizada" },
  { icon: Building2, label: "Todo tipo de obra" },
];

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-xl" />
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/camion-mezcla.jpg"
                  alt="Camión revolvedor TREVA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium uppercase tracking-widest">
              Nosotros
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6 tracking-tight">
              Somos TREVA
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Nos dedicamos a la venta y distribución de concreto
              premezclado de alta calidad en Mexicali y todo el Valle.
            </p>

            <p className="text-gray-500 leading-relaxed mb-10">
              Contamos con camión revolvedor propio moderno y personal
              capacitado. Atendemos proyectos residenciales, comerciales,
              industriales y agrícolas. Desde una banqueta hasta un desarrollo
              completo.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {VALORES.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.label}
                    className="group p-5 rounded-2xl bg-gray-50 border border-gray-100 text-center card-hover"
                  >
                    <Icon className="text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" size={24} />
                    <p className="text-sm font-semibold text-gray-800">
                      {v.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
