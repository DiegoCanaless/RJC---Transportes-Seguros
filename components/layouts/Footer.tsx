import Image from "next/image"

export default function Footer() {

    const enlaces = {
        "Inicio": "#Header",
        "Quienes Somos": "#About",
        "Servicios": "#Service",
        "Contacto": "#Contact",
    }

    const servicios = ["Transporte Escolar", "Translados Medicos", "Vehiculos Adaptados"]


    return (
        <>
            <footer className="bg-black p-4 pt-10">
                <div className="flex flex-col gap-5 md:flex-row md:justify-around md:items-start mb-10">
                    <div className="flex flex-col gap-2 md:w-80 md:-mt-5">
                        <Image alt="Logo RJC Transportes" width={70} height={70} src="/Logo.png" />
                        <p className="text-xs text-slate-300">Brindando transporte especializado, seguro y confiable. Comprometidos con la inclusión y el bienestar de nuestros pasajeros.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-white text-sm font-medium">Enlaces</h3>

                        {Object.entries(enlaces).map(([texto, href]) => (
                            <a key={texto} href={href} className="text-xs text-slate-300 hover:text-white transition-colors" >
                                {texto}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-white text-sm font-medium">Servicios</h3>

                        {servicios.map((servicio) => (
                            <p key={servicio} className="text-xs text-slate-300" >
                                {servicio}
                            </p>
                        ))}
                    </div>
                </div>

                <hr className="m-auto w-5/6 border-slate-700 mb-10"/>
                <p className="text-center text-slate-600 text-xs">© 2025 RJC - Transportes. Todos los derechos reservados.</p>
                <p className="text-end mt-5 -mb-2 text-slate-700 text-xs">Developed by Diego Canales</p>



            </footer>
        </>
    )
}