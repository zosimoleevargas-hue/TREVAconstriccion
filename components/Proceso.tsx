"use client";

import { motion } from "framer-motion";
import { PASOS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Proceso() {
  return (
    <section id="proceso" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Proceso"
          title={<>Así <span className="text-accent">trabajamos</span></>}
          subtitle="De la cotización a la entrega, te acompañamos en cada paso."
        />

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
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center shadow-lg shadow-accent/25 group-hover:scale-105 transition-transform duration-300">
                    <paso.icon size={24} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-sm">
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
