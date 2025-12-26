
import Link from "next/link";

export default function Footer() {
    const enlaces = [
        { label: "Inicio", href: "/" },
        { label: "Quiénes Somos", href: "/#About" },
        { label: "Servicios", href: "/#Services" },
        { label: "Vehículos", href: "/vehiculos" },
        { label: "Contacto", href: "/#Contact" },
    ];

    const servicios = [
        "Transporte Escolar Especial",
        "Traslados Médicos Programados",
        "Vehículos Adaptados",
    ];

    return (
        <footer className="bg-black text-slate-200 px-6 py-10" aria-labelledby="footer-heading" >
            <h2 id="footer-heading" className="sr-only">
                Pie de página
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Marca + SEO */}
                <div className="flex flex-col gap-3">
                    <img src="/Logo.png" alt="RJC Transportes - Transporte especial para niños con discapacidad" width={80} height={80} />

                    <p className="text-xs leading-relaxed text-slate-300"><strong>RJC Transportes</strong> brinda servicios de transporte seguro y adaptado para niños y jóvenes con discapacidad en Mendoza. Más de 15 años de experiencia, compromiso humano y vehículos habilitados.</p>

                    <p className="text-xs text-slate-400"> Responsable del servicio:{" "} <strong className="text-slate-200">Rodolfo J. Carletti</strong>
                    </p>
                </div>

                {/* Enlaces */}
                <nav aria-label="Enlaces del sitio">
                    <h3 className="text-white text-sm font-semibold mb-2">
                        Enlaces
                    </h3>

                    <ul className="flex flex-col gap-2">
                        {enlaces.map((e) => (
                            <li key={e.href}>
                                <Link href={e.href} className="text-xs text-slate-300 hover:text-white transition-colors" >
                                    {e.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Servicios */}
                <div>
                    <h3 className="text-white text-sm font-semibold mb-2">Servicios</h3>

                    <ul className="flex flex-col gap-2">
                        {servicios.map((servicio) => (
                            <li key={servicio} className="text-xs text-slate-300" >
                                {servicio}
                            </li>
                        ))}
                    </ul>

                    <p className="text-xs mt-3 text-slate-400">Servicio de transporte especial en Mendoza y alrededores.</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 border-t border-slate-800 pt-4 text-center text-xs text-slate-400">
                © {new Date().getFullYear()} RJC Transportes · Transporte Especial en
                Mendoza
            </div>
        </footer>
    );
}
