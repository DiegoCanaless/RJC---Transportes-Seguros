import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

export const metadata: Metadata = {
  title: "RJC Transportes",
  description: "Traslados seguros y confiables",
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
