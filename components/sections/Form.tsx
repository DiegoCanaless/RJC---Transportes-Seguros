"use client"
import { ContactSchema } from "@/validations/contactSchema";
import { ErrorMessage, Field, Formik } from "formik";
import { socialWorks } from "@/data/socialworks";
import { FaPaperPlane } from "react-icons/fa6";




export default function Form() {
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    phone: "",
                    email: "",
                    socialWork: "",
                    message: ""
                }}
                validationSchema={ContactSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("CORREO ENVIADO")
                    resetForm()
                }}
            >
                {({ isSubmitting }) => (
                    <form className="flex flex-col gap-4 w-full max-w-md bg-light px-4 py-4 rounded-xl border shadow-md">
                        <h5 className="text-md font-medium mb-4">Solicitar Información</h5>

                        {/* NOMBRE COMPLETO */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="fullName" className="text-[10px] font-normal">Nombre y Apellido</label>

                            <Field
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="Juan Pérez"
                                className="bg-gray-700 px-4 text-xs py-2 rounded-md outline-amber-400 text-white"
                            />

                            <ErrorMessage
                                name="fullName"
                                component="p"
                                className="text-red-500 text-xs"
                            />
                        </div>

                        {/* TELEFONO */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="phoneNumber" className="text-[10px] font-normal">Teléfono</label>

                            <Field
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                placeholder="+54 9 261 443-4151"
                                className="bg-gray-700 px-4 text-xs py-2 rounded-md outline-amber-400 text-white"
                            />

                            <ErrorMessage
                                name="phoneNumber"
                                component="p"
                                className="text-red-500 text-xs"
                            />
                        </div>

                        {/* CORREO ELECTRONICO */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-[10px] font-normal">Email</label>

                            <Field
                                id="email"
                                name="email"
                                type="email"
                                placeholder="rjc@gmail.com"
                                className="bg-gray-700 px-4 text-xs py-2 rounded-md outline-amber-400 text-white"
                            />

                            <ErrorMessage
                                name="email"
                                component="p"
                                className="text-red-500 text-xs"
                            />
                        </div>

                        {/* OBRA SOCIAL */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="socialWork" className="text-[10px] font-normal">Obra Social</label>

                            <Field
                                as="select"
                                id="socialWork"
                                name="socialWork"
                                className="bg-gray-700 px-4 text-xs py-2 rounded-md outline-amber-400 text-white"
                            >
                                <option value="" className="text-slate-200">Seleccioná una obra social</option>

                                {socialWorks.map((work) => (
                                    <option key={work} value={work} className="text-white">
                                        {work}
                                    </option>
                                ))}
                            </Field>

                            <ErrorMessage
                                name="socialWork"
                                component="p"
                                className="text-red-500 text-xs"
                            />
                        </div>

                         {/* Message */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="message" className="text-[10px] font-normal">Mensaje</label>

                            <Field
                                as="textarea"
                                id="message"
                                name="message"
                                type="text"
                                placeholder="Ingrese su consulta/mensaje"
                                className="bg-gray-700 px-4 text-xs py-2 rounded-md outline-amber-400 text-white"
                            />

                            <ErrorMessage
                                name="message"
                                component="p"
                                className="text-red-500 text-xs"
                            />
                        </div>

                        <button type="submit" className="flex items-center justify-center gap-2 w-full bg-white h-10 rounded-lg transition-colors border-2 border-gray-600  text-gray-600 hover:bg-yellowPrimary  hover:border-none hover:text-white">
                            Enviar Consulta <FaPaperPlane aria-hidden="true"/>
                        </button>




                    </form>
                )}


            </Formik>
        </>
    )
}