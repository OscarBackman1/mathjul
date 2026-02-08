import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Global Food Roulette",
  description: "Spin the wheel to discover dishes from the world's 70 largest countries. A fun way to explore global cuisines with friends!",
  keywords: ["food", "roulette", "cooking", "world cuisine", "dishes", "recipes"],
  openGraph: {
    title: "Global Food Roulette",
    description: "Spin the wheel to discover dishes from 70 countries!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased bg-[#f6f8f6]`}>
        {children}
      </body>
    </html>
  );
}
