"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Bird, Mail, ArrowRight } from "lucide-react";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";
import { GridPattern } from "@/components/ui/grid-pattern";

const pointerPositions = [
  { left: 200, top: 60 },   // Near No-Code Tools
  { left: 40, top: 110 },   // Near AI Integraties
  { left: 220, top: 170 },  // Near Data & Analytics
  { left: 70, top: 200 },   // Near Automations
];

export default function ConnectCTA() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pointerPositions.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white to-violet-50/50 py-12 -mt-6 mb-0 overflow-x-clip">
      {/* Gradient blob from FAQ flowing over CTA */}
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-violet-100/30 to-transparent rounded-full blur-3xl" />

      {/* Grid pattern - continues from FAQ section */}
      <GridPattern
        width={40}
        height={40}
        x={14}
        className="absolute inset-0 h-full w-full fill-violet-400/10 stroke-violet-400/10 [mask-image:radial-gradient(400px_circle_at_center_-150px,white,transparent)]"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <HighlightGroup className="group h-full">
        <div className="group/item h-full">
          <HighlighterItem className="rounded-3xl p-px">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-gray-200 bg-white">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color={"#7c3aed"}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-6 md:h-[320px] md:flex-row md:p-8">
                  {/* Left side - animated tags */}
                  <div className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]">
                    {/* Center logo */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                        <Bird className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Animated tags */}
                    <div
                      className={`absolute bottom-12 left-10 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 transition-opacity duration-300 ${currentIndex === 3 ? 'opacity-100' : 'opacity-40'}`}
                    >
                      Automations
                    </div>
                    <div
                      className={`absolute left-0 top-24 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 transition-opacity duration-300 ${currentIndex === 1 ? 'opacity-100' : 'opacity-40'}`}
                    >
                      AI Integraties
                    </div>
                    <div
                      className={`absolute bottom-16 right-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 transition-opacity duration-300 ${currentIndex === 2 ? 'opacity-100' : 'opacity-40'}`}
                    >
                      Data & Analytics
                    </div>
                    <div
                      className={`absolute right-8 top-12 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 transition-opacity duration-300 ${currentIndex === 0 ? 'opacity-100' : 'opacity-40'}`}
                    >
                      No-Code Tools
                    </div>

                    {/* Animated pointer */}
                    <motion.div
                      className="absolute"
                      animate={{
                        left: pointerPositions[currentIndex].left,
                        top: pointerPositions[currentIndex].top,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-violet-600"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="absolute -top-1 left-4 rounded-full bg-violet-600 px-2 py-0.5 text-xs text-white font-medium whitespace-nowrap">
                        Jij
                      </span>
                    </motion.div>
                  </div>

                  {/* Right side - CTA content */}
                  <div className="-mt-16 flex h-full flex-col justify-center p-2 md:-mt-0 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center md:items-start">
                      <h3 className="mt-6 pb-1 font-bold text-center md:text-left">
                        <span className="text-2xl md:text-3xl lg:text-4xl text-gray-900">
                          Klaar om te starten?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-6 text-gray-500 text-center md:text-left">
                      Kies een pakket en zie binnen 48 uur je eerste resultaten.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <a
                        href="#prijzen"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-colors"
                      >
                        Bekijk pakketten
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="mailto:hello@vliegendekiep.tech"
                        className="inline-flex items-center justify-center w-12 h-12 border border-gray-200 hover:border-violet-200 hover:bg-violet-50 rounded-xl transition-colors"
                      >
                        <Mail className="w-5 h-5 text-gray-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
      </div>
    </section>
  );
}
