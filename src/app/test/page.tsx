/*
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Syne } from "next/font/google";
import { useEffect } from "react";
import { X } from "lucide-react";

import NavigationBarMobile from "../components/NavigationBarMobile";

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
			className={`relative flex h-screen w-full flex-col overflow-hidden bg-white ${syneFont.variable} font-['Syne'] text-[#2E2E2E]`}
		>
			<div className="z-1 flex p-4">
				<NavigationBarMobile />
			</div>

			<div className="relative flex h-full w-full flex-col items-end justify-end p-4">
				<div className="rotate-270 absolute right-3 top-[-90px] z-20 origin-bottom-right items-start justify-start">
					<button
						onClick={openAbout}
						className="flex flex-col items-center gap-2 text-xl uppercase tracking-[0.2em] text-[#2E2E2E] transition-colors active:text-orange-600"
					>
						<div className="h-[1px] w-24 bg-[#2E2E2E]"></div>
						<p>O nas</p>
					</button>
				</div>

				<div className="flex h-full w-full flex-row items-center justify-center p-4">
					<div className="z-1 absolute bottom-8 p-4">
						<div className="z-1 h-90 w-90 relative flex items-center justify-center">
							<img src="/logo.svg" alt="Studio Re. Logo" className="" />
						</div>
					</div>
				</div>
				<div className="flex h-full w-full items-center justify-center p-4">
					<div className="bottom-50 absolute z-0 h-3/4 w-[45%] bg-white shadow-lg">
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

				<div className="relative z-40 flex flex-col gap-3 p-1">
					<button
						onClick={openContact}
						className="flex flex-col items-center justify-center gap-2 text-xl uppercase tracking-[0.2em] text-[#2E2E2E] transition-colors active:text-orange-600"
					>
						<div className="w-34 h-[1px] bg-[#2E2E2E]"></div>
						<p>Kontakt</p>
					</button>
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
				className={`fixed inset-0 z-50 p-4 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${showContactHover && !isClosingContactHover ? "translate-y-[40%]" : "translate-y-full"} `}
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

// --- 2. ABOUT US HOVER (Wrapper) ---
type Props = { isOpen: boolean; onOpen: () => void; onClose: () => void };

function AboutUsHover(props: Props) {
	return (
		<div
			className={`relative h-full w-full overflow-hidden bg-white shadow-2xl md:border-l md:border-zinc-800 md:bg-white/80 md:shadow-none md:backdrop-blur-xl`}
		>
			{/* Renderuje wersję Mobile na małych ekranach */}
			<div className="block h-full w-full md:hidden">
				<AboutUsModal {...props} />
			</div>
		</div>
	);
}

interface TeamMember {
	name: string;
	role: string;
	bio: string;
	image: string;
}

const teamMembers = [
	{
		name: "ANETA ROMPKOWSKA",
		role: "ARCHITEKT WNĘTRZ",
		bio: `Cześć! Od 10 lat jestem architektem z pasją do tworzenia przestrzeni, które nie tylko
			dobrze wyglądają, ale też dobrze się w nich żyje. Wierzę, że wnętrze= mieszkancy —
			dlatego każdy projekt traktuję indywidualnie, z pełnym zaangażowaniem i uważnością na
			detale. Łączę estetykę z praktycznymi rozwiązaniami oraz często pracuję z osobami,
			które chcą odzyskać harmonię w swoim domu – także poprzez decluttering i świadome
			projektowanie. Pracuję kompleksowo – od koncepcji, aż po nadzór nad realizacją. Jeśli
			marzysz o wnętrzu NA PRAWDĘ dopasowanym do Ciebie – zapraszam do współpracy.`,
		image: "/professional-woman-architect.jpg",
	},
	{
		name: "MARTYNA WILCZYŃSKA",
		role: "SPECJALISTKA DS. ORGANIZACJI I DEKORACJI WNĘTRZ",
		bio: `Cześć! Jestem specjalistką w organizowaniu i dekorowaniu przestrzeni, tak aby była
			funkcjonalna, a zarazem autentyczna. Nie oceniam - wspieram, bo każda współpraca to
			indywidualna podróż, której celem jest TWÓJ komfort. Wierzę, że mniej znaczy więcej i
			razem znajdziemy balans między tym co potrzebne, a tym co zabiera miejsce. Jeśli
			czujesz, że Twoja przestrzeń Cię przytłacza, jestem tu żeby Ci pomóc.`,
		image: "/professional-woman-architect.jpg",
	},
];

