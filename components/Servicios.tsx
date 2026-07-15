"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SERVICIOS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

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
        <SectionHeader
          label="Servicios"
          title="Todo el concreto que necesitas"
          subtitle="Del cimiento al acabado, para toda tu obra."
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <span className="text-sm font-medium text-gray-500">
            Respaldados por
          </span>
          <Image
            src="/holcim-logo.svg"
            alt="Holcim"
            width={100}
            height={24}
            className="h-6 w-auto opacity-70"
          />
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
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                  <s.icon className="text-accent" size={26} />
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
