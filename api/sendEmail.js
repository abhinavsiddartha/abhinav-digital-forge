import { Resend } from "resend";

export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(200).json({ message: "API is working" });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required",
      });
    }

    // Send email
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",        // FREE sender (no domain needed)
      to: "abhinavchamarty@gmail.com",           // 🔥 CHANGE THIS to your email
      subject: `New Contact Message from ${name}`,
      reply_to: email,                     // allows you to reply directly
      html: `
        <div style="font-family: Arial, sans-serif; padding: 10px;">
          <h2>📩 New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      data: response,
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      error: "Failed to send email",
    });
  }
}