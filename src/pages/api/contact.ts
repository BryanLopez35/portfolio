import type { NextApiRequest, NextApiResponse } from "next";
import { AdminNotificationTemplate } from "@/components/email-template";
import { ClientConfirmationTemplate } from "@/components/client-confirmation-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, surname, email, phone, subject, message } = req.body;

  try {
    // Enviar correo de confirmación al usuario
    const userResponse = await resend.emails.send({
      from: "Bryan Lopez <hello@bryancode.dev>",
      to: [email],
      subject: "Confirmación de contacto",
      react: await ClientConfirmationTemplate({ name, surname, email, phone, message }),
    });

    if (userResponse.error) {
      console.error("Error enviando correo al usuario:", userResponse.error);
      return res.status(400).json({ error: userResponse.error });
    }

    // Enviar notificación al administrador
    const adminResponse = await resend.emails.send({
      from: "Bryan Lopez <hello@bryancode.dev>",
      to: ["hello@bryancode.dev"],
      subject: "Nuevo contacto recibido",
      react: await AdminNotificationTemplate({ name, surname, email, phone, subject, message }),
    });

    if (adminResponse.error) {
      console.error("Error enviando correo al administrador:", adminResponse.error);
      return res.status(400).json({ error: adminResponse.error });
    }

    res.status(200).json({ message: "Correos enviados exitosamente" });
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({ error: "Error enviando correos" });
  }
};

// Exportar la función correctamente
export default handler;