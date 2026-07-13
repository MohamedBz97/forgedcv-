import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forgedcv.com"),
  title: {
    default: "forgedCV — Free Online Resume Builder | CV Maker",
    template: "%s | forgedCV",
  },
  description:
    "Build a professional, ATS-ready resume for free in minutes. 8 customizable templates, unlimited PDF downloads, no watermarks. Forge a resume that gets you hired.",
  keywords: [
    "free resume builder",
    "resume maker",
    "CV builder",
    "ATS resume",
    "resume templates",
    "online resume builder",
    "cover letter",
    "job interview",
  ],
  authors: [{ name: "forgedCV" }],
  creator: "forgedCV",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "forgedCV — Free Online Resume Builder | CV Maker",
    description:
      "Build a professional, ATS-ready resume for free in minutes. Unlimited downloads. No watermarks. No hidden fees.",
    url: "https://forgedcv.com",
    siteName: "forgedCV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "forgedCV — Free Online Resume Builder",
    description:
      "Build a professional, ATS-ready resume for free in minutes. No watermarks. No hidden fees.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="top-center" richColors />
      </body>
    </html>
  );
}
