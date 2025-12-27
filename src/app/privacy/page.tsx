import { Bird, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Lees hoe Vliegende Kiep omgaat met je persoonsgegevens en privacy.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center">
                <Bird className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Vliegende<span className="text-violet-600">Kiep</span>
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-violet-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Inleiding</h2>
            <p className="text-gray-600 mb-4">
              Vliegende Kiep ("wij", "ons" of "onze") respecteert de privacy van alle gebruikers van onze website vliegendekiep.tech en onze diensten. Wij zijn toegewijd aan het beschermen van uw persoonlijke gegevens.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Welke gegevens verzamelen wij?</h2>
            <p className="text-gray-600 mb-4">Wij kunnen de volgende gegevens verzamelen:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Naam en contactgegevens (e-mailadres, telefoonnummer)</li>
              <li>Bedrijfsinformatie</li>
              <li>Communicatiegeschiedenis</li>
              <li>Technische gegevens (IP-adres, browsertype)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Hoe gebruiken wij uw gegevens?</h2>
            <p className="text-gray-600 mb-4">Wij gebruiken uw gegevens om:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Onze diensten te leveren en te verbeteren</li>
              <li>Met u te communiceren over uw taken en projecten</li>
              <li>Klantenservice te bieden</li>
              <li>Te voldoen aan wettelijke verplichtingen</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Bewaartermijn</h2>
            <p className="text-gray-600 mb-4">
              Wij bewaren uw gegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld, tenzij een langere bewaartermijn wettelijk vereist is.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Uw rechten</h2>
            <p className="text-gray-600 mb-4">U heeft het recht om:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Inzage te vragen in uw persoonsgegevens</li>
              <li>Correctie of verwijdering van uw gegevens te verzoeken</li>
              <li>Bezwaar te maken tegen de verwerking</li>
              <li>Uw gegevens over te dragen</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact</h2>
            <p className="text-gray-600">
              Voor vragen over deze privacy policy kunt u contact opnemen via{" "}
              <a href="mailto:hello@vliegendekiep.tech" className="text-violet-600 hover:text-violet-700">
                hello@vliegendekiep.tech
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Vliegende Kiep. Alle rechten voorbehouden.
        </div>
      </footer>
    </main>
  );
}
