"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, X, ArrowRight } from "lucide-react";

const scenarios = [
  {
    task: "We moeten een nieuwe tracking code op de website zetten",
    oldResponse: "Ik pak het volgende week maandag op...",
    emoji: "📊",
    doneMessage: "Tracking code staat live!"
  },
  {
    task: "Kan iemand die Zapier automation fixen?",
    oldResponse: "Ik heb nu geen tijd, misschien vrijdag?",
    emoji: "⚡",
    doneMessage: "Zapier automation draait weer!"
  },
  {
    task: "We hebben een dashboard nodig voor de sales cijfers",
    oldResponse: "Dat wordt een project van een paar weken...",
    emoji: "📈",
    doneMessage: "Dashboard staat klaar!"
  },
  {
    task: "Die API koppeling werkt niet meer",
    oldResponse: "Geen idee, moet ik uitzoeken...",
    emoji: "🔌",
    doneMessage: "API koppeling is gefixt!"
  },
];

type Phase = "typing1" | "task" | "typing2" | "oldway" | "strikethrough" | "typing3" | "sendto" | "typing4" | "working" | "progress" | "done";

export default function PropositionAnimation() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing1");
  const [isVisible, setIsVisible] = useState(true);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Clear all existing timeouts
    const clearAllTimeouts = () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };

    const runAnimation = () => {
      clearAllTimeouts();
      setIsVisible(true);
      setPhase("typing1");

      const timings = [
        { phase: "task" as Phase, delay: 800 },
        { phase: "typing2" as Phase, delay: 2400 },
        { phase: "oldway" as Phase, delay: 3200 },
        { phase: "strikethrough" as Phase, delay: 5000 },
        { phase: "typing3" as Phase, delay: 6200 },
        { phase: "sendto" as Phase, delay: 7000 },
        { phase: "typing4" as Phase, delay: 8500 },
        { phase: "working" as Phase, delay: 9300 },
        { phase: "progress" as Phase, delay: 10800 },
        { phase: "done" as Phase, delay: 12300 },
      ];

      timings.forEach(({ phase, delay }) => {
        const timeout = setTimeout(() => setPhase(phase), delay);
        timeoutsRef.current.push(timeout);
      });

      // Fade out
      const fadeTimeout = setTimeout(() => setIsVisible(false), 14500);
      timeoutsRef.current.push(fadeTimeout);

      // Next scenario
      const nextTimeout = setTimeout(() => {
        setCurrentScenario((prev) => (prev + 1) % scenarios.length);
      }, 15500);
      timeoutsRef.current.push(nextTimeout);
    };

    runAnimation();

    return () => clearAllTimeouts();
  }, [currentScenario]);

  const scenario = scenarios[currentScenario];

  const TypingIndicator = ({ bg = "bg-orange-100", emoji = "👨" }: { bg?: string; emoji?: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex gap-3"
    >
      <div className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center text-lg flex-shrink-0`}>
        {emoji}
      </div>
      <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3">
        <div className="flex gap-1">
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-2 h-2 bg-gray-400 rounded-full" />
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }} className="w-2 h-2 bg-gray-400 rounded-full" />
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }} className="w-2 h-2 bg-gray-400 rounded-full" />
        </div>
      </div>
    </motion.div>
  );

  const showTask = phase !== "typing1";
  const showOldWay = phase === "oldway" || phase === "strikethrough";
  const showSendTo = phase === "sendto" || phase === "typing4" || phase === "working" || phase === "progress" || phase === "done";
  const showVK = phase === "working" || phase === "progress" || phase === "done";

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">👩</div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">👨</div>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Team chat</p>
              <p className="text-white/60 text-xs">Slack • #algemeen</p>
            </div>
          </div>
        </div>

        {/* Chat area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScenario}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="p-5 min-h-[340px] flex flex-col gap-3"
          >

            {/* Sarah typing indicator */}
            <AnimatePresence>
              {phase === "typing1" && <TypingIndicator bg="bg-blue-100" emoji="👩" />}
            </AnimatePresence>

            {/* Sarah's task message */}
            <AnimatePresence>
              {showTask && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-lg flex-shrink-0">
                    👩
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-gray-900">Sarah</span>
                      <span className="text-xs text-gray-400">09:14</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3">
                      <p className="text-sm text-gray-700">
                        <span className="mr-2">{scenario.emoji}</span>
                        {scenario.task}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mike typing indicator */}
            <AnimatePresence>
              {phase === "typing2" && <TypingIndicator bg="bg-orange-100" emoji="👨" />}
            </AnimatePresence>

            {/* Mike's old way response */}
            <AnimatePresence>
              {showOldWay && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-lg flex-shrink-0">
                    👨
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-gray-900">Mike</span>
                      <span className="text-xs text-gray-400">09:15</span>
                    </div>
                    <div className="relative bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3">
                      <p className={`text-sm text-gray-700 transition-all duration-500 ${phase === "strikethrough" ? "line-through text-gray-400" : ""}`}>
                        {scenario.oldResponse}
                      </p>
                      {phase === "strikethrough" && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                        >
                          <X className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sarah typing again */}
            <AnimatePresence>
              {phase === "typing3" && <TypingIndicator bg="bg-blue-100" emoji="👩" />}
            </AnimatePresence>

            {/* Sarah suggests VliegendeKiep */}
            <AnimatePresence>
              {showSendTo && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-lg flex-shrink-0">
                    👩
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-gray-900">Sarah</span>
                      <span className="text-xs text-gray-400">09:16</span>
                    </div>
                    <div className="bg-violet-50 border border-violet-200 rounded-2xl rounded-tl-md px-4 py-3">
                      <p className="text-sm text-violet-700">
                        Stuur door naar @VliegendeKiep, zij fixen het wel 🚀
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* VliegendeKiep typing */}
            <AnimatePresence>
              {phase === "typing4" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img src="/favicon.svg" alt="" className="w-7 h-7" />
                  </div>
                  <div className="bg-violet-50 border border-violet-200 rounded-2xl rounded-tl-md px-4 py-3">
                    <div className="flex gap-1">
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-2 h-2 bg-violet-400 rounded-full" />
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }} className="w-2 h-2 bg-violet-400 rounded-full" />
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }} className="w-2 h-2 bg-violet-400 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* VliegendeKiep response */}
            <AnimatePresence>
              {showVK && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img src="/favicon.svg" alt="" className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-violet-600">VliegendeKiep</span>
                      <span className="text-xs text-gray-400">09:16</span>
                    </div>
                    <motion.div
                      animate={{
                        backgroundColor: phase === "done" ? "rgb(240 253 244)" : "rgb(245 243 255)",
                        borderColor: phase === "done" ? "rgb(187 247 208)" : "rgb(221 214 254)"
                      }}
                      className="rounded-2xl rounded-tl-md px-4 py-3 border"
                    >
                      <AnimatePresence mode="wait">
                        {phase === "working" && (
                          <motion.p
                            key="working"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-sm text-violet-700"
                          >
                            Zit er bovenop! 💪
                          </motion.p>
                        )}
                        {phase === "progress" && (
                          <motion.div
                            key="progress"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-violet-300 border-t-violet-600 rounded-full"
                            />
                            <p className="text-sm text-violet-700">
                              Bezig met uitvoeren...
                            </p>
                          </motion.div>
                        )}
                        {phase === "done" && (
                          <motion.div
                            key="done"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <p className="text-sm text-green-700 font-medium">
                              {scenario.doneMessage} 🎉
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Bottom bar */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock className="w-3.5 h-3.5" />
              <span>Gemiddeld 24-48 uur</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-violet-600">
              <span>Geen gedoe</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-200/30 rounded-full blur-2xl" />
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-violet-300/20 rounded-full blur-xl" />
    </div>
  );
}
