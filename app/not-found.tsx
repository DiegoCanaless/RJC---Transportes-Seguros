// app/not-found.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 | Página no encontrada",
    description: "La página que estás buscando no existe.",
};

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-light text-center">
            <h1 className="text-7xl font-bold text-gray-800 mb-4">
                404
            </h1>

            <p className="text-lg text-gray-600 mb-6 max-w-md">
                La página que intentás visitar no existe o fue movida.
            </p>

            <Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-yellowPrimary text-white font-medium hover:opacity-90 transition" >
                Volver al inicio
            </Link>
        </main>
    );
}
