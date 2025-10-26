import type { Metadata } from "next";
import "./globals.css";
import Header from "@/MyComponent/ClientSideComponents/HeaderComponent/Header";
import Footer from "@/MyComponent/ServerSideComponents/FooterComponents/Footer";

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
      <body className="font-poppins antialiased ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
