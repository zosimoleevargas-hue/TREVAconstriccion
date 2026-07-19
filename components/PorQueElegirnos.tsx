"use client";

import { motion } from "framer-motion";
import { RAZONES } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function PorQueElegirnos() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="¿Por qué TREVA?"
          title="¿Por qué elegirnos?"
          subtitle="Más de 3 años respaldando obras en Mexicali y el Valle."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {RAZONES.map((r) => (
            <motion.div
              key={r.title}
              variants={cardVariants}
              className="group relative p-7 rounded-2xl border border-gray-100 hover:border-accent/20 transition-all duration-300 card-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                  <r.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
