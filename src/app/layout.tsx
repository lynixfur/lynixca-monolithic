import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/nav/Navbar";
import FE from "@/components/modals/FE";
import SmallAlert from "@/components/modals/SmallAlert";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col">
          <Navbar />
          <FE/>
          <SmallAlert/>
          {children}
        </main>
      </body>
    </html>
  );
}