interface AboutUsModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function AboutUsModal({ isOpen, onClose }: AboutUsModalProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isOpen) {
			requestAnimationFrame(() => {
				setIsVisible(true);
			});
			// Blokuje scrollowanie tła strony (body)
			document.body.style.overflow = "hidden";
		} else {
			setIsVisible(false);
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const handleClose = () => {
		setIsVisible(false);
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className={`${syneFont.variable} flex h-full w-full flex-col bg-white`}>
			<div
				className={`sticky top-0 z-10 flex shrink-0 items-center justify-between border-b border-black/10 bg-white/95 px-6 py-5 backdrop-blur-md`}
			>
				<div>
					<h2 className="text-2xl font-light tracking-tight text-black">
						<span className="font-semibold uppercase text-orange-600"> O Nas</span>
					</h2>
				</div>
				<button onClick={handleClose} className="cursor-pointer rounded-full bg-orange-600 p-2">
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

			<div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-6 py-6">
				<div className="space-y-8 pb-10">
					{teamMembers.map((member, index) => (
						<div
							key={member.name}
							className={`group transition-all duration-500 ${
								isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
							}`}
						>
							<div className="relative mb-4 w-full">
								<div className="aspect-[4/3] overflow-hidden rounded-2xl bg-black/5">
									<img
										src={member.image || "/placeholder.svg"}
										alt={member.name}
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>
								<div className="rounded-4xl absolute -bottom-2 -right-2 z-10 flex h-16 w-16 items-center justify-center bg-orange-600">
									<img src="/Vector.svg" alt="Studio Re Logo" className="h-12 w-12 text-white" />
								</div>
							</div>

							<div className="flex flex-col">
								<span className="mb-1 text-xs font-medium uppercase tracking-widest text-orange-600">
									{member.role}
								</span>
								<h3 className="mb-3 text-xl font-semibold tracking-tight text-black">
									{member.name}
								</h3>
								<p className="text-sm leading-relaxed text-black/70">{member.bio}</p>
								<div className="mt-4 h-px w-12 bg-orange-600/30 transition-all duration-300 group-hover:w-20 group-hover:bg-orange-600" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

// --- 3. CONTACT HOVER (Wrapper) ---
function ContactHover(props: Props) {
	return (
		<div className="rounded-4xl relative h-full w-full bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.10)]">
			{/* Mobile View */}
			<div className="block h-1/2 w-full md:hidden">
				<ContactMobile {...props} />
			</div>
		</div>
	);
}

// --- 3a. ContactMobile (NOWY KOMPONENT TYLKO DLA MOBILE) ---
function ContactMobile({ onClose }: Props) {
	return (
		<div className="flex h-full w-full flex-col p-6">
			<div className="mb-10 flex justify-end">
				<button onClick={onClose} className="cursor-pointer rounded-full bg-orange-600 p-2">
					<svg
						className="h-6 w-6 rotate-90 text-white transition-transform duration-500"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
					</svg>
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
				<div className="flex gap-8">
					<img className="h-10 w-10" src="/facebook.png" />
					<img className="h-10 w-10" src="/instagram.png" />
				</div>
			</div>
		</div>
	);
}

/*
<div className="a relative z-10 overflow-hidden bg-white shadow-2xl">
						<video
							src="/photo.mp4"
							autoPlay
							muted
							loop
							playsInline
							className="h-full w-full object-cover"
						/>
					</div> 
*/
