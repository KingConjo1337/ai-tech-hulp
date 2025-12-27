"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import TaskModal from "./TaskModal";

export default function PainPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="taken-overzicht" className="relative pb-20 overflow-hidden -mt-16 scroll-mt-24">
      {/* Gradient fade from hero into white with plus pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white" />

      {/* Plus pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 9v6M9 12h6' stroke='%238b5cf6' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-br from-violet-200/40 to-violet-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      {/* Left side gradient blob */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-br from-violet-200/25 to-violet-100/15 rounded-full blur-3xl -translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Wij regelen het voor je
          </div>

          {/* Main title */}
          <h2 className="!text-4xl sm:!text-5xl lg:!text-6xl !font-semibold text-gray-900 mb-6 !leading-[1.05]">
            Iedereen kan wel een
            <span className="block text-violet-600">extra handje gebruiken</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Van kleine fixes tot complexe automations — dit is waar wij je mee helpen.
            <span className="text-gray-700 font-medium"> Geen gedoe, gewoon geregeld.</span>
          </p>
        </motion.div>

        {/* Rotating marquee banners */}
        <div className="relative mt-4 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
          {/* Left fade only */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, white 0%, white 20%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)' }} />
          {/* First row - scrolling left */}
          <div className="flex animate-marquee-left mb-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-3 mr-3">
                {[
                  "DNS fix",
                  "Zapier automation",
                  "Dashboard bouwen",
                  "API koppeling",
                  "Data cleaning",
                  "Tracking pixel",
                  "CRM integratie",
                  "Email workflow",
                  "Spreadsheet fix",
                  "Webhook setup",
                ].map((task, j) => (
                  <div
                    key={j}
                    className="flex-shrink-0 px-4 py-2 bg-violet-50 border border-violet-100 rounded-full text-sm font-medium text-violet-700 whitespace-nowrap"
                  >
                    {task}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Second row - scrolling right */}
          <div className="flex animate-marquee-right mb-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-3 mr-3">
                {[
                  "Make.com scenario",
                  "Notion template",
                  "Slack bot",
                  "AI chatbot",
                  "Airtable setup",
                  "Training sessie",
                  "HubSpot koppeling",
                  "Google Sheets",
                  "n8n workflow",
                  "Stripe integratie",
                ].map((task, j) => (
                  <div
                    key={j}
                    className="flex-shrink-0 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-600 whitespace-nowrap"
                  >
                    {task}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Third row - scrolling left */}
          <div className="flex animate-marquee-left mb-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-3 mr-3">
                {[
                  "Moneybird koppeling",
                  "Lead scoring",
                  "Rapportage automatiseren",
                  "WhatsApp bot",
                  "Form builder",
                  "Calendar sync",
                  "Document generator",
                  "Mailchimp integratie",
                  "Inventory sync",
                  "Price monitoring",
                ].map((task, j) => (
                  <div
                    key={j}
                    className="flex-shrink-0 px-4 py-2 bg-violet-50 border border-violet-100 rounded-full text-sm font-medium text-violet-700 whitespace-nowrap"
                  >
                    {task}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Fourth row - scrolling right */}
          <div className="flex animate-marquee-right">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-3 mr-3">
                {[
                  "Webflow aanpassing",
                  "SEO tracking",
                  "Social media scheduler",
                  "Customer feedback loop",
                  "Booking systeem",
                  "PDF generator",
                  "Data migratie",
                  "Team onboarding flow",
                  "Support ticket routing",
                  "Analytics dashboard",
                ].map((task, j) => (
                  <div
                    key={j}
                    className="flex-shrink-0 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-600 whitespace-nowrap"
                  >
                    {task}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors group text-base"
          >
            Bekijk de volledige lijst met 500+ taken
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Task Modal */}
        <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>

      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50L60 44C120 38 240 26 360 20C480 14 600 14 720 17C840 20 960 26 1080 29C1200 32 1320 32 1380 32L1440 32V50H1380C1320 50 1200 50 1080 50C960 50 840 50 720 50C600 50 480 50 360 50C240 50 120 50 60 50H0Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
}
