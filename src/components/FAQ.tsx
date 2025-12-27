"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, HelpCircle, Mail, ArrowRight } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";

const pointerPositions = [
  { left: 200, top: 60 },
  { left: 40, top: 110 },
  { left: 220, top: 170 },
  { left: 70, top: 200 },
];

const faqs = [
  {
    question: "Hoe werken de pakketten?",
    answer:
      "Je kiest een pakket met een vast aantal taken per maand. Starter heeft 3 taken, Growth heeft 5 taken, Scale heeft 10 taken. Elke taak moet klein en afgebakend zijn. Ongebruikte taken schuiven door naar de volgende maand.",
  },
  {
    question: "Wat telt als één taak?",
    answer:
      "Een taak is een afgebakend stuk werk: een DNS fix, een automation bouwen, een dashboard opzetten, een training sessie. Grotere projecten splitsen we op in meerdere taken. We helpen je graag met het inschatten.",
  },
  {
    question: "Wat als ik meer taken nodig heb?",
    answer:
      "Je kunt altijd upgraden naar een groter pakket of extra taken bijkopen. We denken graag met je mee over welk pakket het beste past bij jouw situatie.",
  },
  {
    question: "Waarom zou ik geen fulltimer aannemen?",
    answer:
      "Een senior automation expert kost €60.000+ per jaar. Plus recruitment fees (20-25% van het jaarsalaris), laptop, kantoorruimte en ziekterisico. Bij ons start je direct, zonder recruitment proces, voor een fractie van de prijs. En als je even minder werk hebt, pauzeer je gewoon.",
  },
  {
    question: "Doen jullie echt alles?",
    answer:
      "We doen veel: AI integraties, Automation (Zapier, Make, n8n), No-Code tools, Marketing Tech, CRM koppelingen, dashboards, training en tech support. We doen geen zware software development (C++, Java apps), mobiele app development of hardware support (printers, servers).",
  },
  {
    question: "Hoe snel krijg ik resultaat?",
    answer:
      "De meeste taken worden binnen 24-48 uur opgeleverd. Complexe projecten splitsen we op in kleinere taken. Je krijgt altijd een update waarin we laten zien wat we gebouwd hebben en hoe het werkt.",
  },
  {
    question: "Bieden jullie ook training aan?",
    answer:
      "Ja! We geven hands-on training voor jou of je team. Denk aan: werken met AI-tools, automations opzetten, of specifieke software leren. Een training sessie telt als 1 taak en je krijgt een opname om terug te kijken.",
  },
  {
    question: "Wat als ik niet tevreden ben?",
    answer:
      "We hebben een 14 dagen geld-terug-garantie. Geen vragen, geen gedoe. Als het niet werkt voor jou, krijg je je geld volledig terug.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pointerPositions.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-x-clip"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-100/30 rounded-full blur-3xl" />
      {/* Blob behind CTA card */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-violet-200/20 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <GridPattern
        width={40}
        height={40}
        x={14}
        className="absolute inset-0 h-full w-full fill-violet-400/15 stroke-violet-400/15 [mask-image:radial-gradient(1000px_circle_at_center_300px,white,transparent)]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Veelgestelde vragen
          </div>
          <h2 className="!text-3xl sm:!text-4xl lg:!text-5xl !font-semibold text-gray-900 mb-6 !leading-[1.1]">
            Alles wat je wilt weten,
            <span className="block text-violet-600">op één plek</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Staat jouw vraag er niet bij?
            <span className="text-gray-700 font-medium"> Stuur ons een bericht.</span>
          </p>
        </motion.div>

        {/* FAQ Items - 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-4 items-start"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-violet-200 shadow-lg shadow-violet-100/50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-violet-100 rotate-180"
                      : "bg-gray-100"
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-colors ${
                      openIndex === index ? "text-violet-600" : "text-gray-500"
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-5xl mx-auto relative"
        >
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
                          <img
                            src="/favicon.svg"
                            alt="VliegendeKiep"
                            className="h-16 w-auto"
                          />
                        </div>

                        {/* Animated tags */}
                        <div
                          className={`absolute bottom-12 left-10 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 transition-opacity duration-300 ${currentIndex === 3 ? 'opacity-100' : 'opacity-60'}`}
                        >
                          Automations
                        </div>
                        <div
                          className={`absolute left-0 top-24 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 transition-opacity duration-300 ${currentIndex === 1 ? 'opacity-100' : 'opacity-60'}`}
                        >
                          AI Integraties
                        </div>
                        <div
                          className={`absolute bottom-16 right-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 transition-opacity duration-300 ${currentIndex === 2 ? 'opacity-100' : 'opacity-60'}`}
                        >
                          Data & Analytics
                        </div>
                        <div
                          className={`absolute right-8 top-12 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 transition-opacity duration-300 ${currentIndex === 0 ? 'opacity-100' : 'opacity-60'}`}
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
        </motion.div>

      </div>
    </section>
  );
}
