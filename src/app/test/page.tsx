"use client";

import { useState } from "react";

/* eslint-disable @next/next/no-img-element */

export default function AboutUsHover({}) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div
      className={`relative group overflow-hidden flex flex-row w-[80%] h-50 lg:h-50 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.02)] border border-white/20  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gradient-to-r hover:from-white/98 hover:via-white/95 hover:to-white/98 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.04)] hover:border-white/30 ${
        isOpen ? "bg-gradient-to-r from-white/98 via-white/96 to-white/98" : ""
      }`}
    >
      <div
        className={`absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent transition-all duration-1000 ease-out ${
          isOpen ? "opacity-100 scale-x-100" : "opacity-40 scale-x-75"
        }`}
      />

      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 rounded-2xl bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20 group-hover:opacity-100" />

      {/* Left sidebar - vertical orientation maintained */}
      <div
        className="relative z-10 flex flex-col items-center justify-between w-20 lg:w-24 h-full cursor-pointer group/sidebar transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gradient-to-b hover:from-white/40 hover:to-white/20 rounded-l-2xl"
        onClick={() => {
          if (!isOpen) onOpen();
        }}
      >
        {/* "O NAS" text */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-8">
          <p className="font-light tracking-[0.2em] uppercase text-slate-700 transition-all duration-500 text-base lg:text-xl -rotate-90 whitespace-nowrap group-hover/sidebar:text-slate-900 group-hover/sidebar:tracking-[0.25em] group-hover/sidebar:transform group-hover/sidebar:scale-105 drop-shadow-sm">
            O NAS
          </p>
        </div>

        {/* Close button */}
        {isOpen && (
          <div className="flex items-center justify-center p-4 transition-all duration-500 ease-out animate-in fade-in slide-in-from-top-3 duration-700">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg shadow-black/5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/80 hover:border-white/60 hover:shadow-xl hover:shadow-black/10 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400/30 focus:ring-offset-2"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Close about section"
            >
              <img
                className="w-4 h-4 transition-all duration-300 hover:rotate-180 opacity-70 hover:opacity-100"
                src="/arrow3.svg"
                alt="Close"
              />
            </button>
          </div>
        )}
      </div>

      <div
        className={`relative z-10 flex-1 flex flex-row transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] gap-8 p-8 lg:gap-12 lg:p-12 h-full ${
          isOpen
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-95 translate-x-2 scale-[0.99]"
        }`}
      >
        {/* Person 1 - Row layout with image on left, text on right */}
        <div className="flex-1 flex flex-row gap-6 lg:gap-8 group/person transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:transform hover:scale-[1.02] hover:translate-y-[-2px] h-full">
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 mb-3 relative group/avatar">
              <img
                className="w-full h-full object-cover  shadow-lg shadow-black/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/avatar:shadow-xl group-hover/avatar:shadow-black/15 group-hover/avatar:scale-105 border border-white/40"
                src="leb.png"
                alt="Aneta Rompkowska"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="text-xs lg:text-sm font-medium text-slate-800 text-center leading-tight tracking-[0.1em] uppercase transition-all duration-300 group-hover/person:text-slate-900 group-hover/person:tracking-[0.15em]">
              ANETA
              <br />
              ROMPKOWSKA
            </h3>
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <div className="overflow-y-auto max-h-full pr-2">
              <p className="text-xs lg:text-sm text-slate-600 leading-relaxed font-light tracking-wide transition-all duration-300 group-hover/person:text-slate-700 leading-[1.6]">
                Cześć! Od 10 lat jestem architektem z pasją do tworzenia
                przestrzeni, które nie tylko dobrze wyglądają, ale też dobrze
                się w nich żyje. Wierzę, że wnętrze= mieszkancy — dlatego każdy
                projekt traktuję indywidualnie, z pełnym zaangażowaniem i
                uważnością na detale. Łączę estetykę z praktycznymi
                rozwiązaniami oraz często pracuję z osobami, które chcą odzyskać
                harmonię w swoim domu – także poprzez decluttering i świadome
                projektowanie. Pracuję kompleksowo – od koncepcji, aż po nadzór
                nad realizacją. Jeśli marzysz o wnętrzu NA PRAWDĘ dopasowanym do
                Ciebie – zapraszam do współpracy.
              </p>
            </div>
          </div>
        </div>

        <div className="w-px bg-gradient-to-b from-transparent via-slate-300/40 to-transparent" />

        {/* Person 2 - Same row layout structure */}
        <div className="flex-1 flex flex-row gap-6 lg:gap-8 group/person transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:transform hover:scale-[1.02] hover:translate-y-[-2px] h-full">
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 mb-3 relative group/avatar">
              <img
                className="w-full h-full object-cover rounded-2xl shadow-lg shadow-black/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/avatar:shadow-xl group-hover/avatar:shadow-black/15 group-hover/avatar:scale-105 border border-white/40"
                src="leb.png"
                alt="Martyna Wilczyńska"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="text-xs lg:text-sm font-medium text-slate-800 text-center leading-tight tracking-[0.1em] uppercase transition-all duration-300 group-hover/person:text-slate-900 group-hover/person:tracking-[0.15em]">
              MARTYNA
              <br />
              WILCZYŃSKA
            </h3>
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <div className="overflow-y-auto max-h-full pr-2">
              <p className="text-xs lg:text-sm text-slate-600 leading-relaxed font-light tracking-wide transition-all duration-300 group-hover/person:text-slate-700 leading-[1.6]">
                Cześć! Jestem specjalistką w organizowaniu i dekorowaniu
                przestrzeni, tak aby była funkcjonalna, a zarazem autentyczna.
                Nie oceniam - wspieram, bo każda współpraca to indywidualna
                podróż, której celem jest TWÓJ komfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
