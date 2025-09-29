//app\api\contact\route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input",
          issues: validation.error.flatten(),
        },
        { status: 400 }
      );
    }
    const { name, email, message } = validation.data;

    const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true", // false for 587, true for 465
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
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
