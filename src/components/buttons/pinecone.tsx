import React from "react";

export default function PineconeButton() {
  return (
    <div className="flex items-center justify-center p-4 ">
      <button className="relative cursor-pointer px-6 py-3 text-black dark:text-white text-[14px] font-medium border-1 border-black/20 dark:border-white/20 group hover:border-black/80 active:border-black/80 dark:hover:border-white/80 dark:active:border-white/80 transition-all duration-300 ease-in-out">
        View Docs
        {/* Top-left corner */}
        <span className="absolute -top-[2.5px] -left-2 w-2 h-[1.5px] bg-black dark:bg-white group-hover:-left-[1px] group-active:-left-[1px] transition-all duration-200 ease-in-out"></span>
        <span className="absolute -top-[10px] -left-[1px] h-2 w-[1px] bg-black dark:bg-white group-hover:-top-[2px] group-active:-top-[2px] transition-all duration-200 ease-in-out"></span>
        {/* Top-right corner */}
        <span className="absolute -top-[2.5px] -right-2 w-2 h-[1.5px] bg-black dark:bg-white group-hover:-right-[1px] group-active:-right-[1px] transition-all duration-200 ease-in-out"></span>
        <span className="absolute -top-[10px] -right-[1px] h-2 w-[1px] bg-black dark:bg-white group-hover:-top-[2px] group-active:-top-[2px] transition-all duration-200 ease-in-out"></span>
        {/* Bottom-left corner */}
        <span className="absolute -bottom-[2px] -left-2 w-2 h-[1px] bg-black dark:bg-white group-hover:-left-[1px] group-active:-left-[1px] transition-all duration-200 ease-in-out"></span>
        <span className="absolute -bottom-[10px] -left-[1px] h-2 w-[1px] bg-black dark:bg-white group-hover:-bottom-[2px] group-active:-bottom-[2px] transition-all duration-200 ease-in-out"></span>
        {/* Bottom-right corner */}
        <span className="absolute -bottom-[2px] -right-2 w-2 h-[1px] bg-black dark:bg-white group-hover:-right-[1px] group-active:-right-[1px] transition-all duration-200 ease-in-out"></span>
        <span className="absolute -bottom-[10px] -right-[1px] h-2 w-[1px] bg-black dark:bg-white group-hover:-bottom-[2px] group-active:-bottom-[2px] transition-all duration-200 ease-in-out"></span>
      </button>
    </div>
  );
}
