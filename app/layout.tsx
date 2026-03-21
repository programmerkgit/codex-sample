import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomasz Gajda Portfolio",
  description: "Portfolio landing page based on the Tomasz Gajda Figma design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
