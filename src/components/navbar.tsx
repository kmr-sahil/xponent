"use client";

import { Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ThemeToggle } from "./toggle";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Craft", href: "/craft" },
    { name: "Products", href: "/products" },
    { name: "Words", href: "/words" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed bottom-3 left-0 right-0 flex justify-center pointer-events-none">
      {/* Blur Background */}
      {/* <div className="absolute bottom-0 inset-0 flex justify-center">
        <div className="w-[40rem] h-[5rem] rounded-full blur-2xl backdrop-blur-3xl bg-white/20 border border-[color:var(--muted-foreground)]" />
      </div> */}

      {/* Actual Nav Content */}
      <div className="relative z-10 w-full max-w-[30rem] px-6 py-3 rounded-full flex items-center  justify-between text-sm font-medium text-[color:var(--muted)] bg-[color:var(--background)] border border-[color:var(--muted-foreground)] pointer-events-auto">
        {/* Left - Logo Dot */}
        <div className="w-3 h-3 bg-blue-400 rounded-full" />

        {/* Center - Nav Links */}
        <div className="flex items-center gap-4">
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  pathname === link.href
                    ? "text-[color:var(--text-primary)]"
                    : "text-[color:var(--muted)]",
                  "transition-colors hover:text-[color:var(--text-primary)]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="w-px h-4 bg-[color:var(--muted-foreground)]" />
          <button>
            <ThemeToggle />
          </button>
        </div>
      </div>
    </nav>
  );
}
