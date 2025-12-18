"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [modal, setModal] = useState(false);
    const [scrolledPastHero, setScrolledPastHero] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === "/";

    const enlaces = [
        { label: "INICIO", href: "/" },
        { label: "QUIÉNES SOMOS", href: "/#About" },
        { label: "SERVICIOS", href: "/#Services" },
        { label: "VEHÍCULOS", href: "/vehiculos" },
        { label: "CONTACTO", href: "/#Contact" },
    ];

    // Scroll effect SOLO en Home
    useEffect(() => {
        if (!isHome) return;

        const header = document.querySelector("header");

        if (!header) {
            const onScroll = () => {
                setScrolledPastHero(window.scrollY > window.innerHeight);
            };
            window.addEventListener("scroll", onScroll);
            onScroll();
            return () => window.removeEventListener("scroll", onScroll);
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setScrolledPastHero(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(header);
        return () => observer.disconnect();
    }, [isHome]);

    // Navbar SIEMPRE opaco fuera de Home
    const isOpaque = !isHome || modal || scrolledPastHero;

    const navbarBgClass = isOpaque
        ? "bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/20"
        : "bg-transparent";

    const linksColorClass = isOpaque ? "text-white" : "text-light";

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 h-16 transition-colors duration-300 ${navbarBgClass}`}
        >
            {/* Logo */}
            <Link href="/">
                <Image
                    alt="Logo RJC Transportes"
                    width={70}
                    height={70}
                    src="/Logo.png"
                    priority
                />
            </Link>

            {/* Links desktop */}
            <div
                className={`hidden lg:flex space-x-6 font-medium text-sm px-10 ${linksColorClass}`}
            >
                {enlaces.map((e) => (
                    <Link
                        key={e.href}
                        href={e.href}
                        className="hover:text-amber-400 transition-colors"
                    >
                        {e.label}
                    </Link>
                ))}
            </div>

            {/* Icono mobile */}
            {modal ? (
                <HiX
                    size={26}
                    onClick={() => setModal(false)}
                    className="cursor-pointer lg:hidden text-white"
                />
            ) : (
                <HiOutlineMenu
                    size={26}
                    onClick={() => setModal(true)}
                    className="cursor-pointer lg:hidden text-white"
                />
            )}

            {/* Menu mobile */}
            {modal && (
                <div className="absolute top-16 left-0 w-full bg-light border-t border-light lg:hidden">
                    <div className="flex flex-col items-start p-4 space-y-4">
                        {enlaces.map((e) => (
                            <Link
                                key={e.href}
                                href={e.href}
                                onClick={() => setModal(false)}
                                className="w-full border-b border-light pb-2 text-sm font-medium hover:text-primary transition-colors"
                            >
                                {e.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
