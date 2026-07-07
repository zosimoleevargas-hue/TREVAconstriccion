"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Servicios from "@/components/Servicios";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import Galeria from "@/components/Galeria";
import Proceso from "@/components/Proceso";
import Calculadora from "@/components/Calculadora";
import Cobertura from "@/components/Cobertura";
import Testimonios from "@/components/Testimonios";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Servicios />
        <PorQueElegirnos />
        <Galeria />
        <Proceso />
        <Calculadora />
        <Cobertura />
        <Testimonios />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
