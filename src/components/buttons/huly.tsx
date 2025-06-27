"use client";
import React, { useState } from "react";
import { motion } from "motion/react"; // use 'framer-motion', not 'motion/react'

export default function HulyButton() {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="flex items-center justify-center p-4 ">
      <div className="relative cursor-pointer">
        {/* Outer span */}
        <motion.span
          className="w-32 h-14 -top-1 -right-1 blur-[4px] absolute bg-gradient-to-r from-orange-600/30 to-orange-600 rounded-full contrast-200"
          animate={
            hovered
              ? {
                  left: coords.x < 150 ? coords.x - 10 : coords.x - 115,
                  opacity: coords.x < 50 || coords.x > 200 ? 1 : 0.1,
                }
              : {}
          }
          transition={{
            left: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { type: "tween", duration: 0.8, ease: "easeInOut" },
          }}
        />

        <div className="z-10 relative bg-white/0 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-full p-[3px] overflow-hidden ">
          {/* Middle span */}
          <motion.span
            className="w-25 h-15 -top-1 -right-2 -z-10 blur-[10px] absolute bg-linear-to-r from-orange-600/20 to-orange-600 rounded-full contrast-100"
            animate={hovered ? { left: coords.x - 56, top: coords.y - 24 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          <div
            className="bg-white/80 px-[5rem] py-[0.5rem] rounded-[2rem] font-semibold text-zinc-900/70 text-[1.2rem] overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
          >
            TRY IT FREE
            {/* Inner span */}
            <motion.span
              className="w-20 h-12 -top-1 -right-2 -z-10 blur-[10px] absolute bg-linear-to-r from-orange-100/20 to-orange-100 rounded-full contrast-200"
              animate={
                hovered ? { left: coords.x - 48, top: coords.y - 20 } : {}
              }
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
