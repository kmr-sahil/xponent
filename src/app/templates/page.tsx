import React from "react";

const templates = [
  {
    imgLink: "/template/waitlist.png",
    title: "Highly Converted Waitlist Template",
    desc: "A collection of waitlist templates designed to maximize conversions and featuring modern designs.",
    view: "https://waitlist-templates.vercel.app/",
    link: "https://waitlist-templates.vercel.app/",
  },
  {
    imgLink: "/template/portfolio.png",
    title: "Portfolio Template",
    desc: "A modern and sleek portfolio template with a grid layout, project showcases, and a contact form.",
    view: "https://demo-portfolio-tab.vercel.app/",
    link: "https://demo-portfolio-tab.vercel.app/",
  },
];

export default function Page() {
  return (
    <div className="font-sans max-w-[80rem] w-full mx-auto px-4 py-10 text-base">
      {/* Small Heading */}
      <h2 className=" mt-[4rem] text-center font-semibold mb-[0.5rem] text-highlight">
        Templates
      </h2>
      <p className="mb-[4rem] text-center">
        Made using Next.js, Tailwind CSS & Motion. Click over the button to get
        the code
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {templates.map((btn, index) => (
          <div
            key={index}
            className="block rounded-2xl bg-[color:var(--muted-foreground)] text-[color:var(--muted)] p-4 md:p-6 transition"
          >
            {btn.imgLink && (
              <img
                src={btn.imgLink}
                alt={btn.title}
                className="w-full h-auto rounded-lg mb-4"
              />
            )}

            <div className="flex flex-col items-start justify-start gap-2">
              <h3 className="text-highlight text-start">{btn.title}</h3>
              <p className="text-start">{btn.desc}</p>

              <div className="ml-auto flex gap-2">
                <button className="bg-[color:var(--muted)]/10 px-3 py-2 rounded-lg text-[color:var(--text-primary)] text-[14px] font-medium cursor-pointer">
                  View
                </button>
                <button className="bg-[color:var(--text-primary)] px-3 py-2 rounded-lg text-[color:var(--background)] text-[14px] font-medium cursor-pointer">
                  Get Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
