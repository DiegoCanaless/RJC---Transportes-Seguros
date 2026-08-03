"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    id?: string;
}

/**
 * Micro-reveal basado en IntersectionObserver + transiciones CSS.
 * Reemplaza a framer-motion: ~0.5 KB, no bloquea el main thread
 * y respeta el contenido SSR (sin opacity:0 en el HTML inicial).
 */
export default function Reveal({
    children,
    className = "",
    delay = 0,
    id,
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Fallback: si no hay IntersectionObserver, mostrar directamente.
        if (typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "-80px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            id={id}
            ref={ref}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            className={`transition-all duration-700 ease-out will-change-transform ${
                visible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-95"
            } ${className}`}
        >
            {children}
        </div>
    );
}
