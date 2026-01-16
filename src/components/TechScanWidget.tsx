"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Sparkles,
  ChevronDown,
  Lightbulb,
  CalendarClock
} from "lucide-react";

type Step = "start" | "intern_team" | "strategic" | "team_time" | "match" | "no_match";

export default function TechScanWidget() {
  const [currentStep, setCurrentStep] = useState<Step>("start");
  const [isAnimating, setIsAnimating] = useState(false);

  const getProgress = () => {
    switch (currentStep) {
      case "start": return 1;
      case "intern_team": return 2;
      case "strategic": return 2;
      case "team_time": return 3;
      case "match": return 4;
      case "no_match": return 4;
      default: return 1;
    }
  };

  const goToStep = (step: Step) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(step);
      setIsAnimating(false);
    }, 300);
  };

  const resetWidget = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep("start");
      setIsAnimating(false);
    }, 300);
  };

  const cardVariants = {
    initial: { opacity: 0, x: 50, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -50, scale: 0.95 },
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Title above widget */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-5"
      >
        <p className="text-gray-700 font-semibold text-lg mb-2">Ontdek in 30 seconden of wij kunnen helpen</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-violet-500 mx-auto" />
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-violet-400/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-violet-400/20 rounded-full blur-2xl" />

      {/* Widget Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl shadow-violet-500/25 border-2 border-violet-200 overflow-hidden">
        {/* Header */}
        <div className="bg-violet-600 px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Check of wij een match zijn</h3>
              <p className="text-violet-200 text-sm">Beantwoord een paar vragen</p>
            </div>
          </div>
          {/* Progress indicator */}
          <div className="mt-4 flex gap-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                  currentStep === "match"
                    ? "bg-white"
                    : currentStep === "no_match"
                    ? "bg-gray-400"
                    : step <= getProgress()
                    ? "bg-white"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 min-h-[300px] flex flex-col">
          <AnimatePresence mode="wait">
            {/* Step 1: Verlies je tijd? */}
            {currentStep === "start" && (
              <motion.div
                key="start"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-1 flex flex-col"
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-violet-500/10">
                    <Clock className="w-7 h-7 text-violet-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Verlies je tijd aan tech-problemen?
                  </h4>
                  <p className="text-gray-500 mb-6">
                    Tools die niet werken, koppelingen die vastlopen, of moet je steeds zelf dingen uitzoeken?
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    onClick={() => goToStep("intern_team")}
                    disabled={isAnimating}
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                    className="group relative py-4 px-4 bg-gradient-to-br from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 border-2 border-violet-500 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-violet-500/25"
                  >
                    <span className="font-semibold text-white">Ja, regelmatig</span>
                  </motion.button>
                  <button
                    onClick={() => goToStep("strategic")}
                    disabled={isAnimating}
                    className="group py-4 px-4 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="font-semibold text-gray-600 group-hover:text-gray-700">Nee, alles loopt</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2a: Heb je een intern team? */}
            {currentStep === "intern_team" && (
              <motion.div
                key="intern_team"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-1 flex flex-col"
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-violet-500/10">
                    <Users className="w-7 h-7 text-violet-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Heb je een intern tech-team?
                  </h4>
                  <p className="text-gray-500 mb-6">
                    Een developer, tech-lead of iemand die fulltime met tools en systemen bezig is?
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => goToStep("team_time")}
                    disabled={isAnimating}
                    className="group py-4 px-4 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="font-semibold text-gray-600 group-hover:text-gray-700">Ja, developers</span>
                  </button>
                  <button
                    onClick={() => goToStep("match")}
                    disabled={isAnimating}
                    className="group relative py-4 px-4 bg-gradient-to-br from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 border-2 border-violet-500 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-violet-500/25"
                  >
                    <span className="font-semibold text-white">Nee, doen we zelf</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2b: Strategisch advies nodig? */}
            {currentStep === "strategic" && (
              <motion.div
                key="strategic"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-1 flex flex-col"
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-violet-500/10">
                    <Lightbulb className="w-7 h-7 text-violet-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Strategisch advies nodig?
                  </h4>
                  <p className="text-gray-500 mb-6">
                    Wil je hulp bij het implementeren van AI, automations of het kiezen van de juiste tools?
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => goToStep("match")}
                    disabled={isAnimating}
                    className="group relative py-4 px-4 bg-gradient-to-br from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 border-2 border-violet-500 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-violet-500/25"
                  >
                    <span className="font-semibold text-white">Ja, graag</span>
                  </button>
                  <button
                    onClick={() => goToStep("no_match")}
                    disabled={isAnimating}
                    className="group py-4 px-4 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="font-semibold text-gray-600 group-hover:text-gray-700">Nee, niet nodig</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Hebben developers tijd? */}
            {currentStep === "team_time" && (
              <motion.div
                key="team_time"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-1 flex flex-col"
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-violet-500/10">
                    <CalendarClock className="w-7 h-7 text-violet-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Hebben ze nog tijd over?
                  </h4>
                  <p className="text-gray-500 mb-6">
                    Of zijn je developers al overbelast met andere projecten en taken?
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => goToStep("match")}
                    disabled={isAnimating}
                    className="group relative py-4 px-4 bg-gradient-to-br from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 border-2 border-violet-500 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-violet-500/25"
                  >
                    <span className="font-semibold text-white">Nee, overbelast</span>
                  </button>
                  <button
                    onClick={() => goToStep("no_match")}
                    disabled={isAnimating}
                    className="group py-4 px-4 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="font-semibold text-gray-600 group-hover:text-gray-700">Ja, ze hebben tijd</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Match result */}
            {currentStep === "match" && (
              <motion.div
                key="match"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-1 flex flex-col"
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-violet-500/10">
                    <CheckCircle2 className="w-7 h-7 text-violet-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Wij kunnen je helpen!
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Je bent precies het type bedrijf waar wij voor gemaakt zijn.
                  </p>
                  <div className="flex items-center gap-2 text-violet-600 font-semibold mb-6">
                    <Sparkles className="w-5 h-5" />
                    <span>Vanaf €699/maand, maandelijks opzegbaar</span>
                  </div>
                </div>

                <a
                  href="#prijzen"
                  className="group flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white font-semibold rounded-2xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Bekijk de prijzen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={resetWidget}
                  className="mt-3 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  opnieuw beginnen
                </button>
              </motion.div>
            )}

            {/* No match result */}
            {currentStep === "no_match" && (
              <motion.div
                key="no_match"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-1 flex flex-col"
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-violet-500/10">
                    <CheckCircle2 className="w-7 h-7 text-violet-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Top! Je hebt het al geregeld.
                  </h4>
                  <p className="text-gray-500 mb-6">
                    Het lijkt erop dat je tech-zaken op orde zijn. Mocht je ooit toch vastlopen, we zijn er voor je!
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="#diensten"
                    className="block w-full py-4 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-2xl transition-all"
                  >
                    Bekijk onze diensten
                  </a>
                  <button
                    onClick={resetWidget}
                    className="w-full text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    opnieuw beginnen
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
