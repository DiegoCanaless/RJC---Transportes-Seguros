import ContactForms from "../ui/ContactForms";

import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Contact() {

    return (
        <>
            <section className="flex flex-col lg:mr-20">
                <h5 className="text-xs text-yellowPrimary font-semibold mb-2">CONTÁCTANOS</h5>
                <p className="text-2xl font-medium mb-5">¿Listo para coordinar el transporte?</p>
                <p className="text-lg font-light">RJC Transportes ofrece servicios de transporte especial para niños con
                    discapacidad en Mendoza y zonas cercanas. Contactanos para recibir
                    asesoramiento personalizado y coordinar traslados seguros y confiables.
                </p>
                <div className="flex flex-col w-full  py-2 mt-5 gap-4">
                    <ContactForms
                        icon={<HiOutlinePhone aria-hidden="true" size={22} />}
                        title="Llámanos"
                        value="+54 9 11 1234-5678"
                    />

                    <ContactForms
                        icon={<HiOutlineMail aria-hidden="true" size={22} />}
                        title="Escríbenos"
                        value="info@rjc-transportes.com"
                    />

                    <ContactForms
                        icon={<HiOutlineLocationMarker aria-hidden="true" size={22} />}
                        title="Ubicación"
                        value="Mendoza, Argentina"
                    />
                </div>
            </section>

        </>
    )
}