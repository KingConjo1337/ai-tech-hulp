"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Vraag indienen",
    description: "Via ons platform, direct in je overzicht",
    icon: Send,
  },
  {
    number: "2",
    title: "Wij pakken het op",
    description: "Je ziet direct de status en voortgang",
    icon: Wrench,
  },
  {
    number: "3",
    title: "Klaar binnen 24-48 uur",
    description: "Snel geregeld, zonder gedoe",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="hoe-het-werkt"
      className="py-16 md:py-20 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Hoe het werkt
          </h2>
          <p className="text-gray-600">
            Simpel en snel, zonder gedoe
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-violet-100 text-violet-600"
              >
                <step.icon className="w-6 h-6" />
              </div>
              <div className="text-sm font-semibold text-gray-400 mb-1">
                Stap {step.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="#prijzen"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all"
          >
            Bekijk de prijzen
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
