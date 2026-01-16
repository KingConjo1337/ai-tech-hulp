"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import WaitlistModal from "@/components/WaitlistModal";

type WaitlistSource = "hero" | "support" | "automate" | "transform" | "pricing" | "sticky" | "other";

interface WaitlistContextType {
  openWaitlist: (source?: WaitlistSource) => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<WaitlistSource>("other");

  const openWaitlist = (src: WaitlistSource = "other") => {
    setSource(src);
    setIsOpen(true);
  };
  const closeWaitlist = () => setIsOpen(false);

  return (
    <WaitlistContext.Provider value={{ openWaitlist }}>
      {children}
      <WaitlistModal isOpen={isOpen} onClose={closeWaitlist} source={source} />
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
}
