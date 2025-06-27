import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });

export default function SupabaseButton() {
  return (

      <div className={`${jakarta.variable} flex items-center justify-center p-4 `}>
        <button
          className="bg-[#006239] px-5 py-2 rounded-[6px] text-[#FAFAFA] border-[1.5px] border-[#00854e] text-[14px] cursor-pointer hover:bg-[#007a47] active:bg-[#007a47] hover:border-[#00c271] active:border-[#00c271] font-[500] transition-colors ease-in"
          style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
        >
          Start your project
        </button>
      </div>
  );
}
