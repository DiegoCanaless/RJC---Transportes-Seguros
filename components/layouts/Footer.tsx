import Image from "next/image";
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
        <footer className="bg-black text-slate-300 px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Marca + SEO */}
                <div className="flex flex-col gap-3">
                    <Image
                        src="/Logo.png"
                        alt="RJC Transportes - Transporte especial para niños con discapacidad"
                        width={80}
                        height={80}
                    />

                    <p className="text-xs leading-relaxed">
                        <strong>RJC Transportes</strong> brinda servicios de transporte seguro y adaptado
                        para niños y jóvenes con discapacidad en Mendoza. Más de 15 años de experiencia,
                        compromiso humano y vehículos habilitados.
                    </p>
                </div>

                {/* Enlaces internos */}
                <nav className="flex flex-col gap-2">
                    <h3 className="text-white text-sm font-semibold">
                        Enlaces
                    </h3>

                    {enlaces.map((e) => (
                        <Link
                            key={e.href}
                            href={e.href}
                            className="text-xs hover:text-white transition-colors"
                        >
                            {e.label}
                        </Link>
                    ))}
                </nav>

                {/* Servicios + SEO */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-white text-sm font-semibold">
                        Servicios
                    </h3>

                    {servicios.map((servicio) => (
                        <p key={servicio} className="text-xs">
                            {servicio}
                        </p>
                    ))}

                    {/* SEO local explícito */}
                    <p className="text-xs mt-3 text-slate-400">
                        Servicio de transporte especial en Mendoza y alrededores.
                    </p>
                </div>

            </div>

            {/* Copyright */}
            <div className="mt-10 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} RJC Transportes · Transporte Especial en Mendoza
            </div>
        </footer>
    );
}
