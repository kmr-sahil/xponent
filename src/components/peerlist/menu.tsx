"use client";
import { Menu, X, Home, Mail, User, Settings } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function GooeyFilter({ id = "gooey-filter", strength = 8 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", width: 0, height: 0 }}
    >
      <defs>
        <filter id={id} filterUnits="userSpaceOnUse">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={strength}
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="gooey"
          />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}

export default function MenuComponent() {
  const [open, setOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const items = [Home, Mail, User, Settings];
  const commonBgStyle = {
    backgroundColor: "#f4f4f5",
    willChange: "transform, filter, opacity", // Hint browser for performance
  };

  const handleToggle = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setOpen(!open);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150); // Slightly reduced for snappier feel on mobile
    }, 150);
  };

  const getSpringConfig = (index: number, isOpening: boolean) => {
    const position = isOpening ? items.length - 1 - index : index;
    const baseStiffness = 80; // Slightly reduced for smoother transitions
    const baseDamping = 14;
    const stiffness = baseStiffness + position * 40;
    const damping = Math.max(6, baseDamping - position * 0.4);
    return { stiffness, damping };
  };

  return (
    <div className="flex flex-col items-center pt-4">
      <GooeyFilter id="menu-gooey-filter" strength={8} />

      <div
        className="relative flex flex-col items-center"
        style={{
          filter: "url(#menu-gooey-filter)",
          WebkitFilter: "url(#menu-gooey-filter)",
          willChange: "filter, transform",
          transform: "translateZ(0)", // Force GPU accel
        }}
      >
        <motion.button
          onClick={handleToggle}
          style={{
            ...commonBgStyle,
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          className="bg-zinc-100 p-4 rounded-full cursor-pointer text-gray-700 relative z-50 overflow-hidden"
          animate={{
            filter: isTransitioning ? "blur(6px)" : "blur(0px)",
            scale: isTransitioning ? 0.95 : 1,
          }}
          transition={{ duration: 0.18 }}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>

        <div className="flex flex-col items-center">
          <AnimatePresence>
            {open &&
              items.map((Icon, idx) => {
                const { stiffness, damping } = getSpringConfig(idx, true);
                const exitConfig = getSpringConfig(idx, false);

                return (
                  <motion.div
                    key={idx}
                    initial={{
                      opacity: 0,
                      y: -20,
                      scale: 0.75,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness,
                        damping,
                        delay: 0.03 * idx,
                        duration: 0.18 + idx * 0.04,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                      scale: 0.85,
                      transition: {
                        type: "spring",
                        stiffness: exitConfig.stiffness,
                        damping: exitConfig.damping,
                        delay: 0.02 * (items.length - 1 - idx),
                        duration: 0.18 + (items.length - 1 - idx) * 0.03,
                      },
                    }}
                    style={{
                      zIndex: 10 - idx,
                      ...commonBgStyle,
                      touchAction: "manipulation", // For mobile smoothness
                    }}
                    className="bg-zinc-100 p-4 rounded-full cursor-pointer relative"
                  >
                    <Icon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="flex flex-col items-center pt-4 pointer-events-auto">
          <div
            className="w-10 h-10 opacity-0 cursor-pointer"
            onClick={handleToggle}
          />
        </div>
      </div>
    </div>
  );
}
