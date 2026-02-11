"use client";

import React, { useRef } from "react";
import { Plus, ChevronDown, ChevronUp } from "lucide-react";
import { Syne } from "next/font/google";
import Link from "next/link";

const syneFont = Syne({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-syne",
});

// --- DANE (Wspólne) ---
const offerings = [
	{
		title: "Reorganizacja",
		description:
			"Optymalizacja układu i funkcjonalności wnętrz. Tworzymy przestrzenie, które pracują dla Ciebie.",
		image: "/reorganizacja.png",
		href: "/reorganizacja",
	},
	{
		title: "Rearanżacja",
		description:
			"Metamorfoza bez generalnego remontu. Odświeżamy charakter wnętrza poprzez dobór nowych mebli.",
		image: "/rearanzacja.png",
		href: "/rearanzacja",
	},
	{
		title: "Reprojekt",
		description: "Kompleksowe projektowanie od zera. Od surowych ścian po ostatnią poduszkę.",
		image: "/reprojekt.png",
		href: "/reprojekt",
	},
];

// --- DESKTOP (Zaktualizowana: Tytuł w stałym miejscu) ---
export const ThreeColumnLandingDesktop = () => {
	return (
		<div
			className={`${syneFont.className} hidden min-h-screen w-full flex-row bg-black font-['Syne'] lg:flex`}
		>
			{offerings.map((offering, index) => (
				<div
					key={index}
					className="group relative h-screen w-1/3 flex-col overflow-hidden border-r border-white/10 px-8"
				>
					{/* Tło */}
					<div className="absolute inset-0">
						<img
							src={offering.image}
							alt={offering.title}
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						{/* Stała, lekka przyciemka, żeby biały napis był czytelny na start */}
						<div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/60" />
					</div>

					{/* Kontener Treści - ZAWSZE W TYM SAMYM MIEJSCU */}
					<div className="relative z-10 flex h-full flex-col gap-5 p-5 text-white">
						{/* Margines górny (mt-32), ustala pozycję tytułu. 
                            Jest stały, więc tytuł nie skacze. */}
						<div className="flex flex-col gap-5 pt-10">
							{/* TYTUŁ (Jeden element zmieniający style) */}
							<div className="relative flex flex-col items-center">
								<div
									className={`text-center text-4xl font-bold uppercase tracking-[0.2em] tracking-normal text-white transition-all duration-500 group-hover:tracking-widest group-hover:text-[#FF4A00]`}
								>
									{offering.title}
								</div>
								{/* Linia pod tytułem */}
								<div className="mt-2 h-px w-0 bg-[#FF4A00] shadow-[0_0_10px_#FF4A00] transition-all duration-500 group-hover:w-full" />
							</div>

							{/* OPIS - Domyślnie ukryty (opacity-0), pojawia się przy hoverze */}
							{/* translate-y-4 daje delikatny efekt wjazdu od dołu */}
							<p className="ml-auto translate-y-4 text-right text-xl font-light leading-relaxed text-gray-200 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
								{offering.description}
							</p>
						</div>

						{/* PRZYCISK - Domyślnie ukryty */}
						<div className="mt-8 flex translate-y-4 justify-end opacity-0 transition-all delay-75 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
							<Link href={offering.href}>
								<button className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 backdrop-blur-md transition-all duration-300 hover:rotate-180 hover:bg-orange-700">
									<Plus size={24} />
								</button>
							</Link>
						</div>
					</div>
				</div>
			))}

			{/* Stopka Desktop */}
			<div className="pointer-events-none absolute bottom-0 right-0 z-20 flex flex-row gap-12 p-12">
				<div className="pointer-events-auto flex flex-row gap-12">
					<Link href="/kontakt" className="group flex flex-col items-end">
						<span className="mb-2 h-px w-[148px] bg-white shadow-none transition-all duration-500 group-hover:w-[160px] group-hover:bg-[#FF4A00] group-hover:shadow-[0_0_10px_#FF4A00]"></span>
						<span className="text-xl font-light uppercase tracking-normal text-white transition-all duration-700 group-hover:tracking-widest group-hover:text-[#FF4A00]">
							Kontakt
						</span>
					</Link>
					<Link href="/onas" className="group flex flex-col items-end">
						<span className="mb-2 h-px w-[148px] bg-white shadow-none transition-all duration-500 group-hover:w-[160px] group-hover:bg-[#FF4A00] group-hover:shadow-[0_0_10px_#FF4A00]"></span>
						<span className="text-xl font-light uppercase tracking-normal text-white transition-all duration-700 group-hover:tracking-widest group-hover:text-[#FF4A00]">
							O nas
						</span>
					</Link>
				</div>
			</div>
			<div>
				<img
					src="logo.svg"
					alt=""
					className="pointer-events-none absolute bottom-8 left-8 h-1/2 w-1/2"
				/>
			</div>
		</div>
	);
};

