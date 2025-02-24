import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate the required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: "Invalid email address." });
    }

    // Simulate processing the contact message (e.g., sending an email)
    console.log(
      `Contact message from: ${name} (${email})\nMessage: ${message}`
    );

    // Example: You could integrate an actual email service like SendGrid here.

    return res.status(200).json({ message: "Message sent successfully!" });
  }

  // Handle unsupported HTTP methods
  return res.status(405).json({ message: "Method Not Allowed" });
}
