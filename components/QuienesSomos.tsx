"use client";

import Image from "next/image";
import { VALORES } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn x={-30} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-xl" />
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/camion-mezcla.jpg"
                alt="Camión revolvedor TREVA"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          <FadeIn x={30}>
            <span className="text-accent text-sm font-medium uppercase tracking-widest">
              Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6 tracking-tight">
              Somos TREVA
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Nos dedicamos a la venta y distribución de concreto
              premezclado de alta calidad en Mexicali y todo el Valle.
            </p>

            <p className="text-gray-500 leading-relaxed mb-10">
              Contamos con camión revolvedor propio moderno y personal
              capacitado. Atendemos proyectos residenciales, comerciales,
              industriales y agrícolas. Desde una banqueta hasta un desarrollo
              completo.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {VALORES.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.label}
                    className="group p-5 rounded-2xl bg-gray-50 border border-gray-100 text-center card-hover hover:border-accent/30 card-shadow transition-all duration-[250ms]"
                  >
                    <Icon className="text-accent mx-auto mb-1.5 group-hover:scale-110 transition-transform duration-[250ms]" size={38} strokeWidth={1.5} />
                    <p className="text-sm font-semibold text-gray-800">
                      {v.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
