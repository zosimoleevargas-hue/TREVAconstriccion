"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      href={COMPANY.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} className="text-white" />
    </motion.a>
  );
}
