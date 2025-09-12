/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

type ZakladkaProps = {
  text: string;
  showClose?: boolean;
  onClose?: () => void;
};

export default function Zakladka({ text, showClose, onClose }: ZakladkaProps) {
  return (
    <div className="z-50 pl-6 pr-6 bg-white  flex  justify-between items-center w-full h-full">
      <div className="flex items-end  ">
        <img src="/icon.svg" className="w-12 h-12 pb-2  object-contain" />
        <div className="text-[#50504F]  text-4xl pb-1 font-['Syne']">
          <p>{text}</p>
        </div>
      </div>
      <div className="flex justify-end items-end ">
        {showClose && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            className="text-lg text-[#2E2E2E] relative hover:text-black transition -right-3 top-1"
          >
            <img src="/zwin.svg" className="" />
          </button>
        )}
      </div>
    </div>
  );
}
