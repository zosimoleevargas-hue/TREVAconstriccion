"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calculator, MessageCircle, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, #1B2A4A 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 -right-40 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-primary/[0.03] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-accent/20"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Suministro en Mexicali y Valle
            </motion.span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6 text-balance">
                <span className="text-hero-title">Concreto Premezclado</span>{" "}
                <span className="text-accent">de primera calidad</span>{" "}
                <span className="text-hero-title">para tu obra</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              Llevamos concreto de alta resistencia a tu proyecto con entregas
              puntuales en Mexicali y todo el Valle. Residencial, comercial,
              industrial y agrícola.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#calculadora"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-lift inline-flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg shadow-accent/30 hover:bg-accent-dark transition-all"
              >
                <Calculator size={18} />
                Cotiza gratis
              </motion.a>
              <motion.a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-lift inline-flex items-center gap-2.5 bg-white text-gray-700 px-8 py-4 rounded-full text-base font-medium border border-gray-200 card-shadow hover:text-accent hover:border-accent/40 hover:shadow-md transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ShieldCheck size={16} className="text-accent" />
                <span className="text-gray-600">3+ años de experiencia</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ShieldCheck size={16} className="text-accent" />
                <span className="text-gray-600">+50 proyectos realizados</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ShieldCheck size={16} className="text-accent" />
                <span className="text-gray-600">Cobertura Mexicali y Valle</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ShieldCheck size={16} className="text-accent" />
                <span className="text-gray-600">Respuesta menos de 30 min</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut" as const,
            }}
            className="relative hidden lg:block"
          >
            <div className="video-premium relative w-full aspect-[4/3] border border-white/60 shadow-xl rounded-3xl overflow-hidden">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10" />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  poster="/camion-mezcla.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/treva-camion.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-bold text-2xl tracking-tight drop-shadow-xl">
                  TREVA
                </p>
                <p className="text-white/90 text-base drop-shadow-lg">
                  Concreto Premezclado
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" as const }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-5 py-3.5 z-30 card-shadow-lg border border-gray-100/80"
            >
              <p className="text-lg font-bold text-accent">3+</p>
              <p className="text-xs text-gray-500 whitespace-nowrap">años de experiencia</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" as const }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl px-5 py-3.5 z-30 card-shadow-lg border border-gray-100/80"
            >
              <p className="text-lg font-bold text-accent">+50</p>
              <p className="text-xs text-gray-500 whitespace-nowrap">proyectos realizados</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-20"
        >
          <a href="#nosotros" className="text-gray-400 hover:text-accent transition-colors animate-bounce">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
