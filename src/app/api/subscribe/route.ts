import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: "Invalid email address." });
    }

    // Simulate adding the email to a subscription list or forwarding it to an email service
    console.log(`New subscription: ${email}`);

    // Example: You could integrate an actual email service like SendGrid here.

    return res.status(200).json({ message: "Subscription successful!" });
  }

  // Handle unsupported HTTP methods
  return res.status(405).json({ message: "Method Not Allowed" });
}
