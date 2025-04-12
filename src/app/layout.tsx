import type { Metadata } from "next";
import { Nunito, Imbue, Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const imbue = Imbue({
  variable: "--font-imbue",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahil Kumar",
  description: "Software Engineer based in India",
};

// ${geistSans.variable} ${geistMono.variable}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body
        className={`  ${inter.variable} ${nunito.variable} ${imbue.variable} antialiased bg-white w-full min-h-screen max-w-[40rem] mx-auto text-[16px] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
