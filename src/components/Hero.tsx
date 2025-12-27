"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PropositionAnimation from "./PropositionAnimation";

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
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 pattern-dots opacity-40" />
      {/* Bottom fade to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />

      {/* Futuristic grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #8b5cf6 1px, transparent 1px),
            linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-violet-300/5 rounded-full blur-3xl" />
      {/* Left side gradient extending into transition - temporarily removed */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 md:pt-52 pb-20">
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
                <h1 className="text-gray-900 !text-4xl sm:!text-5xl lg:!text-6xl !font-semibold">
                  Je teams tech hulpje.
                </h1>
                <p className="mt-1 text-xl sm:text-2xl lg:text-3xl font-semibold text-violet-600">
                  (Al vanaf €799 per maand)
                </p>
              </motion.div>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
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
                  className="flex items-center gap-3 text-gray-700 justify-center lg:justify-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{usp}</span>
                </li>
              ))}
            </motion.ul>

            {/* Highlight text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-sm sm:text-base font-semibold text-violet-600 mb-6 text-center lg:text-left whitespace-nowrap"
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
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white text-lg font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105"
              >
                Bekijk aanbod
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex flex-col items-center justify-center px-7 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl border border-gray-200 hover:border-gray-300 transition-all hover:scale-105"
              >
                <span className="flex items-center gap-2 text-lg font-semibold">
                  Onze menukaart
                  <ArrowRight className="w-5 h-5 text-violet-600 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs text-gray-500">900+ veelgevraagde taken</span>
              </button>
            </motion.div>

            {/* Social proof + Waitlist */}
            {/* Rotating use cases banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 pt-5 border-t border-gray-200"
            >
              <div className="text-sm text-gray-500">
                <span className="block mb-3 text-center lg:text-left font-medium text-gray-600">Populaire taken:</span>
                <div className="relative overflow-hidden w-full max-w-sm mx-auto lg:mx-0 mask-gradient">
                  <div className="flex w-max animate-marquee-fast">
                    {[...popularUseCases, ...popularUseCases].map((useCase, index) => (
                      <span
                        key={index}
                        className="flex-shrink-0 px-4 py-1.5 mx-2 bg-violet-50 text-violet-600 font-medium rounded-full whitespace-nowrap text-sm"
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
