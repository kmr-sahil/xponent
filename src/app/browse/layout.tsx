import Navbar from "@/components/navbar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Navbar />
      <div className="max-w-[48rem] mx-auto p-4 ">{children}</div>
    </div>
  );
}
