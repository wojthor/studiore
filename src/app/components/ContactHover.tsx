/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
type ContactHoverType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export function ContactHover({ isOpen, onOpen, onClose }: ContactHoverType) {
  return (
    <div
      className={`w-full h-full flex-row    flex justify-between transition-all duration-100 ease-in-out ${
        isOpen
          ? "bg-white/70 border-l border-t border-zinc-800 shadow-[0_-4px_40px_0_rgba(209,209,209,0.10)] backdrop-blur-md"
          : "justify-end"
      }`}
    >
      {/* Przycisk zamykający (tylko w otwartym stanie) */}
      {isOpen && (
        <div className="w-1/12 m-1 h-full rotate-180 flex items-end justify-end cursor-pointer">
          <img
            className="w-full h-full justify-start items-start cursor-pointer"
            src="/zwin.svg"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          />
        </div>
      )}

      {/* Główna zawartość */}
      <div className="grid grid-rows-3 gap-2 w-[95%] p-3">
        <div
          className="grid justify-end cursor-pointer"
          onClick={() => {
            if (!isOpen) onOpen();
          }}
        >
          <h2
            className={`text-2xl font-normal  font-syne tracking-widest transition-colors duration-300 ${
              isOpen ? "text-[#2E2E2E]" : "text-[#2E2E2E] "
            }`}
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
  );
}
