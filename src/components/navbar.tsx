"use client";
import React, { useEffect, useState } from "react";
import { Menu, Moon } from "lucide-react";

export default function Navbar() {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    // Extract text from URL path
    const extractTitleFromURL = () => {
      const path = window.location.pathname;
      const match = path.match(/\/browse\/cards\/(.*)/);
      if (match && match[1]) {
        // Capitalize the extracted text
        return match[1].charAt(0) + match[1].slice(1);
      }
      return "cvards"; // Default text if nothing after /browse/cards
    };

    setPageTitle(extractTitleFromURL());

    // Update title when URL changes
    const handleURLChange = () => {
      setPageTitle(extractTitleFromURL());
    };

    window.addEventListener("popstate", handleURLChange);

    return () => {
      window.removeEventListener("popstate", handleURLChange);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 backdrop-blur-sm bg-white/20   ">
      <div className="max-w-[48rem] mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Menu className="h-5 w-5 text-zinc-300" />
            <span className="font-medium text-zinc-400">{pageTitle}</span>
          </div>
          <Moon className="h-5 w-5 text-zinc-300" />
        </div>
      </div>
    </div>
  );
}
