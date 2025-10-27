/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export function UpperMenu() {
  return (
    <div className="w-full h-full flex border-8   items-center text-2xl rounded-[100px] p-5">
      <Link
        href="/reorganizacja"
        className="flex w-1/3 items-center justify-center"
      >
        <img
          src="/icon.svg"
          className="w-8 h-8 md:w-8 md:h-8 pb-1 object-contain"
        />
        <div className="text-[#50504F] text-2xl md:text-2xl pb-2 md:pt-2 font-['Syne']">
          organizacja
        </div>
      </Link>

      <Link
        href="/rearanżacja"
        className="flex w-1/3 items-center justify-center"
      >
        <img
          src="/icon.svg"
          className="w-8 h-8 md:w-8 md:h-8 pb-1 object-contain"
        />
        <div className="text-[#50504F] text-2xl md:text-2xl pb-2 md:pt-2 font-['Syne']">
          aranżacja
        </div>
      </Link>
      <Link
        href="/reprojekt"
        className="flex w-1/3 items-center justify-center"
      >
        <img
          src="/icon.svg"
          className="w-8 h-8 md:w-8 md:h-8 pb-1 object-contain"
        />
        <div className="text-[#50504F] text-2xl md:text-2xl pb-2 md:pt-2 font-['Syne']">
          projekt
        </div>
      </Link>
    </div>
  );
}
