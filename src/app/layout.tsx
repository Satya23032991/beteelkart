
import Head from 'next/head';

import type { Metadata } from "next";
import { Inter , Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IndianPaanSamrat - Delivering the Authentic Taste & Goodness of Paan",
  description: "Experience the widest range of Paans from IndianPaanSamrat. Order now for fast, authentic Paan delivery to your door!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>"IndianPaanSamrat - Delivering the Authentic Taste & Goodness of Paan"</title>
        <meta name="description" content="Experience the widest range of Paans from IndianPaanSamrat. Order now for fast, authentic Paan delivery to your door!" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="context" content="http://schema.org"/>
        <meta name="type" content="organization"/>
        <meta name="url" content="https://www.indianpaansamrat.com"/>
        <meta name="logo" content="www.indianpaansamrat.com/logo.png"/>
        "sameAs": [
        "https://www.facebook.com/IndianPaanSamrat",
        "https://www.instagram.com/IndianPaanSamrat",
        "https://www.twitter.com/IndianPaanSamrat"
        // Add other social media profile URLs here
      ]
      </Head>
      <body className={`${inter.className} ${process.env.NODE_ENV == "development" ? "debug-screens" : "" }`}>
        <div className="relative w-full flex item-center justify-center shadow-xl">
         <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
