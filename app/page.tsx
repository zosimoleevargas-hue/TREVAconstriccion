import dynamic from "next/dynamic";
import { Suspense } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Servicios from "@/components/Servicios";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import Galeria from "@/components/Galeria";
import Proceso from "@/components/Proceso";
import Cobertura from "@/components/Cobertura";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Calculadora = dynamic(() => import("@/components/Calculadora"), {
  loading: () => <div className="h-[500px]" aria-hidden="true" />,
});

const Testimonios = dynamic(() => import("@/components/Testimonios"), {
  loading: () => <div className="h-[350px]" aria-hidden="true" />,
});

const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="h-[300px]" aria-hidden="true" />,
});

const Contacto = dynamic(() => import("@/components/Contacto"), {
  loading: () => <div className="h-[600px]" aria-hidden="true" />,
});

const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <QuienesSomos />
        <Servicios />
        <PorQueElegirnos />
        <Galeria />
        <Proceso />
        <Suspense fallback={<div className="h-[500px]" aria-hidden="true" />}>
          <Calculadora />
        </Suspense>
        <Cobertura />
        <Suspense fallback={<div className="h-[350px]" aria-hidden="true" />}>
          <Testimonios />
        </Suspense>
        <Suspense fallback={<div className="h-[300px]" aria-hidden="true" />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<div className="h-[600px]" aria-hidden="true" />}>
          <Contacto />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
    </>
  );
}
