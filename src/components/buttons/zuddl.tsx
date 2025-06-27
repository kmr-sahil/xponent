import React from "react";
import { IconChevronRight } from "@tabler/icons-react";

export default function ZuddlButton() {
  return (
    <div className="flex items-center justify-center p-4 ">
      <div className="relative group cursor-pointer">
        {/* The button */}
        <button
          className="relative cursor-pointer z-10 text-white text-[14px] px-5 py-2 rounded-[8px] flex items-center gap-2.5 font-medium 
                     group-hover:translate-y-1 group-active:translate-y-1 transition-all duration-150 ease-in-out"
          style={{
            background:
              "radial-gradient(circle,rgba(132, 61, 245, 1) 0%, rgba(92, 22, 204, 1) 71%, rgba(80, 13, 189, 1) 100%)",
          }}
        >
          Book a Demo
          <IconChevronRight stroke={2.5} width="16" />
        </button>

        {/* The shadow/base under the button */}
        <span className="absolute inset-x-0 -bottom-1 h-4 rounded-b-[8px] bg-[#4811A0] z-0 transition-all duration-300"></span>
      </div>
    </div>
  );
}
