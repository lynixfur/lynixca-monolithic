import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LynixCA",
  description: "Step into my personal corner of the internet, where I graciously invite you to peruse through a collection of my projects, delve into my thoughts, and explore snippets of my code. Welcome to my digital space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fontawesome/css/all.min.css"></link>
      </head>
      <body className={inter.className}>
        <div className="flex-col justify-center">
              {children}
        </div>
      </body>
    </html>
  );
}
