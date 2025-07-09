/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function Zakladka({ text }: { text: string }) {
  return (
    <div className="flex justify-center items-center gap-2 ">
      <div className="flex items-center justify-center  w-full h-full">
        <img src="/icon.svg" className="w-fit h-fit" />
      </div>
      <div className=" flex justify-center text-neutral-600 text-3xl  font-['Syne']">
        {text}
      </div>
    </div>
  );
}
