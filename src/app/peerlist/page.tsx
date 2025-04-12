import MenuComponent from "@/components/peerlist/menu";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen p-4">
      <div className=" w-full h-[22rem] rounded-2xl border-2 border-gray-100 relative">
        <MenuComponent />{" "}
        <span className="absolute bottom-4 translate-y-1/2 text-sm text-zinc-500">
          better view in larger screen
        </span>
      </div>
      <div className="w-full h-[22rem] rounded-2xl border-2 border-gray-100 relative">
      <span className="absolute bottom-4 translate-y-1/2 text-sm text-zinc-500">Day 2 upcoming...</span>
      </div>
    </div>
  );
}

export default Page;
