import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Work_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Weart — Weboldalak kkv-knak, profin",
  description: "Magyar kkv-knak készítünk gyors, jól kereshető, könnyen kezelhető weboldalakat — a tervezéstől a karbantartásig.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${manrope.variable} ${jetbrainsMono.variable} ${workSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
