"use client";

import { Mail, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Hoe het werkt", href: "#hoe-het-werkt" },
  { label: "Prijzen", href: "#prijzen" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Voorwaarden", href: "/voorwaarden" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-10 md:py-8">
          {/* Mobile: Centered stacked layout */}
          <div className="flex flex-col items-center text-center md:hidden gap-8">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img
                src="/logo.svg"
                alt="VliegendeKiep"
                className="h-20 w-auto"
              />
            </a>

            {/* Links in 2 columns */}
            <nav className="grid grid-cols-2 gap-x-12 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-violet-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Email */}
            <a
              href="mailto:hello@vliegendekiep.tech"
              className="text-sm text-violet-600 font-medium hover:text-violet-700 transition-colors"
            >
              hello@vliegendekiep.tech
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@vliegendekiep.tech"
                className="w-10 h-10 bg-gray-100 hover:bg-violet-100 rounded-xl flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-violet-100 rounded-xl flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Desktop: Horizontal layout */}
          <div className="hidden md:flex md:items-center md:justify-between gap-6">
            {/* Left: Logo + socials */}
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center">
                <img
                  src="/logo.svg"
                  alt="VliegendeKiep"
                  className="h-16 w-auto"
                />
              </a>
              <div className="w-px h-6 bg-gray-200" />
              <div className="flex items-center gap-2">
                <a
                  href="mailto:hello@vliegendekiep.tech"
                  className="w-9 h-9 bg-gray-100 hover:bg-violet-100 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Mail className="w-4 h-4 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-100 hover:bg-violet-100 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>

            {/* Center: Links */}
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-violet-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Email */}
            <a
              href="mailto:hello@vliegendekiep.tech"
              className="text-sm text-gray-600 hover:text-violet-600 transition-colors"
            >
              hello@vliegendekiep.tech
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-3 border-t border-gray-100 flex justify-center">
          <p className="text-gray-400 text-xs">
            Gemaakt met <span className="text-violet-500">♥</span> in Nederland · © {new Date().getFullYear()} Vliegende Kiep
          </p>
        </div>
      </div>
    </footer>
  );
}
