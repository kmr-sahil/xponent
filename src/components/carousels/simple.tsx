"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function Carousel() {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const deltaX = useRef(0);

  const updateIndex = (newIndex) => {
    currentIndexRef.current = newIndex;
    setCurrentIndex(newIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    if (dragging) return;
    const interval = setInterval(() => {
      updateIndex((currentIndexRef.current + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [dragging]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        updateIndex((currentIndexRef.current + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        updateIndex(
          currentIndexRef.current === 0
            ? images.length - 1
            : currentIndexRef.current - 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handlePointerDown = (e) => {
    setDragging(true);
    startX.current = e.clientX || e.touches[0].clientX;
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    const moveX = e.clientX || e.touches[0].clientX;
    deltaX.current = moveX - startX.current;
  };

  const handlePointerUp = () => {
    setDragging(false);
    if (Math.abs(deltaX.current) > 80) {
      if (deltaX.current > 0) {
        updateIndex(
          currentIndexRef.current === 0
            ? images.length - 1
            : currentIndexRef.current - 1
        );
      } else {
        updateIndex((currentIndexRef.current + 1) % images.length);
      }
    }
    deltaX.current = 0;
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center">
      <div
        className="relative w-full h-[400px] overflow-hidden rounded-xl touch-pan-x"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        tabIndex="0"
        role="region"
        aria-label="Image carousel"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative h-[400px]"
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`relative h-2 rounded-full bg-gray-300 transition-all duration-300 overflow-hidden ${
              index === currentIndex ? "w-6" : "w-2"
            }`}
            onClick={() => updateIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute left-0 top-0 h-full bg-zinc-700"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
