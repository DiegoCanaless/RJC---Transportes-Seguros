import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "RJC Transportes | Rodolfo J. Carletti – Transporte para Niños con Discapacidad en Mendoza",
  description:
    "RJC Transportes, dirigido por Rodolfo J. Carletti, brinda transporte seguro y adaptado para niños y jóvenes con discapacidad en Mendoza. Más de 15 años de experiencia, vehículos habilitados y personal capacitado.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <title>RJC Transportes | Transporte para Niños con Discapacidad en Mendoza</title>
        <link rel="icon" href="../public/Logo.png" /> 
        <meta
          name="description"
          content="RJC Transportes brinda transporte seguro y adaptado para niños y jóvenes con discapacidad en Mendoza. Más de 15 años de experiencia, vehículos habilitados y personal capacitado."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "RJC Transportes",
              "url": "https://rjc-transportes-seguros.vercel.app/",
              "description":
                "Servicio de transporte especializado para niños y jóvenes con discapacidad en Mendoza. Traslados escolares y médicos con vehículos adaptados.",
              "founder": {
                "@type": "Person",
                "name": "Rodolfo J. Carletti"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mendoza",
                "addressCountry": "Argentina"
              },
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Mendoza, Argentina"
              },
              "serviceType": "Transporte especial para personas con discapacidad",
              "provider": {
                "@type": "Organization",
                "name": "RJC Transportes"
              }
            }),
          }}
        />


      </head>
      <body className="antialiased">
        <a href="https://wa.link/3d8upf" aria-label="Ir al whattsapp de RJC para consultas" rel="noopener noreferrer" target="_blank" className="fixed bottom-8 right-8 bg-[#25D366] p-2 rounded-full z-40 hover:cursor-pointer duration-150 hover:scale-110">
          <FaWhatsapp size={30} aria-hidden="true" color="white" />
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

