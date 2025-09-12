"use client";

import { useState } from "react";
import { Syne } from "next/font/google";
import Zakladka from "@/app/components/zakladka";
import {
  HoverAranzacja,
  HoverOrganizacja,
  HoverProjekt,
} from "@/app/components/Hover";
import { AboutUsHover } from "@/app/components/AboutUsHover";
import { ContactHover } from "@/app/components/ContactHover";

const syneFont = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syne",
});

export default function Home() {
  const [showHoverOrganizacja, setShowHoverOrganizacja] = useState(false);
  const [showHoverAranzacja, setShowHoverAranzacja] = useState(false);
  const [showHoverProjekt, setShowHoverProjekt] = useState(false);
  const [showAboutUsHover, setShowAboutUsHover] = useState(false);
  const [isClosingAboutUsHover, setIsClosingAboutUsHover] = useState(false);
  const [showContactHover, setShowContactHover] = useState(false);
  const [isClosingContactHover, setIsClosingContactHover] = useState(false);

  const handleCloseAboutUsHover = () => {
    setIsClosingAboutUsHover(true);
    setTimeout(() => {
      setShowAboutUsHover(false);
      setIsClosingAboutUsHover(false);
    }, 500);
  };

  const handleCloseContactHover = () => {
    setIsClosingContactHover(true);
    setTimeout(() => {
      setShowContactHover(false);
      setIsClosingContactHover(false);
    }, 500);
  };

  const menuItems = ["organizacja", "aranżacja", "projekt"];

  return (
    <div className="w-full h-full">
      <div
        className={`w-screen h-screen md:p-12 justify-center items-center bg-white flex flex-col ${syneFont.variable} text-[#2E2E2E] font-[Syne]`}
      >
        <div className="w-[95%] h-full  flex flex-col relative overflow-hidden  border-gray-300">
          <div className="grid grid-cols-3 gap-10 w-full md:h-24 justify-between">
            {menuItems.map((item, index) => (
              <div
                key={item}
                className="w-full h-full border-l z-100  border-zinc-800 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  if (index === 0) setShowHoverOrganizacja(true);
                  if (index === 1) setShowHoverAranzacja(true);
                  if (index === 2) setShowHoverProjekt(true);
                }}
              >
                <Zakladka
                  text={item}
                  showClose={
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
            ))}
          </div>

          <div className="relative w-full h-3/4 gap-10  grid grid-cols-3">
            <div
              className={`col-span-1 w-full h-full z-50  transition-transform duration-500 ease-in-out ${
                showHoverOrganizacja
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0 pointer-events-none"
              }`}
            >
              <HoverOrganizacja />
            </div>
            <div
              className={`col-span-1 w-full h-full z-50 transition-all duration-800 ease-in-out transform ${
                showHoverAranzacja
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-75 pointer-events-none"
              } flex justify-center`}
            >
              <HoverAranzacja isOpen={showHoverAranzacja} />
            </div>
            <div
              className={`col-span-1 w-full h-full z-50 transition-all duration-800 ease-in-out ${
                showHoverProjekt
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-75 pointer-events-none"
              } flex justify-end`}
            >
              <HoverProjekt isOpen={showHoverProjekt} />
            </div>
          </div>
          {/* AboutUsHover */}
          <div
            className={`absolute w-[65.6%] bottom-2/5 right-0 h-48 z-30  transition-transform duration-500 ease-in-out ${
              showAboutUsHover && !isClosingAboutUsHover
                ? "translate-x-0"
                : "translate-x-[95%]"
            }`}
          >
            <AboutUsHover
              isOpen={showAboutUsHover}
              onOpen={() => setShowAboutUsHover(true)}
              onClose={handleCloseAboutUsHover}
            />
          </div>

          {/* ContactHover */}
          <div
            className={`absolute bottom-0  right-0 w-1/2 transition-all   duration-500 ease-in-out z-3 ${
              showContactHover && !isClosingContactHover
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "translate-y-[80%] opacity-100 pointer-events-auto"
            }`}
          >
            <div
              className={
                showContactHover && !isClosingContactHover
                  ? "hidden"
                  : "border-t w-48 justify-self-end"
              }
            ></div>
            <ContactHover
              isOpen={showContactHover}
              onOpen={() => setShowContactHover(true)}
              onClose={handleCloseContactHover}
            />
          </div>

          {/* Logo */}
          <div className="absolute bottom-0 z-1 left-0">
            <img src="/logo.svg" className="w-auto h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<div className="absolute w-full justify-end h-full bottom-0 right-[5%] flex flex-col items-end font-[Syne]">
              <div className="w-40 h-px bg-zinc-800 mb-2 font-[Syne]" />
              <p
                className={`cursor-pointer  z-999 translate-y-2 text-black text-2xl font-[Syne] transition-colors duration-300 ${
                  showContactHover || isClosingContactHover
                    ? "translate-y-50"
                    : "translate-y-0"
                }`}
                onClick={() => setShowContactHover(true)}
              >
                KONTAKT
              </p>
            </div>
            */

/*
            <div
              className={`z-1 absolute bottom-0 right-0 w-1/2 h-auto  transition-all duration-500 ease-in-out
    ${
      showContactHover && !isClosingContactHover
        ? "translate-y-0 opacity-100 pointer-events-auto is-open"
        : " lg:translate-y-[80%] opacity-80 pointer-events-auto is-closed"
    }
  `}
            ></div>

            <div className="flex flex-col justify-end items-end">
              <div
                className={`${
                  showContactHover ? "" : " border-t w-48"
                } bg-zinc-800`}
              />
              <ContactHover
                isOpen={showContactHover}
                onOpen={() => setShowContactHover(true)}
                onClose={handleCloseContactHover}
              />
            </div>
            */

/*
            

            <div
              className={`absolute w-[66.6%] bottom-2/5 right-0 h-48 z-[999] transition-transform duration-500 ease-in-out
    ${
      showAboutUsHover && !isClosingAboutUsHover
        ? "translate-x-0"
        : "translate-x-[95%]"
    } font-[Syne]`}
            >
              <AboutUsHover
                isOpen={showAboutUsHover}
                onOpen={() => setShowAboutUsHover(true)}
                onClose={handleCloseAboutUsHover}
              />
            </div>
            */
