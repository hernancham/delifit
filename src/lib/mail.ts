import { Resend } from "resend";

const resend = new Resend(process.env.AUTH_RESEND_KEY);

export const sendEmailVerification = async (email: string, token: string) => {
  try {
    await resend.emails.send({
      from: "Delifit <onboarding@resend.dev>",
      to: email,
      subject: "Verifica tu correo electrónico",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #4CAF50; text-align: center;">¡Bienvenido a Delifit!</h2>
          <p style="font-size: 16px;">Gracias por registrarte en Delifit, tu tienda de comida saludable. Para completar tu registro, por favor verifica tu correo electrónico haciendo clic en el enlace a continuación:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email?token=${token}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Verificar correo electrónico</a>
          </div>
          <p style="font-size: 14px; color: #555;">Si no te registraste en Delifit, ignora este mensaje.</p>
          <p style="font-size: 14px; color: #555;">Saludos,</p>
          <p style="font-size: 14px; color: #555;"><strong>Equipo Delifit</strong></p>
        </div>
      `,
    });

    return {
      success: true,
    };
  } catch (error) {
    // console.log(error);
    return {
      error: true,
    };
  }
};
