import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Gabriel Sandu | Senior Full Stack Engineer",
  description:
    "Portfolio of Gabriel Sandu — Senior Full Stack Engineer with 12+ years building scalable web applications, cloud infrastructure, and AI-powered solutions.",
  keywords: [
    "Gabriel Sandu",
    "Full Stack Engineer",
    "AI Engineer",
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Gabriel Sandu" }],
  openGraph: {
    title: "Gabriel Sandu | Senior Full Stack Engineer",
    description:
      "Senior Full-Stack & AI Engineer with 12+ years building scalable applications, cloud infrastructure, and AI solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
