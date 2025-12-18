import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

export const metadata: Metadata = {
  title: "RJC Transportes | Transporte para Niños con Discapacidad en Mendoza",
  description:
    "RJC Transportes brinda transporte seguro y adaptado para niños y jóvenes con discapacidad en Mendoza. Más de 15 años de experiencia, vehículos habilitados y personal capacitado.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>RJC Transportes | Transporte para Niños con Discapacidad en Mendoza</title>
        <meta
          name="description"
          content="RJC Transportes brinda transporte seguro y adaptado para niños y jóvenes con discapacidad en Mendoza. Más de 15 años de experiencia, vehículos habilitados y personal capacitado."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TransportationService",
              name: "RJC Transportes",
              url: "https://rjc-transportes-seguros.vercel.app/",
              description:
                "Servicio de transporte especializado para niños y jóvenes con discapacidad en Mendoza. Traslados escolares y médicos con vehículos adaptados.",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Mendoza, Argentina",
              },
              serviceType: "Transporte especial para personas con discapacidad",
              provider: {
                "@type": "Organization",
                name: "RJC Transportes",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

