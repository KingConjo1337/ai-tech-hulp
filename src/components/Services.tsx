"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Bot,
  Link2,
  BarChart3,
  Wrench,
  Workflow,
  FileSpreadsheet,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Zap,
  Check,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    id: "ai-chatbot",
    icon: Bot,
    title: "AI Chatbots",
    shortDesc: "Slimme bots die voor je werken",
    description:
      "Een AI-assistent op je website die leads kwalificeert, vragen beantwoordt en afspraken inplant. 24/7 beschikbaar, nooit ziek.",
    features: [
      "Leads automatisch kwalificeren",
      "Afspraken direct in je agenda",
      "Getraind op jouw bedrijf",
      "Koppeling met je CRM",
    ],
    demo: "chatbot",
  },
  {
    id: "automations",
    icon: Workflow,
    title: "Automations",
    shortDesc: "Stop met handmatig werk",
    description:
      "Van handmatige processen naar volledig geautomatiseerde workflows. Nieuwe klant? Automatisch factuur, welkomstmail en Slack notificatie.",
    features: [
      "Workflows op maat",
      "Koppelingen tussen al je tools",
      "Uren per week besparen",
      "Geen fouten meer",
    ],
    demo: "automation",
  },
  {
    id: "dashboards",
    icon: BarChart3,
    title: "Dashboards",
    shortDesc: "Al je data op één plek",
    description:
      "Marketing data van Meta, LinkedIn, Google Ads en je website in één overzichtelijk dashboard. Real-time inzichten, geen spreadsheets meer.",
    features: [
      "Alle kanalen gecombineerd",
      "Real-time updates",
      "Custom KPI's",
      "Delen met je team",
    ],
    demo: "dashboard",
  },
  {
    id: "data",
    icon: FileSpreadsheet,
    title: "Data & Spreadsheets",
    shortDesc: "Van chaos naar structuur",
    description:
      "Complexe Excel sheets omzetten naar slimme databases. Automatische imports, data cleaning en rapportages die zichzelf updaten.",
    features: [
      "Excel naar database",
      "Automatische imports",
      "Data cleaning",
      "Slimme rapportages",
    ],
    demo: "spreadsheet",
  },
  {
    id: "tech-support",
    icon: Wrench,
    title: "Tech Support",
    shortDesc: "Kleine fixes, snel geregeld",
    description:
      '"Fix mijn DNS", "Installeer deze tool", "Mijn website is traag". Kleine technische problemen die jou uren kosten, doen wij in minuten.',
    features: [
      "DNS & hosting issues",
      "Tool installaties",
      "Website fixes",
      "Technisch advies",
    ],
    demo: "support",
  },
  {
    id: "integrations",
    icon: Link2,
    title: "Koppelingen",
    shortDesc: "Al je tools verbonden",
    description:
      "Stripe, Moneybird, HubSpot, Slack, Gmail — alles met elkaar verbonden. Data stroomt automatisch tussen je systemen.",
    features: [
      "API koppelingen",
      "Webhooks setup",
      "Data sync",
      "Custom integraties",
    ],
    demo: "integration",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training",
    shortDesc: "Leer je team de tools",
    description:
      "Hands-on training voor jou of je team. Leer werken met AI-tools, automations opzetten of specifieke software onder de knie krijgen.",
    features: [
      "1-op-1 of team sessies",
      "Praktische hands-on aanpak",
      "Op maat voor jouw tools",
      "Opname om terug te kijken",
    ],
    demo: "training",
  },
];

