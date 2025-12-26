
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "Kasparro",
  description: "AI-native SEO & Brand Intelligence platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
