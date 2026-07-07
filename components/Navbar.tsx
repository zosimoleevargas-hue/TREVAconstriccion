"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Calculadora", href: "#calculadora" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold">
          <span className={scrolled ? "text-primary" : "text-white"}>
            TREVA
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-gray-600" : "text-gray-300"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/526863062340"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
          >
            <MessageCircle size={16} />
            Cotizar
          </a>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-gray-600 hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/526863062340"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors mt-2"
              >
                <MessageCircle size={16} />
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
