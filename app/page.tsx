import { HiOutlineShieldCheck } from "react-icons/hi";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

import About from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services"


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-5 ">
        <header className="relative min-h-screen w-full px-5">
          <Image src="/Hero.webp" alt="Hero" fill className="absolute top-0 left-0 w-full h-full object-cover z-0" />
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>


          <section className="absolute top-0 left-0 w-full h-full z-30 flex flex-col gap-6 justify-center items-center text-white text-center px-5  lg:items-start lg:pl-20">
            <div className="border border-white/80 py-2 px-4 rounded-2xl flex items-center gap-2 bg-white/5 backdrop-blur-sm">
              <HiOutlineShieldCheck size={18} />
              <h4 className="text-xs">Seguridad Certificada y Habilitada</h4>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold max-w-3xl ">Transportes con
              <span className="text-primary"> Amor</span> y Paciencia
            </h1>
            <p className="max-w-2xl text-sm md:text-base text-light  lg:text-start">Especialistas en el traslado de niños con necesidades especiales. Conductores capacitados y vehículos adaptados para que el viaje sea tan seguro como el destino. </p>
            <button className="mt-4 bg-primary text-black font-semibold px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors flex items-center gap-2">Conocer Nuestra Flota  <HiArrowNarrowRight /></button>
          </section>
        </header>


        <About/>
        <Services/>

      </div>

    </>



  );
}
