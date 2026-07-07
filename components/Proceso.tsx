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
    desc: "Contáctanos por WhatsApp, teléfono o formulario y recibe tu cotización sin compromiso.",
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
    desc: "Producimos el concreto con la resistencia y especificaciones que necesitas.",
    number: "03",
  },
  {
    icon: Truck,
    title: "Entregamos en obra",
    desc: "Nuestros camiones revolvedores llegan puntuales y descargan directo en tu obra.",
    number: "04",
  },
  {
    icon: CheckCircle,
    title: "Tu proyecto continúa",
    desc: "Con el material en obra, tu construcción avanza sin retrasos.",
    number: "05",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            De la cotización a la entrega, te acompañamos en cada paso.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mb-3 shadow-lg shadow-primary/25">
                <paso.icon size={24} />
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                Paso {paso.number}
              </span>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {paso.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {paso.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
