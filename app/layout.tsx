import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";

import { AppProvider } from "@/providers/app-provider";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetricMint",
  description: "Modern analytics dashboard for product and revenue insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}