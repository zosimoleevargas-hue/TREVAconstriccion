import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://treva-concreto.vercel.app"),
  title: "TREVA | Concreto Premezclado en Mexicali y Valle",
  description:
    "Venta y distribución de concreto premezclado de alta calidad en Mexicali y Valle de Mexicali. Residencial, comercial, industrial y agrícola. Cotiza hoy.",
  keywords: [
    "concreto premezclado Mexicali",
    "concreto en Mexicali",
    "concreto Valle de Mexicali",
    "suministro de concreto",
    "concreto para construcción",
    "concreto para cimentaciones",
    "concreto para losas",
    "concreto para obras hidráulicas",
    "concreto para tuberías",
    "concreto agrícola",
    "TREVA",
  ],
  openGraph: {
    title: "TREVA | Concreto Premezclado en Mexicali y Valle",
    description:
      "Suministramos concreto de alta calidad para obras de cualquier tamaño con entregas puntuales.",
    type: "website",
    locale: "es_MX",
    siteName: "TREVA Concreto",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TREVA Concreto",
    description:
      "Venta y distribución de concreto premezclado en Mexicali y Valle de Mexicali.",
    url: "https://treva-concreto.vercel.app",
    telephone: "+52 686 306 2340",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Poblado López Portillo",
      addressLocality: "Valle de Mexicali",
      addressRegion: "Baja California",
      addressCountry: "MX",
    },
    openingHours: "Mo-Sa 08:00-18:00",
    sameAs: [
      "https://wa.me/526863062340",
      "https://instagram.com/trevaconstruccionesccccccyconcreto",
    ],
  };

  return (
    <html lang="es" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
