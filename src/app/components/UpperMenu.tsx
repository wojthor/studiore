`use client`;
import Link from "next/link";

export function UpperMenu() {
	return (
		<div className="z-[999 ] flex h-full w-full items-center rounded-[100px] p-5 text-2xl">
			<Link
				href="/reorganizacja"
				className="flex w-1/3 cursor-pointer flex-row items-center justify-center"
			>
				<img src="/icon.svg" className="h-8 w-8 object-contain pb-1 md:h-8 md:w-8" />
				<div className="pb-2 font-['Syne'] text-2xl text-[#50504F] md:pt-2 md:text-2xl">
					organizacja
				</div>
			</Link>

			<Link href="/aranzacja" className="flex w-1/3 items-center justify-center">
				<img src="/icon.svg" className="h-8 w-8 object-contain pb-1 md:h-8 md:w-8" />
				<div className="pb-2 font-['Syne'] text-2xl text-[#50504F] md:pt-2 md:text-2xl">
					aranżacja
				</div>
			</Link>

			<Link href="/projekt" className="flex w-1/3 items-center justify-center">
				<img src="/icon.svg" className="h-8 w-8 object-contain pb-1 md:h-8 md:w-8" />
				<div className="pb-2 font-['Syne'] text-2xl text-[#50504F] md:pt-2 md:text-2xl">
					projekt
				</div>
			</Link>
		</div>
	);
}
