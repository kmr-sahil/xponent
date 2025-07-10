
import CodeRabbitButton from "@/components/buttons/coderabbit";
import ContentSquareButton from "@/components/buttons/contentsqaure";
import HulyButton from "@/components/buttons/huly";
import MuralButton from "@/components/buttons/mural";
import PineconeButton from "@/components/buttons/pinecone";
import RenderButton from "@/components/buttons/render";
import SpiraldbButton from "@/components/buttons/spiraldb";
import StripeButton from "@/components/buttons/stripe";
import SupabaseButton from "@/components/buttons/supabase";
import ZuddlButton from "@/components/buttons/zuddl";
import React from "react";
import { Info } from "lucide-react";

const buttons = [
  {
    button: <HulyButton />,
    title: "Huly",
    note: "This is a test button",
    link: "https://huly.io",
  },
  {
    button: <ZuddlButton />,
    title: "Zuddl",
    note: null, // won't show note
    link: "https://zuddl.com",
  },
  {
    button: <SupabaseButton />,
    title: "Supabase",
    note: null, // won't show note
    link: "https://supabase.com",
  },
  {
    button: <StripeButton />,
    title: "Stripe",
    note: null, // won't show note
    link: "https://stripe.com",
  },
  {
    button: <SpiraldbButton />,
    title: "SpiralDB",
    note: null, // won't show note
    link: "https://spiraldb.com",
  },
  {
    button: <CodeRabbitButton />,
    title: "Code Rabbit",
    note: null, // won't show note
    link: "https://coderabbit.com",
  },
  {
    button: <RenderButton />,
    title: "Render",
    note: null, // won't show note
    link: "https://render.com",
  },
  {
    button: <PineconeButton />,
    title: "Pinecone",
    note: null, // won't show note
    link: "https://pinecone.io",
  },
  {
    button: <MuralButton />,
    title: "Mural",
    note: null, // won't show note
    link: "https://mural.co",
  },
  {
    button: <ContentSquareButton />,
    title: "Content Square",
    note: null, // won't show note
    link: "https://contentsquare.com",
  },
];

export default function Page() {
  return (
    <div className="font-sans max-w-[80rem] w-full mx-auto px-4 py-10 text-base">
      {/* Small Heading */}
      <h2 className=" mt-[4rem] text-center font-semibold  mb-[0.5rem] text-highlight">
        Button Components
      </h2>
      <p className="mb-[4rem] text-center">
        Made using Tailwind CSS & Motion. Click over the button to get the code
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {buttons.map((btn, index) => (
          <div
            key={index}
            className="block rounded-2xl bg-[color:var(--muted-foreground)] text-[color:var(--muted)] p-4 md:p-6 transition"
          >
            {btn.button}

            <div className="flex items-center justify-center gap-2">
              <a
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-center text-[color:var(--text-muted)] hover:[color:var(--text-primary)] hover:underline transition-colors duration-200"
              >
                {btn.title}
              </a>
              {btn.note && (
                <span className="relative flex items-center gap-1 group">
                  <Info size={14} strokeWidth={2}/>
                  <p className="absolute w-32 p-1 rounded-lg dark:bg-zinc-700 bg-zinc-200/80 top-full mt-1 left-1/2 -translate-x-1/2 text-xs text-center text-[color:var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {btn.note}
                  </p>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
