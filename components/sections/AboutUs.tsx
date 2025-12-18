import CardAbout from "../ui/CardAbout";


import { HiHeart, HiTruck , HiUsers    } from "react-icons/hi";

export default function About() {
    return (
        <section id="About" className="flex flex-col items-center px-4 py-16 text-center min-h-screen">

            <span className="text-sm text-yellowPrimary font-semibold">
                QUÍENES SOMOS
            </span>

            <h3 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">
                Comprometidos con la Movilidad Inclusiva
            </h3>

            <p className="text-md text-slate-700 max-w-3xl mb-12">
                En RJC, trabajamos para eliminar las barreras de movilidad. Nuestra misión
                es garantizar que el transporte no sea un impedimento para acceder a la
                educación o la salud. Brindamos un servicio profesional donde la seguridad
                y el confort son lo más importante.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                <CardAbout
                    icon={<HiUsers  />}
                    title="Personal Capacitado"
                    description="Conductores y acompañantes entrenados en primeros auxilios y manejo de situaciones especiales."
                />

                <CardAbout
                    icon={<HiHeart />}
                    title="Trato Humano"
                    description="Entendemos que cada pasajero es único. La paciencia, el respeto y la empatía son nuestro motor."
                />

                <CardAbout
                    icon={<HiTruck  />}
                    title="Vehículos Habilitados"
                    description="Toda nuestra flota cuenta con las habilitaciones vigentes y seguros requeridos para el transporte especial."
                />
            </div>
        </section>
    );
}
