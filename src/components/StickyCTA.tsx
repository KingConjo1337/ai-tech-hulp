"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ArrowRight, X } from "lucide-react";

const TaskModal = dynamic(() => import("./TaskModal"), { ssr: false });

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (roughly 600px)
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg px-4 py-3 safe-area-bottom">
              <div className="flex items-center gap-3">
                <a
                  href="#prijzen"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-violet-600 to-violet-700 text-white font-semibold rounded-xl shadow-lg"
                >
                  Bekijk pakketten
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-xl"
                >
                  <Menu className="w-5 h-5" />
                  Menu
                </button>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
