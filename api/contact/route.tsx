import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Company: ${company || "-"}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}