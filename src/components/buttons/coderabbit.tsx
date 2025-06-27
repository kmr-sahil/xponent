import React from "react";

export default function CodeRabbitButton() {
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
          className="flex items-center gap-3 px-8 py-4 bg-[#FF570A] text-[18px] rounded-full relative group cursor-pointer overflow-hidden"
        >
          <span className="w-48 h-32 rounded-full blur-2xl bg-pink-200 absolute z-0 -right-[12rem] -top-[6rem] -rotate-30 group-hover:-top-[2rem] group-hover:-right-[5rem] group-active:-top-[2rem] group-active:-right-[5rem] transition-all duration-300 ease-in-out"></span>
          <span className="text-white font-bold z-10 ">Get a free trial</span>
          <span className="z-10 transition-all duration-300 ease-in-out">
            <Icon />
          </span>
        </button>
      </div>
    </>
  );
}

const Icon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mt-0.5 text-neutral-900 group-hover:text-white group-active:text-white transition-all duration-300 ease-in-out"
    >
      <path
        d="M20.2896 11.7569C16.0056 11.7569 12.5327 8.28404 12.5327 4"
        stroke="currentColor"
        strokeWidth="1.55139"
      />
      <path
        d="M20.2896 11.757C16.0056 11.757 12.5327 15.2299 12.5327 19.5139"
        stroke="currentColor"
        strokeWidth="1.55139"
      />
      <path
        d="M17.9625 11.7568L4 11.7568"
        stroke="currentColor"
        strokeWidth="1.55139"
      />
    </svg>
  );
};
