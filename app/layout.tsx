import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
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
  authors: [{ name: "OverthinkerAI" }],
  openGraph: {
    title: "OverthinkerAI - Turn Simple Questions Into Dramatic Spirals",
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
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e04ef459-15b3-439d-b787-99f09652094f"
        ></Script>
      </head>
      <body
        className={` ${inter.className} antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
