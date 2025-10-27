/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

type AboutUsHoverProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export function AboutUsHover({ isOpen, onOpen, onClose }: AboutUsHoverProps) {
  return (
    <div
      className={[
        "relative", // potrzebne dla absolutnej linii na dole
        "gap-5 p-2 flex flex-col md:flex-row lg:flex-row w-full h-full",
        "bg-white/70 backdrop-blur-md",
        "shadow-[0px_-4px_40px_0px_rgba(209,209,209,0.10)]",
        "border-l border-zinc-800",
      ].join(" ")}
    >
      {/* BOTTOM BORDER DRAW */}
      <div
        className={[
          "pointer-events-none absolute left-0 bottom-0 w-full h-px bg-zinc-800",
          "transition-transform will-change-transform duration-[1000ms]",
          // open: rysuje z lewej -> prawej; close: zwija z prawej -> lewej
          isOpen ? "origin-right scale-x-100 " : "origin-right scale-x-0 ",
        ].join(" ")}
      />

      {/* Lewa kolumna z napisem O NAS */}
      <div
        className="flex w-full md:w-[5%] lg:w-[5%] justify-start md:flex-col lg:flex-col flex-row items-start h-full cursor-pointer"
        onClick={() => {
          if (!isOpen) onOpen(); // rozwija tylko jeśli zamknięty
        }}
      >
        {/* Napis O NAS */}
        <div className="text-nowrap pt-8 h-full flex transition-colors justify-start items-start text-[#2E2E2E] font-['Syne']">
          <p className="flex md:text-2xl font-normal -translate-x-2 -rotate-90">
            O NAS
          </p>
        </div>

        {/* Zwiń – tylko gdy rozwinięty */}
        {isOpen && (
          <div className="flex pl-2 pr-2 pt-6 pb-2 justify-start items-end w-full h-full">
            <img
              className="md:w-1/2 h-1/2 w-1/3 flex justify-center items-center cursor-pointer"
              src="/arrow3.svg"
              onClick={(e) => {
                e.stopPropagation(); // nie otwieraj znowu
                onClose();
              }}
            />
          </div>
        )}
      </div>

      {/* Prawa część – widoczna zawsze (opacity możesz sterować osobno jeśli chcesz) */}
      <div className="flex flex-col md:flex-row lg:flex-row w-[95%] h-full transition-opacity duration-300">
        <div className="flex w-full md:w-[55%] lg:w-[55%] gap-2 p-2 h-full justify-center items-center">
          <div className="flex flex-col h-full justify-end items-end">
            <div className="flex gap-2 h-3/4 justify-start items-end flex-col">
              <img className="flex w-full h-full p-1" src="/leb.png" />
            </div>
            <div className="flex flex-col h-1/4 gap-0 text-wrap justify-end text-end font-semibold text-[#2E2E2E]">
              <p className="text-fit">ANETA ROMPKOWSKA</p>
            </div>
          </div>
          <div className="w-full h-full text-neutral-700 font-normal tracking-wide">
            <p className="md:text-xs 2xl:text-[86%]">
              Cześć! Od 10 lat jestem architektem z pasją do tworzenia
              przestrzeni, które nie tylko dobrze wyglądają, ale też dobrze się
              w nich żyje. Wierzę, że wnętrze= mieszkancy — dlatego każdy
              projekt traktuję indywidualnie, z pełnym zaangażowaniem i
              uważnością na detale. Łączę estetykę z praktycznymi rozwiązaniami
              oraz często pracuję z osobami, które chcą odzyskać harmonię w
              swoim domu – także poprzez decluttering i świadome projektowanie.
              Pracuję kompleksowo – od koncepcji, aż po nadzór nad realizacją.
              Jeśli marzysz o wnętrzu NA PRAWDĘ dopasowanym do Ciebie –
              zapraszam do współpracy.
            </p>
          </div>
        </div>

        <div className="flex w-full md:w-[45%] lg:w-[45%] gap-2 p-2 h-full justify-center items-center">
          <div className="flex flex-col h-full justify-end items-end">
            <div className="flex gap-2 h-3/4 justify-start items-end flex-col">
              <img className="flex w-full h-full p-1" src="/leb.png" />
            </div>
            <div className="flex flex-col h-1/4 gap-0 text-wrap justify-end text-end font-semibold text-[#2E2E2E]">
              <p className="text-fit">MARTYNA WILCZYŃSKA</p>
            </div>
          </div>
          <div className="w-full h-full text-neutral-700 font-normal tracking-wide">
            <p className="md:text-xs 2xl:text-[86%]">
              Cześć! Jestem specjalistką w organizowaniu i dekorowaniu
              przestrzeni, tak aby była funkcjonalna, a zarazem autentyczna. Nie
              oceniam - wspieram, bo każda współpraca to indywidualna podróż,
              której celem jest TWÓJ komfort. Wierzę, że mniej znaczy więcej i
              razem znajdziemy balans między tym co potrzebne, a tym co zabiera
              miejsce. Jeśli czujesz, że Twoja przestrzeń Cię przytłacza, jestem
              tu żeby Ci pomóc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
