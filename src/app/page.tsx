/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Syne } from "next/font/google";
/*
import Zakladka from "@/app/components/zakladka";
import {
  HoverAranzacja,
  HoverOrganizacja,
  HoverProjekt,
} from "@/app/components/Hover";
 */
import { AboutUsHover } from "@/app/components/AboutUsHover";
import { ContactHover } from "@/app/components/ContactHover";
import { Footer } from "@/app/components/Footer";
import { UpperMenu } from "@/app/components/UpperMenu";

const syneFont = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syne",
});

export default function Home() {
  /*
  const [showHoverOrganizacja, setShowHoverOrganizacja] = useState(false);
  const [showHoverAranzacja, setShowHoverAranzacja] = useState(false);
  const [showHoverProjekt, setShowHoverProjekt] = useState(false);
  */
  const [showAboutUsHover, setShowAboutUsHover] = useState(false);
  const [isClosingAboutUsHover, setIsClosingAboutUsHover] = useState(false);
  const [showContactHover, setShowContactHover] = useState(false);
  const [isClosingContactHover, setIsClosingContactHover] = useState(false);

  // --- helpers: animowane zamykanie About/Contact (500ms)
  const handleCloseAboutUsHover = () => {
    if (!showAboutUsHover) return;
    setIsClosingAboutUsHover(true);
    setTimeout(() => {
      setShowAboutUsHover(false);
      setIsClosingAboutUsHover(false);
    }, 500);
  };

  const handleCloseContactHover = () => {
    if (!showContactHover) return;
    setIsClosingContactHover(true);
    setTimeout(() => {
      setShowContactHover(false);
      setIsClosingContactHover(false);
    }, 500);
  };

  /*
  const openOrganizacja = () => {
    setShowHoverOrganizacja(true);
    setShowHoverAranzacja(false);
    setShowHoverProjekt(false);
    handleCloseAboutUsHover();
    handleCloseContactHover();
  };

  /*
  const openAranzacja = () => {
    setShowHoverOrganizacja(false);
    setShowHoverAranzacja(true);
    setShowHoverProjekt(false);
    handleCloseAboutUsHover();
    handleCloseContactHover();
  };

  /*
  const openProjekt = () => {
    setShowHoverOrganizacja(false);
    setShowHoverAranzacja(false);
    setShowHoverProjekt(true);
    handleCloseAboutUsHover();
    handleCloseContactHover();
  };
  */

  const openAbout = () => {
    setShowAboutUsHover(true);

    /*
    setShowHoverOrganizacja(false);
    setShowHoverAranzacja(false);
    setShowHoverProjekt(false);
    */
    handleCloseContactHover();
  };

  const openContact = () => {
    setShowContactHover(true);
    /*
    setShowHoverOrganizacja(false);
    setShowHoverAranzacja(false);
    setShowHoverProjekt(false);
    */
    handleCloseAboutUsHover();
  };

  const [showUpperMenu, setShowUpperMenu] = useState(false);
  const [isClosingUpperMenu, setIsClosingUpperMenu] = useState(false);

  const handleToggle = () => {
    if (showUpperMenu) {
      setIsClosingUpperMenu(true);
      setTimeout(() => {
        setShowUpperMenu(false);
        setIsClosingUpperMenu(false);
      }, 400); // musi odpowiadać Tailwindowemu duration
    } else {
      setShowUpperMenu(true);
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden md:p-0 md:w-full md:h-full ">
      <div
        className={`md:w-screen md:h-screen gap-5 p-8 md:pt-12 md:pl-12 md:pr-12 md:pb-12 justify-center items-center bg-white flex flex-col ${syneFont.variable} text-[#2E2E2E] font-[Syne]`}
      >
        <div className="relative md:w-[95%] md:h-full flex flex-col overflow-hidden border-gray-300">
          {/*KROPKA*/}

          <div className="w-full h-18 absolute z-[100]">
            <button onClick={handleToggle}>
              <div
                className={`w-18 h-18 absolute top-0 transition-all rounded-full bg-orange-600 duration-2000 ease-in-out
                  
        ${
          showUpperMenu && !isClosingUpperMenu
            ? "left-[calc(100%-4.5rem)]"
            : "left-0"
        }`}
              >
                <div className="w-18 h-18 flex justify-center items-center">
                  <svg
                    className={`w-6 h-6 text-white  ${
                      showUpperMenu && !isClosingUpperMenu
                        ? "-rotate-180  "
                        : "rotate-360 "
                    }`}
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
                </div>
              </div>
            </button>
            {showUpperMenu}
          </div>

          {/* UPPER MENU */}
          <div
            className={`flex w-full h-18 bg-white/70 shadow shadow-gray-300/50 justify-center rounded-[100px]
        transform transition-all duration-2000 ease-in-out relative overflow-hidden z-10
        ${
          showUpperMenu && !isClosingUpperMenu
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
          >
            <div
              className={`transition-opacity duration-300 ease-in-out flex w-full
          ${showUpperMenu && !isClosingUpperMenu ? "" : ""}`}
            >
              <UpperMenu />
            </div>
          </div>

          {/* AboutUsHover */}
          <div
            className={`relative md:absolute md:w-[80%] md:bottom-2/5 md:right-0 md:h-50  md:z-30  transition-transform duration-1000 ease-in-out ${
              showAboutUsHover && !isClosingAboutUsHover
                ? "translate-x-0 delay-1000"
                : "translate-x-[95%] delay-1000"
            }`}
          >
            <AboutUsHover
              isOpen={showAboutUsHover}
              onOpen={openAbout}
              onClose={handleCloseAboutUsHover}
            />
          </div>

          {/* ContactHover */}
          <div
            className={`md:absolute md:bottom-0  md:right-0 md:w-1/2 md:transition-all duration-1000 md:ease-in-out md:z-3 ${
              showContactHover && !isClosingContactHover
                ? "md:translate-y-0 delay-1500  md:pointer-events-auto"
                : "md:translate-y-[80%] delay-2000 md:pointer-events-auto"
            }`}
          >
            <ContactHover
              isOpen={showContactHover}
              onOpen={openContact}
              onClose={handleCloseContactHover}
            />
          </div>

          {/* Logo */}
          <div className="absolute bottom-0 z-1 left-0">
            <img src="/logo.svg" className="w-auto h-auto" />
          </div>
        </div>
      </div>
      <div className="w-full ">
        <Footer />
      </div>
    </div>
  );
}

/*
<div
            className="absolute inset-x-0 top-0 
              flex flex-col gap-10 w-full 
              md:static md:z-100 md:grid md:grid-cols-3 md:gap-10 md:w-full md:p-0 md:h-24 md:justify-between"
          >
            {menuItems.map((item, index) => {
              const base =
                "w-full md:w-full bg-white md:h-full border-zinc-800 flex items-center justify-start p-6 cursor-pointer border-l md:border-l";

              const perIndex = [
                "z-50 md:border-t-0", // index 0
                "z-50 ", // index 1
                "z-90", // index 2
              ] as const;

              const openFns = [openOrganizacja, openAranzacja, openProjekt];

              return (
                <div
                  key={item}
                  className={`${base} ${perIndex[index] ?? ""}`}
                  onClick={openFns[index]}
                >
                  <Zakladka
                    text={item}
                    isOpen={
                      (index === 0 && showHoverOrganizacja) ||
                      (index === 1 && showHoverAranzacja) ||
                      (index === 2 && showHoverProjekt)
                    }
                    onClose={() => {
                      if (index === 0) setShowHoverOrganizacja(false);
                      if (index === 1) setShowHoverAranzacja(false);
                      if (index === 2) setShowHoverProjekt(false);
                    }}
                  />
                </div>
              );
            })}
          </div>

          */
