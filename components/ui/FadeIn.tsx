"use client";

import { motion } from "framer-motion";
import type { FadeInProps } from "@/lib/types";

export default function FadeIn({
  children,
  className,
  delay = 0,
  x = 0,
  y = 20,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
