import Image from "next/image";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface ServiceSectionProps {
	title: string;
	imageUrl: string;
	description: string;
	tags: string[];
	qas: { q: string; a: string }[];
	decorativeCircle?: "top-right" | "top-left";
}

interface QaItem {
	q: string;
	a: string;
}

const serviceTags = [
	"▪ ROZPAKOWANIE",
	"▪ ORGANIZACJA",
	"▪ ORGANIZACJA",
	"▪ UTYLIZACJA",
	"▪ UTYLIZACJA",
];

const startServiceData: ServiceSectionProps = {
	title: "start",
	imageUrl: "/backgroud.png",
	description:
		"Lorem ipsum dolor sit amet consectetur. Molestie semper nec sem morbi. Lectus placerat commodo ac accumsan purus lacus aenean consectetur. Egestas dolor quis amet leo et tincidunt. Arcu id sit in cras amet dolor adipiscing purus turpis.",
	tags: serviceTags,
	qas: [
		{
			q: "DLA KOGO?",
			a: "Dla osób, które właśnie się przeprowadziły i chcą szybko poczuć sie jak u siebie.",
		},
		{
			q: "ILE TRWA WYKONANIE?",
			a: "Działamy konkretnie z dbałością o detale. Twoje potrzeby są dla nas najważniejsze i chcemy aby Twoja wizja spotkała się z rzeczywistością, dlatego czas wykonania ustalamy dopiero po konsultacji.",
		},
		{
			q: "ILE TO KOSZTUJE?",
			a: "Każdy projekt wyceniamy indywidualnie. W zależności od potrzeb i uzyskanych materiałów.",
		},
		{
			q: "JESTEŚ ZAINTERESOWANY?",
			a: "Napisz do nas wiadomość mailową, a my ci odpowiemy w ciągu 24H.",
		},
	],
	decorativeCircle: "top-right",
};

const claimServiceData: ServiceSectionProps = {
	title: "claim",
	imageUrl: "/background2.png",
	description:
		"Lorem ipsum dolor sit amet consectetur. Molestie semper nec sem morbi. Lectus placerat commodo ac accumsan purus lacus aenean consectetur. Egestas dolor quis amet leo et tincidunt. Arcu id sit in cras amet dolor adipiscing purus turpis.",
	tags: serviceTags,
	qas: [
		{
			q: "DLA KOGO?",
			a: "Dla osób, które właśnie się przeprowadziły i chcą szybko poczuć sie jak u siebie.",
		},
		{
			q: "ILE TRWA WYKONANIE?",
			a: "Działamy konkretnie z dbałością o detale. Twoje potrzeby są dla nas najważniejsze i chcemy aby Twoja wizja spotkała się z rzeczywistością, dlatego czas wykonania ustalamy dopiero po konsultacji.",
		},
		{
			q: "ILE TO KOSZTUJE?",
			a: "Każdy projekt wyceniamy indywidualnie. W zależności od potrzeb i uzyskanych materiałów pitu pitu.",
		},
		{
			q: "JESTEŚ ZAINTERESOWANY?",
			a: "Napisz do nas wiadomość poprzez formularz kontaktowy, a my ci odpowiemy w ciągu 24H.",
		},
	],
	decorativeCircle: "top-left",
};

export const LogoMobile: React.FC = () => (
	<div className="flex w-full max-w-6xl justify-center p-2">
		<div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-orange-600 shadow-lg backdrop-blur-md md:h-[93px] md:w-[93px]">
			<Link href="/">
				<img
					src="/Vector.svg"
					alt="Studio Re Logo"
					className="h-10 w-10 text-white md:h-16 md:w-16"
				/>
			</Link>
		</div>
	</div>
);

export const HeaderMobile: React.FC = () => {
	const params = useParams();
	// Fallback jeśli params.product nie istnieje
	const productName = params?.product || "oferta";

	return (
		<header className="z-1 relative bottom-40 w-full max-w-6xl px-4 pb-12 pt-0 md:pb-20 md:pt-10">
			{/* Mobile: flex-col-reverse sprawia, że Tytuł jest nad Opisem */}
			<div className="flex flex-col-reverse items-center gap-8">
				{/* Opis */}
				<div className="relative w-full lg:w-2/3">
					{/* Border right tylko na desktopie (md:border-r). Na mobile border-b (opcjonalnie) lub brak */}
					<div className="bg-light/70 relative z-10 flex min-h-[auto] items-center p-4 backdrop-blur-lg md:min-h-[325px] md:border-r md:border-black/10 md:p-8">
						<p className="text-justify font-['Syne'] text-base tracking-wider text-[#2E2E2E] md:text-2xl">
							Odzyskanie porządku i lekkości w codziennym życiu wydaje ci się niemożliwe? Dzięki
							naszej usłudze declutteringu zorganizujemy Twoją przestrzeń tak, by była funkcjonalna,
							estetyczna i wolna od nadmiaru. Szafy, kuchnie, całe mieszkania – każde miejsce może
							oddychać na nowo.
						</p>
					</div>
				</div>

				{/* Tytuł / Ikona */}
				<div className="flex w-full flex-row items-center justify-center lg:w-1/3 lg:flex-col lg:gap-0">
					<img src="/icon.svg" className="h-8 w-8 object-contain pb-0 md:h-12 md:w-14 md:pb-1" />
					<div className="pt-1 font-['Syne'] text-3xl text-[#50504F] md:pb-2 md:pt-3 md:text-5xl">
						{productName}
					</div>
				</div>
			</div>
		</header>
	);
};

