"use client";

import { useState } from "react";
import { List, LayoutGrid, Package } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const collectibles = [
  {
    id: "209",
    title: "Skilled Fingers Series",
    price: 0.855,
    image: "/img0.jpg",
  },
  {
    id: "808",
    title: "Vibrant Vibes Series",
    price: 0.209,
    image: "/img1.jpg",
  },
];

export default function Tab() {
  const [view, setView] = useState<"list" | "card" | "pack">("card");

  const tabClass = (active: boolean) =>
    `flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition ${
      active ? "bg-blue-400 text-white" : "bg-gray-100 text-gray-700"
    }`;

  return (
    <main className="min-h-screen bg-white text-black p-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Collectibles</h2>

        {/* View Switcher */}
        <div className="flex space-x-2 mb-6">
          <button
            className={tabClass(view === "list")}
            onClick={() => setView("list")}
          >
            <List size={16} /> List view
          </button>
          <button
            className={tabClass(view === "card")}
            onClick={() => setView("card")}
          >
            <LayoutGrid size={16} /> Card view
          </button>
          <button
            className={tabClass(view === "pack")}
            onClick={() => setView("pack")}
          >
            <Package size={16} /> Pack view
          </button>
        </div>

        {/* Conditional Rendering */}
        {view === "card" && (
          <div className="grid grid-cols-2 gap-4 ">
            {collectibles.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-3 text-center"
              >
                <motion.img
                  layoutId={`img-${item.id}`}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-28 object-cover rounded mb-2 aspect-square"
                />
                <motion.div layoutId={`title-${item.id}`} className="text-sm font-medium">{item.title}</motion.div>
                <div className="flex w-full justify-between items-center">
                  <motion.div layoutId={`price-${item.id}`} className="text-xs text-gray-500">{item.price} ETH</motion.div>
                  <motion.div layoutId={`id-${item.id}`} className="text-xs text-gray-400 font-semibold">
                    #{item.id}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === "list" && (
          <div className="space-y-3">
            {collectibles.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2 rounded-xl bg-white"
              >
                <div className="flex items-center space-x-3">
                  <motion.img
                    layoutId={`img-${item.id}`}
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg aspect-square"
                  />
                  <div>
                  <motion.div layoutId={`title-${item.id}`} className="text-sm font-medium">{item.title}</motion.div>
                  <motion.div layoutId={`price-${item.id}`} className="text-xs text-gray-500">
                      {item.price} ETH
                    </motion.div>
                  </div>
                </div>
                <motion.div layoutId={`id-${item.id}`} className="text-xs text-gray-400 font-semibold">
                  #{item.id}
                </motion.div>
              </div>
            ))}
          </div>
        )}

        {view === "pack" && (
          <div className="flex flex-col items-center p-6 rounded-xl bg-white text-center">
            <div className="relative w-28 h-28 mb-4">
              <motion.img
                layoutId={`img-${209}`}
                src="/img0.jpg"
                alt="Pack back"
                className="absolute w-full h-full aspect-square object-cover rounded-xl transform rotate-[-8deg] -translate-x-1 translate-y-1 shadow"
              />
              <motion.img
                layoutId={`img-${808}`}
                src="/img1.jpg"
                alt="Pack front"
                className="absolute w-full h-full aspect-square object-cover rounded-xl transform rotate-[4deg] translate-x-1 -translate-y-1 shadow"
              />
            </div>
            <div className="text-sm font-medium">2 Collectibles</div>
            <div className="text-xs text-gray-500">1.064 ETH</div>
          </div>
        )}
      </div>
    </main>
  );
}
