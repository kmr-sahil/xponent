import React from "react";
import { IconChevronRight } from "@tabler/icons-react";

export default function StripeButton() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        rel="stylesheet"
      />

      <div className="flex items-center justify-center my-4 py-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-black rounded-2xl">
         <button 
         className="group text-[14px] font-medium bg-white rounded-full px-4 py-1 mt-[0.5px] flex items-center gap-1.5 cursor-pointer"
         style={{ fontFamily: 'Inter, sans-serif', mixBlendMode: 'screen' }}
      >
        <span style={{ mixBlendMode: 'multiply' }}>Contact Sales</span>
        <span className="relative w-4" style={{ mixBlendMode: 'multiply' }}>
          <span className="w-2 h-[2px] rounded-full bg-black block absolute top-[11px] left-[4px] opacity-0 group-hover:opacity-100 group-active:opacity-100 duration-100"></span>
          <IconChevronRight stroke={2.5} width="16" className="group-hover:translate-x-[3px] group-active:translate-x-[3px] duration-200" />
        </span>
      </button>
      </div>
    </>
  );
}
