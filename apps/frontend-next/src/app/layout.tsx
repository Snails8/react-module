import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "../assets/styles/globals.css";
import { GlobalLayout } from "../components/layout/GlobalLayout";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const notoSansJP = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
