/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export function HoverOrganizacja() {
  const [page, setPage] = useState(0);

  const pages = [
    "Organizacja: Nasz zespół skupia się na efektywnym zarządzaniu projektem, dbając o każdy etap realizacji. Dzięki sprawnej komunikacji i jasno określonym celom zapewniamy płynność działań oraz wysoką jakość usług.",
    "Proces organizacyjny: Współpracujemy z klientem na każdym etapie, od koncepcji po finalizację projektu. Nasze doświadczenie pozwala nam przewidywać wyzwania i szybko na nie reagować, gwarantując terminowość oraz satysfakcję.",
    "Podsumowanie organizacji: Stawiamy na transparentność, zaangażowanie i profesjonalizm. Dzięki temu budujemy trwałe relacje z klientami i realizujemy projekty zgodnie z najwyższymi standardami branżowymi.",
  ];

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, pages.length - 1));
  };

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative  justify-center items-center w-full h-full z-50">
      {/* BLUR TŁO */}
      <div
        className="absolute justify-center items-center inset-0 backdrop-blur-md bg-white/70 z-0"
        style={{
          willChange: "opacity, transform, backdrop-filter",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          WebkitTransformStyle: "preserve-3d",
        }}
      />

      {/* TREŚĆ */}
      <div className="relative z-10 w-full h-full justify-between     border-l border-b border-l-black border-b-black shadow-lg p-6 flex flex-col ">
        {/* Tekst strony */}

        <div className="w-full gap-3   flex-col flex overflow-hidden justify-end items-end">
          {page === 1 || page === 2 ? (
            <div className="flex flex-row">
              <div className="w-9 h-6 justify-start items-start flex">
                <img
                  src="/ReIconBlue.svg"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="justify-end pt-1 items-end text-zinc-800 text-3xl font-light font-['Syne']">
                socjalizacja
              </div>
            </div>
          ) : null}

          {page === 0 ? (
            <div className="flex flex-row">
              <div className="w-9 h-6 justify-start items-start flex"></div>
            </div>
          ) : null}

          {page === 0 ? (
            <p className="text-neutral-700 text-start transition-opacity duration-300">
              {pages[page]}
            </p>
          ) : (
            <p className="text-neutral-700 text-end transition-opacity duration-300">
              {pages[page]}
            </p>
          )}
        </div>

        {/* Nawigacja i kontrolki */}
        <div className="flex flex-row justify-center items-center gap-4 mt-15">
          {/* Wskaźnik stron */}

          {/* Przyciski: Wstecz / Dalej */}
          <div className="flex gap-6">
            {/* Wstecz */}
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className={`w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center shadow-md transition ${
                page === 0 ? "opacity-0 cursor-not-allowed" : "hover:scale-105"
              }`}
            >
              <svg
                className="w-6 h-6 text-white -rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dalej */}
          </div>

          <div className="flex ">
            {pages.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 ${
                  i === page ? "bg-orange-600 w-10" : "bg-neutral-700 w-10"
                } transition-all`}
              />
            ))}
          </div>
          <div className="flex gap-6">
            <button
              onClick={handleNext}
              disabled={page === pages.length - 1}
              className={`w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center shadow-md transition ${
                page === pages.length - 1
                  ? "opacity-0 cursor-not-allowed"
                  : "hover:scale-105"
              }`}
            >
              <svg
                className="w-6 h-6 text-white rotate-360"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type HoverProps = {
  isOpen: boolean;
};

export function HoverAranzacja({ isOpen }: HoverProps) {
  const [page, setPage] = useState(0);

  const pages = [
    "Aranżacja wnętrz: Tworzymy przestrzenie, które łączą funkcjonalność z estetyką. Każdy projekt jest indywidualnie dopasowany do potrzeb klienta, uwzględniając najnowsze trendy oraz ergonomię.",
    "Proces aranżacji: Analizujemy oczekiwania i styl życia użytkowników, proponując rozwiązania, które podkreślają charakter wnętrza. Dbamy o detale, materiały i spójność kompozycji.",
    "Efekt końcowy aranżacji: Nasze realizacje wyróżniają się oryginalnością i komfortem. Dzięki kreatywnemu podejściu i doświadczeniu tworzymy miejsca, w których chce się przebywać każdego dnia.",
  ];

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, pages.length - 1));
  };

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full z-50 h-full ">
      {/* BLUR TŁO */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-white/70 z-0"
        style={{
          willChange: "opacity, transform, backdrop-filter",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          WebkitTransformStyle: "preserve-3d",
        }}
      />

      {/* TREŚĆ */}
      <div
        className={`relative z-10 w-full h-full border-l border-l-black ${
          isOpen ? "border-b shadow-lg border-b-black" : ""
        }  p-6 flex flex-col justify-between`}
      >
        {/* Tekst strony */}

        <div className="w-full   gap-3 flex-col flex overflow-hidden justify-end items-end">
          {page === 1 || page === 2 ? (
            <div className="flex flex-row">
              <div className="w-9 h-6 justify-start items-start flex">
                <img
                  src="/ReIconBlue.svg"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="justify-end items-end pt-1 text-zinc-800 text-3xl font-light font-['Syne']">
                mis
              </div>
            </div>
          ) : null}

          {page === 0 ? (
            <div className="flex flex-row">
              <div className="w-9 h-6 justify-start items-start flex"></div>
            </div>
          ) : null}

          {page === 0 ? (
            <p className="text-neutral-700 text-start transition-opacity duration-300">
              {pages[page]}
            </p>
          ) : (
            <p className="text-neutral-700 text-end transition-opacity duration-300">
              {pages[page]}
            </p>
          )}
        </div>

        {/* Nawigacja i kontrolki */}
        <div className="flex flex-row justify-between items-center gap-4 mt-6">
          {/* Wskaźnik stron */}

          {/* Przyciski: Wstecz / Dalej */}
          <div className="flex gap-6">
            {/* Wstecz */}
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className={`w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center shadow-md transition ${
                page === 0 ? "opacity-0 cursor-not-allowed" : "hover:scale-105"
              }`}
            >
              <svg
                className="w-6 h-6 text-white -rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dalej */}
          </div>

          <div className="flex z-10 ">
            {pages.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 ${
                  i === page ? "bg-orange-600 w-10" : "bg-neutral-700  w-10"
                } transition-all`}
              />
            ))}
          </div>
          <div className="flex gap-6">
            <button
              onClick={handleNext}
              disabled={page === pages.length - 1}
              className={`w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center shadow-md transition ${
                page === pages.length - 1
                  ? "opacity-0 cursor-not-allowed"
                  : "hover:scale-105"
              }`}
            >
              <svg
                className="w-6 h-6 text-white rotate-360"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HoverProjekt({ isOpen }: HoverProps) {
  const [page, setPage] = useState(0);

  const pages = [
    "Projekt: Każdy projekt rozpoczynamy od dogłębnej analizy potrzeb i oczekiwań klienta. Tworzymy koncepcje, które są innowacyjne, funkcjonalne i zgodne z wizją inwestora.",
    "Etapy projektowania: Pracujemy w oparciu o sprawdzone metody, łącząc kreatywność z techniczną precyzją. Współpracujemy z ekspertami z różnych dziedzin, aby zapewnić kompleksową obsługę.",
    "Rezultat projektu: Nasze projekty wyróżniają się wysoką jakością wykonania oraz dbałością o szczegóły. Realizujemy zarówno wnętrza mieszkalne, jak i komercyjne, zawsze z myślą o komforcie użytkowników.",
  ];

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, pages.length - 1));
  };

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full z-50 h-full ">
      {/* BLUR TŁO */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-white/70 z-0"
        style={{
          willChange: "opacity, transform, backdrop-filter",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          WebkitTransformStyle: "preserve-3d",
        }}
      />

      {/* TREŚĆ */}
      <div
        className={`relative z-10 w-full h-full border-l border-l-black ${
          isOpen ? "border-b shadow-lg border-b-black" : ""
        }  p-6 flex flex-col justify-between`}
      >
        {/* Tekst strony */}

        <div className="w-full   gap-3 flex-col flex overflow-hidden justify-end items-end">
          {page === 1 || page === 2 ? (
            <div className="flex flex-row">
              <div className="w-9 h-6 justify-start items-start flex">
                <img
                  src="/ReIconBlue.svg"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="justify-end items-end pt-1 text-zinc-800 text-3xl font-light font-['Syne']">
                mis
              </div>
            </div>
          ) : null}

          {page === 0 ? (
            <div className="flex flex-row">
              <div className="w-9 h-6 justify-start items-start flex"></div>
            </div>
          ) : null}

          {page === 0 ? (
            <p className="text-neutral-700 text-start transition-opacity duration-300">
              {pages[page]}
            </p>
          ) : (
            <p className="text-neutral-700 text-end transition-opacity duration-300">
              {pages[page]}
            </p>
          )}
        </div>

        {/* Nawigacja i kontrolki */}
        <div className="flex flex-row justify-between items-center gap-4 mt-6">
          {/* Wskaźnik stron */}

          {/* Przyciski: Wstecz / Dalej */}
          <div className="flex gap-6">
            {/* Wstecz */}
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className={`w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center shadow-md transition ${
                page === 0 ? "opacity-0 cursor-not-allowed" : "hover:scale-105"
              }`}
            >
              <svg
                className="w-6 h-6 text-white -rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dalej */}
          </div>

          <div className="flex z-10 ">
            {pages.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 ${
                  i === page ? "bg-orange-600 w-10" : "bg-neutral-700  w-10"
                } transition-all`}
              />
            ))}
          </div>
          <div className="flex gap-6">
            <button
              onClick={handleNext}
              disabled={page === pages.length - 1}
              className={`w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center shadow-md transition ${
                page === pages.length - 1
                  ? "opacity-0 cursor-not-allowed"
                  : "hover:scale-105"
              }`}
            >
              <svg
                className="w-6 h-6 text-white rotate-360"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
