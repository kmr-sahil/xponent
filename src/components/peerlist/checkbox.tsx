"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const boxPathVariants = {
  visible: {
    opacity: 0,
    pathLength: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  hidden: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const lineVariants = {
  checked: {
    pathLength: 1,
    transition: { delay: 0.7, duration: 0.3, ease: "easeInOut" },
  },
  unchecked: {
    pathLength: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

type TodoItemProps = {
  id: number;
  label: string;
  focusedId: number | null;
  setFocusedId: (id: number) => void;
};

const TodoItem = ({ id, label, focusedId, setFocusedId }: TodoItemProps) => {
  const [checked, setChecked] = useState(false);
  const isFocused = focusedId === id;

  // For forcing jitter animation on each toggle
  const [jitterKey, setJitterKey] = useState(0);

  const handleClick = () => {
    setChecked((prev) => !prev);
    setJitterKey((prev) => prev + 1); // new key triggers animation
    setFocusedId(id);
  };

  return (
    <div
      className={`relative flex items-center space-x-3 px-2 py-1 rounded-md transition-all duration-200 cursor-pointer ${
        isFocused ? "bg-gray-100" : ""
      }`}
      onClick={handleClick}
    >
      {/* SVG Checkbox */}
      <div className="relative w-5 h-5 mt-0.5">
        <motion.svg
          width="7"
          height="7"
          viewBox="0 0 7 7"
          className="absolute top-0 left-0 w-5 h-5 stroke-gray-300 mt-[0.5px]"
          fill="none"
        >
          <motion.path
            d="M6 3.5V4.75M6 4.75V5C6 5.55228 5.55228 6 5 6H2C1.44772 6 1 5.55228 1 5V2C1 1.44772 1.44772 1 2 1H5C5.55228 1 6 1.44772 6 2V4.75Z"
            fill="none"
            strokeWidth="1"
            strokeLinejoin="round"
            strokeLinecap="round"
            variants={boxPathVariants}
            initial={false}
            animate={checked ? "visible" : "hidden"}
          />
        </motion.svg>

        {/* Blue Check Background */}
        <AnimatePresence mode="wait">
          {checked && (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.85,
                transition: { duration: 0.15 },
              }}
              transition={{
                delay: 0.5,
                duration: 0.25,
                ease: "easeInOut",
              }}
              className="w-5 h-5 bg-blue-500 text-white rounded-[5px] flex items-center justify-center absolute top-0 left-0"
            >
              <Check className="w-3 h-3" strokeWidth={5} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Label and Line */}
      <div className="relative">
        <motion.p
          key={jitterKey} // Forces animation on every toggle
          className="text-gray-700 select-none font-medium"
          animate={{
            color: checked ? "#9CA3AF" : "#2e3032",
            x: checked ? [0, -1.5, 2, -1, 1, 0] : 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.25,
            ease: "easeInOut",
          }}
        >
          {label}
        </motion.p>

        {/* Strike-through line */}
        <motion.svg
          className="absolute left-0 top-1/2 w-full h-[1px]"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="0"
            y1="0.5"
            x2="100"
            y2="0.5"
            stroke="#9CA3AF"
            strokeWidth="1"
            initial={false}
            animate={checked ? "checked" : "unchecked"}
            variants={lineVariants}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default function Checkbox() {
  const [focusedId, setFocusedId] = useState<number | null>(null);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="space-y-3 p-4 shadow rounded-md">
        <TodoItem id={1} label="Buy groceries" focusedId={focusedId} setFocusedId={setFocusedId} />
        <TodoItem id={2} label="Contemplate existence" focusedId={focusedId} setFocusedId={setFocusedId} />
        <TodoItem id={3} label="Learn SwiftUI" focusedId={focusedId} setFocusedId={setFocusedId} />
      </div>
    </main>
  );
}