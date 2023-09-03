import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "../../components/header/header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testing - zadanie",
  description: "desc Testing - zadanie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div style={{ marginTop: "100px" }}>{children}</div>
      </body>
    </html>
  );
}