export const ServiceSectionMobile: React.FC<ServiceSectionProps> = ({
	title,
	imageUrl,
	description,
	tags,
	qas,
	decorativeCircle,
}) => {
	return (
		<section className="relative bottom-40 flex w-full max-w-6xl flex-col px-4 py-12 md:py-24">
			{/* Dekoracyjne kółka - tylko Desktop */}
			{decorativeCircle === "top-right" && (
				<div className="right-15 absolute top-8 z-10 hidden h-36 w-36 rounded-full bg-orange-600 lg:block" />
			)}
			{decorativeCircle === "top-left" && (
				<div className="left-15 absolute top-8 z-10 hidden h-36 w-36 rounded-full bg-orange-600 lg:block" />
			)}

			<div className="relative z-10 flex flex-col">
				{/* Obrazek */}
				<div className="w-full overflow-hidden rounded-sm">
					{/* Zabezpieczenie przed brakiem obrazka placeholderem */}
					<Image
						src={imageUrl}
						alt={`Organizacja przestrzeni - ${title}`}
						width={1234}
						height={365}
						className="h-auto w-full object-cover"
						priority={title === "start"} // LCP optimization
					/>
				</div>

				{/* Sekcja Tytuł + Opis */}
				<div
					className={`md:p-15 flex flex-col gap-6 py-8 md:gap-8 ${/* Logika Borderów: Na mobile brak bocznych ramek (border-0), na desktopie (md:) dodajemy je */ ""} ${
						decorativeCircle === "top-right"
							? "border-0 md:border-l md:border-black/10"
							: decorativeCircle === "top-left"
								? "border-0 md:border-r md:border-black/10"
								: ""
					} ${/* Logika Kolejności: Na mobile zawsze kolumna, na desktopie odwracanie */ ""} ${
						decorativeCircle === "top-left" ? "md:flex-row-reverse" : "md:flex-row"
					}`}
				>
					{/* Tytuł sekcji */}
					<div className="flex w-full shrink-0 items-center justify-center md:w-1/3 md:flex-col md:gap-0">
						<img
							src="/icon-black.svg"
							className="h-8 w-8 object-contain pb-0 md:h-12 md:w-14 md:pb-1"
						/>
						<div className="pt-1 font-['Syne'] text-3xl text-[#50504F] md:text-5xl">{title}</div>
					</div>

					{/* Opis */}
					<p className="w-full text-justify font-['Syne'] text-base tracking-wide text-[#2E2E2E] md:w-2/3 md:text-xl">
						{description}
					</p>
				</div>

				{/* Tagi */}
				<div className="grid w-full grid-cols-1 border border-black/10 md:grid-cols-5">
					{tags.map((tag, index) => (
						<div
							key={index}
							className="border-b border-black/10 px-2 py-4 text-center last:border-b-0 md:border-b-0 md:border-r md:py-10 md:last:border-r-0"
						>
							<span className="text-sm font-normal uppercase tracking-wider md:text-xl">{tag}</span>
						</div>
					))}
				</div>

				{/* Q&A */}
				<div
					className={`mt-8 font-['Syne'] md:mt-0 md:pt-16 ${/* Border logic same as above */ ""} ${
						decorativeCircle === "top-left"
							? "border-0 md:border-l md:border-black/10"
							: decorativeCircle === "top-right"
								? "border-0 md:border-r md:border-black/10"
								: ""
					}`}
				>
					{qas.map((item, index) => (
						<div
							key={index}
							className="grid grid-cols-1 gap-2 border-b border-black/5 px-0 py-6 last:border-0 md:gap-8 md:px-10"
						>
							<h4 className="text-lg font-bold uppercase tracking-wider text-[#2E2E2E] md:col-span-1 md:text-xl">
								{item.q}
							</h4>
							<p className="text-justify text-base tracking-wide text-[#50504F] md:col-span-2 md:text-xl">
								{item.a}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export const CallToActionMobile: React.FC = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		// ZMIANY:
		// 1. Usunięto 'bottom-40' (to powodowało dziwne przesunięcia).
		// 2. Zmieniono 'py-20' na 'py-10 md:py-20' (mniejszy padding w środku na mobile).
		// 3. Dodano '-mt-1' (opcjonalnie, wciąga sekcję minimalnie w górę, likwidując szpary).
		<div className="relative bottom-20 -mt-1 w-full overflow-hidden bg-white px-6 py-10 md:py-20">
			{/* Main container */}
			<div
				className="group relative mx-auto max-w-xl cursor-pointer"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* Animated border frame */}
				<div className="absolute -inset-4">
					{/* Top line */}
					<div
						className={`absolute left-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4A00] to-transparent transition-all duration-700 ${isHovered ? "w-full" : "w-0"}`}
					/>
					{/* Right line */}
					<div
						className={`absolute right-0 top-0 w-px bg-gradient-to-b from-transparent via-[#FF4A00] to-transparent transition-all delay-200 duration-700 ${isHovered ? "h-full" : "h-0"}`}
					/>
					{/* Bottom line */}
					<div
						className={`absolute bottom-0 right-0 h-px bg-gradient-to-l from-transparent via-[#FF4A00] to-transparent transition-all delay-300 duration-700 ${isHovered ? "w-full" : "w-0"}`}
					/>
					{/* Left line */}
					<div
						className={`absolute bottom-0 left-0 w-px bg-gradient-to-t from-transparent via-[#FF4A00] to-transparent transition-all delay-500 duration-700 ${isHovered ? "h-full" : "h-0"}`}
					/>
				</div>

				{/* Corner accents */}
				<div className="absolute -left-4 -top-4 h-8 w-8">
					<div
						className={`absolute left-0 top-0 h-full w-px bg-[#FF4A00] transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
					/>
					<div
						className={`absolute left-0 top-0 h-px w-full bg-[#FF4A00] transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
					/>
				</div>
				<div className="absolute -right-4 -top-4 h-8 w-8">
					<div
						className={`absolute right-0 top-0 h-full w-px bg-[#FF4A00] transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
					/>
					<div
						className={`absolute right-0 top-0 h-px w-full bg-[#FF4A00] transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
					/>
				</div>
				<div className="absolute -bottom-4 -left-4 h-8 w-8">
					<div
						className={`absolute bottom-0 left-0 h-full w-px bg-[#FF4A00] transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
					/>
					<div
						className={`absolute bottom-0 left-0 h-px w-full bg-[#FF4A00] transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
					/>
				</div>
				<div className="absolute -bottom-4 -right-4 h-8 w-8">
					<div
						className={`absolute bottom-0 right-0 h-full w-px bg-[#FF4A00] transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
					/>
					<div
						className={`absolute bottom-0 right-0 h-px w-full bg-[#FF4A00] transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
					/>
				</div>

				{/* Content */}
				<div className="relative px-8 py-12 text-center">
					{/* Main heading */}
					<h2 className="relative mb-6 flex justify-center gap-2 overflow-hidden font-['Syne'] text-3xl font-light uppercase text-[#2E2E2E] md:text-4xl">
						<span className="relative inline-block transition-transform duration-500">Napisz</span>
						<span className="inline-block text-[#FF4A00] transition-all duration-500">do</span>
						<span className="relative inline-block transition-transform duration-500">nas !</span>
					</h2>

					{/* Decorative line */}
					<div className="mx-auto mb-8 flex items-center justify-center gap-3">
						<div
							className={`h-px bg-[#FF4A00]/30 transition-all duration-700 ${isHovered ? "w-16" : "w-8"}`}
						/>
						<div
							className={`rounded-4xl h-1.5 w-1.5 rotate-45 bg-[#FF4A00] transition-transform duration-500 ${isHovered ? "scale-125" : "scale-100"}`}
						/>
						<div
							className={`h-px bg-[#FF4A00]/30 transition-all duration-700 ${isHovered ? "w-16" : "w-8"}`}
						/>
					</div>

					{/* Email Link Wrapper */}
					<a
						href="mailto:studiore@studiore.pl"
						className="group/email relative inline-flex flex-col items-center"
					>
						<span className="text-sm uppercase tracking-[0.3em] text-[#2E2E2E]/40 transition-colors duration-300 group-hover/email:text-[#FF4A00]/60">
							email
						</span>
						<span className="relative mt-2 text-xl font-light tracking-wider text-[#2E2E2E] transition-all duration-300 group-hover/email:tracking-widest group-hover/email:text-[#FF4A00] md:text-2xl">
							studiore@studiore.pl
						</span>
						{/* Glowing underline */}
						<span className="mt-2 h-px w-0 bg-[#FF4A00] shadow-[0_0_10px_#FF4A00] transition-all duration-500 group-hover/email:w-full" />
					</a>

					{/* Arrow indicator */}
					<div
						className={`mt-8 transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
					>
						<svg
							className="mx-auto h-6 w-6 animate-bounce text-[#FF4A00]"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};
