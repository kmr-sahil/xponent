import React from "react";
import { IconChevronRight } from "@tabler/icons-react";

export default function MuralButton() {
  return (
    <div className="flex items-center justify-center p-4 text-black">
      <button className="bg-[#FFED87] rounded-md flex items-center group relative z-0 cursor-pointer">
        <div className=" px-4 py-3 rounded-md bg-red-00">
          <span className="bg-[#FFAA00] w-[3.25rem] group-hover:w-full group-active:w-full transition-all ease-in-out duration-200 h-full top-0 left-0 rounded-md -z-10 absolute"></span>
          <IconChevronRight stroke={2} width="22" className="" />
        </div>

        <span className="px-5 text-[1.1rem]">Try it now</span>
      </button>
    </div>
  );
}
