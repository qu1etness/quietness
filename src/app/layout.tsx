import { Antonio, Inter, Italiana } from "next/font/google";
import type { Metadata } from "next";
import React from "react";

import { ReactLenis } from "@/lib/lenis";
import Header from "@/templates/header";
import "./globals.css";
import { FollowUsBar } from "@/templates/follow-us-bar";

const italiana = Italiana({
  weight: "400",
  variable: "--font-italiana",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quietness",
  description: "Estetic web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${antonio.variable} ${italiana.variable} antialiased`}
      >
        <ReactLenis root>
          <Header/>
          <FollowUsBar/>
          <main>{children}</main>
        </ReactLenis>
      </body>
    </html>
  );
}
