import type { Metadata } from "next";
import { Nunito, Imbue, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Geist({
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
  title: "Xponent",
  description: "A collection of components and templates for Tailwind CSS",
};

// ${geistSans.variable} ${geistMono.variable}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${inter.variable} ${nunito.variable} ${imbue.variable} antialiased bg-white w-full min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}