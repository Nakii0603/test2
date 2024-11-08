import { signupUser } from "../../../controller/authController";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const token = await signupUser(email, password);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
