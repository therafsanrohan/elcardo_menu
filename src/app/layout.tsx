import type { Metadata } from "next";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Cardo | Live Music Lounge",
  description: "Premium Digital Menu for El Cardo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--color-brand-obsidian)] text-[var(--color-brand-ivory)] font-ui relative overflow-x-hidden">
        <div className="bg-grain"></div>
        <div className="relative z-10 flex flex-col min-h-full flex-grow">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
