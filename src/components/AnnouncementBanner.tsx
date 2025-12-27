"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    // Dispatch custom event to notify Navigation
    window.dispatchEvent(new CustomEvent('announcementBannerClosed'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-violet-600 to-violet-700 text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm sm:text-base">
        <span className="font-semibold bg-white/20 px-2 py-0.5 rounded text-xs uppercase tracking-wide">
          Nieuw
        </span>
        <span className="text-center">
          Vanaf 2026: wissel 10 strippen in voor een teamtraining van{" "}
          <a href="https://projectimpact.nl" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80">Projectimpact.nl</a>
          <span className="hidden sm:inline"> (nieuwe samenwerking)</span>
        </span>
      </div>
      <button
        onClick={handleClose}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded transition-colors"
        aria-label="Sluiten"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
