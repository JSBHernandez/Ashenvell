import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Configurar el transportador SMTP con Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Tu correo que enviará los mensajes
        pass: process.env.EMAIL_PASSWORD, // Tu contraseña de aplicación de Gmail
      },
    });

    // Configurar el correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sebastianbhforjobs@gmail.com', // Tu correo donde recibirás los mensajes
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto desde Vondervaltz</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email del cliente:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: gray; font-size: 12px;">Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
      `,
      text: `
        Nuevo mensaje de contacto desde Vondervaltz
        
        Nombre: ${name}
        Email del cliente: ${email}
        
        Mensaje:
        ${message}
        
        ---
        Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
      `,
      replyTo: email, // Permite responder directamente al cliente
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' },
      { status: 500 }
    );
  }
}
