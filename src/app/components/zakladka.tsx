/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

type ZakladkaProps = {
  text: string;
  isOpen?: boolean;
  onClose?: () => void;
};

export default function Zakladka({ text, isOpen, onClose }: ZakladkaProps) {
  return (
    <div className="md:z-50     md:bg-white  flex  justify-between items-center w-full h-full">
      <div className="flex items-end  ">
        <img
          src="/icon.svg"
          className="w-8 h-8 md:w-12 md:h-12 pb-1 md:pb-2  object-contain"
        />
        <div className="text-[#50504F]  text-2xl md:text-4xl pb-0 md:pb-1 font-['Syne']">
          <p>{text}</p>
        </div>
      </div>
      <div className="flex justify-end items-end ">
        {isOpen ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            className="text-lg text-[#2E2E2E] relative hover:text-black transition"
          >
            <img
              src="/arrow3.svg"
              className=" cursor-pointer rotate-270 w-6 h-6"
            />
          </button>
        ) : (
          <img
            src="/arrow3.svg"
            className=" rotate-90 delay-1300 cursor-pointer w-6 h-6"
          />
        )}
      </div>
    </div>
  );
}
