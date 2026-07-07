"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "¿Cuál es el pedido mínimo?",
    a: "El pedido mínimo es de 1 metro cúbico. Para volúmenes menores, contáctanos y te ofrecemos una opción.",
  },
  {
    q: "¿Entregan el mismo día?",
    a: "Sí, en la mayoría de los casos podemos entregar el mismo día si el pedido se realiza antes de las 10:00 a.m.",
  },
  {
    q: "¿Qué resistencia de concreto manejan?",
    a: "Manejamos desde f'c 100 kg/cm² hasta f'c 350 kg/cm². También preparamos resistencias especiales según tu proyecto.",
  },
  {
    q: "¿Atienden obras grandes?",
    a: "Sí, tenemos capacidad para suministrar grandes volúmenes para desarrollos industriales, comerciales y residenciales.",
  },
  {
    q: "¿Cotizan sin compromiso?",
    a: "Por supuesto. Solicita tu cotización por WhatsApp, teléfono o formulario y te responderemos el mismo día.",
  },
  {
    q: "¿Dan factura?",
    a: "Sí, emitimos factura fiscal para todos nuestros pedidos.",
  },
];

function AccordionItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? "shadow-sm bg-white" : "bg-white"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
          {item.q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
          open ? "bg-primary/10" : "bg-gray-100"
        }`}>
          <ChevronDown
            size={16}
            className={`text-gray-500 transition-transform duration-200 ${
              open ? "rotate-180 text-primary" : ""
            }`}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Resolvemos tus dudas antes de que las tengas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} item={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
