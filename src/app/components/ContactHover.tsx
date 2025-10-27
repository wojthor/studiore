/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

type ContactHoverType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export function ContactHover({ isOpen, onOpen, onClose }: ContactHoverType) {
  return (
    <div className="relative w-full h-full md:z-50">
      {/* TŁO / BLUR (pojawia się tylko gdy otwarte) */}
      <div
        className={[
          "bg-white/70 backdrop-blur-md absolute inset-0 z-0",

          isOpen
            ? "transition-all  delay-700 duration-1500  pointer-events-auto"
            : "transition-all  translate-y-full   delay-2000    duration-1500  pointer-events-none",
        ].join(" ")}
      />

      {/* BORDER DRAW (lewy pion + górny poziom) */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* lewy pion — rośnie w dół */}
        <div
          className={[
            "absolute left-0 top-0 h-full w-px bg-zinc-800 ",
            "transition-transform will-change-transform",
            isOpen
              ? "origin-bottom scale-y-100 duration-[1000ms] delay-[1000ms] WJEZDZA "
              : "origin-top scale-y-0   duration-[1000ms]  WRACA",
          ].join(" ")}
        />
        {/* górny poziom — rośnie w prawo */}
        <div
          className={[
            "absolute left-0 top-0 w-full h-px bg-zinc-800 origin-right",
            "transition-transform will-change-transform",
            isOpen
              ? "scale-x-100 duration-[1000ms] delay-[300ms] WJEZDZ"
              : "scale-x-[30%]   duration-[1000ms] delay-[1000ms] WRACA",
          ].join(" ")}
        />
      </div>

      {/* ZAWARTOŚĆ */}
      <div
        className={[
          "relative z-20 w-full h-full",
          "flex flex-col md:flex-row justify-between",
          "",
          " transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? " " : "justify-end",
        ].join(" ")}
      >
        {/* Przycisk zamykający (tylko w otwartym stanie) */}
        {isOpen ? (
          <div className="w-full  md:w-1/12 p-3 h-auto md:h-full rotate-180 flex items-center justify-center cursor-pointer">
            <img
              className="rotate-[270deg] w-8 h-8 justify-start items-start cursor-pointer"
              src="/arrow3.svg"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            />
          </div>
        ) : null}

        {/* Główna zawartość */}
        <div className="grid grid-rows-3 gap-2 w-full md:w-[95%] p-3">
          <div
            className="grid justify-end cursor-pointer"
            onClick={() => {
              if (!isOpen) onOpen();
            }}
          >
            <h2
              className={[
                "text-2xl font-normal font-syne tracking-widest",
                "transition-colors duration-300",
                "text-[#2E2E2E]",
              ].join(" ")}
            >
              KONTAKT
            </h2>
          </div>

          {/* Dane kontaktowe */}
          <div className="grid justify-end items-end gap-1">
            <span className="text-zinc-800 text-base font-normal font-syne tracking-wider">
              email: studiore@studiore.pl
            </span>
            <span className="text-zinc-800 text-end font-normal font-syne tracking-wider">
              tel.: xxx xxx xxx
            </span>
          </div>

          {/* Ikony */}
          <div className="grid justify-end items-end">
            <div className="flex gap-4">
              <img className="w-7 h-7" src="/facebook.png" />
              <img className="w-7 h-7" src="/instagram.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
