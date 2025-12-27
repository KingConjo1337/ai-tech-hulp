import { Bird, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Bekijk de algemene voorwaarden van Vliegende Kiep.",
};

export default function Voorwaarden() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Algemene Voorwaarden</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Definities</h2>
            <p className="text-gray-600 mb-4">
              In deze algemene voorwaarden wordt verstaan onder:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Vliegende Kiep:</strong> de dienstverlener, gevestigd in Nederland</li>
              <li><strong>Klant:</strong> de natuurlijke of rechtspersoon die een overeenkomst aangaat</li>
              <li><strong>Diensten:</strong> de door Vliegende Kiep aangeboden tech support, automations en gerelateerde diensten</li>
              <li><strong>Taak:</strong> een afgebakend stuk werk zoals gedefinieerd in het gekozen pakket</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Toepasselijkheid</h2>
            <p className="text-gray-600 mb-4">
              Deze voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen Vliegende Kiep en de Klant.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Pakketten en Taken</h2>
            <p className="text-gray-600 mb-4">
              De dienstverlening wordt geleverd op basis van maandelijkse pakketten met een vast aantal taken:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Elke taak moet klein en afgebakend zijn</li>
              <li>Grotere projecten worden opgesplitst in meerdere taken</li>
              <li>Ongebruikte taken schuiven door naar de volgende maand (max. 1 maand)</li>
              <li>Taken zijn niet overdraagbaar aan derden</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Betaling</h2>
            <p className="text-gray-600 mb-4">
              Betaling geschiedt maandelijks vooraf. Prijzen zijn exclusief BTW tenzij anders vermeld. Bij niet-tijdige betaling behouden wij ons het recht voor de dienstverlening op te schorten.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Opzegging</h2>
            <p className="text-gray-600 mb-4">
              De overeenkomst kan maandelijks worden opgezegd met inachtneming van een opzegtermijn van 14 dagen voor het einde van de lopende maand.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Geld-terug-garantie</h2>
            <p className="text-gray-600 mb-4">
              Nieuwe klanten hebben recht op een 14 dagen geld-terug-garantie. Indien de Klant binnen 14 dagen na aanvang niet tevreden is, wordt het volledige bedrag gerestitueerd.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Aansprakelijkheid</h2>
            <p className="text-gray-600 mb-4">
              De aansprakelijkheid van Vliegende Kiep is beperkt tot het bedrag dat voor de betreffende dienst is betaald, met een maximum van het maandbedrag van het gekozen pakket.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Vertrouwelijkheid</h2>
            <p className="text-gray-600 mb-4">
              Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar hebben verkregen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Toepasselijk recht</h2>
            <p className="text-gray-600 mb-4">
              Op deze voorwaarden en alle overeenkomsten is Nederlands recht van toepassing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact</h2>
            <p className="text-gray-600">
              Voor vragen over deze voorwaarden kunt u contact opnemen via{" "}
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
