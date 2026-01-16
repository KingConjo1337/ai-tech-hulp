"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Check,
  Crown,
  Zap,
  Rocket,
  Building2,
  ArrowRight,
  Ticket,
  Info,
} from "lucide-react";
import { useWaitlist } from "@/context/WaitlistContext";

const plans = [
  {
    name: "Support",
    subtitle: "Jouw technische helpdesk",
    description: "Voor teams die tech-vragen willen uitbesteden",
    price: "699",
    taken: 3,
    bonusTaken: 1,
    hours: "~9 uur",
    popular: false,
    icon: Zap,
    features: [
      "3 strippen per maand",
      "Kleine fixes en support",
      "E-mail & chat support",
      "Toegang tot taakbord",
      "48 uur doorlooptijd",
    ],
    cta: "Start risicovrij",
    color: "gray",
  },
  {
    name: "Automate",
    subtitle: "Slimmer werken met automations",
    description: "Voor teams die bezig zijn met automatiseren",
    price: "1.299",
    taken: 6,
    bonusTaken: 1,
    hours: "~18 uur",
    popular: true,
    icon: Rocket,
    features: [
      "6 strippen per maand",
      "Automations & integraties",
      "Prioriteit support",
      "Slack/Teams integratie",
      "24 uur doorlooptijd",
      "Maandelijkse call (optioneel)",
    ],
    cta: "Start risicovrij",
    color: "violet",
  },
  {
    name: "Transform",
    subtitle: "Proactief digitaliseren",
    description: "Voor bedrijven die hulp zoeken bij digitaliseren",
    price: "2.199",
    taken: 12,
    bonusTaken: 1,
    hours: "~36 uur",
    popular: false,
    icon: Building2,
    features: [
      "12 strippen per maand",
      "Complexere projecten",
      "Dedicated support",
      "Training voor je team",
      "Same-day voor urgente strippen",
      "Strategische sessies",
    ],
    cta: "Start risicovrij",
    color: "gray",
  },
];


export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openWaitlist } = useWaitlist();

  return (
    <section
      id="prijzen"
      className="py-20 md:py-28 bg-white relative overflow-hidden scroll-mt-16"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-100/30 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-violet-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold mb-6">
            <Ticket className="w-4 h-4" />
            Maandelijks opzegbaar
          </div>
          <h2 className="!text-4xl sm:!text-5xl lg:!text-6xl !font-semibold text-gray-900 mb-6 !leading-[1.05]">
            Voorspelbare kosten,
            <span className="block text-violet-600">onbeperkte mogelijkheden</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Elke maand een vast aantal strippen. Jij bepaalt waar je ze aan besteedt.
            <span className="text-gray-700 font-medium"> Van kleine fixes tot complexe automations.</span>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-violet-600 to-violet-700 text-white text-sm font-semibold rounded-full shadow-lg">
                    <Crown className="w-4 h-4" />
                    Meest Gekozen
                  </div>
                </div>
              )}

              <div
                className={`relative h-full rounded-3xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-violet-600 to-violet-700 text-white shadow-2xl shadow-violet-500/30"
                    : "bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300"
                }`}
              >
                {/* Header section - centered on mobile */}
                <div className="text-center md:text-left mb-4">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0 ${
                      plan.popular
                        ? "bg-white/20"
                        : "bg-gray-100"
                    }`}
                  >
                    <plan.icon
                      className={`w-6 h-6 ${
                        plan.popular ? "text-white" : "text-gray-700"
                      }`}
                    />
                  </div>

                  {/* Plan name */}
                  <h3
                    className={`text-2xl font-bold mb-1 ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm font-medium mb-1 ${
                      plan.popular ? "text-white/90" : "text-gray-700"
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                  <p
                    className={`text-xs mb-4 ${
                      plan.popular ? "text-violet-200" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Taken badge */}
                  <div>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${
                        plan.popular
                          ? "bg-white/20 text-white"
                          : "bg-violet-100 text-violet-700"
                      }`}
                    >
                      <Ticket className="w-4 h-4" />
                      <span className="font-bold">{plan.taken} strippen</span>
                      <span className="text-sm opacity-80">/ maand</span>
                    </div>
                    <p
                      className={`text-xs mt-1.5 ${
                        plan.popular ? "text-violet-200" : "text-gray-400"
                      }`}
                    >
                      {plan.hours} werk per maand
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 text-center md:text-left">
                  <div className="flex items-baseline gap-1 justify-center md:justify-start">
                    <span
                      className={`text-4xl font-bold ${
                        plan.popular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      €{plan.price}
                    </span>
                    <span
                      className={`text-lg ${
                        plan.popular ? "text-violet-200" : "text-gray-500"
                      }`}
                    >
                      /maand
                    </span>
                  </div>
                  <p
                    className={`text-sm mt-1 ${
                      plan.popular ? "text-violet-200" : "text-gray-500"
                    }`}
                  >
                    excl. BTW • maandelijks opzegbaar
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.popular
                            ? "bg-white/20"
                            : "bg-violet-100"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular ? "text-white" : "text-violet-600"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-violet-100" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => openWaitlist(plan.name.toLowerCase() as "support" | "automate" | "transform")}
                  className={`group flex flex-col items-center justify-center w-full py-3 rounded-xl transition-all cursor-pointer ${
                    plan.popular
                      ? "bg-white text-violet-700 hover:bg-violet-50 shadow-lg"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  <span className="flex items-center gap-2 font-semibold">
                    Start gratis
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className={`text-xs ${plan.popular ? "text-violet-500" : "text-gray-400"}`}>
                    de 1e strip is op ons
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it works note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-violet-50 rounded-2xl p-4 border border-violet-100">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-violet-800">
                <strong>Zo werkt het:</strong> Elke strip moet klein en afgebakend zijn.
                Grotere projecten splitsen we op in meerdere strippen. Ongebruikte strippen schuiven door naar volgende maand.
              </p>
            </div>
          </div>
        </motion.div>


        {/* Enterprise note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500">
            Meer strippen nodig?{" "}
            <button
              onClick={() => openWaitlist("pricing")}
              className="block sm:inline mx-auto sm:mx-0 mt-1 sm:mt-0 text-violet-600 font-semibold hover:text-violet-700 transition-colors cursor-pointer"
            >
              Zet je op de wachtlijst
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
