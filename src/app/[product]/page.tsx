// "use client";
// import { Syne } from "next/font/google";
// import NavigationBarMain from "../components/NavigationBarMain";
// import NavigationBarMobile from "../components/NavigationBarMobile";
// import {
// 	claimServiceData,
// 	Logo,
// 	startServiceData,
// } from "../components/ProductComponents/components";
// import { LogoMobile } from "../components/ProductMobileComponents/components";
// import { Header } from "../components/ProductComponents/components";
// import { HeaderMobile } from "../components/ProductMobileComponents/components";
// import { ServiceSection } from "../components/ProductComponents/components";
// import { ServiceSectionMobile } from "../components/ProductMobileComponents/components";
// import { CallToAction } from "../components/ProductComponents/components";
// import { CallToActionMobile } from "../components/ProductMobileComponents/components";

// const syneFont = Syne({
// 	subsets: ["latin"],
// 	weight: ["400", "700"],
// 	variable: "--font-syne",
// });

// export default function HomePage() {
// 	return (
// 		<div
// 			className={`z-50 flex h-full flex-col items-center justify-center bg-white md:p-12 ${syneFont.variable} text-black`}
// 		>
// 			<div>
// 				<div className="hidden md:block">
// 					<Logo />
// 				</div>
// 				<div className="block md:hidden">
// 					<LogoMobile />
// 				</div>
// 			</div>
// 			<div className="relative w-full max-w-6xl px-4 py-10">
// 				<div className="block md:hidden">
// 					<NavigationBarMobile />
// 				</div>

// 				<div className="hidden md:block">
// 					<NavigationBarMain />
// 				</div>
// 			</div>
// 			<div>
// 				<div className="hidden md:block">
// 					<Header />
// 				</div>
// 				<div className="block md:hidden">
// 					<HeaderMobile />
// 				</div>
// 			</div>

// 			<div>
// 				<div className="hidden md:block">
// 					<ServiceSection {...startServiceData} />
// 				</div>
// 				<div className="block md:hidden">
// 					<ServiceSectionMobile {...startServiceData} />
// 				</div>
// 			</div>
// 			<div>
// 				<div className="hidden md:block">
// 					<ServiceSection {...claimServiceData} />
// 				</div>
// 				<div className="block md:hidden">
// 					<ServiceSectionMobile {...claimServiceData} />
// 				</div>
// 			</div>
// 			<div className="flex w-full max-w-6xl items-center justify-center">
// 				<div className="hidden w-full md:block">
// 					<CallToAction />
// 				</div>
// 				<div className="block md:hidden">
// 					<CallToActionMobile />
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

