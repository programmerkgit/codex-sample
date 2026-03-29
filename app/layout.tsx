import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mio Akiyama | Web Designer Portfolio",
  description: "秋山みおのWebデザインポートフォリオ。UIデザイン、ブランドサイト、LP制作の実績を掲載しています。",
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
