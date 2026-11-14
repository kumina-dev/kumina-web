import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Kumina",
  description: "Verkkosivut ja sovellukset pienyrityksille.",
};

export const viewport: Viewport = {
  themeColor: "#0f1218",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fi" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
