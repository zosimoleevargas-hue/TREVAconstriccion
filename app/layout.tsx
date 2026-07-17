import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
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
    url: "https://treva-concreto.vercel.app",
    images: [
      {
        url: "/camion-mezcla.jpg",
        width: 1200,
        height: 900,
        alt: "Camión revolvedor TREVA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TREVA | Concreto Premezclado en Mexicali y Valle",
    description:
      "Venta y distribución de concreto premezclado de alta calidad en Mexicali y Valle de Mexicali. Cotiza hoy.",
    images: ["/camion-mezcla.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://treva-concreto.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: COMPANY.name,
        description: COMPANY.shortDescription,
        url: "https://treva-concreto.vercel.app",
        telephone: COMPANY.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Poblado López Portillo",
          addressLocality: "Valle de Mexicali",
          addressRegion: "Baja California",
          addressCountry: "MX",
        },
        openingHours: COMPANY.schedule,
        sameAs: [
          COMPANY.whatsappUrl,
          `https://instagram.com/${COMPANY.instagram}`,
        ],
        image: "https://treva-concreto.vercel.app/camion-mezcla.jpg",
      },
      {
        "@type": "WebSite",
        url: "https://treva-concreto.vercel.app",
        name: COMPANY.name,
        description: COMPANY.shortDescription,
        inLanguage: "es-MX",
      },
      {
        "@type": "Service",
        name: "Concreto Premezclado",
        description:
          "Venta y distribución de concreto premezclado de alta calidad en Mexicali y Valle de Mexicali. Residencial, comercial, industrial y agrícola.",
        provider: {
          "@type": "LocalBusiness",
          name: COMPANY.name,
        },
        areaServed: [
          { "@type": "City", name: "Mexicali" },
          { "@type": "City", name: "Valle de Mexicali" },
        ],
      },
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
