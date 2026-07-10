"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TESTIMONIOS = [
  {
    name: "Ing. Carlos Rivera",
    text: "TREVA nos ha suministrado concreto para varias obras residenciales. Siempre puntuales, buena calidad y el mejor precio de Mexicali.",
    rating: 5,
    initials: "CR",
    role: "Ingeniero Civil",
  },
  {
    name: "Arq. Laura Méndez",
    text: "Los recomiendo ampliamente. Su asesoría técnica me ayudó a elegir la resistencia ideal para mi proyecto. El concreto llegó a tiempo y en excelente estado.",
    rating: 5,
    initials: "LM",
    role: "Arquitecta",
  },
  {
    name: "Juan Carlos Navarro",
    text: "Para mi nave industrial necesitaba volumen grande y lo cumplieron sin problema. Personal profesional y entregas exactas.",
    rating: 5,
    initials: "JN",
    role: "Empresario",
  },
  {
    name: "María Elena Soto",
    text: "Excelente servicio para mi casa. Me explicaron todo el proceso, el concreto llegó puntual y los muchachos muy amables.",
    rating: 5,
    initials: "MS",
    role: "Cliente Residencial",
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
};

export default function Testimonios() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIOS.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIOS.length) % TESTIMONIOS.length
    );
  };

  return (
    <section id="testimonios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <Quote className="absolute -top-4 -left-4 text-accent/10" size={48} />
          <div className="overflow-hidden relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" as const }}
                className="relative bg-white rounded-3xl p-10 sm:p-12 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({
                    length: TESTIMONIOS[current].rating,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg italic">
                  &ldquo;{TESTIMONIOS[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {TESTIMONIOS[current].initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {TESTIMONIOS[current].name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {TESTIMONIOS[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <div className="flex gap-2">
              {TESTIMONIOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-accent w-8 h-2"
                      : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
