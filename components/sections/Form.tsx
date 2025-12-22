"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaPaperPlane } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

import { ContactSchema } from "@/validations/contactSchema";
import { socialWorkOptions } from "@/data/socialWorksOptions";
import Toast, { ToastType } from "@/components/ui/Toast";

/* ===== TIPO DEL TOAST ===== */
interface ToastData {
    type: ToastType;
    message: string;
}

export default function ContactForm() {
    const [toast, setToast] = useState<ToastData | null>(null);

    return (
        <>
            {toast && (
                <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />
            )}

            <Formik
                initialValues={{
                    name: "",
                    phone: "",
                    email: "",
                    socialWork: "",
                    otherSocialWork: "",
                    message: "",
                }}
                validationSchema={ContactSchema}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    const finalSocialWork =
                        values.socialWork === "Otros"
                            ? values.otherSocialWork
                            : values.socialWork;

                    const templateParams = {
                        name: values.name,
                        phone: values.phone,
                        email: values.email,
                        socialWork: finalSocialWork,
                        message: values.message,
                    };

                    setToast({
                        type: "loading",
                        message: "Enviando consulta...",
                    });

                    try {
                        await emailjs.send(
                            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                            templateParams,
                            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                        );

                        resetForm();
                        setToast({
                            type: "success",
                            message: "Consulta enviada correctamente",
                        });
                    } catch (error) {
                        console.error("EmailJS error:", error);
                        setToast({
                            type: "error",
                            message: "Error al enviar la consulta. Intente nuevamente.",
                        });
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ values, isSubmitting }) => (
                    <Form className="flex flex-col gap-4 w-full max-w-md bg-light px-4 py-4 rounded-xl border shadow-md">
                        <h5 className="text-md font-medium mb-4">
                            Solicitar Información
                        </h5>

                        {/* NOMBRE */}
                        <div className="flex flex-col gap-1">
                            <label className="text-[14px]">Nombre y Apellido</label>
                            <Field name="name" type="text" placeholder="Juan Pérez" className="bg-gray-700 px-4 py-2 text-xs rounded-md text-white" />
                            <ErrorMessage name="name" component="p" className="text-red-500 text-xs"  />
                        </div>

                        {/* TELÉFONO */}
                        <div className="flex flex-col gap-1">
                            <label className="text-[14px]">Teléfono</label>
                            <Field name="phone" type="tel" placeholder="+54 9 261 443-4151" className="bg-gray-700 px-4 py-2 text-xs rounded-md text-white"/>
                            <ErrorMessage name="phone" component="p" className="text-red-500 text-xs"/>
                        </div>

                        {/* EMAIL */}
                        <div className="flex flex-col gap-1">
                            <label className="text-[14px]">Email</label>
                            <Field name="email" type="email" placeholder="correo@gmail.com" className="bg-gray-700 px-4 py-2 text-xs rounded-md text-white" />
                            <ErrorMessage name="email" component="p" className="text-red-500 text-xs" />
                        </div>

                        {/* OBRA SOCIAL */}
                        <div className="flex flex-col gap-1">
                            <label className="text-[14px]">Obra Social</label>
                            <Field as="select" name="socialWork" className="bg-gray-700 px-4 py-2 text-xs rounded-md text-white" >
                                <option value="">Seleccioná una obra social</option>
                                {socialWorkOptions.map((work) => (
                                    <option key={work} value={work}>
                                        {work}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="socialWork" component="p" className="text-red-500 text-xs" />
                        </div>

                        {/* OTROS */}
                        {values.socialWork === "Otros" && (
                            <div className="flex flex-col gap-1">
                                <label className="text-[14px]">
                                    ¿Cuál es su obra social?
                                </label>
                                <Field name="otherSocialWork" type="text" placeholder="Ej: Swiss Medical" className="bg-gray-700 px-4 py-2 text-xs rounded-md text-white" />
                                <ErrorMessage name="otherSocialWork" component="p" className="text-red-500 text-xs" />
                            </div>
                        )}

                        {/* MENSAJE */}
                        <div className="flex flex-col gap-1">
                            <label className="text-[14px]">Mensaje</label>
                            <Field as="textarea" name="message" placeholder="Ingrese su consulta" className="bg-gray-700 px-4 py-2 text-xs rounded-md text-white" />
                            <ErrorMessage name="message" component="p" className="text-red-500 text-xs" />
                        </div>

                        <button type="submit" disabled={isSubmitting} className="flex items-center justify-center gap-2 w-full bg-white h-10 rounded-lg border-2 border-gray-600 text-gray-600 hover:bg-yellowPrimary hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed" >
                            {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                            <FaPaperPlane />
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
}
