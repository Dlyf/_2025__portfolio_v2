import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dominique LYF - Développeur Full Stack",
  description: "Portfolio de Dominique LYF avec JavaScript, React, Tailwind, Next.js et Typescript. Découvrez mes projets, compétences et expériences professionnelles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "font-sans", inter.variable)}>
      <body
        className={cn(geistSans.variable, geistMono.variable, "h-full bg-background font-sans text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
