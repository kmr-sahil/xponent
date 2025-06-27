"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertTriangle } from "lucide-react";
import Spinner from "./spinner";

const statuses = [
  {
    key: "analyzing-1",
    label: "Analyzing Transaction",
    bg: "#DBF4FF",
    textColor: "#0D99FF",
    icon: "spinner",
    duration: 1500,
    direction: "left",
  },
  {
    key: "safe",
    label: "Transaction Safe",
    bg: "#D1FADF",
    textColor: "#12B76A",
    icon: "check",
    duration: 2000,
    direction: "right",
  },
  {
    key: "analyzing-2",
    label: "Analyzing Transaction",
    bg: "#DBF4FF",
    textColor: "#0D99FF",
    icon: "spinner",
    duration: 1500,
    direction: "left",
  },
  {
    key: "warning",
    label: "Transaction Warning",
    bg: "#FEE4E2",
    textColor: "#F04438",
    icon: "alert",
    duration: 2000,
    direction: "right",
  },
];

export default function TransactionStatus() {
  const [index, setIndex] = useState(0);
  const current = statuses[index];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((i) => (i + 1) % statuses.length);
    }, current.duration);

    return () => clearTimeout(timeout);
  }, [index, current.duration]); // Fixed: Added current.duration to dependency array

  const renderIcon = (type: string) => {
    switch (type) {
      case "spinner":
        return <Spinner />;
      case "check":
        return (
          <div className="w-[19px] h-[19px] rounded-full bg-green-600 flex items-center justify-center mt-0.5">
            <Check className="w-[11px] h-[11px] text-white" strokeWidth={4} />
          </div>
        );
      case "alert":
        return (
          <motion.div
            className="w-5 h-5 flex items-center justify-center"
            animate={{ x: [0, -1, 1, -1, 1, 0], rotate: [0, 5, -5, 5, -5, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="inline-flex items-center px-4 py-3 rounded-full transition-colors duration-100 overflow-x-hidden"
      style={{
        backgroundColor: current.bg,
        border: `1px solid ${current.textColor}`,
        opacity: 1,
        borderColor: current.textColor + '10'
      }}
      layout={true}
    >
      {/* Animate only the icon */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.icon}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.1 }}
          className="w-6 h-6 mr-1 flex items-center justify-center"
        >
          {renderIcon(current.icon)}
        </motion.div>
      </AnimatePresence>

      {/* Persistent Text */}
      <motion.span
        key={current.label}
        layout="position"
        initial={{ opacity: 0, x: current.direction === "left" ? -5 : 5 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: current.direction === "left" ? -5 : 5 }}
        transition={{ duration: 0.2 }}
        style={{
          color: current.textColor,
        }}
        className="whitespace-nowrap font-medium transition-colors duration-300"
      >
        {current.label}
      </motion.span>
    </motion.div>
  );
}