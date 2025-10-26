import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sopcart online store",
  description:
    "Shoping cart online store your one stop shop forn all your need ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
