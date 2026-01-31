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

export const metadata: Metadata = {
  title: "Russell Chen | DevOps & Data Engineer",
  description: "Portfolio of Russell Chen, specializing in Backend, Data Engineering, and DevOps.",
  metadataBase: new URL("https://lmsla.github.io/my-portfolio/"),
  openGraph: {
    title: "Russell Chen | DevOps & Data Engineer",
    description: "Portfolio of Russell Chen, specializing in Backend, Data Engineering, and DevOps.",
    url: "https://lmsla.github.io/my-portfolio/",
    siteName: "Russell Chen's Portfolio",
    images: [
      {
        url: "/images/projects/portfolio/home.png",
        width: 1200,
        height: 630,
        alt: "Russell Chen Portfolio Preview",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russell Chen | DevOps & Data Engineer",
    description: "Portfolio of Russell Chen, specializing in Backend, Data Engineering, and DevOps.",
    images: ["/images/projects/portfolio/home.png"],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-200`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}