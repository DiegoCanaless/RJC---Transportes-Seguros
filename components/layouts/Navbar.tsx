"use client";

import { useEffect, useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [modal, setModal] = useState<boolean>(false);
    const [scrolledPastHero, setScrolledPastHero] = useState<boolean>(false);

    const enlaces = [
        "INICIO",
        "QUIÉNES SOMOS",
        "SERVICIOS",
        "VEHÍCULOS",
        "CONTACTO",
    ];

    useEffect(() => {
        if (typeof window === "undefined") return;

        const header = document.querySelector("header"); // observa el header (h-screen) de la Home
        if (!header) {
            // fallback: si no existe header, usar un listener de scroll simple
            const onScroll = () => {
                setScrolledPastHero(window.scrollY > window.innerHeight);
            };
            window.addEventListener("scroll", onScroll);
            // inicial
            onScroll();
            return () => window.removeEventListener("scroll", onScroll);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                // cuando el header NO está intersectando, significa que pasamos la primer h-screen
                setScrolledPastHero(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(header);

        return () => observer.disconnect();
    }, []);

    const isOpaque = modal || scrolledPastHero;

    // clases condicionales
    const navbarBgClass = isOpaque
        ? "bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/20"
        : "bg-transparent";
    // links: si se abrió el menú modal (menú móvil) el fondo del menú es claro (bg-light) por eso los textos deben ser oscuros.
    const linksColorClass = modal ? "text-black" : scrolledPastHero ? "text-white" : "text-light";

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 h-16 transition-colors duration-300 ${navbarBgClass}`}>
            {/* Logo */}
            <img src="/Logo.png" alt="Logo RJC" className="h-24 object-contain" />

            {/* Links desktop */}
            <div className={`hidden lg:flex space-x-6 font-medium text-sm px-10 ${linksColorClass}`}>
                {enlaces.map((e, i) => (
                    <a key={i} href="#" className="hover:text-amber-400 transition-colors">
                        {e}
                    </a>
                ))}
            </div>

            {/* Icono mobile */}
            {modal ? (
                <HiX size={26} onClick={() => setModal(false)} className="cursor-pointer lg:hidden" color={modal ? "white" : scrolledPastHero ? "white" : "white"} />
            ) : (
                <HiOutlineMenu size={26} onClick={() => setModal(true)} className="cursor-pointer lg:hidden" color={scrolledPastHero ? "white" : "white"} />
            )}

            {/* Menu mobile */}
            {modal && (
                <div className="absolute top-16 left-0 w-full bg-light border-t border-light lg:hidden">
                    <div className="flex flex-col items-start p-4 space-y-4">
                        {enlaces.map((e, i) => (
                            <div key={i} className="w-full border-b border-light pb-2">
                                <h3 className="text-sm font-medium cursor-pointer hover:text-primary transition-colors">
                                    {e}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}