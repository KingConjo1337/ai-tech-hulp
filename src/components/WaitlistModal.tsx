"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Send, CheckCircle2, Phone } from "lucide-react";
import { Particles } from "@/components/ui/highlighter";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setEmail("");
      setName("");
      setPhone("");
      setTitle("");
    }
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission - replace with actual form handler
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
              {/* Particle background */}
              <Particles
                className="absolute inset-0 opacity-40"
                quantity={150}
                color={"#7c3aed"}
                vy={-0.2}
              />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative p-8">
                {!submitted ? (
                  <>
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-4">
                        <Clock className="w-4 h-4" />
                        Even geduld
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        We zitten even vol
                      </h3>
                      <p className="text-gray-500">
                        In verband met de drukte nemen we tijdelijk geen nieuwe klanten aan. Zet je op de wachtlijst!
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                          placeholder="Je naam"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                          placeholder="Je functie (bijv. CEO, Marketing Manager)"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                          placeholder="Je e-mailadres"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                          placeholder="Je 06 nummer"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 disabled:bg-violet-400 transition-colors"
                      >
                        {loading ? (
                          "Even geduld..."
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Zet me op de wachtlijst
                          </>
                        )}
                      </button>
                    </form>

                    {/* Direct contact */}
                    <div className="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-gray-100">
                      <a href="tel:+31612345678" className="flex items-center gap-2 text-sm text-gray-500 hover:text-violet-600 transition-colors">
                        <Phone className="w-4 h-4" />
                        06 12 34 56 78
                      </a>
                      <span className="text-gray-300">•</span>
                      <a href="mailto:hello@vliegendekiep.tech" className="text-sm text-gray-500 hover:text-violet-600 transition-colors">
                        hello@vliegendekiep.tech
                      </a>
                    </div>
                  </>
                ) : (
                  /* Success state */
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Je staat op de lijst!
                    </h3>
                    <p className="text-gray-500 mb-6">
                      We nemen zo snel mogelijk contact met je op.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-colors"
                    >
                      Sluiten
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
