import CardVehicle from "@/components/ui/CardVehicle";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Flota de Vehículos Adaptados | RJC Transportes Mendoza",
    description:
        "Conocé la flota de vehículos adaptados de RJC Transportes. Unidades habilitadas y equipadas para el transporte seguro de niños y jóvenes con discapacidad en Mendoza.",
};


export default function Vehiculos() {
    return (
        <section className="min-h-screen pt-20 flex flex-col items-center px-4 text-center pb-10">

            <h2 className="text-sm text-yellowPrimary font-semibold">
                Nuestra Flota
            </h2>
            <h1 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">
                Flota de Vehículos Adaptados para Transporte Especial
            </h1>

            <p className="text-sm text-slate-700 mb-8 max-w-3xl">
                Nuestra flota está compuesta por vehículos habilitados y adaptados para el
                transporte de niños y jóvenes con discapacidad. Cada unidad recibe
                mantenimiento preventivo constante y cumple con los estándares de
                seguridad, higiene y accesibilidad exigidos.

            </p>

            {/* GRID RESPONSIVE */}
            <div className=" grid grid-cols-1 gap-6 w-full max-w-6xl md:grid-cols-2 lg:grid-cols-3">
                <CardVehicle
                    name="Nombre"
                    year="1481"
                    image="/Vehicles/vehicle1.webp"
                />

                <CardVehicle
                    name="Nombre"
                    year="1481"
                    image="/Vehicles/vehicle2.webp"
                />

                <CardVehicle
                    name="Nombre"
                    year="1481"
                    image="/Vehicles/vehicle3.webp"
                />

                <CardVehicle
                    name="Nombre"
                    year="1481"
                    image="/Vehicles/vehicle4.webp"
                />

                <CardVehicle
                    name="Nombre"
                    year="1481"
                    image="/Vehicles/vehicle5.webp"
                />

                <CardVehicle
                    name="Nombre"
                    year="1481"
                    image="/Vehicles/vehicle6.webp"
                />

                <CardVehicle
                    name="Nombre"
                    year="1481"
                    image="/Vehicles/vehicle7.webp"
                />

                <CardVehicle
                    name="Nombre"
                    year="1481"
                    image="/Vehicles/vehicle8.webp"
                />

                <CardVehicle
                    name="Nombre"
                    year="1481"
                    image="/Vehicles/vehicle9.webp"
                />

                <CardVehicle
                    name="Nombre"
                    year="1481"
                    image="/Vehicles/vehicle10.webp"
                />


            </div>
        </section>
    );
}
