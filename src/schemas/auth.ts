import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "El correo electrónico es obligatorio" })
    .min(1, "El correo electrónico es obligatorio")
    .email("Correo electrónico no válido"),
  password: z
    .string({ required_error: "La contraseña es obligatoria" })
    .min(1, "La contraseña es obligatoria")
    .min(6, "Debe tener al menos 6 caracteres")
    .max(32, "Debe tener menos de 32 caracteres"),
});

export type loginType = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string({ required_error: "El nombre es obligatorio" })
      .min(1, "El nombre es obligatorio")
      .max(32, "El nombre debe tener menos de 32 caracteres"),
    email: z
      .string({ required_error: "El correo electrónico es obligatorio" })
      .min(1, "El correo electrónico es obligatorio")
      .email("Correo electrónico no válido"),
    password: z
      .string({ required_error: "La contraseña es obligatoria" })
      .min(6, "Debe tener al menos 6 caracteres")
      .max(32, "Debe tener menos de 32 caracteres"),
    confirmPassword: z
      .string({ required_error: "Confirmar la contraseña es obligatorio" })
      .min(6, "Debe tener al menos 6 caracteres")
      .max(32, "Debe tener menos de 32 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type registerType = z.infer<typeof registerSchema>;
