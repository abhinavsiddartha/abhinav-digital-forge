import { Resend } from "resend";

export default async function handler(req, res) {
  try {
    // Always respond for non-POST
    if (req.method !== "POST") {
      return res.status(200).json({ message: "API is working" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "delivered@resend.dev",
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });

  } catch (error) {
    console.error("ERROR:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}