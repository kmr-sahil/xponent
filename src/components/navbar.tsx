"use client";
import React, { useState, useRef, useEffect } from "react";
import { Menu, Moon, X } from "lucide-react";
import { motion } from "motion/react";

const menuItems = Array.from({ length: 10 }, (_, i) => `Menu Item ${i + 1}`);

export default function NavbarWithSimpleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const appearAnimation = {
    initial: {
      opacity: 0,
      x: -20,
      y: 20,
      scale: 0.85,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.08 * index,
      },
    }),
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="sticky top-0 z-10 backdrop-blur-sm bg-white/20">
        <div className="max-w-[48rem] mx-auto p-4 relative">
          <div className="flex items-center justify-between">
            {/* Hamburger Icon */}
            <div className="flex items-center space-x-3">
              <Menu
                className="h-5 w-5 text-zinc-300 cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              />
              <span className="font-medium text-zinc-400">Crafts</span>
            </div>

            {/* Dark Mode Icon */}
            <Moon className="h-5 w-5 text-zinc-300" />
          </div>

          {/* Floating Menu */}
          {isOpen && (
            <motion.div
              variants={appearAnimation}
              initial={{ opacity: 0, x: -20, y: -40, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              ref={menuRef}
              className="absolute top-14 left-2 z-50 w-60 backdrop-blur-[8rem] bg-white shadow-xl rounded-lg p-4 text-zinc-600"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center border-b-[1px] border-zinc-100 pb-2 mb-1">
                <span className="text-sm font-medium text-zinc-700">
                  Browse
                </span>
                <X
                  className="h-4 w-4 text-zinc-400 cursor-pointer hover:text-zinc-500"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              {/* Scrollable Menu Items */}
              <ul className="space-y-[1px]">
                {menuItems.map((item, index) => (
                  <motion.li
                    variants={appearAnimation}
                    initial="initial"
                    whileInView="animate"
                    key={index}
                    custom={index}
                    className="p-2 rounded-md hover:bg-zinc-100 cursor-pointer text-xs"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
