import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

export const metadata: Metadata = {
  title: "RJC Transportes | Transporte para Niños con Discapacidad en Mendoza",
  description:
    "RJC Transportes brinda transporte seguro y adaptado para niños y jóvenes con discapacidad en Mendoza. Más de 15 años de experiencia, vehículos habilitados y personal capacitado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Schema.org - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TransportationService",
              "name": "RJC Transportes",
              "description":
                "Empresa de transporte especial para niños y jóvenes con discapacidad. Traslados escolares y médicos en Mendoza con vehículos adaptados y personal capacitado.",
              "url": "https://www.rjctransportes.com",
              "logo": "https://www.rjctransportes.com/Logo.png",
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Mendoza, Argentina"
              },
              "serviceType": [
                "Transporte Escolar Especial",
                "Traslados Médicos",
                "Transporte para Personas con Discapacidad"
              ],
              "foundingDate": "2008"
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
