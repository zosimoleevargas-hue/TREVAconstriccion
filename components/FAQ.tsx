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
    q: "¿Hacen entregas el mismo día?",
    a: "Sí, en la mayoría de los casos podemos entregar el mismo día si el pedido se realiza antes de las 10:00 a.m. Sujeto a disponibilidad.",
  },
  {
    q: "¿Qué resistencia de concreto manejan?",
    a: "Manejamos resistencias desde f'c 100 kg/cm² hasta f'c 350 kg/cm² y podemos preparar resistencias especiales según tu proyecto.",
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

function AccordionItem({
  item,
  index,
}: {
  item: { q: string; a: string };
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-gray-200 rounded-xl overflow-hidden transition-all ${
        open ? "shadow-sm" : ""
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-gray-900 text-sm sm:text-base">
          {item.q}
        </span>
        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
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
            <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
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
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} item={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
