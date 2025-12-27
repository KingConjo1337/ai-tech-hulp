"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GridPattern } from "@/components/ui/grid-pattern";

const tools = [
  {
    name: "Make",
    logo: "/logos/make.svg",
  },
  {
    name: "Zapier",
    logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
  },
  {
    name: "n8n",
    logo: "https://n8n.io/favicon.ico",
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png",
  },
  {
    name: "Airtable",
    logo: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg",
  },
  {
    name: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  },
  {
    name: "Stripe",
    logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
  },
  {
    name: "HubSpot",
    logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg",
  },
];

export default function ToolsBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100 relative overflow-hidden" ref={ref}>
      {/* Top gradient fade from white */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent" />

      {/* Grid pattern - continues into FAQ section */}
      <GridPattern
        width={40}
        height={40}
        x={14}
        className="absolute inset-0 h-full w-full fill-violet-400/15 stroke-violet-400/15 [mask-image:radial-gradient(750px_circle_at_center_bottom,white,transparent),linear-gradient(to_bottom,transparent,white_50%)] [mask-composite:intersect]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm text-gray-500 mb-8">
            Tools waarmee we dagelijks werken
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-6 md:h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
