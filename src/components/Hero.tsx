"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PropositionAnimation from "./PropositionAnimation";

// Lazy load 3D component - heavy
const GridScan = dynamic(
  () => import("./ui/grid-scan").then((mod) => ({ default: mod.GridScan })),
  { ssr: false }
);

// Lazy load modal - only needed on click
const TaskModal = dynamic(() => import("./TaskModal"), { ssr: false });

const usps = [
  "Geen HR-gedoe of dure freelancers",
  "Binnen 24-48 uur geregeld",
  "Maandelijks opzegbaar",
];

const popularUseCases = [
  "Make.com automations",
  "LinkedIn scrapen",
  "API koppelingen",
  "Cold email setup",
  "n8n workflows",
  "Google Maps lijsten",
  "Lead scoring",
  "Zapier automations",
  "Outreach lijsten",
  "Tracking setup",
  "AI chatbots",
  "CRM integraties",
  "Data dashboards",
  "Email sequences",
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative z-10 overflow-hidden">
      {/* 3D Grid Scan Background */}
      <div className="absolute inset-0 bg-gray-950">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#4c1d95"
          gridScale={0.1}
          scanColor="#a78bfa"
          scanOpacity={0.5}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      {/* Overlay gradient for text readability - pointer-events-none allows hover on canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50 pointer-events-none" />

      {/* Bottom fade for seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 md:pt-52 pb-20 pointer-events-none">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Heading */}
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="overflow-hidden"
              >
                <h1 className="text-white !text-4xl sm:!text-5xl lg:!text-6xl !font-semibold drop-shadow-lg">
                  Je teams tech hulpje.
                </h1>
                <p className="mt-1 text-xl sm:text-2xl lg:text-3xl font-semibold text-violet-400">
                  (Al vanaf €699 per maand)
                </p>
              </motion.div>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Wij zorgen dat jouw team nooit meer hun tijd verspilt aan technische taken en vragen. Jullie gooien het over de schutting, wij regelen het.
            </motion.p>

            {/* USP List */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-3 mb-8"
            >
              {usps.map((usp, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-white justify-center lg:justify-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium drop-shadow-sm">{usp}</span>
                </li>
              ))}
            </motion.ul>

            {/* Highlight text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-sm sm:text-base font-semibold text-violet-400 mb-6 text-center lg:text-left whitespace-nowrap"
            >
              Van automatiseringen tot leadlijsten — wij fixen het.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#prijzen"
                className="pointer-events-auto group inline-flex flex-col items-center justify-center px-7 py-3 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white rounded-xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105"
              >
                <span className="flex items-center gap-2 text-lg font-semibold">
                  Start gratis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs text-violet-200">de 1e strip is op ons</span>
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="pointer-events-auto group inline-flex flex-col items-center justify-center px-7 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-xl border border-white/20 hover:border-white/30 transition-all hover:scale-105"
              >
                <span className="flex items-center gap-2 text-lg font-semibold">
                  Onze menukaart
                  <ArrowRight className="w-5 h-5 text-violet-400 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs text-white/60">900+ veelgevraagde taken</span>
              </button>
            </motion.div>

            {/* Social proof + Waitlist */}
            {/* Rotating use cases banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 pt-5 border-t border-white/20"
            >
              <div className="text-sm text-white/60">
                <span className="block mb-3 text-center lg:text-left font-medium text-white/80">Populaire taken:</span>
                <div className="relative overflow-hidden w-full max-w-sm mx-auto lg:mx-0 mask-gradient">
                  <div className="flex w-max animate-marquee-fast">
                    {[...popularUseCases, ...popularUseCases].map((useCase, index) => (
                      <span
                        key={index}
                        className="flex-shrink-0 px-4 py-1.5 mx-2 bg-white/10 text-white font-medium rounded-full whitespace-nowrap text-sm"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Proposition Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="lg:pl-8 lg:-mt-16"
          >
            <PropositionAnimation />
          </motion.div>
        </div>
      </div>

      {/* Task Modal */}
      <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
