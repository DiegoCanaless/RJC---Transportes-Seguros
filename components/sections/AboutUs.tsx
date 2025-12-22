import CardAbout from "../ui/CardAbout";


import { HiHeart, HiTruck, HiUsers } from "react-icons/hi";

export default function About() {
    return (
        <section id="About" className="flex flex-col items-center px-4 py-16 text-center min-h-screen">

            <span className="text-sm text-yellowPrimary font-semibold">
                QUÍENES SOMOS
            </span>

            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">
                Comprometidos con el Transporte Inclusivo
            </h2>

            <p className="text-md text-slate-700 max-w-3xl mb-12">
                RJC Transportes, liderado por <strong>Rodolfo J. Carletti</strong>, trabaja desde hace
                más de 15 años ofreciendo servicios de transporte especializado para niños y jóvenes
                con discapacidad.
            </p>


            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                <CardAbout
                    icon={<HiUsers aria-hidden="true" />}
                    title="Personal Capacitado"
                    description="Conductores entrenados en primeros auxilios y manejo de situaciones especiales."
                />

                <CardAbout
                    icon={<HiHeart aria-hidden="true" />}
                    title="Trato Humano"
                    description="Entendemos que cada pasajero es único. La paciencia, el respeto y la empatía son nuestro motor."
                />

                <CardAbout
                    icon={<HiTruck aria-hidden="true" />}
                    title="Vehículos Habilitados"
                    description="Toda nuestra flota cuenta con las habilitaciones vigentes y seguros requeridos para el transporte especial."
                />
            </div>
        </section>
    );
}
