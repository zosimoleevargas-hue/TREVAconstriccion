"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIOS = [
  {
    name: "Ing. Carlos Rivera",
    text: "TREVA nos ha suministrado concreto para varias obras residenciales. Siempre puntuales, buena calidad y el mejor precio de Mexicali.",
    rating: 5,
    initials: "CR",
  },
  {
    name: "Arq. Laura Méndez",
    text: "Los recomiendo ampliamente. Su asesoría técnica me ayudó a elegir la resistencia ideal para mi proyecto. El concreto llegó a tiempo y en excelente estado.",
    rating: 5,
    initials: "LM",
  },
  {
    name: "Juan Carlos Navarro",
    text: "Para mi nave industrial necesitaba volumen grande y lo cumplieron sin problema. Personal profesional y entregas exactas.",
    rating: 5,
    initials: "JN",
  },
  {
    name: "María Elena Soto",
    text: "Excelente servicio para mi casa. Me explicaron todo el proceso, el concreto llegó puntual y los muchachos muy amables.",
    rating: 5,
    initials: "MS",
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
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" as const }}
                className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({
                    length: TESTIMONIOS[current].rating,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{TESTIMONIOS[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                    {TESTIMONIOS[current].initials}
                  </div>
                  <p className="font-medium text-gray-900">
                    {TESTIMONIOS[current].name}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
