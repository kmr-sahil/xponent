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
  },
  {
    key: "safe",
    label: "Transaction Safe",
    bg: "#D1FADF",
    textColor: "#12B76A",
    icon: "check",
    duration: 2000,
  },
  {
    key: "analyzing-2",
    label: "Analyzing Transaction",
    bg: "#DBF4FF",
    textColor: "#0D99FF",
    icon: "spinner",
    duration: 1500,
  },
  {
    key: "warning",
    label: "Transaction Warning",
    bg: "#FEE4E2",
    textColor: "#F04438",
    icon: "alert",
    duration: 2000,
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
  }, [index]);

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
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <motion.div
      className="inline-flex items-center px-4 py-3 rounded-full transition-colors duration-100"
      style={{
        backgroundColor: current.bg,
      }}
      layout="position"
    >
      {/* Animate only the icon */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.icon}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
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
        initial
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
