import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OverthinkerAI - Turn Simple Questions Into Dramatic Spirals",
  description:
    "Externalize your inner anxious thoughts with dramatic, philosophical, and emotionally spiraling overanalysis. Because sometimes you need to laugh at your overthinking.",
  keywords: [
    "overthinking",
    "anxiety",
    "humor",
    "philosophy",
    "AI",
    "spiral",
    "thoughts",
  ],
  authors: [{ name: "Overthinker.ai" }],
  openGraph: {
    title: "Overthinker.ai - Turn Simple Questions Into Dramatic Spirals",
    description:
      "Externalize your inner anxious thoughts with dramatic, philosophical, and emotionally spiraling overanalysis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
