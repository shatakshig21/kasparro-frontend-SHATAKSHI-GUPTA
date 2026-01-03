import { Inter } from "next/font/google";

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
