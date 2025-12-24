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
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

import { fadeUp, stagger } from "@/components/animations/variants";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />

      <div className="flex flex-col gap-5">

        {/* ================= HERO ================= */}
        <header className="relative min-h-screen w-full px-5" id="Home">
          <img src="/Hero.webp" alt="Transporte especial para personas con discapacidad" className="absolute inset-0 w-full h-full object-cover z-0" />

          <div className="absolute inset-0 bg-black/60 z-10" />

          <motion.section variants={stagger} initial="hidden" animate="visible" className=" absolute inset-0 z-30 flex flex-col gap-6 justify-center items-center text-center px-5 text-light md:items-start md:text-left md:pl-12 lg:pl-20 max-w-7xl mx-auto" >

            <motion.div variants={fadeUp} className="border border-white/80 py-2 px-4 rounded-2xl flex items-center gap-2 bg-white/5 backdrop-blur-sm" >
              <HiOutlineShieldCheck size={18} />
              <h4 className="text-xs">Seguridad Certificada y Habilitada</h4>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold max-w-3xl" >
              Servicio de transporte para personas con discapacidad
            </motion.h1>

            <motion.p variants={fadeUp} className="hidden md:block text-lg font-semibold text-yellowPrimary" >
              Rodolfo J. Carletti · RJC Transportes
            </motion.p>

            <motion.p variants={fadeUp} className="max-w-2xl text-md md:text-base text-light" >
              Más de 15 años brindando traslados responsables, humanos y adaptados.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link href="/vehiculos" className=" mt-4 bg-primary text-black font-semibold px-6 py-3 rounded-xl  hover:bg-amber-400 transition flex items-center gap-2 ">
                Conocer Nuestra Flota <HiArrowNarrowRight />
              </Link>
            </motion.div>
          </motion.section>
        </header>

        {/* ================= SECCIONES ================= */}

        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} >
          <About />
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} >
          <Services />
        </motion.section>

        {/* ================= BLOQUE DESTACADO ================= */}
        <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className=" w-11/12 mx-auto my-6 px-4 py-5 rounded-xl bg-[#0c4a6e] -rotate-1 flex flex-col items-center gap-4 md:px-24 lg:px-32 lg:py-10">
          <HiOutlineTrophy className="text-yellowPrimary" size={32} />
          <h2 className="text-light text-center font-medium leading-snug text-lg md:text-2xl lg:text-3xl max-w-full md:max-w-lg lg:max-w-xl" >
            Más de 15 años brindando transporte especial de excelencia
          </h2>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} >
          <Collaborators />
        </motion.section>

        {/* ================= CONTACTO ================= */}
        <motion.section id="Contact" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-slate-100 px-6 py-16 flex flex-col gap-12 items-center  md:flex-row md:items-start md:justify-between md:gap-16 md:px-20 w-full mx-auto">
          <div className="w-full max-w-md flex justify-center">
            <Contact />
          </div>

          <div className="w-full max-w-md flex justify-center">
            <Form />
          </div>
        </motion.section>



      </div>
    </>
  );
}
