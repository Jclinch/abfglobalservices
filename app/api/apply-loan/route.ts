import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Configure SMTP transport from env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // ✅ now matches .env.local
      },
    });

    // ✅ Email to loan desk
    await transporter.sendMail({
      from: `"ABF Loan Application" <${process.env.SMTP_USER}>`,
      to: "newloan@abfglobalservices.com",
      subject: "📩 New Loan Application Received",
      html: `
        <h3>New Loan Application</h3>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Loan Amount:</strong> ₦${Number(body.amount).toLocaleString()}</p>
        <p><strong>Duration:</strong> ${body.duration} months</p>
        <p><strong>Purpose:</strong> ${body.purpose}</p>
      `,
    });

    // ✅ Confirmation email to applicant
    await transporter.sendMail({
      from: `"ABF & Sons Global Services" <${process.env.SMTP_USER}>`,
      to: body.email,
      subject: "✅ Loan Application Received - ABF & Sons Global Services Ltd",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:20px;">
          <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05)">
            <div style="background:#1E3A8A; padding:20px; text-align:center;">
              <h1 style="color:#FFD700; margin:0;">ABF & Sons Global Services Ltd</h1>
              <p style="color:#ffffff; margin:0; font-size:14px;">Trusted Financial Solutions</p>
            </div>
            <div style="padding:20px; color:#333333;">
              <h2 style="color:#1E3A8A;">Dear ${body.name},</h2>
              <p>Thank you for applying for a loan with <strong>ABF & Sons Global Services Ltd</strong>.</p>
              <p>We have received your application and our team will contact you shortly to discuss further requirements.</p>
            </div>
            <div style="background:#FFD700; padding:15px; text-align:center; font-size:12px; color:#1E3A8A;">
              © ${new Date().getFullYear()} ABF & Sons Global Services Ltd. All rights reserved.
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
