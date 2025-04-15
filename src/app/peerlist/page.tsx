import React from "react";
import MenuComponent from "@/components/peerlist/menu";
import Image from "next/image"; // Assuming you're using next/image
import Link from "next/link";
import TransactionStatus from "@/components/peerlist/status";
import Checkbox from "@/components/peerlist/checkbox";
import Toggle from "@/components/peerlist/toggle";

function Page() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-4 relative">
      {/* Fixed Centered Buttons */}
      <div className="fixed bottom-10 flex items-center justify-center z-50 text-sm bg-white p-2 border border-gray-200 rounded-full">
        <div className="flex gap-6">
          {/* Button to go to "/" */}
          <Link
            href="/"
            className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 text-white flex items-center justify-center text-xl shadow-md hover:scale-105 transition-all"
          ></Link>

          {/* Button to Peerlist profile */}
          <Link
            href="https://peerlist.io/sahilkmr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 p-1 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-md transition-all"
          >
            <Image
              src="/peerlist.svg" // Make sure this image is in your public folder
              alt="Peerlist"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>

      {/* Page Content */}
      <div
        id="menu"
        className="w-full min-h-[22rem] rounded-2xl border-2 border-gray-100 relative"
      >
        <MenuComponent />
        <span className="absolute bottom-4 inset-x-0 text-sm text-zinc-500 max-w-[20rem] mx-auto text-center">
          better view in larger screen
        </span>
      </div>
      <div
        id="status"
        className="w-full min-h-[22rem] rounded-2xl border-2 border-gray-100 relative flex items-center justify-center"
      >
        <TransactionStatus />
        {/* <span className="absolute bottom-4 inset-x-0 text-sm text-zinc-500 text-center">
          Day 2 upcoming...
        </span> */}
      </div>
      <div
        id="checkbox"
        className="w-full min-h-[22rem]  rounded-2xl border-2 border-gray-100 relative flex items-center justify-center"
      >
        <Checkbox />
      </div>
      <div
        id="toggle"
        className="w-full min-h-[22rem]  rounded-2xl border-2 border-gray-100 relative flex items-center justify-center"
      >
        <Toggle />
      </div>
    </div>
  );
}

export default Page;
