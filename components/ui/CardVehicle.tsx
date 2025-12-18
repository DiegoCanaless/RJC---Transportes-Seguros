import Image from "next/image";

interface CardVehicleProps {
    name: string;
    year: string;
    image: string;
}

export default function CardVehicle({
    name,
    year,
    image,
}: CardVehicleProps) {
    return (
        <article className="rounded-xl overflow-hidden bg-white shadow-md">
            <div className="relative w-full h-48">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="p-3 text-left">
                <p className="text-sm font-semibold text-slate-800">
                    {name}
                </p>
                <p className="text-xs text-slate-500">
                    Año {year}
                </p>
            </div>
        </article>
    );
}
