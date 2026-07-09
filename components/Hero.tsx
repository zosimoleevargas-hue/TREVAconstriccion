"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calculator, MessageCircle, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, white 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

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
              className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Suministro en Mexicali y Valle
            </motion.span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 text-balance">
              Concreto Premezclado{" "}
              <span className="text-primary">de primera calidad</span> para tu obra
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              Llevamos concreto de alta resistencia a tu proyecto con entregas
              puntuales en Mexicali y todo el Valle. Residencial, comercial,
              industrial y agrícola.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#calculadora"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-medium shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all"
              >
                <Calculator size={18} />
                Cotiza gratis
              </motion.a>
              <motion.a
                href="https://wa.me/526863062340"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 glass-dark text-gray-300 px-8 py-4 rounded-full text-base font-medium hover:text-primary hover:border-primary/40 transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-white/5"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ShieldCheck size={16} className="text-primary" />
                <span>3+ años de experiencia</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ShieldCheck size={16} className="text-primary" />
                <span>+50 proyectos realizados</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ShieldCheck size={16} className="text-primary" />
                <span>Cobertura Mexicali y Valle</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ShieldCheck size={16} className="text-primary" />
                <span>Respuesta menos de 30 min</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut" as const,
            }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    className="relative mx-auto mb-6 w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-2xl shadow-primary/30"
                  >
                    <span className="text-5xl font-bold text-white">T</span>
                  </motion.div>
                  <p className="text-white font-semibold text-3xl tracking-tight">
                    TREVA
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Concreto Premezclado
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 glass-dark rounded-2xl px-6 py-4"
            >
              <p className="text-lg font-bold text-white">3+</p>
              <p className="text-xs text-gray-400">años de experiencia</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -top-5 -right-5 glass-dark rounded-2xl px-6 py-4"
            >
              <p className="text-lg font-bold text-white">+50</p>
              <p className="text-xs text-gray-400">proyectos realizados</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-20"
        >
          <a href="#nosotros" className="text-gray-500 hover:text-primary transition-colors animate-bounce">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
