import Image from "next/image";
import { HiArrowNarrowRight, HiOutlineShieldCheck } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";

import About from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services"
import Collaborators from "@/components/sections/Collaborators";
import Contact from "@/components/sections/Contact";
import Form from "@/components/sections/Form";


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
            <p className="max-w-2xl text-sm md:text-base text-light  lg:text-start">Especialistas en el traslado de niños y jóvenes con discapacidad. Llegamos a cualquier punto de Mendoza, conectando hogares con instituciones educativas y terapéuticas con máxima seguridad.</p>
            <button className="mt-4 bg-primary text-black font-semibold px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors flex items-center gap-2">Conocer Nuestra Flota  <HiArrowNarrowRight /></button>
          </section>
        </header>

        <About />
        <Services />

        <section className=" w-11/12 mx-auto my-6 px-4 py-5 rounded-xl bg-[#0c4a6e] -rotate-1 flex flex-col items-center gap-4 md:px-24 lg:px-32 lg:py-10 ">
          <HiOutlineTrophy className="text-yellowPrimary" size={32} />

          <h4 className="text-light text-center font-medium leading-snug text-lg md:text-2xl lg:text-3xl max-w-full md:max-w-lg lg:max-w-xl ">
            Desde 2.008 agregando un plus de excelencia al servicio de transporte.
          </h4>

          <div className="flex justify-center gap-2" >
            <div className="w-10 h-2 bg-yellowPrimary rounded-xl"></div>
            <div className="w-4 h-2 bg-primary rounded-xl"></div>
            <div className="w-4 h-2 bg-primary rounded-xl"></div>
          </div>
        </section>

        <Collaborators/>

        <div className="flex flex-col gap-4 p-6 mt-8 bg-slate-100 md:flex-row lg:px-20 lg:py-10">
          <Contact/>
          <Form/>
        </div>



      </div>

    </>



  );
}
