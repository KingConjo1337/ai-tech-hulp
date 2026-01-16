"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, ArrowRight, CheckCircle2 } from "lucide-react";
import { Particles } from "@/components/ui/highlighter";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("exitPopupShown");
    if (alreadyShown) {
      setHasTriggered(true);
    }

    let lastY = 0;
    let exitIntentEnabled = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && exitIntentEnabled && !hasTriggered) {
        triggerPopup();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!exitIntentEnabled || hasTriggered) return;
      const currentY = e.clientY;
      if (currentY < 50 && lastY - currentY > 10) {
        triggerPopup();
      }
      lastY = currentY;
    };

    const triggerPopup = () => {
      setIsVisible(true);
      setHasTriggered(true);
      sessionStorage.setItem("exitPopupShown", "true");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'P' && e.shiftKey) {
        e.preventDefault();
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      exitIntentEnabled = true;
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mousemove", handleMouseMove);
    }, 3000);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasTriggered]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl border border-gray-200 shadow-2xl"
          >
            {/* Background with particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-violet-50">
              <Particles
                className="absolute inset-0 opacity-30"
                quantity={120}
                color={"#7c3aed"}
                vy={-0.2}
              />
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors z-20"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                  <Gift className="w-8 h-8 text-green-600" />
                </div>
              </div>

              {/* Title */}
              <div className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center mb-4 font-heading tracking-tight">
                Je eerste strip is gratis
              </div>
              <p className="text-gray-500 text-center mb-8 max-w-sm mx-auto">
                Kies een taak uit onze lijst van 900+ opties. Alles tot 3 uur werk is gratis.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["Geen verplichtingen", "Binnen 48 uur klaar", "900+ taken"].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#taken-overzicht"
                onClick={handleClose}
                className="w-full py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Bekijk alle taken
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Footer */}
              <p className="text-xs text-gray-400 text-center mt-4">
                Kies een taak en wij regelen de rest.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
