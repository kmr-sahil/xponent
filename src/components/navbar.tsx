"use client";

import { Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Craft", href: "/craft" },
    { name: "Products", href: "/products" },
    { name: "Words", href: "/words" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed bottom-3 max-w-[40rem] w-full border-b border-[color:var(--muted-foreground)] px-6 py-3 flex items-center justify-between bg-[color:var(--background)] text-sm font-medium text-[color:var(--muted)]">
      {/* Left - Logo Dot */}
      <div className="w-3 h-3 bg-blue-400 rounded-full" />

      {/* Center - Nav Links */}
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

      {/* Right - Divider and Moon Icon */}
      <div className="flex items-center gap-4">
        <div className="w-px h-4 bg-[color:var(--muted-foreground)]" />
        <button>
          <Moon size={16} />
        </button>
      </div>
    </nav>
  );
}
