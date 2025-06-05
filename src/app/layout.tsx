// app/layout.tsx
import type { Metadata } from "next";
import { Nunito, Imbue, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavbarWithSimpleMenu from "@/components/navbar";
import Head from "next/head";
import Navbar from "@/components/navbar";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <Head>
        <link rel="icon" href="/favicon.png" />
      </Head> */}
      <body
        className={`${inter.variable} ${nunito.variable} ${imbue.variable} w-full min-h-screen relative max-w-[40rem] mx-auto text-[16px] overflow-x-hidden`}
      >
        <ThemeProvider attribute="class">
          {children}
          <Navbar />
        </ThemeProvider>
        
      </body>
    </html>
  );
}
