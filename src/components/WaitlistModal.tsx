"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, ArrowRight, CheckCircle2, Gift, Loader2 } from "lucide-react";
import { Particles } from "@/components/ui/highlighter";

type WaitlistSource = "hero" | "support" | "automate" | "transform" | "pricing" | "sticky" | "other";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: WaitlistSource;
}

const packages = [
  { value: "support", label: "Support", description: "€699/maand - 3 strippen" },
  { value: "automate", label: "Automate", description: "€1.299/maand - 6 strippen" },
  { value: "transform", label: "Transform", description: "€2.199/maand - 12 strippen" },
];

export default function WaitlistModal({ isOpen, onClose, source = "other" }: WaitlistModalProps) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [interestedPackage, setInterestedPackage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setEmail("");
      setName("");
      setRole("");
      setPhone("");
      setError("");
      // Pre-select package if source is a package name
      if (["support", "automate", "transform"].includes(source)) {
        setInterestedPackage(source);
      } else {
        setInterestedPackage("");
      }
    }
  }, [isOpen, source]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStep(2);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          role,
          phone,
          interestedPackage,
          source,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Er ging iets mis");
      }

      setStep(3); // Success
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis");
    } finally {
      setLoading(false);
    }
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
                {/* Step 1: Email */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
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

                    <form onSubmit={handleEmailSubmit} className="space-y-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                        placeholder="Je e-mailadres"
                      />
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-colors"
                      >
                        Verder
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>

                    <div className="flex items-center justify-center gap-2 mt-5 pt-5 border-t border-gray-100">
                      <Gift className="w-4 h-4 text-violet-500" />
                      <p className="text-sm text-gray-500">
                        Wachtlijst-leden krijgen een <span className="font-medium text-violet-600">extra beloning</span>
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: More details */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                        <CheckCircle2 className="w-4 h-4" />
                        Bijna klaar
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Nog een paar details
                      </h3>
                      <p className="text-gray-500">
                        Zodat we je beter kunnen helpen
                      </p>
                    </div>

                    <form onSubmit={handleFinalSubmit} className="space-y-3">
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                        placeholder="Je naam"
                      />
                      <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                        placeholder="Je rol (bijv. CEO, Marketing Manager)"
                      />
                      <select
                        value={interestedPackage}
                        onChange={(e) => setInterestedPackage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                      >
                        <option value="">Welk pakket heeft je interesse?</option>
                        {packages.map((pkg) => (
                          <option key={pkg.value} value={pkg.value}>
                            {pkg.label} - {pkg.description}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                        placeholder="Je telefoonnummer (optioneel)"
                      />

                      {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 disabled:bg-violet-400 transition-colors"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Even geduld...
                          </>
                        ) : (
                          <>
                            Zet me op de wachtlijst
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>

                    <button
                      onClick={() => setStep(1)}
                      className="w-full text-center text-sm text-gray-400 hover:text-gray-600 mt-4"
                    >
                      Terug
                    </button>
                  </motion.div>
                )}

                {/* Step 3: Success */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Je staat op de lijst!
                    </h3>
                    <p className="text-gray-500 mb-4">
                      We laten je weten zodra er plek is.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 text-violet-700 rounded-full text-sm font-medium mb-6">
                      <Gift className="w-4 h-4" />
                      Je krijgt een mooie verrassing!
                    </div>
                    <button
                      onClick={onClose}
                      className="block w-full px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-colors"
                    >
                      Sluiten
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
