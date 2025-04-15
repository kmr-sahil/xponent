"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Toggle() {
  const [selectedTab, setSelectedTab] = useState("free");
  const [selectedPremiumOption, setSelectedPremiumOption] = useState("monthly");

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <div className="relative shadow-sm border-1 border-gray-200 rounded-full h-14 flex items-center px-2 py-3 w-[18rem] sm:w-[25rem]">
        {/* Free Option */}
        <motion.button
          className={`relative z-10 rounded-full h-10 flex items-center justify-center w-1/2 text-sm font-medium transition-colors ${
            selectedTab === "free" ? "text-white" : "text-gray-950"
          }`}
          onClick={() => setSelectedTab("free")}
          whileTap={{ scale: 0.97 }}
        >
          Free
        </motion.button>

        {/* Premium Option Container */}
        <div className="relative w-1/2 h-10">
          {/* Premium Label or Premium Options based on state */}
          {selectedTab === "free" ? (
            <motion.button
              className="w-full h-full rounded-full flex items-center justify-center text-sm font-medium text-gray-800"
              onClick={() => setSelectedTab("premium")}
              whileTap={{ scale: 0.97 }}
            >
              {/* {selectedPremiumOption === "monthly" ? "Monthly" : "Annual"} */}
              <div className="flex flex-col items-center justify-center">
                <h2>Premium</h2>
                <div className="flex items-center justify-center gap-0.5 text-[10px] font-normal">
                  <motion.p layoutId="monthly">Montly</motion.p>
                  <span className="relative z-10 text-gray-400 text-xs">•</span>
                  <motion.p layoutId="annual">Annual</motion.p>
                </div>
              </div>
            </motion.button>
          ) : (
            <div className="w-full h-full rounded-full flex gap-2 sm:gap-8 items-center justify-center relative">
              <motion.button
                layoutId="monthly"
                className={`relative z-20 h-full px-2 text-xs font-medium transition-colors ${
                  selectedPremiumOption === "monthly"
                    ? "text-black"
                    : "text-white"
                }`}
                onClick={() => setSelectedPremiumOption("monthly")}
                whileTap={{ scale: 0.97 }}
              >
                Monthly
              </motion.button>
              <motion.button
                layoutId="annual"
                className={`relative z-20 h-full px-2 text-xs font-medium transition-colors ${
                  selectedPremiumOption === "annual"
                    ? "text-black"
                    : "text-white"
                }`}
                onClick={() => setSelectedPremiumOption("annual")}
                whileTap={{ scale: 0.97 }}
              >
                Annual
              </motion.button>

              {/* Inner Background Pills */}
              <AnimatePresence>
                {selectedPremiumOption === "monthly" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, y: -4, x: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 0, y: -4, x: 6 }}
                    className="absolute left-0 top-0 bg-white rounded-full w-1/2 h-10 z-10"
                    layoutId="innertabPill"
                    transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
                  />
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, y: -4, x: -3 }}
                    animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 0, y: -4, x: -3 }}
                    className="absolute right-0 top-0 bg-white rounded-full w-1/2 h-10 z-10"
                    layoutId="innertabPill"
                    transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
                  />
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Background Pills */}
        {selectedTab === "free" ? (
          <motion.div
            className="absolute left-1 top-[3px] bg-black rounded-full w-1/2 h-12"
            layoutId="tabPill"
            transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
          />
        ) : (
          <motion.div
            className="absolute right-1 top-[3px] bg-black rounded-full w-1/2 h-12"
            layoutId="tabPill"
            transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
          />
        )}
      </div>
    </div>
  );
}
