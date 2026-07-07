"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calculator, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)",
          }}
        />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <span className="inline-block bg-primary/15 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Suministro de concreto en Mexicali y Valle
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Concreto Premezclado de Alta Calidad para{" "}
              <span className="text-primary">Mexicali y el Valle</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
              Suministramos concreto para obras de cualquier tamaño con entregas
              puntuales y atención profesional. Residencial, comercial,
              industrial y agrícola.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#calculadora"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-base font-medium hover:bg-primary-dark transition-all shadow-lg shadow-primary/30"
              >
                <Calculator size={18} />
                Solicitar cotización
              </a>
              <a
                href="https://wa.me/526863062340"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-400 text-gray-300 px-6 py-3 rounded-full text-base font-medium hover:border-primary hover:text-primary transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut" as const,
            }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="relative mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-2xl shadow-primary/30">
                    <span className="text-4xl font-bold text-white">T</span>
                  </div>
                  <p className="text-white font-semibold text-2xl tracking-tight">
                    TREVA
                  </p>
                  <p className="text-gray-300 text-sm">
                    Concreto Premezclado
                  </p>
                  <div className="mt-4 flex justify-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gray-800 border border-gray-700 rounded-xl px-5 py-3">
              <p className="text-sm font-semibold text-white">+200 obras</p>
              <p className="text-xs text-gray-400">entregas puntuales</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-gray-800 border border-gray-700 rounded-xl px-5 py-3">
              <p className="text-sm font-semibold text-white">10+ años</p>
              <p className="text-xs text-gray-400">de experiencia</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <a href="#nosotros" className="text-gray-400 animate-bounce">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
