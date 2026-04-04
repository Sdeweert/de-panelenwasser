"use client";

import { useState } from "react";

const staffelprijzen = [
  { label: "1 – 5 panelen", min: 1, max: 5, prijsPerPaneel: 8.5 },
  { label: "5 – 20 panelen", min: 5, max: 20, prijsPerPaneel: 6.5 },
  { label: "20 – 50 panelen", min: 20, max: 50, prijsPerPaneel: 5.0 },
];

type DakType = "schuin" | "plat" | "";

export default function OfferteFormulier() {
  const [stap, setStap] = useState(1);
  const [dakType, setDakType] = useState<DakType>("");
  const [hoogLiggend, setHoogLiggend] = useState<boolean | null>(null);
  const [aantalStaffel, setAantalStaffel] = useState("");
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [adres, setAdres] = useState("");
  const [opmerking, setOpmerking] = useState("");
  const [verzonden, setVerzonden] = useState(false);

  const gekozenStaffel = staffelprijzen.find((s) => s.label === aantalStaffel);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: koppel aan email service of API
    console.log({
      dakType,
      hoogLiggend,
      aantalStaffel,
      naam,
      email,
      telefoon,
      adres,
      opmerking,
    });
    setVerzonden(true);
  };

  if (verzonden) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Bedankt voor uw aanvraag!
        </h3>
        <p className="text-green-700">
          We nemen binnen 24 uur contact met u op met een vrijblijvende offerte.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Stap 1: Daktype */}
      {stap >= 1 && (
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Op wat voor dak liggen uw panelen?
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setDakType("schuin");
                setStap(Math.max(stap, 2));
              }}
              className={`p-4 rounded-xl border-2 text-center transition-all ${
                dakType === "schuin"
                  ? "border-sky-500 bg-sky-50 text-sky-700"
                  : "border-gray-200 hover:border-sky-300"
              }`}
            >
              <div className="text-3xl mb-1">&#9650;</div>
              <span className="font-medium">Schuin dak</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setDakType("plat");
                setStap(Math.max(stap, 2));
              }}
              className={`p-4 rounded-xl border-2 text-center transition-all ${
                dakType === "plat"
                  ? "border-sky-500 bg-sky-50 text-sky-700"
                  : "border-gray-200 hover:border-sky-300"
              }`}
            >
              <div className="text-3xl mb-1">&#9644;</div>
              <span className="font-medium">Plat dak</span>
            </button>
          </div>
        </div>
      )}

      {/* Stap 2: Hoog liggend */}
      {stap >= 2 && (
        <div className="space-y-3 animate-[fadeIn_0.3s_ease-in]">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Liggen de panelen hoog? (meer dan 2 verdiepingen)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setHoogLiggend(true);
                setStap(Math.max(stap, 3));
              }}
              className={`p-4 rounded-xl border-2 text-center transition-all ${
                hoogLiggend === true
                  ? "border-sky-500 bg-sky-50 text-sky-700"
                  : "border-gray-200 hover:border-sky-300"
              }`}
            >
              <span className="font-medium">Ja, hoog</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setHoogLiggend(false);
                setStap(Math.max(stap, 3));
              }}
              className={`p-4 rounded-xl border-2 text-center transition-all ${
                hoogLiggend === false
                  ? "border-sky-500 bg-sky-50 text-sky-700"
                  : "border-gray-200 hover:border-sky-300"
              }`}
            >
              <span className="font-medium">Nee, laag</span>
            </button>
          </div>
        </div>
      )}

      {/* Stap 3: Aantal panelen (staffel) */}
      {stap >= 3 && (
        <div className="space-y-3 animate-[fadeIn_0.3s_ease-in]">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Hoeveel zonnepanelen heeft u?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {staffelprijzen.map((staffel) => (
              <button
                type="button"
                key={staffel.label}
                onClick={() => {
                  setAantalStaffel(staffel.label);
                  setStap(Math.max(stap, 4));
                }}
                className={`p-4 rounded-xl border-2 text-center transition-all ${
                  aantalStaffel === staffel.label
                    ? "border-sky-500 bg-sky-50 text-sky-700"
                    : "border-gray-200 hover:border-sky-300"
                }`}
              >
                <span className="font-bold text-lg block">{staffel.label}</span>
                <span className="text-sm text-gray-500">
                  vanaf &euro;{staffel.prijsPerPaneel.toFixed(2)} / paneel
                </span>
              </button>
            ))}
          </div>
          {gekozenStaffel && (
            <p className="text-sm text-sky-700 bg-sky-50 rounded-lg p-3">
              Indicatie: <strong>&euro;{(gekozenStaffel.min * gekozenStaffel.prijsPerPaneel).toFixed(2)}</strong> &ndash;{" "}
              <strong>&euro;{(gekozenStaffel.max * gekozenStaffel.prijsPerPaneel).toFixed(2)}</strong>{" "}
              (excl. BTW)
            </p>
          )}
        </div>
      )}

      {/* Stap 4: Contactgegevens */}
      {stap >= 4 && (
        <div className="space-y-4 animate-[fadeIn_0.3s_ease-in]">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Uw gegevens
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Naam *"
              required
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-sky-500 focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="E-mailadres *"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-sky-500 focus:outline-none transition-colors"
            />
            <input
              type="tel"
              placeholder="Telefoonnummer *"
              required
              value={telefoon}
              onChange={(e) => setTelefoon(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-sky-500 focus:outline-none transition-colors"
            />
            <input
              type="text"
              placeholder="Adres / postcode"
              value={adres}
              onChange={(e) => setAdres(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-sky-500 focus:outline-none transition-colors"
            />
          </div>
          <textarea
            placeholder="Opmerkingen (optioneel)"
            rows={3}
            value={opmerking}
            onChange={(e) => setOpmerking(e.target.value)}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-sky-500 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors cursor-pointer"
          >
            Vraag vrijblijvend offerte aan
          </button>
          <p className="text-xs text-gray-400 text-center">
            Wij nemen binnen 24 uur contact met u op. Geen verplichtingen.
          </p>
        </div>
      )}
    </form>
  );
}
