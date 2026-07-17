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
  other: {
    "theme-color": "#1B2A4A",
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
      {
        "@type": "ContactPoint",
        name: "Atención a Clientes TREVA",
        telephone: COMPANY.phone,
        contactType: "sales",
        availableLanguage: ["Spanish", "English"],
        areaServed: ["MX-BCN"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://treva-concreto.vercel.app",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Servicios",
            item: "https://treva-concreto.vercel.app/#servicios",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Contacto",
            item: "https://treva-concreto.vercel.app/#contacto",
          },
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
      <body className="antialiased">
        <a
          href="#main-content"
          className="fixed -top-40 left-4 z-[60] bg-accent text-white px-4 py-2 rounded-b-lg text-sm font-medium shadow-lg focus:top-0 transition-all duration-200 outline-none"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
