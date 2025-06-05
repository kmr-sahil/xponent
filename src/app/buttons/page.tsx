"use client";
import HulyButton from "@/components/buttons/huly";
import React from "react";

const buttons = [
  {
    button: <HulyButton />,
    title: "Huly Button",
    note: "This is a test button",
    link: "https://example.com",
  },
  {
    button: <HulyButton />,
    title: "Secondary Button",
    note: null, // won't show note
    link: "https://example.com/secondary",
  },
];

export default function Page() {
  return (
    <div className="max-w-[80rem] w-full mx-auto px-4 py-10">
      {/* Small Heading */}
      <h2 className="text-lg mt-[6rem] text-center font-semibold text-[color:var(--text-primary)] mb-[1rem]">
        Button Components
      </h2>
      <p className="text-[color:var(--muted)] mb-[4rem] text-center">
        Made using Tailwind CSS & Motion, Click over the button to get the code
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {buttons.map((btn, index) => (
          <a
            key={index}
            href={btn.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-[color:var(--muted-foreground)] bg-[color:var(--muted-foreground)] text-[color:var(--muted)] p-6 transition hover:shadow-md"
          >
            {btn.button}

            <h3 className="text-[15px] text-center text-[color:var(--text-muted)] mb-2">
              {btn.title}
            </h3>
            {btn.note && (
              <p className="text-xs text-center text-[color:var(--muted)] mt-2">
                {btn.note}
              </p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
