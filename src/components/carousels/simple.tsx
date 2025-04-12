"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to restart the timer when manually switching
  const restartTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  // Auto-play with proper timer reset
  useEffect(() => {
    restartTimer();
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [currentIndex]);

  // Handle manual navigation
  const handleNav = (index: number) => {
    setCurrentIndex(index);
    restartTimer();
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
      
      {/* Carousel Track */}
      <motion.div
        className="flex"
        initial={false}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 40 }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="w-full flex-shrink-0 relative h-[400px]"
            drag="x"
            whileDrag={{scale: 0.95}}
            dragElastic={0.2}   // Adds elasticity for smoothness
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) {
                setCurrentIndex((prev) => (prev + 1) % images.length);
              } else if (info.offset.x > 50) {
                setCurrentIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                );
              }
              restartTimer();
            }}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`relative h-2 rounded-full bg-gray-300 transition-all duration-300 overflow-hidden ${
              index === currentIndex ? "w-6" : "w-2"
            }`}
            onClick={() => handleNav(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute left-0 top-0 h-full bg-zinc-700"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
