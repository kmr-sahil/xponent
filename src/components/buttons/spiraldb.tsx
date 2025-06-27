import React from "react";
import { Geist_Mono } from "next/font/google";

const geist = Geist_Mono({ variable: "--font-geist", subsets: ["latin"] });

export default function SpiraldbButton() {
  return (

      <div className={`flex items-center justify-center p-4 ${geist.variable}`} 
      style={{ fontFamily: 'var(--font-geist), monospace' }}
      >
        <button
          className="relative cursor-pointer overflow-hidden pt-4 rounded-b-[1.3rem] group active:overflow-hidden font-medium"
        >
          <span className="absolute w-full bottom-0 left-0  rounded-full flex justify-between whitespace-nowrap z-30 text-white/0 group-active:bg-black/20 transition-all duration-100 pt-[1px]">
            <span className=" leading-[2.5rem]">Get Started</span>
          </span>

          <span className="w-full bg-white border-1 border-black rounded-full flex justify-between whitespace-nowrap -z-10 text-white ">
            <span className="w-[1.6rem] bg-zinc-200 border-r-1 border-black rounded-tl-full rounded-bl-full"></span>
            <span className=" leading-[2.5rem]">Get Started</span>
            <span className="w-[1.6rem] bg-zinc-200 border-l-1 border-black rounded-tr-full rounded-br-full"></span>
          </span>

          <div className="absolute w-full bottom-0 left-0 text-white leading-[2.5rem] whitespace-nowrap rounded-full bg-[#5971FD] z-20 border-1 border-black opacity-100 group-active:inset-ring-6 group-active:inset-ring-[#4460fd] group-hover:-translate-y-[7px] group-active:translate-y-1.5 transition-all duration-100 ease-out delay-50">
            Get Started
          </div>
        </button>
      </div>
  );
}
