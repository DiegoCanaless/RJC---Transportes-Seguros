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
      <body className="antialiased">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
