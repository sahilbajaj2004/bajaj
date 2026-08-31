import type { Metadata, Viewport } from "next";
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
const title = "Sahil Bajaj — Full-Stack MERN & Python Developer in Delhi";
const description =
  "Sahil Bajaj is a full-stack MERN and Python developer based in Delhi, India. He ships complete products — React & Next.js front-ends, Node.js & Django APIs, MongoDB and deployment — with experience at Razorse Software and 10+ shipped projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Sahil Bajaj",
  title: {
    default: title,
    template: "%s — Sahil Bajaj",
  },
  description,
  keywords: [
    "Sahil Bajaj",
    "Sahil Bajaj developer",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "Node.js Developer",
    "Delhi developer",
    "Web Developer India",
    "Hire MERN developer",
    "Freelance web developer India",
  ],
  authors: [{ name: "Sahil Bajaj", url: siteUrl }],
  creator: "Sahil Bajaj",
  publisher: "Sahil Bajaj",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    title,
    description,
    url: siteUrl,
    siteName: "Sahil Bajaj",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1920,
        height: 768,
        alt: "Sahil Bajaj — Full-Stack MERN & Python Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0c0b0a" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0b0a" },
  ],
  colorScheme: "dark",
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
