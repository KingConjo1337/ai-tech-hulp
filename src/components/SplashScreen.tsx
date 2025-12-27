"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"flying" | "landed" | "salto" | "exit">("flying");

  useEffect(() => {
    // Phase 1: Flying in (0-1s)
    // Phase 2: Landed/pause (1-1.5s)
    // Phase 3: Salto (1.5-2.3s)
    // Phase 4: Exit (2.3-2.8s)
    const landedTimer = setTimeout(() => setPhase("landed"), 1000);
    const saltoTimer = setTimeout(() => setPhase("salto"), 1500);
    const exitTimer = setTimeout(() => setPhase("exit"), 2300);
    const completeTimer = setTimeout(() => onComplete(), 2800);

    return () => {
      clearTimeout(landedTimer);
      clearTimeout(saltoTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-violet-50 via-white to-violet-100 flex items-center justify-center overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-300/20 rounded-full blur-3xl" />
          </div>

          {/* Flying logo */}
          <motion.div
            initial={{
              x: "-100vw",
              y: "-20vh",
              rotate: -15,
              scale: 0.8
            }}
            animate={phase === "flying" ? {
              x: 0,
              y: 0,
              rotate: [-15, 5, -3, 0],
              scale: 1
            } : phase === "landed" ? {
              x: 0,
              y: [0, -10, 0],
              rotate: 0,
              scale: [1, 1.05, 1]
            } : phase === "salto" ? {
              x: 0,
              y: [0, -80, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            } : {}}
            transition={phase === "flying" ? {
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
              rotate: {
                duration: 1,
                times: [0, 0.6, 0.8, 1]
              }
            } : phase === "salto" ? {
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
              y: {
                duration: 0.8,
                ease: "easeInOut"
              }
            } : {
              duration: 0.5,
              ease: "easeInOut"
            }}
            className="relative z-10"
          >
            <motion.img
              src="/logo.svg"
              alt="VliegendeKiep"
              className="h-48 md:h-64 w-auto drop-shadow-2xl"
              animate={phase === "landed" ? {
                filter: ["drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))", "drop-shadow(0 35px 35px rgb(0 0 0 / 0.2))", "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))"]
              } : {}}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Subtle trail effect during flight */}
          {phase === "flying" && (
            <>
              <motion.div
                initial={{ x: "-120vw", y: "-25vh", opacity: 0.6 }}
                animate={{ x: "-30vw", y: "-10vh", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-20 h-20 bg-violet-300/40 rounded-full blur-2xl"
              />
              <motion.div
                initial={{ x: "-140vw", y: "-30vh", opacity: 0.4 }}
                animate={{ x: "-50vw", y: "-15vh", opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute w-16 h-16 bg-violet-200/30 rounded-full blur-xl"
              />
            </>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
