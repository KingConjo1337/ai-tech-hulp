import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { WaitlistProvider } from "@/context/WaitlistContext";
import ClientLayout from "@/components/ClientLayout";
import { PostHogProvider } from "@/components/PostHogProvider";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const clashGrotesk = localFont({
  src: [
    {
      path: "../fonts/ClashGrotesk-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Vliegende Kiep | Je personal assistant voor tech en AI",
    template: "%s | Vliegende Kiep",
  },
  description: "Stop met uurtje-factuurtje. Krijg support voor automations, data, AI en andere tech vragen. Voor een vast bedrag per maand. Geen HR-gedoe, binnen 24-48 uur geregeld, maandelijks opzegbaar.",
  keywords: ["AI", "automation", "tech support", "MKB", "Nederland", "no-code", "ChatGPT", "CRM", "integraties", "personal assistant", "Vliegende Kiep"],
  authors: [{ name: "Vliegende Kiep" }],
  creator: "Vliegende Kiep",
  publisher: "Vliegende Kiep",
  metadataBase: new URL("https://vliegendekiep.tech"),
  openGraph: {
    title: "Vliegende Kiep | Je personal assistant voor tech en AI",
    description: "Stop met uurtje-factuurtje. Krijg support voor automations, data, AI en andere tech vragen. Voor een vast bedrag per maand.",
    url: "https://vliegendekiep.tech",
    siteName: "Vliegende Kiep",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vliegende Kiep - Je personal assistant voor tech en AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vliegende Kiep | Je personal assistant voor tech en AI",
    description: "Stop met uurtje-factuurtje. Krijg support voor automations, data, AI en andere tech vragen.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth overflow-x-hidden">
      <body className={`${rethinkSans.variable} ${clashGrotesk.variable} antialiased font-sans overflow-x-hidden`}>
        <PostHogProvider>
          <WaitlistProvider>
            <ClientLayout>
              {children}
            </ClientLayout>
          </WaitlistProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
