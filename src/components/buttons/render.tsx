"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RenderButton() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex items-center justify-center p-4 ">
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative cursor-pointer overflow-hidden px-6 py-4 bg-white max-[564px]:hover:bg-[#8A05FF] max-[564px]:active:bg-[#8A05FF] text-black dark:text-white flex items-center gap-3 group"
      >
        {/* Purple background animated with motion */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              key="purple"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#8A05FF] z-0"
            />
          )}
        </AnimatePresence>

        {/* Content above the animated background */}
        <span className="relative z-10 transition-all duration-200 ease-in-out text-[20px] text-black  group-hover:text-white group-hover:translate-x-[2px] group-active:text-white group-active:translate-x-[2px]">
          Deploy your app for free
        </span>
        <span className="relative z-10 transition-all duration-200 ease-in-out text-black group-hover:text-white group-hover:-translate-x-[2px] group-active:text-white group-active:-translate-x-[2px] scale-[0.85] translate-y-[1px]">
          <Icon />
        </span>
      </motion.button>
    </div>
  );
}

const Icon = () => (
  <svg
    className="w-4 h-4"
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="20"
    viewBox="0 0 12 20"
    fill="none"
  >
    <rect x="8" y="8" width="4" height="4" fill="currentColor" />
    <rect x="4" y="4" width="4" height="4" fill="currentColor" />
    <rect width="4" height="4" fill="currentColor" />
    <rect x="4" y="12" width="4" height="4" fill="currentColor" />
    <rect y="16" width="4" height="4" fill="currentColor" />
  </svg>
);
