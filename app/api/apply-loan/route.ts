// app/api/apply-loan/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Configure SMTP transport (Host Africa or your provider)
    const transporter = nodemailer.createTransport({
      host: "mail.abfglobalservices.com", // your mail host
      port: 465,
      secure: true,
      auth: {
        user: "info@abfglobalservices.com", // your sending email
        pass: process.env.EMAIL_PASS, // store in .env.local
      },
    });

    // ✅ Email to company loan desk
    await transporter.sendMail({
      from: '"ABF Loan Application" <info@abfglobalservices.com>',
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
  from: '"ABF & Sons Global Services" <info@abfglobalservices.com>',
  to: body.email,
  subject: "✅ Loan Application Received - ABF & Sons Global Services Ltd",
  html: `
    <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:20px;">
      <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05)">
        
        <!-- Header -->
        <div style="background:#1E3A8A; padding:20px; text-align:center;">
          <h1 style="color:#FFD700; margin:0;">ABF & Sons Global Services Ltd</h1>
          <p style="color:#ffffff; margin:0; font-size:14px;">Trusted Financial Solutions</p>
        </div>
        
        <!-- Body -->
        <div style="padding:20px; color:#333333;">
          <h2 style="color:#1E3A8A;">Dear ${body.name},</h2>
          <p>Thank you for applying for a loan with <strong>ABF & Sons Global Services Ltd</strong>.</p>
          <p>We have received your application and our team will contact you shortly to discuss further requirements.</p>

          <h3 style="color:#1E3A8A; margin-top:20px;">📋 Application Summary</h3>
          <table style="width:100%; border-collapse:collapse; margin-top:10px;">
            <tr>
              <td style="padding:8px; border:1px solid #ddd;"><strong>Loan Amount</strong></td>
              <td style="padding:8px; border:1px solid #ddd;">₦${Number(body.amount).toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd;"><strong>Duration</strong></td>
              <td style="padding:8px; border:1px solid #ddd;">${body.duration} months</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd;"><strong>Purpose</strong></td>
              <td style="padding:8px; border:1px solid #ddd;">${body.purpose}</td>
            </tr>
          </table>

          <p style="margin-top:20px;">If you have any questions, feel free to reply to this email or call us at <strong style="color:#1E3A8A;">+234 909 777 2183</strong>.</p>

          <p style="margin-top:20px;">Best regards,<br/>
          <strong style="color:#1E3A8A;">ABF & Sons Global Services Ltd</strong></p>
        </div>
        
        <!-- Footer -->
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
