"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { HiArrowNarrowRight, HiOutlineShieldCheck } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";

import About from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Collaborators from "@/components/sections/Collaborators";
import Contact from "@/components/sections/Contact";
import Form from "@/components/sections/Form";


const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const  },
  },
};

const stagger = {
  hidden: {}, 
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      {/* ================= HERO ================= */}
      <header className="relative min-h-screen w-full px-5" id="Home">
        <img src="/Hero.webp" alt="Hero" className="absolute top-0 left-0 w-full h-full object-cover z-0" />

        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

        <motion.section variants={stagger} initial="hidden" animate="visible" className="absolute top-0 left-0 w-full h-full z-30 flex flex-col gap-6 justify-center items-center  text-white text-center px-5 lg:items-start lg:pl-20">
          <motion.div variants={fadeUp} className="border border-white/80 py-2 px-4 rounded-2xl flex items-center gap-2 bg-white/5 backdrop-blur-sm" >
            <HiOutlineShieldCheck size={18} />
            <h4 className="text-xs">Seguridad Certificada y Habilitada</h4>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold max-w-3xl lg:text-start" >
            Servicio de transporte para personas con discapacidad
          </motion.h1>

          <motion.p variants={fadeUp} className="hidden md:block text-lg font-semibold text-yellowPrimary lg:text-start" >
            Rodolfo J. Carletti · RJC Transportes
          </motion.p>

          <p className="sr-only">
            Rodolfo J. Carletti es responsable de RJC Transportes, empresa
            especializada en transporte para personas con discapacidad en
            Mendoza.
          </p>

          <motion.p variants={fadeUp} className="max-w-2xl text-md md:text-base text-light lg:text-start" >
            Más de 15 años brindando traslados responsables, humanos y adaptados,
            priorizando la seguridad, el bienestar y la tranquilidad de cada
            familia.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link href="/vehiculos" className="mt-4 bg-primary text-black font-semibold px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors flex items-center gap-2" >
              Conocer Nuestra Flota <HiArrowNarrowRight />
            </Link>
          </motion.div>
        </motion.section>
      </header>

      {/* ================= SECCIONES ================= */}

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} >
        <About />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} >
        <Services />
      </motion.div>

      {/* ================= BLOQUE DESTACADO ================= */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-11/12 mx-auto my-6 px-4 py-5 rounded-xl
        bg-[#0c4a6e] -rotate-1
        flex flex-col items-center gap-4
        md:px-24 lg:px-32 lg:py-10"
      >
        <HiOutlineTrophy className="text-yellowPrimary" size={32} />

        <h2 className="text-light text-center font-medium leading-snug
        text-lg md:text-2xl lg:text-3xl
        max-w-full md:max-w-lg lg:max-w-xl"
        >
          Más de 15 años brindando transporte especial de excelencia
        </h2>

        <div className="flex justify-center gap-2">
          <div className="w-10 h-2 bg-yellowPrimary rounded-xl" />
          <div className="w-4 h-2 bg-primary rounded-xl" />
          <div className="w-4 h-2 bg-primary rounded-xl" />
        </div>
      </motion.section>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} >
        <Collaborators />
      </motion.div>

      {/* ================= CONTACTO ================= */}
      <motion.div id="Contact" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-4 p-6 mt-8 py-20 bg-slate-100 md:flex-row lg:px-20" >
        <Contact />
        <Form />
      </motion.div>
    </div>
  );
}