// Demo components - all using violet theme for consistency
function ChatbotDemo() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-violet-600 to-violet-700 px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <span className="text-white font-medium text-sm">AI Assistent</span>
      </div>
      <div className="p-4 space-y-3 bg-gray-50 min-h-[200px]">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
            <Bot className="w-4 h-4 text-violet-600" />
          </div>
          <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm max-w-[80%]">
            <p className="text-sm text-gray-700">Hoi! Waarmee kan ik je helpen vandaag?</p>
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <div className="bg-violet-600 rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[80%]">
            <p className="text-sm text-white">Ik wil meer weten over jullie prijzen</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
            <Bot className="w-4 h-4 text-violet-600" />
          </div>
          <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm max-w-[80%]">
            <p className="text-sm text-gray-700">We hebben 3 pakketten vanaf €699/mnd. Zal ik een demo inplannen?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationDemo() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-violet-600 to-violet-700 px-4 py-3">
        <span className="text-white font-medium text-sm">Workflow: Nieuwe klant</span>
      </div>
      <div className="p-4 bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
              <Check className="w-6 h-6 text-violet-600" />
            </div>
            <span className="text-xs text-gray-500 mt-1">Stripe</span>
          </div>
          <div className="flex-1 h-0.5 bg-violet-300 relative">
            <Zap className="w-4 h-4 text-violet-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50" />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
              <FileSpreadsheet className="w-6 h-6 text-violet-600" />
            </div>
            <span className="text-xs text-gray-500 mt-1">Moneybird</span>
          </div>
          <div className="flex-1 h-0.5 bg-violet-300 relative">
            <Zap className="w-4 h-4 text-violet-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50" />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-violet-600" />
            </div>
            <span className="text-xs text-gray-500 mt-1">Slack</span>
          </div>
        </div>
        <div className="mt-4 p-3 bg-violet-50 border border-violet-200 rounded-xl">
          <div className="flex items-center gap-2 text-violet-700 text-sm font-medium">
            <Check className="w-4 h-4" />
            Betaling ontvangen → Factuur aangemaakt → Team genotificeerd
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardDemo() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-violet-600 to-violet-700 px-4 py-3">
        <span className="text-white font-medium text-sm">Marketing Dashboard</span>
      </div>
      <div className="p-4 bg-gray-50">
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <p className="text-xs text-gray-500">Bezoekers</p>
            <p className="text-xl font-bold text-gray-900">12.4k</p>
            <p className="text-xs text-violet-600">+23%</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <p className="text-xs text-gray-500">Conversies</p>
            <p className="text-xl font-bold text-gray-900">847</p>
            <p className="text-xs text-violet-600">+12%</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <p className="text-xs text-gray-500">Revenue</p>
            <p className="text-xl font-bold text-gray-900">€34k</p>
            <p className="text-xs text-violet-600">+18%</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <div className="flex items-end gap-1 h-16">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-violet-600 to-violet-400 rounded-t"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SpreadsheetDemo() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-violet-600 to-violet-700 px-4 py-3">
        <span className="text-white font-medium text-sm">Klanten Database</span>
      </div>
      <div className="p-2 bg-gray-50 overflow-hidden">
        <div className="bg-white rounded-lg overflow-hidden text-xs">
          <div className="grid grid-cols-4 gap-px bg-gray-200">
            <div className="bg-gray-100 px-2 py-1.5 font-semibold text-gray-700">Naam</div>
            <div className="bg-gray-100 px-2 py-1.5 font-semibold text-gray-700">Email</div>
            <div className="bg-gray-100 px-2 py-1.5 font-semibold text-gray-700">Status</div>
            <div className="bg-gray-100 px-2 py-1.5 font-semibold text-gray-700">Waarde</div>
          </div>
          {[
            { name: "Acme BV", email: "info@acme.nl", status: "Klant", value: "€2.4k" },
            { name: "Tech Corp", email: "hello@tech.io", status: "Lead", value: "€1.8k" },
            { name: "Studio X", email: "hi@studiox.nl", status: "Klant", value: "€3.2k" },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-4 gap-px bg-gray-200">
              <div className="bg-white px-2 py-1.5 text-gray-900">{row.name}</div>
              <div className="bg-white px-2 py-1.5 text-gray-600">{row.email}</div>
              <div className="bg-white px-2 py-1.5">
                <span className={`px-1.5 py-0.5 rounded text-xs ${row.status === 'Klant' ? 'bg-violet-100 text-violet-700' : 'bg-gray-100 text-gray-600'}`}>
                  {row.status}
                </span>
              </div>
              <div className="bg-white px-2 py-1.5 text-gray-900 font-medium">{row.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DefaultDemo() {
  return (
    <div className="bg-gradient-to-br from-violet-600 to-violet-700 rounded-2xl shadow-xl p-8 min-h-[200px] flex items-center justify-center">
      <div className="text-center text-white">
        <Sparkles className="w-12 h-12 mx-auto mb-3 opacity-80" />
        <p className="font-medium opacity-90">Demo beschikbaar op aanvraag</p>
      </div>
    </div>
  );
}

function DemoComponent({ type }: { type: string }) {
  switch (type) {
    case "chatbot":
      return <ChatbotDemo />;
    case "automation":
      return <AutomationDemo />;
    case "dashboard":
      return <DashboardDemo />;
    case "spreadsheet":
      return <SpreadsheetDemo />;
    default:
      return <DefaultDemo />;
  }
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section
      id="diensten"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Onze expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Waar kunnen we mee{" "}
            <span className="text-gradient">helpen?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Klik op een dienst om te zien wat we voor je kunnen bouwen
          </p>
        </motion.div>

        {/* Interactive Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          {/* Left side - Service tabs */}
          <div className="space-y-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 ${
                  activeService.id === service.id
                    ? "border-violet-200 bg-violet-50 shadow-lg"
                    : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      activeService.id === service.id
                        ? "bg-gradient-to-br from-violet-600 to-violet-700 shadow-lg"
                        : "bg-gray-100"
                    }`}
                  >
                    <service.icon
                      className={`w-6 h-6 ${
                        activeService.id === service.id ? "text-white" : "text-gray-500"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.shortDesc}</p>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-all ${
                      activeService.id === service.id
                        ? "text-violet-600 translate-x-1"
                        : "text-gray-300"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right side - Demo preview */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Demo visual */}
                <DemoComponent type={activeService.demo} />

                {/* Description */}
                <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6">
                  <p className="text-gray-700 mb-4">{activeService.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {activeService.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#prijzen"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-violet-600 to-violet-700 text-white font-semibold rounded-2xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Dit wil ik ook
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Note + Full overview link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">
            We bouwen niet alles from scratch — we configureren, koppelen en optimaliseren bestaande tools voor jouw situatie.
          </p>
          <a
            href="#faq"
            className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors"
          >
            Bekijk het volledige overzicht van wat we wel en niet doen
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Tools banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <p className="text-center text-sm text-gray-400 mb-6">
            Tools waarmee we dagelijks werken
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {[
              "Make",
              "Zapier",
              "n8n",
              "ChatGPT",
              "Airtable",
              "Notion",
              "Stripe",
              "HubSpot",
            ].map((tool) => (
              <span key={tool} className="text-lg font-semibold text-gray-400">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
