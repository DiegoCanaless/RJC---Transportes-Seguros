import * as Yup from "yup";

export const ContactSchema = Yup.object({
    name: Yup.string()
        .min(3, "Mínimo 3 caracteres")
        .required("El nombre es obligatorio"),

    phone: Yup.string()
        .matches(/^[0-9+\s()-]+$/, "Teléfono inválido")
        .required("El teléfono es obligatorio"),

    email: Yup.string()
        .email("Email inválido")
        .required("El email es obligatorio"),

    socialWork: Yup.string()
        .required("Seleccioná una obra social"),

    otherSocialWork: Yup.string().when("socialWork", {
        is: "Otros",
        then: (schema) =>
            schema.required("Ingresá tu obra social"),
        otherwise: (schema) => schema.notRequired(),
    }),

    message: Yup.string()
        .min(10, "El mensaje debe tener al menos 10 caracteres")
        .required("El mensaje es obligatorio"),
});
