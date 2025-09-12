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
      className={`gap-5 p-1  flex flex-row w-full h-full bg-white/70 shadow-[0px_-4px_40px_0px_rgba(209,209,209,0.10)] border-l ${
        isOpen ? "border-b-1" : "border-b-0"
      } border-zinc-800 backdrop-blur-md`}
    >
      {/* Lewa kolumna z napisem O NAS */}
      <div
        className="flex w-[10%] justify-start flex-col items-start h-full cursor-pointer"
        onClick={() => {
          if (!isOpen) onOpen(); // rozwija tylko jeśli zamknięty
        }}
      >
        {/* Napis O NAS */}
        <div className="text-nowrap pt-8 h-full flex  transition-colors justify-start items-start text-[#2E2E2E] font-['Syne']">
          <p className="flex text-2xl font-normal  -translate-x-1 - -rotate-90">
            O NAS
          </p>
        </div>

        {/* Zwiń – tylko gdy rozwinięty */}
        {isOpen && (
          <div className="flex pl-2 pr-5 pb-2 justify-start items-start w-full h-full">
            <img
              className="w-full h-full justify-start items-start -rotate-270 cursor-pointer"
              src="/zwin.svg"
              onClick={(e) => {
                e.stopPropagation(); // nie otwieraj znowu
                onClose();
              }}
            />
          </div>
        )}
      </div>

      {/* Prawa część – tylko widoczna, gdy rozwinięte */}
      <div className="flex flex-row  w-full h-full transition-opacity duration-300">
        <div className="flex w-1/2 gap-2 p-2 h-full justify-center items-center">
          <div className="flex  flex-col w-full h-full ">
            <div className="flex gap-2 items-end justify-end  flex-col ">
              <img className="flex  h-fit p-1" src="/leb.png" />
            </div>
            <div className=" flex   text-wrap justify-start text-end  text-sm font-semibold text-[#2E2E2E]">
              <p className="translate">KRYSTIAN PODGRZYBEK</p>
            </div>
          </div>
          <div className="w-fit h-fit text-neutral-700  font-normal tracking-wide">
            <p className="text-xs">
              Krystian Podgrzybek to człowiek pełen pasji i uważności. Las to
              jego przestrzeń, w której odnajduje równowagę i inspirację. Szuka
              głębi w ludziach i naturze. Tworzy z sensem i strukturą, ceniąc
              jakość ponad ilość. Działa z intuicją, spokojem i odwagą — w
              zgodzie z sobą.
            </p>
          </div>
        </div>

        <div className="flex w-1/2 gap-2 p-2 h-full justify-center items-center">
          <div className="flex  flex-col w-full h-full ">
            <div className="flex gap-2 items-end justify-end  flex-col ">
              <img className="flex  h-fit p-1" src="/leb.png" />
            </div>
            <div className=" flex   text-wrap justify-start text-end  text-sm font-semibold text-[#2E2E2E]">
              <p className="translate">KRYSTIAN PODGRZYBEK</p>
            </div>
          </div>
          <div className="w-full h-full text-neutral-700  font-normal tracking-wide">
            <p className="text-xs">
              Krystian Podgrzybek to człowiek pełen pasji i uważności. Las to
              jego przestrzeń, w której odnajduje równowagę i inspirację. Szuka
              głębi w ludziach i naturze. Tworzy z sensem i strukturą, ceniąc
              jakość ponad ilość. Działa z intuicją, spokojem i odwagą — w
              zgodzie z sobą.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
