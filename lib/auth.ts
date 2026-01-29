import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";

export async function setAuthToken(userId: number) {
  const token = jwt.sign({ userId }, SECRET, { expiresIn: "7d" });
  const cookieStore = await cookies();
  cookieStore.set("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return token;
}

export async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get("authToken")?.value;
}

export async function verifyAuthToken() {
  const token = await getAuthToken();
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET) as { userId: number };
  } catch {
    return null;
  }
}

export async function clearAuthToken() {
  const cookieStore = await cookies();
  cookieStore.delete("authToken");
}
