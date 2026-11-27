import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UR Groups - Comfortable stays in Jayanagar, Bengaluru",
  description:
    "UR Comforts, VP International and UR Stay In. Three comfortable stays across Jayanagar 4th and 9th Block, Bengaluru.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}