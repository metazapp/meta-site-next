import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metazapp - Innovative Software Solutions",
  description: "Metazapp provides innovative, reliable and secure software solutions for businesses and individuals.",
  openGraph: {
    title: "Metazapp - Innovative Software Solutions",
    description: "Metazapp provides innovative, reliable and secure software solutions for businesses and individuals.",
    url: "https://metazapp.com",
    siteName: "Metazapp",
    images: [
      {
        url: "https://metazapp.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metazapp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metazapp - Innovative Software Solutions",
    description: "Metazapp provides innovative, reliable and secure software solutions for businesses and individuals.",
    images: ["https://metazapp.com/images/twitter-image.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
// In app/layout.tsx, add suppressHydrationWarning to the body element:

return (
  <html lang="en" className="scroll-smooth">
    <body className={inter.className} suppressHydrationWarning={true}>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </body>
  </html>
);
  
}