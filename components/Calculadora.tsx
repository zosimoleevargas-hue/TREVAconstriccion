"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Send } from "lucide-react";
import { COMPANY, WHATSAPP_MESSAGE } from "@/lib/constants";

export default function Calculadora() {
  const [largo, setLargo] = useState("");
  const [ancho, setAncho] = useState("");
  const [espesor, setEspesor] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcular = () => {
    const l = parseFloat(largo);
    const a = parseFloat(ancho);
    const e = parseFloat(espesor);
    if (l && a && e) {
      const m3 = l * a * (e / 100);
      setResultado(Math.round(m3 * 100) / 100);
    }
  };

  const enviarWhatsApp = () => {
    if (resultado === null) return;
    const mensaje = WHATSAPP_MESSAGE.cotizacion({
      largo, ancho, espesor,
      resultado: resultado.toString(),
    });
    window.open(`https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(mensaje).replace(/%20/g, "%0A")}`, "_blank");
  };

  return (
    <section id="calculadora" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-widest">
            Calculadora
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
            Calcula tu concreto en segundos
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                    Ingresa las medidas de tu obra y te decimos cuántos metros cúbicos
                    necesitas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-xl" />
            <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                  <Calculator className="text-accent" size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Calculadora de m³</p>
                  <p className="text-xs text-gray-400">Llena los campos y calcula</p>
                </div>
              </div>

              <div className="space-y-5 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Largo (metros)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={largo}
                    onChange={(e) => setLargo(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-gray-50/50"
                    placeholder="Ej: 5.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Ancho (metros)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={ancho}
                    onChange={(e) => setAncho(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-gray-50/50"
                    placeholder="Ej: 4.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Espesor (centímetros)
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={espesor}
                    onChange={(e) => setEspesor(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-gray-50/50"
                    placeholder="Ej: 10"
                  />
                </div>

                <motion.button
                  onClick={calcular}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-lift w-full bg-accent text-white py-3.5 rounded-xl font-semibold hover:bg-accent-dark transition-all shadow-lg shadow-accent/25"
                >
                  Calcular metros cúbicos
                </motion.button>
              </div>

              {resultado !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/0 border border-accent/20 text-center mb-4"
                >
                  <p className="text-sm text-gray-500 mb-1">Necesitas aproximadamente</p>
                  <p className="text-4xl font-bold text-accent">
                    {resultado} m³
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    de concreto premezclado
                  </p>
                </motion.div>
              )}

              {resultado !== null && (
                <motion.button
                  onClick={enviarWhatsApp}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-lift w-full inline-flex items-center justify-center gap-2.5 bg-green-500 text-white py-3.5 px-4 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-lg shadow-green-500/25 whitespace-nowrap text-sm sm:text-base"
                >
                  <Send size={16} className="shrink-0" />
                  Enviar cotización por WhatsApp
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
