import React from "react";

export default function SupabaseButton() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        rel="stylesheet"
      />
      <div className="flex items-center justify-center p-4 ">
        <button
          className="bg-[#006239] px-5 py-2 rounded-[6px] text-[#FAFAFA] border-[1.5px] border-[#00854e] text-[14px] cursor-pointer hover:bg-[#007a47] active:bg-[#007a47] hover:border-[#00c271] active:border-[#00c271] font-[500] transition-colors ease-in"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Start your project
        </button>
      </div>
    </>
  );
}
