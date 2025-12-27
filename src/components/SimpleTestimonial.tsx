"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SimpleTestimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative z-10 -my-4 md:-my-6" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-5 md:gap-8"
        >
          {/* Left line - violet gradient */}
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-violet-300" />

          {/* Center - minimal inline testimonial */}
          <div className="flex-shrink-0">
            <p className="text-sm text-gray-500">
              <span className="italic">"Wat heerlijk werken zo"</span>
              <span className="text-violet-400 mx-2">—</span>
              <span className="text-gray-400">Mark, CMO</span>
            </p>
          </div>

          {/* Right line - violet gradient */}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-violet-300" />
        </motion.div>
      </div>
    </div>
  );
}
