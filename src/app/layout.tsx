import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PublicShell } from "@/components/layout/Shell";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio v2 | DevOps & Full Stack",
  description: "DevOps & Full Stack Engineer Portfolio featuring interactive infrastructure visualizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${mono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <PublicShell>
          {children}
        </PublicShell>
      </body>
    </html>
  );
}
