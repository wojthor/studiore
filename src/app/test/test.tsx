/*
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Syne } from "next/font/google";

// KONFIGURACJA CZCIONKI
const syneFont = Syne({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-syne",
});

// ==============================================================================
// GŁÓWNY KOMPONENT HOME
// ==============================================================================
export default function Home() {
	const [showAboutUsHover, setShowAboutUsHover] = useState(false);
	const [isClosingAboutUsHover, setIsClosingAboutUsHover] = useState(false);
	const [showContactHover, setShowContactHover] = useState(false);
	const [isClosingContactHover, setIsClosingContactHover] = useState(false);

	// --- LOGIKA STEROWANIA OKNAMI ---
	const handleCloseAboutUsHover = () => {
		if (!showAboutUsHover) return;
		setIsClosingAboutUsHover(true);
		setTimeout(() => {
			setShowAboutUsHover(false);
			setIsClosingAboutUsHover(false);
		}, 500);
	};

	const handleCloseContactHover = () => {
		if (!showContactHover) return;
		setIsClosingContactHover(true);
		setTimeout(() => {
			setShowContactHover(false);
			setIsClosingContactHover(false);
		}, 500);
	};

	const openAbout = () => {
		setShowAboutUsHover(true);
		handleCloseContactHover();
	};

	const openContact = () => {
		setShowContactHover(true);
		handleCloseAboutUsHover();
	};

	return (
		<div
			className={`z-100 relative h-[100dvh] w-full overflow-hidden bg-white ${syneFont.variable} font-['Syne'] text-[#2E2E2E]`}
		>
			{/* --- NAWIGACJA (Wspólna) --- */}
			<div className="pointer-events-none absolute left-0 top-0 z-50 w-full">
				<div className="pointer-events-auto relative mx-auto w-full px-4 pt-4 md:w-[95%] md:px-0">
					<NavigationBar />
				</div>
			</div>

			{/* ===================================================== */}
			{/* [1] WIDOK MOBILE (Pionowy Plakat) - md:hidden */}
			{/* ===================================================== */}
			<div className="relative flex h-full w-full flex-col px-6 pb-8 pt-24 md:hidden">
				{/* CENTRUM: Wideo + Typografia */}
				<div className="relative flex flex-grow flex-col items-center justify-center">
					{/* Kontener Wideo */}
					<div className="relative z-10 ml-8 aspect-[9/16] max-h-[55vh] w-[70%] overflow-hidden bg-white shadow-2xl">
						<video
							src="/photo.mp4"
							autoPlay
							muted
							loop
							playsInline
							className="h-full w-full object-cover"
						/>
					</div>

					{/* Napis "Re." - Wielki w rogu */}
					<img src="/logo.svg" className="absolute bottom-0 right-0 z-20 h-32 w-auto opacity-80" />
					<div className="absolute right-0 z-20 flex flex-col items-start pl-4">
						<button
							onClick={openAbout}
							className="rotate-270 text-xl uppercase tracking-[0.2em] text-[#2E2E2E] transition-colors active:text-orange-600"
						>
							O nas
						</button>
						<div className="rotate-270 h-[1px] w-8 bg-[#2E2E2E]"></div>
					</div>
				</div>

				{/* DÓŁ: Menu Tekstowe */}
				<div className="z-40 mt-6 flex flex-col items-end justify-end gap-3 pr-2">
					<button
						onClick={openContact}
						className="text-xl uppercase tracking-[0.2em] text-[#2E2E2E] transition-colors active:text-orange-600"
					>
						Kontakt
					</button>
				</div>
			</div>

			{/* ===================================================== */}
			{/* [2] WIDOK DESKTOP (Magazynowy) - hidden md:flex */}
			{/* ===================================================== */}
			<div className="hidden h-full w-full flex-col items-center justify-center p-12 md:flex">
				<div className="relative flex h-full w-[95%] flex-col overflow-hidden border-gray-300">
					{/* Sekcja Logo + Wideo Desktop */}
					<div className="z-1 absolute bottom-0 left-0 flex items-end">
						<img
							src="/logo.svg"
							alt="Studio Re. Logo"
							className="z-10 mr-[-20%] h-[500px] w-auto"
						/>
						<div className="relative z-0 mb-10 h-[548px] w-auto overflow-hidden bg-white shadow-lg">
							<video
								src="/photo.mp4"
								autoPlay
								muted
								loop
								playsInline
								className="h-full w-full object-cover"
							/>
						</div>
					</div>

					{/* Desktopowe Triggery (opcjonalnie, bo mamy je w menu bocznym AboutUsHover) */}
					{/* Można je usunąć jeśli nawigacja boczna AboutUsHover wystarcza */}
				</div>
			</div>

			{/* ===================================================== */}
			{/* MODALE / OVERLAYS (Obsługują i mobile i desktop)      */}
			{/* ===================================================== */}

			{/* --- ABOUT US OVERLAY --- */}
			<div
				className={`fixed inset-0 z-40 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${showAboutUsHover && !isClosingAboutUsHover ? "translate-x-0" : "translate-x-full"} md:bottom-2/5 md:h-50 md:absolute md:inset-auto md:right-0 md:w-[80%] md:translate-x-0 ${!showAboutUsHover && "md:translate-x-[100%]"} `}
			>
				<AboutUsHover
					isOpen={showAboutUsHover}
					onOpen={openAbout}
					onClose={handleCloseAboutUsHover}
				/>
			</div>

			{/* --- CONTACT OVERLAY --- */}
			<div
				className={`fixed inset-0 z-50 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${showContactHover && !isClosingContactHover ? "translate-y-0" : "translate-y-full"} md:absolute md:inset-auto md:bottom-0 md:right-0 md:w-1/2`}
			>
				<ContactHover
					isOpen={showContactHover}
					onOpen={openContact}
					onClose={handleCloseContactHover}
				/>
			</div>
		</div>
	);
}

