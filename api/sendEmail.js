import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Send email via Resend
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // change after domain verification
      to: "delivered@resend.dev",
      subject: `New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 16px;">
          <h2>📩 New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f5f5f5;padding:10px;border-radius:6px;">
            ${message}
          </p>
        </div>
      `
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}