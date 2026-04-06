import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wang Yufeng",
  description: "Bilingual personal website for Wang Yufeng."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
