"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Send } from "lucide-react";

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
    const mensaje = `Hola TREVA, quiero cotizar concreto:%0A%0A📐 Largo: ${largo} m%0A📐 Ancho: ${ancho} m%0A📐 Espesor: ${espesor} cm%0A📊 Total: ${resultado} m³%0A%0A¿Me pueden dar el precio?`;
    window.open(`https://wa.me/526863062340?text=${mensaje}`, "_blank");
  };

  return (
    <section id="calculadora" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Calculadora
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Calcula tu concreto
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Ingresa las dimensiones de tu obra y calcula los metros cúbicos que
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
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calculator className="text-primary" size={20} />
              </div>
              <p className="font-semibold text-gray-800">Calculadora de m³</p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Largo (metros)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={largo}
                  onChange={(e) => setLargo(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Ej: 5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ancho (metros)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={ancho}
                  onChange={(e) => setAncho(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Ej: 4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Espesor (centímetros)
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={espesor}
                  onChange={(e) => setEspesor(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Ej: 10"
                />
              </div>

              <button
                onClick={calcular}
                className="w-full bg-primary text-white py-2.5 rounded-xl font-medium hover:bg-primary-dark transition-colors"
              >
                Calcular metros cúbicos
              </button>
            </div>

            {resultado !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-center mb-4"
              >
                <p className="text-sm text-gray-500">Necesitas aproximadamente</p>
                <p className="text-3xl font-bold text-primary">
                  {resultado} m³
                </p>
                <p className="text-xs text-gray-400">
                  de concreto premezclado
                </p>
              </motion.div>
            )}

            {resultado !== null && (
              <button
                onClick={enviarWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 rounded-xl font-medium hover:bg-green-600 transition-colors"
              >
                <Send size={16} />
                Enviar cotización por WhatsApp
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
