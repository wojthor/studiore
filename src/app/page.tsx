/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Syne } from "next/font/google";

const syneFont = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syne",
});

import Zakladka from "@/app/components/zakladka";
import React from "react";

export default function Home() {
  return (
    <div
      className={` flex p-15 w-screen h-[1024px] text-zinc-800 relative bg-white overflow-hidden} ${syneFont.variable}`}
    >
      <div className="flex w-full h-36 flex-row justify-between items-center bg-white ">
        <div className=" flex w-96 h-36  border-l border-zinc-800  justify-center items-center overflow-hidden">
          <Zakladka text="organizacja" />
        </div>
        <div className=" flex w-96 h-36   border-l justify-center items-center border-zinc-800 overflow-hidden">
          <Zakladka text="aranżacja" />
        </div>
        <div className="flex w-96 h-36   border-l justify-center items-center border-zinc-800 overflow-hidden">
          <Zakladka text="projekt" />
        </div>
      </div>

      <div className="w-[820px] h-96 left-[105px] top-[445px] absolute">
        {" "}
        <img src="/logo.svg"></img>
      </div>

      <div className="flex w-12 h-36 absolute left-[1287px] top-[468px] border-l border-zinc-800 items-start ">
        <p
          className={`  pr-6 transform -rotate-90 whitespace-nowrap  font-['Syne']`}
        >
          O NAS
        </p>
      </div>

      <div className=" flex w-36 h-12 left-[1188px] border-t justify-end items-end border-zinc-800 top-[840px] absolute overflow-hidden">
        <p className="transform  whitespace-nowrap  font-['Syne']">KONTAKT</p>
      </div>
    </div>
  );
}
