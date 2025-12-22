
import { FaBus, FaAccessibleIcon, FaStethoscope } from "react-icons/fa"
import CardService from "../ui/CardService"


export default function Service() {
    return (
        <>
            <section id="Services" className="flex flex-col items-center px-4 py-16 text-center min-h-screen bg-slate-100">

                <span className="text-sm text-yellowPrimary font-semibold"> NUESTROS SERVICIOS </span>

                <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">Servicios de Transporte Especializado</h2>

                <p className="text-md text-slate-700 max-w-3xl mb-12">Brindamos soluciones de transporte adaptadas a las necesidades de cada
                    pasajero, cumpliendo con normativas de seguridad y accesibilidad.
                    Nuestro equipo está capacitado para acompañar traslados escolares,
                    médicos y sociales con profesionalismo y cuidado.
                </p>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">

                    <CardService
                        icon={<FaBus aria-hidden="true" />}
                        title="Rutas Escolares"
                        description="Traslados diarios a escuelas de educación especial, centros de día y talleres protegidos. Compromiso total con la puntualidad."
                    />

                    <CardService
                        icon={<FaStethoscope aria-hidden="true" />}
                        title="Traslados Médicos"
                        description="Acompañamiento a terapias, kinesiología y consultas médicas. Un servicio pensado para la tranquilidad de la familia."
                    />

                </div>
            </section>
        </>
    )
}