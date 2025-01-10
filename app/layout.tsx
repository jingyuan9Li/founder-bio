import type { Metadata } from "next";
import "./globals.css";
import { innovatorGrotesk, inter } from "./fonts";

export const metadata: Metadata = {
  title: "Founder Bio",
  description: "The bio page for founders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${innovatorGrotesk.variable} ${inter.variable}`}>
      <body className="font-innovator antialiased">{children}</body>
    </html>
  );
}
