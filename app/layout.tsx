import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "RJC Transportes | Rodolfo J. Carletti – Transporte para Niños con Discapacidad en Mendoza",

  description:
    "RJC Transportes, dirigido por Rodolfo J. Carletti, brinda transporte seguro y adaptado para niños y jóvenes con discapacidad en Mendoza. Más de 15 años de experiencia, vehículos habilitados y personal capacitado.",

  icons: {
    icon: "/Logo.png",
  },

  openGraph: {
    title:
      "RJC Transportes | Transporte para Personas con Discapacidad en Mendoza",
    description:
      "Transporte seguro y adaptado para niños y jóvenes con discapacidad en Mendoza.",
    url: "https://rjc-transportes.com",
    siteName: "RJC Transportes",
    images: [
      {
        url: "https://rjc-transportes.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RJC Transportes",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body className="antialiased">
        {/* BOTÓN WHATSAPP */}
        <a
          href="https://wa.link/3d8upf"
          aria-label="Ir al WhatsApp de RJC Transportes"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] p-2 rounded-full z-40 transition hover:scale-110"
        >
          <FaWhatsapp size={30} color="white" />
        </a>

        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
