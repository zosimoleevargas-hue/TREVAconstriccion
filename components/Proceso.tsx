"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  ClipboardList,
  Factory,
  Truck,
} from "lucide-react";

const PASOS = [
  {
    icon: ClipboardList,
    title: "Solicita tu cotización",
    desc: "Contáctanos por WhatsApp o el formulario y recibe tu cotización sin compromiso.",
    number: "01",
  },
  {
    icon: Calendar,
    title: "Programamos la entrega",
    desc: "Coordinamos el día y horario para llevar el concreto a tu obra.",
    number: "02",
  },
  {
    icon: Factory,
    title: "Preparamos el concreto",
    desc: "Producimos el concreto con la resistencia que necesitas.",
    number: "03",
  },
  {
    icon: Truck,
    title: "Entregamos en obra",
    desc: "Camiones revolvedores puntuales descargan directo en tu obra.",
    number: "04",
  },
  {
    icon: CheckCircle,
    title: "Tu proyecto avanza",
    desc: "Con el material listo, tu construcción sigue sin retrasos.",
    number: "05",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-widest">
            Proceso
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
            Así trabajamos
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            De la cotización a la entrega, te acompañamos en cada paso.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-14 left-[calc(10%+28px)] right-[calc(10%+28px)] h-px bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 hidden lg:block" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {PASOS.map((paso, i) => (
              <motion.div
                key={paso.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut" as const,
                }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center shadow-lg shadow-accent/25">
                    <paso.icon size={22} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-accent flex items-center justify-center">
                    <span className="text-[10px] font-bold text-accent">
                      {paso.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {paso.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
                  {paso.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
