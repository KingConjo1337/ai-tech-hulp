"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hoe-het-werkt", label: "Hoe het werkt" },
  { href: "#prijzen", label: "Prijzen" },
  { href: "#faq", label: "FAQ" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleBannerClose = () => {
      setBannerVisible(false);
    };
    window.addEventListener("announcementBannerClosed", handleBannerClose);
    return () => window.removeEventListener("announcementBannerClosed", handleBannerClose);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed ${bannerVisible ? 'top-14 sm:top-10' : 'top-0'} left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center group relative">
              <img
                src={isScrolled ? "/favicon.svg" : "/logo.svg"}
                alt="VliegendeKiep"
                className={`w-auto transition-all duration-300 ${isScrolled ? "h-10 md:h-12" : "h-20 md:h-28 -mb-4 md:-mb-8 mt-6 md:mt-4"}`}
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#prijzen"
                className="relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-violet-700 text-white text-sm font-semibold rounded-full hover:from-violet-700 hover:to-violet-800 transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105"
              >
                Bekijk aanbod
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-violet-600 hover:bg-violet-50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 ${bannerVisible ? 'top-[7.5rem]' : 'top-[4rem]'} z-40 md:hidden`}
          >
            <div className="bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl">
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#prijzen"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3 px-4 text-center bg-gradient-to-r from-violet-600 to-violet-700 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-violet-800 transition-all"
                >
                  Bekijk aanbod
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
