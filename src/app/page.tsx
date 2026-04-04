import OfferteFormulier from "@/components/OfferteFormulier";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">&#9728;</span>
            <span className="text-xl font-bold text-gray-900">
              De Panelenwasser
            </span>
          </div>
          <a
            href="#offerte"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2 rounded-full text-sm transition-colors"
          >
            Gratis offerte
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-blue-100 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              100% osmosewater &bull; streeploos resultaat
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Schone zonnepanelen,{" "}
              <span className="text-sky-600">maximale opbrengst</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Vuile zonnepanelen leveren tot <strong>25% minder</strong> energie
              op. Wij reinigen uw panelen professioneel met osmosewater &mdash;
              zonder chemicali&euml;n, zonder strepen, zonder zorgen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#offerte"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-xl text-center transition-colors text-lg"
              >
                Bereken uw prijs
              </a>
              <a
                href="#waarom"
                className="border-2 border-gray-300 hover:border-sky-500 text-gray-700 font-semibold py-4 px-8 rounded-xl text-center transition-colors"
              >
                Meer informatie
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="text-6xl mb-4">&#9728;&#65039;</div>
              <p className="text-gray-500 text-lg">
                Professionele reiniging van uw zonnepanelen
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-sky-600">500+</div>
                  <div className="text-xs text-gray-400">Tevreden klanten</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sky-600">100%</div>
                  <div className="text-xs text-gray-400">Osmosewater</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sky-600">25%</div>
                  <div className="text-xs text-gray-400">Meer opbrengst</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom reinigen */}
      <section id="waarom" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Waarom uw zonnepanelen laten reinigen?
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Vuil, vogelpoep, pollen en fijnstof verminderen de opbrengst van uw
            panelen. Regelmatig reinigen loont.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "&#9889;",
                title: "Tot 25% meer opbrengst",
                desc: "Schone panelen vangen meer zonlicht op en produceren aanzienlijk meer energie.",
              },
              {
                icon: "&#128167;",
                title: "100% osmosewater",
                desc: "Wij gebruiken uitsluitend gedemineraliseerd water. Geen chemicaliën, geen strepen.",
              },
              {
                icon: "&#128197;",
                title: "Langere levensduur",
                desc: "Regelmatig reinigen voorkomt permanente schade door vuil en vogelpoep.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className="text-4xl mb-4"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staffelprijzen */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Onze staffelprijzen
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Hoe meer panelen, hoe voordeliger. Transparante prijzen, geen
            verrassingen.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                range: "1 – 5",
                prijs: "8,50",
                desc: "Ideaal voor kleine installaties",
              },
              {
                range: "5 – 20",
                prijs: "6,50",
                desc: "Meest gekozen door huishoudens",
                popular: true,
              },
              {
                range: "20 – 50",
                prijs: "5,00",
                desc: "Voor grote daken en bedrijven",
              },
            ].map((item) => (
              <div
                key={item.range}
                className={`rounded-2xl p-8 text-center ${
                  item.popular
                    ? "bg-sky-500 text-white shadow-xl scale-105"
                    : "bg-white shadow-md"
                }`}
              >
                {item.popular && (
                  <div className="text-xs font-bold uppercase tracking-widest mb-2 text-sky-100">
                    Populairst
                  </div>
                )}
                <div
                  className={`text-sm font-semibold mb-1 ${item.popular ? "text-sky-100" : "text-gray-400"}`}
                >
                  {item.range} panelen
                </div>
                <div className="text-4xl font-bold mb-1">
                  &euro;{item.prijs}
                </div>
                <div
                  className={`text-sm mb-4 ${item.popular ? "text-sky-100" : "text-gray-400"}`}
                >
                  per paneel (excl. BTW)
                </div>
                <p
                  className={`text-sm ${item.popular ? "text-sky-100" : "text-gray-500"}`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Hoe werkt het?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                stap: "1",
                title: "Offerte aanvragen",
                desc: "Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte.",
              },
              {
                stap: "2",
                title: "Afspraak inplannen",
                desc: "Wij plannen een datum die u het beste uitkomt.",
              },
              {
                stap: "3",
                title: "Reiniging",
                desc: "Onze vakmensen reinigen uw panelen met osmosewater.",
              },
              {
                stap: "4",
                title: "Meer opbrengst",
                desc: "Direct resultaat: schone panelen en meer energie.",
              },
            ].map((item) => (
              <div key={item.stap} className="text-center">
                <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.stap}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerte formulier */}
      <section id="offerte" className="py-20 bg-gradient-to-br from-sky-50 to-blue-100">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Vraag een vrijblijvende offerte aan
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Beantwoord een paar vragen en ontvang direct een indicatieprijs.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <OfferteFormulier />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">&#9728;</span>
            <span className="text-lg font-bold text-white">
              De Panelenwasser
            </span>
          </div>
          <p className="text-sm mb-2">
            Professioneel zonnepanelen reinigen met osmosewater
          </p>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} De Panelenwasser. Alle rechten
            voorbehouden.
          </p>
        </div>
      </footer>
    </>
  );
}
