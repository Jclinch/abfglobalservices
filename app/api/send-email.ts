import type { NextApiRequest, NextApiResponse } from "next";
import * as nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // store in .env.local
      },
    });

    await transporter.sendMail({
      from: `"ABF Global Services" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
}
