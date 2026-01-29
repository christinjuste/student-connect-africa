import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Connect Africa - Belgium",
  description: "Platform for African students in Belgium to connect and share information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
