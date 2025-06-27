import React from "react";

export default function ContentSquareButton() {
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

      <div className="flex items-center justify-center p-4 ">
        <button
          style={{ fontFamily: "Inter, sans-serif" }}
          className="relative bg-[#CD3246] px-5 py-3 rounded-full text-white overflow-hidden group hover:bg-[#a42839] active:bg-[#a42839] transition-colors ease-in-out duration-150 cursor-pointer"
        >
          {/* Original Text - slides up */}
          <span className="block transition-all ease-in-out duration-150 group-hover:-translate-y-10 group-active:-translate-y-10">
            Watch a quick tour
          </span>

          {/* New Text - appears from below */}
          <span className="absolute top-1/2 left-1/2 translate-y-8 -translate-x-1/2  transition-all ease-in-out duration-150 group-hover:translate-y-[-50%] group-active:translate-y-[-50%] whitespace-nowrap">
            Watch a quick tour
          </span>
        </button>
      </div>
    </>
  );
}
