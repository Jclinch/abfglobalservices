import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "All fields required" }, { status: 400 });
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
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: "info@abfglobalservices.com", // ✅ Always goes to official email
      subject: `📩 New Contact from ${name}`,
      text: `${name} (${email}) says:\n\n${message}`,
      html: `<p><strong>${name}</strong> (${email}) says:</p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true, message: "Message sent" });
  } catch (err) {
    console.error("Contact error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
