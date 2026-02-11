/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { Syne } from "next/font/google";

/*
type ContactHoverType = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

export function ContactHover({ isOpen, onOpen, onClose }: ContactHoverType) {
	return (
		<div className="relative h-full w-full md:z-50">
			
			<div
				className={[
					"absolute inset-0 z-0 bg-white/70 backdrop-blur-md",

					isOpen
						? "duration-1500 pointer-events-auto transition-all delay-700"
						: "delay-2000 duration-1500 pointer-events-none translate-y-full transition-all",
				].join(" ")}
			/>

			
			<div className="pointer-events-none absolute inset-0 z-10">
			
				<div
					className={[
						"absolute left-0 top-0 h-full w-px bg-zinc-800",
						"transition-transform will-change-transform",
						isOpen
							? "WJEZDZA origin-bottom scale-y-100 delay-[1000ms] duration-[1000ms]"
							: "WRACA origin-top scale-y-0 duration-[1000ms]",
					].join(" ")}
				/>
				
				<div
					className={[
						"absolute left-0 top-0 h-px w-full origin-right bg-zinc-800",
						"transition-transform will-change-transform",
						isOpen
							? "WJEZDZ scale-x-100 delay-[300ms] duration-[1000ms]"
							: "WRACA scale-x-[30%] delay-[1000ms] duration-[1000ms]",
					].join(" ")}
				/>
			</div>

			
			<div
				className={[
					"relative z-20 h-full w-full",
					"flex flex-col justify-between md:flex-row",
					"",
					"transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
					isOpen ? " " : "justify-end",
				].join(" ")}
			>
				
				{isOpen ? (
					<div className="flex h-auto w-full rotate-180 cursor-pointer items-center justify-center p-3 md:h-full md:w-1/12">
						<img
							className="h-8 w-8 rotate-[270deg] cursor-pointer items-start justify-start"
							src="/arrow3.svg"
							onClick={(e) => {
								e.stopPropagation();
								onClose();
							}}
						/>
					</div>
				) : null}

				
				<div className="grid w-full grid-rows-3 gap-2 p-3 md:w-[95%]">
					<div
						className="grid cursor-pointer justify-end"
						onClick={() => {
							if (!isOpen) onOpen();
						}}
					>
						<h2
							className={[
								"font-syne text-2xl font-normal tracking-widest",
								"transition-colors duration-300",
								"text-[#2E2E2E]",
							].join(" ")}
						>
							KONTAKT
						</h2>
					</div>

				
					<div className="grid items-end justify-end gap-1">
						<span className="font-syne text-base font-normal tracking-wider text-zinc-800">
							email: studiore@studiore.pl
						</span>
						<span className="font-syne text-end font-normal tracking-wider text-zinc-800">
							tel.: xxx xxx xxx
						</span>
					</div>

					
					<div className="grid items-end justify-end">
						<div className="flex gap-4">
							<img className="h-7 w-7" src="/facebook.png" />
							<img className="h-7 w-7" src="/instagram.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

*/
const syneFont = Syne({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-syne",
});

interface ContactDesktopProps {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export function ContactContent({ onClose }: { onClose: () => void }) {
	return (
		<div className={`${syneFont.variable} flex h-full w-full flex-col bg-white`}>
			{/* Header */}
			<div className="flex shrink-0 items-center justify-between border-b border-black/5 bg-white px-4 py-6">
				<h2 className="text-3xl font-light tracking-tight text-black">
					<span className="font-semibold text-orange-600">KONTAKT</span>
				</h2>
				<button onClick={onClose} className="cursor-pointer rounded-full bg-orange-600 p-2">
					<svg
						className="rotate-360 h-6 w-6 text-white transition-transform duration-500"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>

			{/* Content */}
			<div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto p-4">
				<div className="flex flex-col items-center gap-5 text-center">
					{/* Email */}
					<div className="flex flex-col items-center gap-2">
						<span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
							EMAIL
						</span>
						<a
							href="mailto:studiore@studiore.pl"
							className="relative font-['Syne'] text-2xl font-light text-black transition-colors group-hover:text-orange-600 md:text-3xl"
						>
							studiore@studiore.pl
						</a>
						<div className="mt-2 h-px w-12 bg-orange-600/30 transition-all duration-500 group-hover:w-full group-hover:bg-orange-600" />
					</div>

					{/* Telefon */}
					<div className="flex flex-col items-center gap-2">
						<span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
							TELEFON
						</span>
						<a
							href="tel:+48000000000"
							className="relative font-['Syne'] text-2xl font-bold text-black transition-colors group-hover:text-orange-600 md:text-3xl"
						>
							+48 000 000 000
						</a>
						<div className="mt-2 h-px w-12 bg-orange-600/30 transition-all duration-500 group-hover:w-full group-hover:bg-orange-600" />
					</div>

					{/* Social Media */}
					<div className="flex flex-col items-center gap-4">
						<span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
							SOCIAL MEDIA
						</span>
						<div className="flex gap-8">
							<a href="#" className="transform transition-transform duration-300 hover:scale-110">
								<img
									className="h-12 w-12 opacity-80 hover:opacity-100"
									src="/facebook.png"
									alt="FB"
								/>
							</a>
							<a href="#" className="transform transition-transform duration-300 hover:scale-110">
								<img
									className="h-12 w-12 opacity-80 hover:opacity-100"
									src="/instagram.png"
									alt="IG"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
