import Zakladka from "@/app/components/zakladka";
import React, { useState } from "react";

export function UpperPart() {
  const [showHoverOrganizacja, setShowHoverOrganizacja] = useState(false);
  const [showHoverAranzacja, setShowHoverAranzacja] = useState(false);
  const [showHoverProjekt, setShowHoverProjekt] = useState(false);

  const menuItems = ["organizacja", "aranżacja", "projekt"];
  return (
    <div className="flex  flex-col md:flex-row  md:w-full h-auto md:h-24 border-b md:border-b-0 border-[#2E2E2E] font-[Syne]">
      {menuItems.map((item, index) => (
        <div
          key={item}
          className={`relative w-full flex items-center pl-5 pr-5 justify-start  ${
            index === 0 ? "border-t-0" : "border-t"
          } md:border-t-0 md:border-l border-zinc-800 transition-colors duration-200 py-4 md:py-0 font-[Syne]`}
          onClick={() =>
            (index === 0 && setShowHoverOrganizacja(true)) ||
            (index === 1 && setShowHoverAranzacja(true)) ||
            (index === 2 && setShowHoverProjekt(true))
          }
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
  );
}
