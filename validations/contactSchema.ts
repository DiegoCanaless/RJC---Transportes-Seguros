import * as Yup from "yup";


export const ContactSchema = Yup.object({
    name: Yup.string()
        .min(3, "Minimo 3 caracteres")
        .required("El nombre es obligatorio"),

    phone: Yup.string()
        .matches(/^[0-9+\s()-]+$/, "Telefono Inválido")
        .required("El teléfono es obligatorio"),

    email: Yup.string()
        .email("Email inválido")
        .required("El email es obligatorio"),

    socialWor: Yup.string()
        .required("Seleccioná una obra social"),

    message: Yup.string()
        .min(10, "El mensaje debe tener al menos 10 caracteres")
        .required("El mensaje es obligatorio")
});