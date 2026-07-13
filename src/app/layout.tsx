import type { Metadata } from "next";
import { Inter, EB_Garamond, Poppins, Lora, Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CVForge — Build a resume that gets you hired",
  description:
    "Free resume builder with 8 professionally designed, ATS-friendly templates. Live preview, full customization, and pixel-perfect PDF export.",
  keywords: ["resume builder", "CV maker", "resume templates", "ATS resume", "free resume builder"],
  authors: [{ name: "CVForge" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "CVForge — Build a resume that gets you hired",
    description: "8 professional templates, live preview, free PDF export.",
    type: "website",
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
        className={`${inter.variable} ${garamond.variable} ${poppins.variable} ${lora.variable} ${roboto.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="top-center" richColors />
      </body>
    </html>
  );
}
