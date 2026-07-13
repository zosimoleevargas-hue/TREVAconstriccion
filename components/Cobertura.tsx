"use client";

import { MapPin } from "lucide-react";
import { COBERTURA_ZONAS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

export default function Cobertura() {
  return (
    <section id="cobertura" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Cobertura"
          title="Zonas de cobertura"
          subtitle="Estamos donde nos necesitas."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn x={-30} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-xl" />
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67203.89748894286!2d-115.6553457226806!3d32.58406649487622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d76885fc33f303%3A0x19b1b8b1f0c1e9c!2sValle%20de%20Mexicali%2C%20B.C.!5e0!3m2!1ses!2smx!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zonas de cobertura TREVA"
                className="rounded-2xl"
              />
            </div>
          </FadeIn>

          <FadeIn x={30}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
              Cubrimos toda la región
            </h3>
            <div className="space-y-4">
              {COBERTURA_ZONAS.map((zona) => (
                <div
                  key={zona}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 card-hover"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center shrink-0">
                    <MapPin className="text-accent" size={18} />
                  </div>
                  <p className="font-semibold text-gray-800">{zona}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6">
              ¿No encuentras tu zona? Contáctanos y te confirmamos la cobertura.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
