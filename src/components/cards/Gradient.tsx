import { ArrowRight } from "lucide-react";
import React from "react";

export default function Gradient() {
  return (
    <div className="relative overflow-hidden max-w-[12rem] mx-auto shadow-md hover:shadow-lg transition-shadow duration-700 font-mono flex flex-col items-start justify-center px-4 py-4 rounded-[2rem] bg-gradient-to-b from-[#ffa127] from-10% via-[#ff7875] via-40% to-[#fb2693] to-90% border-2 border-zinc-50/70">
      <div className="text-4xl text-white font-bold pl-[0.85rem] pt-[0.85rem]">
        $5
      </div>
      <div className="text-[1rem] text-zinc-900 mix-blend- opacity-30 mb-8 font-bold pl-[0.85rem]">
        September 9
      </div>
      <button className="w-full bg-white/5 text-white px-2 py-2 rounded-full flex items-center font-bold text-[1rem] gap-2 hover:bg-white/10 transition-colors border-2 border-white/30 backdrop-blur-xl">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-white">
          <ArrowRight size={14} strokeWidth={3} className="text-[#fb2694c9]" />
        </div>
        Claim now
      </button>
      <div className="h-[4rem] w-[6rem] rounded-4xl rotate-6 absolute -bottom-1 -left-7 bg-radial from-[#f7bee3] from-40% to-[#5d0f3e] mix-blend-saturation filter blur-2xl"></div>
    </div>
  );
}
