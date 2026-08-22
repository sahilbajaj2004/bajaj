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

const siteUrl = "https://sahilbajaj.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sahil Bajaj | Full-Stack MERN & Python Developer",
    template: "%s | Sahil Bajaj",
  },
  description:
    "Sahil Bajaj is a full-stack MERN and Python developer from Delhi, India, building real-world web apps, APIs, and scalable digital products for modern businesses.",
  keywords: [
    "Sahil Bajaj",
    "Sahil Bajaj developer",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "Python Developer",
    "Delhi developer",
    "Web Developer India",
  ],
  authors: [{ name: "Sahil Bajaj", url: siteUrl }],
  creator: "Sahil Bajaj",
  publisher: "Sahil Bajaj",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sahil Bajaj | Full-Stack MERN & Python Developer",
    description:
      "Full-stack MERN and Python developer building real-world applications that solve real problems and ship end-to-end.",
    url: siteUrl,
    siteName: "Sahil Bajaj",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sahil Bajaj Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Bajaj | Full-Stack MERN & Python Developer",
    description:
      "Full-stack MERN and Python developer building real-world applications that solve real problems and ship end-to-end.",
    images: ["/og-image.svg"],
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