// --- MOBILE (Bez zmian) ---
export const ThreeColumnLandingMobile = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	// Funkcja przewijająca o jeden ekran w dół
	const scrollDown = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				top: window.innerHeight,
				behavior: "smooth",
			});
		}
	};

	// Funkcja przewijająca o jeden ekran w górę
	const scrollUp = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				top: -window.innerHeight,
				behavior: "smooth",
			});
		}
	};

	return (
		// Wrapper główny - trzyma layout w ryzach
		<div className={` ${syneFont.className} relative h-screen w-full bg-black lg:hidden`}>
			<div className="pointer-events-none absolute bottom-20 z-40 p-8">
				<img src="logo.svg" alt="Logo" className="opacity-90" />
			</div>

			{/* --- KONTENER PRZEWIJANIA (SNAP SCROLL) --- */}
			<div
				ref={scrollContainerRef}
				className="no-scrollbar h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth"
			>
				{offerings.map((offering, index) => (
					<div key={index} className="relative h-screen w-full snap-start overflow-hidden">
						{/* Tło */}
						<img
							src={offering.image}
							alt={offering.title}
							className="absolute inset-0 h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

						{/* Treść segmentu */}
						<div className="absolute left-0 flex h-full w-full flex-col justify-start gap-6 px-8 pt-32">
							<div>
								<h2 className={`text-3xl font-bold uppercase text-white drop-shadow-md`}>
									{offering.title}
								</h2>
							</div>

							<p className="max-w-[95%] text-lg font-light leading-relaxed text-gray-200 drop-shadow-sm">
								{offering.description}
							</p>

							<div className="mb-4 mt-4 flex items-end justify-end">
								<Link href={offering.href}>
									<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF4A00] shadow-xl transition-transform hover:bg-orange-600 active:scale-95">
										<Plus size={32} className="text-white" />
									</div>
								</Link>
							</div>

							{/* --- PRZYCISK W DÓŁ --- */}
							{/* Wyświetla się, jeśli to nie jest ostatni element */}
							{index < offerings.length - 1 && (
								<button
									onClick={scrollDown}
									className="absolute bottom-10 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 opacity-60 transition-opacity hover:opacity-100"
								>
									<span className="text-[10px] uppercase tracking-widest text-white/80">
										Przewiń w dół
									</span>
									<ChevronDown size={28} className="animate-bounce text-white" />
								</button>
							)}

							{/* --- PRZYCISK W GÓRĘ --- */}
							{/* Wyświetla się tylko dla indeksu 1 i 2 (czyli 2. i 3. slajd) */}
							{(index === 1 || index === 2) && (
								<button
									onClick={scrollUp}
									className="absolute left-1/2 top-5 z-20 flex -translate-x-1/2 animate-bounce cursor-pointer flex-col items-center gap-2 opacity-60 transition-opacity hover:opacity-100"
								>
									<ChevronUp size={28} className="text-white" />
									<span className="text-[10px] uppercase tracking-widest text-white/80">
										Przewiń w górę
									</span>
								</button>
							)}
						</div>
					</div>
				))}
			</div>

			{/* --- DOLNE MENU (FOOTER) --- */}
			{/* pointer-events-none na kontenerze pozwala przewijać palcem "przez" puste miejsca footera */}
			<div className="pointer-events-none fixed bottom-0 left-0 z-50 w-full p-4">
				<div className="pointer-events-auto flex items-end justify-between pt-4">
					<Link href="/kontakt" className="group flex flex-col gap-1">
						<span className="w-25 mb-2 h-px bg-white"></span>
						<span className="text-xs uppercase tracking-[0.2em] text-white transition-colors group-hover:text-[#FF4A00]">
							Kontakt
						</span>
					</Link>
					<Link href="/onas" className="group flex flex-col items-end gap-1">
						<span className="w-25 mb-2 h-px bg-white"></span>
						<span className="text-xs uppercase tracking-[0.2em] text-white transition-colors group-hover:text-[#FF4A00]">
							O nas
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

// --- GŁÓWNY KOMPONENT ---
export default function Page() {
	console.log({ offeringsLength: offerings.length });
	return (
		<>
			<ThreeColumnLandingDesktop />
			<ThreeColumnLandingMobile />
		</>
	);
}
