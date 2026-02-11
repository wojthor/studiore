/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

type ZakladkaProps = {
	text: string;
	isOpen?: boolean;
	onClose?: () => void;
};

export default function Zakladka({ text, isOpen, onClose }: ZakladkaProps) {
	return (
		<div className="flex h-full w-full items-center justify-between md:z-50 md:bg-white">
			<div className="flex items-end">
				<img src="/icon.svg" className="h-8 w-8 object-contain pb-1 md:h-12 md:w-12 md:pb-2" />
				<div className="pb-0 font-['Syne'] text-2xl text-[#50504F] md:pb-1 md:text-4xl">
					<p>{text}</p>
				</div>
			</div>
			<div className="flex items-end justify-end">
				{isOpen ? (
					<button
						onClick={(e) => {
							e.stopPropagation();
							onClose?.();
						}}
						className="relative text-lg text-[#2E2E2E] transition hover:text-black"
					>
						<img src="/arrow3.svg" className="rotate-270 h-6 w-6 cursor-pointer" />
					</button>
				) : (
					<img src="/arrow3.svg" className="delay-1300 h-6 w-6 rotate-90 cursor-pointer" />
				)}
			</div>
		</div>
	);
}
