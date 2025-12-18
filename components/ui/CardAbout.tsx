import { ReactNode } from "react";

interface CardAboutProp {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function CardAbout({
    icon,
    title,
    description,
}: CardAboutProp) {
    return (
        <div className="flex flex-col items-center text-center bg-gris rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1">

            {/* Icono */}
            <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-white text-yellowPrimary text-2xl">
                {icon}
            </div>

            {/* Título */}
            <h3 className="font-semibold text-xl mb-2">
                {title}
            </h3>

            {/* Descripción */}
            <p className="text-md text-slate-700 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
