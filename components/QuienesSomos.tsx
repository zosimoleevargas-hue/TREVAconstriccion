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
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🚛</div>
                  <p className="text-gray-600 font-semibold text-lg">
                    Flota de camiones revolvedores
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Somos TREVA
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              En TREVA nos dedicamos a la venta y distribución de concreto
              premezclado de alta calidad en Mexicali y todo el Valle de
              Mexicali. Contamos con una flota de camiones revolvedores modernos
              y personal capacitado para garantizar entregas puntuales en cada
              obra.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Atendemos proyectos residenciales, comerciales, industriales y
              agrícolas. Desde una banqueta hasta un desarrollo completo,
              nuestro compromiso es ofrecer material de primera calidad con el
              mejor servicio.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {VALORES.map((v) => (
                <div
                  key={v.label}
                  className="p-4 rounded-xl bg-gray-50 text-center border border-gray-100"
                >
                  <v.icon className="text-primary mx-auto mb-2" size={24} />
                  <p className="text-sm font-semibold text-gray-800">
                    {v.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
