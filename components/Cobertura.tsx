"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ZONAS = ["Mexicali", "Valle de Mexicali", "Ejidos", "Zonas agrícolas"];

export default function Cobertura() {
  return (
    <section id="cobertura" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Cobertura
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Zonas de cobertura
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Llegamos a toda Mexicali y sus alrededores.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67203.89748894286!2d-115.6553457226806!3d32.58406649487622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d76885fc33f303%3A0x19b1b8b1f0c1e9c!2sValle%20de%20Mexicali%2C%20B.C.!5e0!3m2!1ses!2smx!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zonas de cobertura TREVA"
                className="rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Cubrimos toda la región
            </h3>
            <div className="space-y-4">
              {ZONAS.map((zona) => (
                <div
                  key={zona}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={16} />
                  </div>
                  <p className="font-medium text-gray-800">{zona}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6">
              ¿No encuentras tu zona? Contáctanos y te confirmamos si tenemos
              cobertura en tu ubicación.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
