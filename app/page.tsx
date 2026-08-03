import Link from "next/link";
import dynamic from "next/dynamic";
import { HiArrowNarrowRight, HiOutlineShieldCheck } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";

import About from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Collaborators from "@/components/sections/Collaborators";
import Contact from "@/components/sections/Contact";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

import Reveal from "@/components/animations/Reveal";

/* El form (formik + yup + emailjs) se carga bajo demanda:
   queda fuera del bundle inicial y no bloquea el render. */
const Form = dynamic(() => import("@/components/sections/Form"), {
    loading: () => <div className="w-full max-w-md" aria-hidden="true" />,
});

export default function Home() {
    return (
        <>
            <LocalBusinessSchema />

            <div className="flex flex-col gap-5">

                {/* ================= HERO ================= */}
                <header className="relative min-h-screen w-full px-5" id="Home">
                    <img
                        src="/Hero.webp"
                        alt="Transporte especial para personas con discapacidad"
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        fetchPriority="high"
                        decoding="sync"
                        width={1920}
                        height={1280}
                    />

                    <div className="absolute inset-0 bg-black/60 z-10" />

                    <section className="absolute inset-0 z-30 flex flex-col gap-6 justify-center items-center text-center px-5 text-light md:items-start md:text-left md:pl-12 lg:pl-20 max-w-7xl mx-auto">

                        <div className="hero-animate border border-white/80 py-2 px-4 rounded-2xl flex items-center gap-2 bg-white/5 backdrop-blur-sm">
                            <HiOutlineShieldCheck size={18} />
                            <h4 className="text-xs">Seguridad Certificada y Habilitada</h4>
                        </div>

                        <h1 className="hero-animate hero-delay-1 text-3xl md:text-4xl font-bold max-w-3xl">
                            Servicio de transporte para personas con discapacidad
                        </h1>

                        <p className="hero-animate hero-delay-2 hidden md:block text-lg font-semibold text-yellowPrimary">
                            Rodolfo J. Carletti · RJC Transportes
                        </p>

                        <p className="hero-animate hero-delay-3 max-w-2xl text-base text-light">
                            Más de 15 años brindando traslados responsables, humanos y adaptados.
                        </p>

                        <div className="hero-animate hero-delay-4">
                            <Link href="/vehiculos" className="mt-4 bg-primary text-black font-semibold px-6 py-3 rounded-xl hover:bg-amber-400 transition flex items-center gap-2">
                                Conocer Nuestra Flota <HiArrowNarrowRight />
                            </Link>
                        </div>
                    </section>
                </header>

                {/* ================= SECCIONES ================= */}

                <Reveal>
                    <About />
                </Reveal>

                <Reveal>
                    <Services />
                </Reveal>

                {/* ================= BLOQUE DESTACADO ================= */}
                <Reveal>
                    <div className="w-11/12 mx-auto my-6 px-4 py-5 rounded-xl bg-[#0c4a6e] -rotate-1 flex flex-col items-center gap-4 md:px-24 lg:px-32 lg:py-10">
                        <HiOutlineTrophy className="text-yellowPrimary" size={32} />
                        <h2 className="text-light text-center font-medium leading-snug text-lg md:text-2xl lg:text-3xl max-w-full md:max-w-lg lg:max-w-xl">
                            Más de 15 años brindando transporte especial de excelencia
                        </h2>
                    </div>
                </Reveal>

                <Reveal>
                    <Collaborators />
                </Reveal>

                {/* ================= CONTACTO ================= */}
                <Reveal id="Contact" className="bg-slate-100 px-6 py-16 flex flex-col gap-12 items-center md:flex-row md:items-start md:justify-between md:gap-16 md:px-20 w-full mx-auto">
                    <div className="w-full max-w-md flex justify-center">
                        <Contact />
                    </div>

                    <div className="w-full max-w-md flex justify-center">
                        <Form />
                    </div>
                </Reveal>

            </div>
        </>
    );
}
