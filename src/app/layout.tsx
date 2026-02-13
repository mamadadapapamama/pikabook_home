import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://pikabook.app";

export const metadata: Metadata = {
  title: "Pikabook – Chinese is hard. We get it. Make it readable and speakable.",
  description:
    "Pikabook helps you understand every sentence in your Chinese book and say it confidently. Study your own book, line-by-line translation, real voices, vocabulary flashcards, and instant pronunciation feedback.",
  keywords: ["Chinese learning", "Mandarin", "reading app", "pronunciation", "flashcards", "Pikabook"],
  authors: [{ name: "Pikabook" }],
  openGraph: {
    title: "Pikabook – Chinese is hard. We get it.",
    description:
      "Study YOUR Chinese book with line-by-line translation, real voices, and instant pronunciation feedback.",
    url: SITE_URL,
    siteName: "Pikabook",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pikabook – Chinese is hard. We get it.",
    description: "Make Chinese readable and speakable. Study your book, line by line.",
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
