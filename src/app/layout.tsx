import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sahil Bajaj — Full-Stack MERN & Python Developer",
  description:
    "Sahil Bajaj is a full-stack MERN and Python developer from Delhi, India. Building real-world web applications that solve problems — not just run in theory.",
  keywords: [
    "Sahil Bajaj",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "Python Developer",
    "Delhi",
  ],
  authors: [{ name: "Sahil Bajaj" }],
  openGraph: {
    title: "Sahil Bajaj — Full-Stack MERN & Python Developer",
    description:
      "Building real-world web applications that solve problems — not just run in theory.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