import { ChevronDown, Plus, Minus, ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { Syne } from "next/font/google";

const syneFont = Syne({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-syne",
});

// --- LINKI DO ZDJĘĆ ---
const images = {
	heroBg: "/restart.png",
	person: "/restart.png",
};

import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

import { NavigationBar2 } from "../components/ProductComponents/components";

export function MobileNavigationBar() {
	const [isOpen, setIsOpen] = useState(false);
	// Dodajemy stan, który przechowa href klikniętego elementu
	const [clickedItem, setClickedItem] = useState<string | null>(null);

	const pathname = usePathname();
	const router = useRouter();

	const navItems = [
		{ label: "STRONA GŁÓWNA", href: "/" },
		{ label: "REORGANIZACJA", href: "/reorganizacja" },
		{ label: "REARANŻACJA", href: "/rearanzacja" },
		{ label: "REPROJEKT", href: "/reprojekt" },
		{ label: "O NAS", href: "/onas" },
		{ label: "KONTAKT", href: "/kontakt" },
	];

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();

		// 1. Ustawiamy stan kliknięcia od razu -> kolor się zmienia i zostaje
		setClickedItem(href);

		setTimeout(() => {
			setIsOpen(false); // Opcjonalnie: zamknij menu przy przejściu
			router.push(href);
			// Resetujemy stan dopiero po wykonaniu akcji (lub wcale, bo komponent się przeładuje)
			setClickedItem(null);
		}, 500);
	};

	return (
		<div className="md:hidden">
			<div className="fixed right-6 top-6 z-[60]">
				<button
					onClick={toggleMenu}
					className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:bg-white"
				>
					{isOpen ? (
						<X size={28} className="text-[#FF4A00]" />
					) : (
						<Menu size={28} className="text-[#2E2E2E]" />
					)}
				</button>
			</div>
			<div className="fixed left-6 top-6 z-[60]">
				<button
					onClick={() => window.history.go(-1)}
					className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:bg-white"
				>
					<ChevronLeft size={28} className="text-[#2E2E2E]" />
				</button>
			</div>

			<div
				className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
					isOpen
						? "backdrop-blur-xs pointer-events-auto translate-y-0 bg-white/80 opacity-100"
						: "pointer-events-none translate-y-full opacity-0"
				}`}
			>
				<nav className="flex flex-col items-center gap-8">
					{navItems.map((item) => {
						const isActive = pathname === item.href;

						const isClicked = clickedItem === item.href;

						return (
							<Link
								key={item.label}
								href={item.href}
								onClick={(e) => handleNavigation(e, item.href)}
								style={{ WebkitTapHighlightColor: "transparent" }}
								// Zmiana logiki klas CSS:
								className={`group relative text-sm font-semibold transition-all duration-300 ${isClicked ? "scale-95 text-[#FF4A00]" : "active:scale-95"} ${
									isActive
										? "text-[#2E2E2E]"
										: isClicked
											? "text-[#FF4A00]" // Jeśli kliknięty -> pomarańczowy
											: "text-[#2E2E2E] hover:text-[#FF4A00]"
								}`}
							>
								{item.label}

								<span
									className={`absolute -bottom-2 left-0 block h-[1px] transition-all duration-300 ${
										isActive
											? "w-full bg-[#2E2E2E]"
											: isClicked
												? "w-full" // Jeśli kliknięty -> podkreślenie też pomarańczowe
												: "w-0"
									}`}
								></span>
							</Link>
						);
					})}
				</nav>

				<div className="absolute bottom-10 text-xs font-medium text-gray-400">© 2026 StudioRE</div>
			</div>
		</div>
	);
}

const services = [
	{
		title: "REstart",
		intro:
			"Rozpocznij swoją podróż do uporządkowanej przestrzeni. Pomożemy Ci zacząć od nowa z profesjonalnym systemem organizacji.",

		image: images.person,
		description:
			"REstart to kompleksowa usługa reorganizacji przestrzeni mieszkalnej. Rozpoczynamy od dogłębnej analizy Twoich potrzeb i nawyków, aby stworzyć spersonalizowany system organizacji. Nasz zespół pomoże Ci pozbyć się bałaganu, zoptymalizować przestrzeń i wprowadzić trwałe zmiany w organizacji domu.",
		targetAudience: [
			{
				label: "Właściciele domów",
				description:
					"Dla osób, które chcą odzyskać kontrolę nad swoją przestrzenią życiową i stworzyć funkcjonalny, uporządkowany dom.",
			},
			{
				label: "Młode rodziny",
				description:
					"Rodziny z dziećmi potrzebujące praktycznych rozwiązań organizacyjnych dostosowanych do dynamicznego stylu życia.",
			},
			{
				label: "Minimaliści",
				description:
					"Osoby pragnące uprościć swoje otoczenie i skupić się na tym, co naprawdę istotne.",
			},
			{
				label: "Przeprowadzki",
				description:
					"Osoby przechodzące zmiany życiowe, które chcą rozpocząć nowy rozdział w uporządkowanej przestrzeni.",
			},
		],
	},
	{
		title: "REclaim",
		intro:
			"Odzyskaj swoją przestrzeń i czas. Specjalizujemy się w transformacji chaotycznych obszarów w funkcjonalne, inspirujące miejsca.",
		// Używam local path z Twojego kodu, ale możesz tu wstawić images.heroBg dla testu
		image: images.heroBg,
		description:
			"REclaim to proces odzyskiwania kontroli nad zapomnianymi lub zdezorganizowanymi przestrzeniami. Pomagamy przekształcić piwnice, strychy, garaże i szafy w funkcjonalne obszary. Nasza metoda łączy praktyczność z estetyką, tworząc miejsca, które rzeczywiście służą Twoim potrzebom.",
		targetAudience: [
			{
				label: "Profesjonaliści",
				description:
					"Zajęci profesjonaliści szukający efektywnych systemów organizacji domowego biura i przestrzeni życiowej.",
			},
			{
				label: "Seniorzy",
				description:
					"Osoby starsze pragnące uprościć swoje otoczenie i uczynić dom bardziej dostępnym i bezpiecznym.",
			},
			{
				label: "Entuzjaści designu",
				description: "Miłośnicy pięknych wnętrz, którzy chcą połączyć funkcjonalność z estetyką.",
			},
			{
				label: "Inwestorzy",
				description:
					"Właściciele nieruchomości przygotowujący przestrzeń do wynajmu lub sprzedaży.",
			},
		],
		isLast: true,
	},
];

export default function DynamicPage() {
	const contentRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname(); // 2. Pobranie ścieżki

	const scrollToContent = () => {
		contentRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	// --- LOGIKA POBIERANIA TREŚCI NA PODSTAWIE URL ---
	const getPageContent = () => {
		const path = pathname || "";

		// 1. REARANŻACJA
		if (path.includes("/rearanzacja")) {
			return {
				part2: "ARAN",
				part3: "ŻACJA",
				description:
					"Odkrywamy ukryty potencjał Twojego wnętrza bez konieczności przeprowadzania uciążliwego remontu generalnego. Rearanżacja to sztuka doboru detalu, zmiany układu funkcjonalnego i zabawy formą. Poprzez selekcję unikalnych tekstyliów, oświetlenia oraz mebli, nadajemy przestrzeni zupełnie nowy charakter i świeżość. Skupiamy się na tym, co już posiadasz, udoskonalając to nowymi akcentami, aby stworzyć spójną, estetyczną całość, która lepiej odpowiada Twoim ewoluującym potrzebom i stylowi życia.",
			};
		}

		// 2. REPROJEKT
		if (path.includes("/reprojekt")) {
			return {
				part2: "PRO",
				part3: "JEKT",
				description:
					"Kompleksowy proces twórczy, w którym surowa wizja przekształca się w namacalną rzeczywistość. Reprojekt to działanie od podstaw – od wyburzania ścian i kładzenia nowych instalacji, po precyzyjny dobór materiałów wykończeniowych. Łączymy rygorystyczną wiedzę techniczną z wrażliwością artystyczną, tworząc wnętrza szyte na miarę. Każdy centymetr jest przemyślany pod kątem ergonomii i estetyki, tworząc architekturę, która nie tylko zachwyca formą, ale przede wszystkim służy mieszkańcom przez lata.",
			};
		}

		return {
			part2: "GANI",
			part3: "ZACJA",
			description:
				"Tworzymy systemy, które przywracają kontrolę nad otoczeniem. Reorganizacja to nie tylko sprzątanie, ale głęboka analiza Twoich nawyków i ścieżek domowych. Eliminujemy wizualny szum i nadmiar bodźców, zastępując chaos logicznymi strukturami przechowywania. Projektujemy wnętrza szaf, garderób i spiżarni tak, aby każda rzecz miała swoje stałe miejsce, a codzienne czynności stały się intuicyjne i mniej obciążające. Twoja przestrzeń zaczyna pracować dla Ciebie, dając Ci czas i spokój ducha.",
		};
	};

	// Pobieramy dane z funkcji
	const { part2, part3, description } = getPageContent();

	return (
		<div
			className={`min-h-screen bg-white ${syneFont.className} text-[#2E2E2E] selection:bg-[#FF4A00] selection:text-white`}
		>
			<div className="hidden md:block">
				<NavigationBar2 />
			</div>
			<div className="block lg:hidden">
				<MobileNavigationBar />
			</div>

			{/* --- 1. HERO SECTION --- */}
			<section className="pt-25 relative flex h-screen w-full flex-col border-b border-black lg:flex-row lg:pt-0">
				{/* LEWA POŁOWA: Opis */}
				<div className="relative order-2 flex h-1/2 w-full flex-col items-end justify-center px-6 md:order-1 lg:h-full lg:w-1/2 lg:px-8">
					<div className="max-w-md text-right">
						<p className="text font-light leading-relaxed text-orange-600 md:text-xl">
							{description}
						</p>
						<div className="ml-auto mt-8 h-px w-24 bg-[#FF4A00]" />
					</div>
				</div>

				{/* PRAWA POŁOWA: Tytuł Dynamiczny */}
				<div className="relative order-1 flex h-1/2 w-full flex-col items-center justify-center overflow-hidden bg-white px-4 md:order-2 md:items-start md:justify-center lg:h-full lg:w-1/2 lg:px-8">
					<h1
						className={`tracking- relative z-10 text-8xl font-extrabold tracking-tighter text-orange-600 md:text-left md:text-[9.5vw]`}
					>
						{/* Zawsze stałe RE */}
						REOR
						<br />
						{/* Dynamiczna druga część (np. ARAN, PRO, ORGANI) - Kolorowa */}
						<span className="text-[#FF4A00]">{part2}</span>
						<br />
						{/* Dynamiczna trzecia część (np. ZACJA, JEKT) - Standardowy kolor (dziedziczony orange-600 lub czarny wg uznania) */}
						<span className="text-orange-600">{part3}</span>
					</h1>
				</div>

				<div
					className="group absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-4"
					onClick={scrollToContent}
				>
					<div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-black bg-white/50 backdrop-blur-sm transition-all group-hover:border-[#FF4A00] group-hover:bg-[#FF4A00] group-hover:text-white">
						<ChevronDown size={20} />
					</div>

					<span className="hidden text-center text-xs font-bold uppercase tracking-widest text-[#2E2E2E] transition-colors group-hover:text-[#FF4A00] lg:block">
						Przewiń
						<br />w dół
					</span>
				</div>
			</section>

			{/* --- 2. SEKCJA Z KOLUMNAMI --- */}
			<section
				ref={contentRef}
				className="flex h-auto w-full flex-col items-start border-b border-black lg:flex-row"
			>
				{services.map((service, index) => (
					<ExpandableColumn
						key={service.title}
						title={service.title}
						intro={service.intro}
						image={service.image}
						description={service.description}
						targetAudience={service.targetAudience}
						isLast={index === services.length - 1} // Poprawiony warunek isLast
					/>
				))}
			</section>

			{/* --- LOGO NA DOLE --- */}
			<div className="flex w-full items-center justify-center bg-white py-20">
				<img src="/logo.svg" alt="Logo StudioRE" className="h-[10%] w-[10%] object-contain" />
			</div>
		</div>
	);
}

// --- KOMPONENT KOLUMNY ---
interface ColumnProps {
	title: string;
	intro: string;
	image: string;
	description: string;
	targetAudience: { label: string; description: string }[];
	isLast?: boolean;
}

const ExpandableColumn = ({
	title,
	image,
	intro,
	description,
	targetAudience,
	isLast = false,
}: ColumnProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={`flex w-full ${syneFont.variable} flex-col border-b border-gray-200 lg:w-1/2 lg:border-b-0 ${
				!isLast ? "lg:border-r" : ""
			} transition-all duration-500 ${isOpen ? "bg-white" : "bg-white"}`}
		>
			<div className="relative flex h-full min-h-[500px] flex-col justify-between p-8 lg:p-16">
				<div className="flex items-start justify-between">
					<div className="flex-1">
						<h2 className={`mb-6 text-4xl text-[#2E2E2E] ${syneFont.variable} lg:text-5xl`}>
							{title}
						</h2>
						<p className="max-w-md text-lg font-light leading-relaxed tracking-wider text-gray-500">
							{intro}
						</p>
					</div>
				</div>

				<div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8">
					<span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
						{isOpen ? "Zwiń szczegóły" : "Więcej informacji"}
					</span>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
							isOpen
								? "rotate-180 bg-[#FF4A00] text-white"
								: "bg-[#2E2E2E] text-white hover:bg-[#FF4A00]"
						}`}
						aria-label={isOpen ? "Collapse details" : "Expand details"}
					>
						{isOpen ? <Minus size={24} /> : <Plus size={24} />}
					</button>
				</div>
			</div>

			<div
				className={`overflow-hidden border-t border-gray-100 transition-all duration-700 ease-in-out ${
					isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="h-full w-full p-8 lg:p-16">
					<div className="relative mb-12 overflow-hidden">
						<img
							src={image || "/placeholder.svg"}
							alt={title}
							className="h-1/2 w-full object-cover transition-transform duration-700"
						/>
					</div>

					<div className="mb-2 flex gap-8 lg:flex-row">
						<div className="w-full">
							<p className="text-lg font-light leading-relaxed tracking-wide text-[#2E2E2E]">
								{description}
							</p>
						</div>
					</div>

					<div className="border-t border-gray-100 pt-12">
						<div className="mb-8 flex items-center gap-4">
							<span className="text-xs font-bold uppercase tracking-widest text-[#FF4A00]">
								DLA KOGO?
							</span>
						</div>

						<div className="space-y-6">
							{targetAudience.map((audience, index) => (
								<div key={index} className="flex flex-col gap-4 lg:flex-row lg:gap-8">
									<h3 className="text-sm font-bold uppercase text-[#2E2E2E] lg:w-1/3">
										{audience.label}
									</h3>
									<p className="text-sm font-light leading-relaxed tracking-wide text-gray-500 lg:w-2/3">
										{audience.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

/*
import { Home, Mail } from "lucide-react";

export function MobileNavBar() {
	const pathname = usePathname();

	const navItems = [
		{
			label: "Start",
			href: "/",
			icon: Home,
			type: "standard",
		},
		{
			label: "Organizacja",
			href: "/organizacja",
			type: "re",
		},
		{
			label: "Aranżacja",
			href: "/rearanzacja",
			type: "re",
		},
		{
			label: "Projekt",
			href: "/projekt",
			type: "re",
		},
		{
			label: "Kontakt",
			href: "/kontakt",
			icon: Mail,
			type: "standard",
		},
	];

	return (
		<div className="absolute left-0 right-0 top-6 z-50 flex justify-start px-5 md:hidden">
			<nav className="flex h-20 w-full max-w-md items-center justify-around gap-2 rounded-[2rem]">
				{navItems.map((item) => {
					const isActive = pathname === item.href;
					const Icon = item.icon;

					return (
						<Link
							key={item.href}
							href={item.href}
							className="relative flex h-full flex-1 flex-col items-center justify-center"
						>
							<div className="flex h-8 w-full items-center justify-center">
								{item.type === "re" ? (
									<span
										className={`text-xl font-[var(--font-syne)] font-black leading-none tracking-tighter transition-colors duration-300 ${
											isActive ? "text-[#FF4A00]" : "text-[#2E2E2E] group-hover:text-gray-600"
										}`}
									>
										RE
									</span>
								) : (
									<Icon
										strokeWidth={2.5}
										size={24}
										className={`transition-colors duration-300 ${
											isActive ? "text-orange-600" : "text-[#2E2E2E] group-hover:text-gray-600"
										}`}
									/>
								)}
							</div>

							<span
								className={`mt-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
									isActive ? "text-[#FF4A00]" : "text-gray-400 group-hover:text-gray-600"
								}`}
							>
								{item.label}
							</span>

							{isActive && (
								<div className="absolute bottom-0 h-1 w-8 rounded-t-full bg-[#FF4A00]"></div>
							)}
						</Link>
					);
				})}
			</nav>
		</div>
	);
}
*/
