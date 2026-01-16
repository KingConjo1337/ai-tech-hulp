"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Check,
  Search,
  Sparkles,
  Zap,
  BarChart3,
  Users,
  Megaphone,
  Plug,
  Blocks,
  HeadphonesIcon,
  ShoppingCart,
  Calculator,
  Bot,
  Brain,
  Star,
  ListFilter,
  Layers,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { tasks } from "@/data/tasks";
import Footer from "@/components/Footer";

const categories = [
  { id: "all", label: "Alles", icon: Sparkles, subtitle: "Alles wat we voor je kunnen regelen:" },
  { id: "popular", label: "Veel gevraagd", icon: Star, subtitle: "De populairste aanvragen van 2025:" },
  { id: "large", label: "Veel strippen", icon: Layers, subtitle: "Heb je strippen opgebouwd? Geef ze hier aan uit:" },
  { id: "outreach", label: "Outreach & Lijsten", icon: ListFilter, subtitle: "Leads en contactlijsten verzamelen:" },
  { id: "automation", label: "Automations", icon: Zap, subtitle: "Laat het werk zichzelf doen:" },
  { id: "ai", label: "AI & ML", icon: Brain, subtitle: "Slimme AI-oplossingen voor je business:" },
  { id: "data", label: "Data & Analytics", icon: BarChart3, subtitle: "Inzicht in je data en cijfers:" },
  { id: "crm", label: "CRM & Sales", icon: Users, subtitle: "Je klantrelaties op orde:" },
  { id: "marketing", label: "Marketing", icon: Megaphone, subtitle: "Bereik je doelgroep beter:" },
  { id: "integrations", label: "Integraties", icon: Plug, subtitle: "Al je tools aan elkaar koppelen:" },
  { id: "nocode", label: "No-Code", icon: Blocks, subtitle: "Bouwen zonder code:" },
  { id: "support", label: "Support", icon: HeadphonesIcon, subtitle: "Training, docs en troubleshooting:" },
  { id: "ecommerce", label: "E-commerce", icon: ShoppingCart, subtitle: "Je webshop optimaliseren:" },
  { id: "finance", label: "Finance", icon: Calculator, subtitle: "Boekhouding en financiën automatiseren:" },
  { id: "chatbots", label: "Chatbots", icon: Bot, subtitle: "Automatische klantgesprekken:" },
];

const quickFilters = [
  { id: "popular", label: "Populair", icon: Star },
  { id: "automation", label: "Automations", icon: Zap },
  { id: "ai", label: "AI", icon: Brain },
  { id: "outreach", label: "Outreach", icon: ListFilter },
];

export default function TakenPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowDock(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredTasks = tasks.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.task
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const taskCountByCategory = categories.map((cat) => ({
    ...cat,
    count:
      cat.id === "all"
        ? tasks.length
        : tasks.filter((t) => t.category === cat.id).length,
  }));

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-violet-600 to-violet-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-violet-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.svg" alt="VliegendeKiep" className="h-16 w-auto" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {tasks.length}+ taken die we voor je kunnen doen
          </h1>
          <p className="text-lg text-violet-200 max-w-2xl">
            Van LinkedIn scrapen tot AI chatbots, van cold email automation tot
            complete CRM setups. Alles wat je nodig hebt om te groeien.
          </p>
        </div>
      </header>

      {/* Search & Filters */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Zoek een taak..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
          </div>

          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {taskCountByCategory.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === cat.id
                      ? "bg-violet-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      selectedCategory === cat.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results count & subtitle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-sm font-semibold text-violet-600 mb-2">
          {categories.find((cat) => cat.id === selectedCategory)?.subtitle}
        </p>
        <p className="text-sm text-gray-500">
          {filteredTasks.length} taken gevonden
        </p>
      </div>

      {/* Task grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredTasks.map((item, index) => (
            <motion.div
              key={`${item.task}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: Math.min(index * 0.01, 0.5) }}
              className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:border-violet-300 hover:shadow-md transition-all group"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-violet-100 group-hover:bg-violet-200 rounded-full flex items-center justify-center transition-colors">
                <Check className="w-3.5 h-3.5 text-violet-600" />
              </div>
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                {item.task}
              </span>
            </motion.div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Geen taken gevonden voor deze zoekopdracht.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Staat jouw taak er niet bij?
          </h2>
          <p className="text-gray-600 mb-8">
            Geen probleem! We kunnen vrijwel alles. Plan een gratis gesprek en
            vertel ons wat je nodig hebt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#prijzen"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-colors"
            >
              Bekijk pakketten
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:hello@vliegendekiep.tech"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors"
            >
              Stuur een email
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pb-24">
        <Footer />
      </div>

      {/* Sticky Bottom Dock */}
      <AnimatePresence>
        {showDock && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                {/* Quick filters */}
                <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
                  <span className="text-xs text-gray-500 whitespace-nowrap hidden sm:block">Filter:</span>
                  {quickFilters.map((filter) => {
                    const Icon = filter.icon;
                    return (
                      <button
                        key={filter.id}
                        onClick={() => {
                          setSelectedCategory(filter.id);
                          window.scrollTo({ top: 300, behavior: "smooth" });
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                          selectedCategory === filter.id
                            ? "bg-violet-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {filter.label}
                      </button>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="hidden md:block text-right">
                    <p className="text-sm font-semibold text-gray-900">Klaar om te starten?</p>
                    <p className="text-xs text-gray-500">Al vanaf €699/maand</p>
                  </div>
                  <Link
                    href="/#prijzen"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
                  >
                    Bekijk pakketten
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
