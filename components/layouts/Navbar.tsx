"use client";

import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [modal, setModal] = useState<boolean>(false);
    

    const enlaces = [
        "INICIO",
        "QUIÉNES SOMOS",
        "SERVICIOS",
        "VEHÍCULOS",
        "CONTACTO",
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 h-16 ${modal ? "bg-light" : "bg-transparent"}`}>
            {/* Logo */}
            <img src="/Logo.png" alt="Logo RJC" className="h-24 object-contain" />

            {/* Links desktop */}
            <div className={`hidden lg:flex space-x-6 font-medium text-sm px-10 ${modal ? "text-black" : "text-light"} `}>
                {enlaces.map((e, i) => (
                    <a key={i} href="#" className="hover:text-amber-400 transition-colors" >{e}</a>
                ))}
            </div>

            {/* Icono mobile */}
            {modal ? (
                <HiX size={26} onClick={() => setModal(false)} className="cursor-pointer lg:hidden" />
            ) : (
                <HiOutlineMenu color="white" size={26} onClick={() => setModal(true)} className="cursor-pointer lg:hidden" />
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
