//app\api\contact.ts

import type { NextApiRequest, NextApiResponse } from "next";
import * as nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // mail.abfglobalservices.com
      port: Number(process.env.SMTP_PORT), // 465 or 587
      secure: process.env.SMTP_SECURE === "true", // true if SSL
      auth: {
        user: process.env.SMTP_USER, // info@abfglobalservices.com
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ABF Global Services" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // send to your official email
      subject: "New Contact Form Submission",
      text: `${name} (${email}) says: ${message}`,
      html: `<p><strong>${name}</strong> (${email}) says:</p><p>${message}</p>`,
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
