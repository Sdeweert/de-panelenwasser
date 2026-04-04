import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "De Panelenwasser | Professioneel zonnepanelen reinigen met osmosewater",
  description:
    "Laat uw zonnepanelen professioneel reinigen met osmosewater. Meer opbrengst, langer meegaan. Vraag direct een vrijblijvende offerte aan.",
  keywords: "zonnepanelen reinigen, panelen wassen, osmosewater, zonnepanelen schoonmaken",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
