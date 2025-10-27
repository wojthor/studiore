/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useCallback, useMemo, useEffect } from "react";

/* ---------------------- HEADER ---------------------- */
function HeaderRow({
  showIcon,
  title,
  alignEndOnDesktop = true,
}: {
  showIcon: boolean;
  title: string[];
  alignEndOnDesktop?: boolean;
}) {
  return showIcon ? (
    <div
      className={`flex flex-row items-center ${
        alignEndOnDesktop ? "justify-end" : "justify-start"
      }`}
    >
      <div className="w-9 h-6 justify-center items-center flex">
        <img
          src="/ReIconBlue.svg"
          className="w-8 h-8 md:w-10 md:h-10 justify-center items-center object-contain"
        />
      </div>
      <div className="pt-1 text-zinc-800 text-2xl md:text-3xl font-light font-['Syne']">
        {title[0]}
      </div>
    </div>
  ) : (
    <div className="flex flex-row">
      <div className="w-9 h-6 justify-start items-start flex" />
    </div>
  );
}

/* ------------------- BORDER DRAW SHELL ------------------- */
export function BorderDrawShell({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  return (
    <div className="relative w-full h-full z-50">
      {/* TŁO */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-white/70 z-0"
        style={{
          willChange: "opacity, transform, backdrop-filter",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          WebkitTransformStyle: "preserve-3d",
        }}
      />

      {/* BORDER DRAW */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* pion lewy */}
        <div
          className={[
            "absolute left-0 top-0 h-full w-px bg-black origin-top",
            "transition-all  will-change-transform",
            isOpen
              ? "scale-y-100 duration-2000  IDZIE"
              : "scale-y-0 delay-1300 duration-3000 WRACA",
          ].join(" ")}
        />
        {/* poziom dolny */}
        <div
          className={[
            "absolute left-0 bottom-0 w-full h-px bg-black origin-left",
            "transition-transform  will-change-transform",
            isOpen
              ? "scale-x-100 delay-1500  duration-1500 IDZIE "
              : "scale-x-0  duration-1500 WRACA",
          ].join(" ")}
        />
      </div>

      {/* TREŚĆ */}
      <div
        className={`relative z-20 w-full h-full p-4 md:p-6 flex flex-col justify-between
    transition-[box-shadow] duration-300 ease-in-out
    ${isOpen ? "shadow-lg delay-0" : "shadow-none delay-1500"}`}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------- ORGANIZACJA ------------------------- */
export function HoverOrganizacja({ isOpen }: { isOpen: boolean }) {
  const [page, setPage] = useState(0);

  const pages = useMemo(
    () => [
      {
        title: [""],
        description:
          "Odzyskanie porządku i lekkości w codziennym życiu wydaje ci się niemożliwe? Dzięki usłudze declutteringu zorganizujemy Twoją przestrzeń tak, by była funkcjonalna, estetyczna i wolna od nadmiaru. Szafy, kuchnie, całe mieszkania – każde miejsce może oddychać na nowo. Zacznij od porządku i poczuj różnicę. Poznaj nasze warianty dostosowane do twoich potrzeb.",
      },
      {
        title: ["start"],
        description:
          "Proces organizacyjny: Współpracujemy z klientem na każdym etapie, od koncepcji po finalizację projektu. Nasze doświadczenie pozwala nam przewidywać wyzwania i szybko na nie reagować, gwarantując terminowość oraz satysfakcję.",
      },
      {
        title: ["claim"],
        description:
          "Podsumowanie organizacji: Stawiamy na transparentność, zaangażowanie i profesjonalizm. Dzięki temu budujemy trwałe relacje z klientami i realizujemy projekty zgodnie z najwyższymi standardami branżowymi.",
      },
    ],
    []
  );

  useEffect(() => {
    if (isOpen) setPage(0);
  }, [isOpen]);

  const handleNext = useCallback(
    () => setPage((prev) => Math.min(prev + 1, pages.length - 1)),
    [pages.length]
  );
  const handlePrev = useCallback(
    () => setPage((prev) => Math.max(prev - 1, 0)),
    []
  );

  const showIcon = page === 1 || page === 2;

  return (
    <BorderDrawShell isOpen={isOpen}>
      <section
        role="region"
        aria-live="polite"
        className="w-full gap-3 flex flex-col overflow-hidden"
      >
        <HeaderRow showIcon={showIcon} title={pages[page].title} />{" "}
        <p
          className={`text-neutral-700 transition-opacity duration-300 text-sm leading-relaxed md:text-base ${
            page === 0 ? "text-start" : "md:text-end"
          }`}
        >
          {pages[page].description}
        </p>
      </section>

      {/* Nawigacja */}
      <div className="flex flex-row justify-between items-center gap-4 mt-6">
        <div className="flex gap-6">
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
        </div>

        <div className="flex z-10 ">
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
    </BorderDrawShell>
  );
}

/* ------------------------- ARANŻACJA ------------------------- */
type HoverProps = { isOpen: boolean };

export function HoverAranzacja({ isOpen }: HoverProps) {
  const [page, setPage] = useState(0);

  const pages = useMemo(
    () => [
      {
        title: [""],
        description:
          "Chcesz, aby twoje mieszkanie prezentowało się perfekcyjnie?Oferujemy kompleksową aranżację wnętrz oraz profesjonalny home staging. Niezależnie od tego, czy chcesz stworzyć wymarzoną przestrzeń do życia, czy sprzedać nieruchomość szybciej i z zyskiem – pomożemy Ci wydobyć pełen potencjał każdego wnętrza. Sprawdź, jak duża różnica tkwi w detalach.Poznaj nasze warianty dostosowane do twoich potrzeb.",
      },
      {
        title: ["form"],
        description:
          "Proces aranżacji: Analizujemy oczekiwania i styl życia użytkowników, proponując rozwiązania, które podkreślają charakter wnętrza. Dbamy o detale, materiały i spójność kompozycji.",
      },
      {
        title: ["frame"],
        description:
          "Efekt końcowy aranżacji: Nasze realizacje wyróżniają się oryginalnością i komfortem. Dzięki kreatywnemu podejściu i doświadczeniu tworzymy miejsca, w których chce się przebywać każdego dnia.",
      },
    ],
    []
  );

  useEffect(() => {
    if (isOpen) setPage(0);
  }, [isOpen]);

  const handleNext = useCallback(
    () => setPage((prev) => Math.min(prev + 1, pages.length - 1)),
    [pages.length]
  );
  const handlePrev = useCallback(
    () => setPage((prev) => Math.max(prev - 1, 0)),
    []
  );

  const showIcon = page === 1 || page === 2;

  return (
    <BorderDrawShell isOpen={isOpen}>
      <section
        role="region"
        aria-live="polite"
        className="w-full gap-3 flex flex-col overflow-hidden"
      >
        <HeaderRow showIcon={showIcon} title={pages[page].title} />{" "}
        {/* reframe */}
        <p
          className={`text-neutral-700 transition-opacity duration-300 text-sm leading-relaxed md:text-base ${
            page === 0 ? "text-start" : "md:text-end"
          }`}
        >
          {pages[page].description}
        </p>
      </section>

      {/* Nawigacja */}
      <div className="flex flex-row justify-between items-center gap-4 mt-6">
        <div className="flex gap-6">
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
        </div>

        <div className="flex z-10 ">
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
    </BorderDrawShell>
  );
}

/* --------------------------- PROJEKT --------------------------- */
export function HoverProjekt({ isOpen }: HoverProps) {
  const [page, setPage] = useState(0);

  const pages = useMemo(
    () => [
      {
        title: [""],
        description:
          "Marzysz o pięknym, funkcjonalnym wnętrzu, które odzwierciedla Twój charakter? Zaufaj naszemu doświadczeniu i pasji do projektowania. Tworzymy przestrzenie, w których chce się żyć – od pierwszego szkicu po dopracowany detal.  Zrealizuj z nami Twoje pomysly.Poznaj nasze warianty dostosowane do Twoich potrzeb.",
      },
      {
        title: ["shape"],
        description:
          "Etapy projektowania: Pracujemy w oparciu o sprawdzone metody, łącząc kreatywność z techniczną precyzją. Współpracujemy z ekspertami z różnych dziedzin, aby zapewnić kompleksową obsługę.",
      },
      {
        title: ["vision"],
        description:
          "Rezultat projektu: Nasze projekty wyróżniają się wysoką jakością wykonania oraz dbałością o szczegóły. Realizujemy zarówno wnętrza mieszkalne, jak i komercyjne, zawsze z myślą o komforcie użytkowników.",
      },
    ],
    []
  );

  useEffect(() => {
    if (isOpen) setPage(0);
  }, [isOpen]);

  const handleNext = useCallback(
    () => setPage((prev) => Math.min(prev + 1, pages.length - 1)),
    [pages.length]
  );
  const handlePrev = useCallback(
    () => setPage((prev) => Math.max(prev - 1, 0)),
    []
  );

  const showIcon = page === 1 || page === 2;

  return (
    <BorderDrawShell isOpen={isOpen}>
      <section
        role="region"
        aria-live="polite"
        className="w-full gap-3 flex flex-col overflow-hidden"
      >
        <HeaderRow showIcon={showIcon} title={pages[page].title} />{" "}
        {/* revision */}
        <p
          className={`text-neutral-700 transition-opacity duration-300 text-sm leading-relaxed md:text-base ${
            page === 0 ? "text-start" : "md:text-end"
          }`}
        >
          {pages[page].description}
        </p>
      </section>

      {/* Nawigacja */}
      <div className="flex flex-row justify-between items-center gap-4 mt-6">
        <div className="flex gap-6">
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
        </div>

        <div className="flex z-10 ">
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
    </BorderDrawShell>
  );
}
