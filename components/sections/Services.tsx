
import { FaBus, FaAccessibleIcon, FaStethoscope   } from "react-icons/fa"
import CardService from "../ui/CardService"


export default function Service() {
    return (
        <>
            <section className="flex flex-col items-center px-4 py-16 text-center min-h-screen bg-slate-100">

                <span className="text-sm text-yellowPrimary font-semibold"> NUESTROS SERVICIOS </span>

                <h3 className="text-2xl md:text-3xl font-semibold mt-2 mb-4"> Soluciones de Transporte Especializado </h3>

                <p className="text-md text-slate-700 max-w-3xl mb-12">Nos enfocamos en lo esencial: llevar a tus seres queridos a sus destinos educativos y de salud con la máxima seguridad.</p>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">

                    <CardService
                        icon = {<FaBus/>}
                        title ="Rutas Escolares"
                        description = "Traslados diarios a escuelas de educación especial, centros de día y talleres protegidos. Compromiso total con la puntualidad."   
                    />

                    <CardService
                        icon =   {<FaStethoscope/>} 
                        title = "Traslados Médicos"  
                        description = "Acompañamiento a terapias, kinesiología y consultas médicas. Un servicio pensado para la tranquilidad de la familia."    
                    />
                    
                    <CardService
                        icon =    {<FaAccessibleIcon/>}
                        title = "Vehículos Adaptados"  
                        description = "Unidades equipadas con rampas y sistemas de anclaje homologados para el traslado seguro de pasajeros en silla de ruedas."    
                    />


                    
                </div>
            </section>
        </>
    )
}