// ==============================================================================
// KOMPONENTY POMOCNICZE (zdefiniowane w tym samym pliku)
// ==============================================================================

// --- 1. NAVIGATION BAR ---
function NavigationBar() {
	const [showUpperMenu, setShowUpperMenu] = useState(false);
	const [isClosingUpperMenu, setIsClosingUpperMenu] = useState(false);

	const handleToggle = () => {
		if (showUpperMenu) {
			setIsClosingUpperMenu(true);
			setTimeout(() => {
				setShowUpperMenu(false);
				setIsClosingUpperMenu(false);
			}, 300); // Skrócony czas dla płynniejszej animacji dropdown
		} else {
			setShowUpperMenu(true);
		}
	};

	return (
		// [ZMIANA] Potrzebujemy wspólnego rodzica 'relative', aby pozycjonować dropdown
		<div className="z-1 relative flex w-full">
			{/* --- 1. PASEK Z PRZYCISKIEM --- */}
			{/* (Bez zmian, oprócz ikony) */}
			<div className="md:h-18 relative z-50 h-14 w-full bg-white">
				<button onClick={handleToggle} className="outline-none">
					<div
						className={`absolute top-0 z-50 flex h-14 items-center justify-center rounded-full bg-orange-600 shadow-lg transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
							showUpperMenu && !isClosingUpperMenu
								? "translate-x-full" // Usunięty rotate stąd
								: "left-0 delay-1000"
						} `}
					>
						{/* [ZMIANA] Ikona obraca się teraz o 90 stopni (strzałka w dół) */}
						<svg
							className={`h-6 w-6 text-white transition-transform duration-500 ${
								showUpperMenu && !isClosingUpperMenu ? "rotate-270" : "rotate-0"
							}`}
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</div>
				</button>
			</div>

			{/* --- 2. PANEL DROPDOWN --- */}
			{/* [ZMIANA] Całkowicie nowy div dla menu rozwijanego w dół */}
			<div
				className={`md:top-18 absolute left-0 top-14 w-full origin-top rounded-b-lg bg-white/95 shadow-xl transition-transform ease-in-out ${
					showUpperMenu && !isClosingUpperMenu
						? "pointer-events-auto translate-y-0 delay-1000 duration-1000"
						: "pointer-events-none -z-10 -translate-y-[105%] duration-1000"
				}`}
			>
				{/* Zawartość menu z odstępami */}
				<div className="flex h-full w-full flex-col items-center justify-center gap-2 py-2">
					<div className="flex flex-row">
						<img src="/icon.svg" className="h-8 w-8 object-contain pb-1 md:h-8 md:w-8" />
						<div className="pb-2 font-['Syne'] text-2xl text-[#50504F] md:pt-2 md:text-2xl">
							organizacja
						</div>
					</div>
					<div className="flex flex-row">
						<img src="/icon.svg" className="h-8 w-8 object-contain pb-1 md:h-8 md:w-8" />
						<div className="pb-2 font-['Syne'] text-2xl text-[#50504F] md:pt-2 md:text-2xl">
							aranzacja
						</div>
					</div>
					<div className="flex flex-row">
						<img src="/icon.svg" className="h-8 w-8 object-contain pb-1 md:h-8 md:w-8" />
						<div className="pb-2 font-['Syne'] text-2xl text-[#50504F] md:pt-2 md:text-2xl">
							projekt
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
// --- 2. ABOUT US HOVER (Wrapper) ---
type Props = { isOpen: boolean; onOpen: () => void; onClose: () => void };

function AboutUsHover(props: Props) {
	return (
		<div
			className={`relative h-full w-full overflow-hidden bg-white shadow-2xl md:border-l md:border-zinc-800 md:bg-white/80 md:shadow-none md:backdrop-blur-xl`}
		>
			{/* Renderuje wersję Mobile na małych ekranach */}
			<div className="block h-full w-full md:hidden">
				<AboutUsMobile {...props} />
			</div>

			{/* Renderuje wersję Desktop na dużych ekranach */}
			<div className="hidden h-full w-full md:block">
				<AboutUsDesktop {...props} />
			</div>
		</div>
	);
}

// --- 2a. AboutUsMobile (NOWY KOMPONENT TYLKO DLA MOBILE) ---
function AboutUsMobile({ onClose }: Props) {
	return (
		<div className="relative flex h-full w-full flex-col overflow-y-auto pb-20">
			{/* Przycisk Zamknij Mobile */}
			<button
				onClick={onClose}
				className="absolute right-4 top-4 z-50 rounded-full bg-gray-100 p-3 shadow-md"
			>
				<img src="/arrow3.svg" className="h-6 w-6 rotate-180" />
			</button>

			<div className="px-6 pb-6 pt-10">
				<h2 className="mb-6 text-4xl text-[#FF4A00]">O NAS</h2>

				{/* Osoba 1 */}
				<div className="mb-8">
					<div className="mb-4 aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100">
						<img className="h-full w-full object-cover" src="/leb.png" />
					</div>
					<h3 className="text-2xl text-gray-900">ANETA ROMPKOWSKA</h3>
					<p className="mb-2 text-sm text-gray-500">Architekt Wnętrz</p>
					<p className="text-justify text-sm font-light leading-relaxed text-neutral-700">
						Cześć! Od 10 lat jestem architektem z pasją do tworzenia przestrzeni, które nie tylko
						dobrze wyglądają, ale też dobrze się w nich żyje. Wierzę, że wnętrze = mieszkańcy.
					</p>
				</div>

				{/* Osoba 2 */}
				<div className="mb-8 border-t border-gray-100 pt-8">
					<div className="mb-4 aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100">
						<img className="h-full w-full object-cover" src="/leb.png" />
					</div>
					<h3 className="text-2xl text-gray-900">MARTYNA WILCZYŃSKA</h3>
					<p className="mb-2 text-sm text-gray-500">Decluttering Expert</p>
					<p className="text-justify text-sm font-light leading-relaxed text-neutral-700">
						Cześć! Jestem specjalistką w organizowaniu i dekorowaniu przestrzeni. Wierzę, że mniej
						znaczy więcej.
					</p>
				</div>
			</div>
		</div>
	);
}

// --- 2b. AboutUsDesktop (TWÓJ ORYGINALNY UKŁAD) ---
function AboutUsDesktop({ isOpen, onOpen, onClose }: Props) {
	return (
		<div className="flex h-full w-full flex-row">
			{/* Pasek Trigger */}
			<div
				className="flex h-full w-[5%] cursor-pointer flex-col items-start justify-start transition-colors hover:bg-white/50"
				onClick={() => !isOpen && onOpen()}
			>
				<div className="flex h-full items-start justify-start text-nowrap pt-8 font-['Syne'] text-[#2E2E2E]">
					<p className="flex -translate-x-2 -rotate-90 text-2xl font-normal tracking-widest">
						O NAS
					</p>
				</div>
				{isOpen && (
					<div className="flex h-full w-full items-end justify-start pb-6 pl-2">
						<img
							className="w-8 cursor-pointer transition-transform hover:scale-110"
							src="/arrow3.svg"
							onClick={(e) => {
								e.stopPropagation();
								onClose();
							}}
						/>
					</div>
				)}
			</div>

			{/* Treść Desktop */}
			<div className="flex h-full w-full flex-row">
				<div className="flex w-1/2 flex-col justify-center gap-4 p-8">
					<div className="group relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
						<img
							className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
							src="/leb.png"
						/>
					</div>
					<h3 className="text-end text-xl">ANETA ROMPKOWSKA</h3>
					<p className="text-justify text-xs leading-relaxed text-neutral-700">Opis Anety...</p>
				</div>
				<div className="flex w-1/2 flex-col justify-center gap-4 border-l border-gray-200 p-8">
					<div className="group relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
						<img
							className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
							src="/leb.png"
						/>
					</div>
					<h3 className="text-end text-xl">MARTYNA WILCZYŃSKA</h3>
					<p className="text-justify text-xs leading-relaxed text-neutral-700">Opis Martyny...</p>
				</div>
			</div>
		</div>
	);
}

// --- 3. CONTACT HOVER (Wrapper) ---
function ContactHover(props: Props) {
	return (
		<div className="relative h-full w-full bg-white md:bg-transparent">
			{/* Mobile View */}
			<div className="block h-full w-full md:hidden">
				<ContactMobile {...props} />
			</div>
			{/* Desktop View */}
			<div className="hidden h-full w-full md:block">
				<ContactDesktop {...props} />
			</div>
		</div>
	);
}

// --- 3a. ContactMobile (NOWY KOMPONENT TYLKO DLA MOBILE) ---
function ContactMobile({ onClose }: Props) {
	return (
		<div className="flex h-full w-full flex-col p-6">
			<div className="mb-10 flex justify-end">
				<button onClick={onClose} className="rounded-full bg-gray-100 p-2">
					<img className="h-6 w-6 rotate-90" src="/arrow3.svg" />
				</button>
			</div>
			<div className="flex flex-grow flex-col items-center justify-center gap-8">
				<h2 className="font-syne mb-4 text-5xl tracking-widest text-[#FF4A00]">KONTAKT</h2>
				<div className="flex flex-col gap-4 text-center">
					<a
						href="mailto:studiore@studiore.pl"
						className="font-syne p-2 text-xl font-medium text-zinc-800"
					>
						email: studiore@studiore.pl
					</a>
					<a href="tel:+48000000000" className="font-syne p-2 text-xl font-medium text-zinc-800">
						tel.: +48 000 000 000
					</a>
				</div>
				<div className="mt-8 flex gap-8">
					<img className="h-10 w-10" src="/facebook.png" />
					<img className="h-10 w-10" src="/instagram.png" />
				</div>
			</div>
		</div>
	);
}

// --- 3b. ContactDesktop (TWÓJ ORYGINALNY UKŁAD) ---
function ContactDesktop({ isOpen, onOpen, onClose }: Props) {
	return (
		<div className="relative h-full w-full">
			<div
				className={`absolute inset-0 z-0 bg-white/70 backdrop-blur-md transition-all duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`}
			/>
			<div className="pointer-events-none absolute inset-0 z-10">
				<div
					className={`absolute left-0 top-0 h-full w-px origin-bottom bg-zinc-800 transition-transform duration-1000 ${isOpen ? "scale-y-100" : "scale-y-0"}`}
				/>
				<div
					className={`absolute left-0 top-0 h-px w-full origin-right bg-zinc-800 transition-transform delay-300 duration-1000 ${isOpen ? "scale-x-100" : "scale-x-0"}`}
				/>
			</div>
			<div className="relative z-20 flex h-full w-full">
				{isOpen && (
					<div
						className="flex h-full w-1/12 cursor-pointer items-center justify-center hover:bg-black/5"
						onClick={onClose}
					>
						<img className="h-8 w-8 rotate-[270deg]" src="/arrow3.svg" />
					</div>
				)}
				<div className="ml-auto flex w-[90%] flex-col items-end justify-end gap-4 p-12">
					<div className="cursor-pointer" onClick={() => !isOpen && onOpen()}>
						<h2 className="font-syne text-2xl font-normal tracking-widest text-[#2E2E2E]">
							KONTAKT
						</h2>
					</div>
					<div className="flex flex-col gap-1 text-right">
						<span className="font-syne text-base font-medium text-zinc-800">
							email: studiore@studiore.pl
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
