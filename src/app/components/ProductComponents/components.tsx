import Image from "next/image";
import React, { useState } from "react";
import { Syne } from "next/font/google";
import { useParams } from "next/navigation";
import Link from "next/link";

const syneFont = Syne({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-syne",
});

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

export const startServiceData: ServiceSectionProps = {
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

export const claimServiceData: ServiceSectionProps = {
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

export const Logo: React.FC = () => (
	<div className="flex w-full max-w-6xl justify-center p-2">
		<div className="flex h-[93px] w-[93px] items-center justify-center rounded-full bg-orange-600 shadow-lg backdrop-blur-md">
			<Link href="/ ">
				<img src="/Vector.svg" alt="Studio Re Logo" className="h-16 w-16 text-white" />
			</Link>
		</div>
	</div>
);

export const Header: React.FC = () => {
	const params = useParams();
	return (
		<header className="relative w-full max-w-6xl px-4 pb-20 pt-10">
			<div className="flex flex-col items-center gap-12 lg:flex-row">
				<div className="relative w-full lg:w-2/3">
					<div className="bg-light/70 border-text-dark relative z-10 flex min-h-[325px] items-center border-r p-8 backdrop-blur-lg">
						<p className="text-dark text-justify font-['Syne'] text-2xl tracking-wider">
							Odzyskanie porządku i lekkości w codziennym życiu wydaje ci się niemożliwe? Dzięki
							naszej usłudze declutteringu zorganizujemy Twoją przestrzeń tak, by była funkcjonalna,
							estetyczna i wolna od nadmiaru. Szafy, kuchnie, całe mieszkania – każde miejsce może
							oddychać na nowo. Zacznij od porządku i poczuj różnicę. Poznaj nasze warianty
							dostosowane do twoich potrzeb.
						</p>
					</div>
				</div>

				<div className="flex w-1/3 items-center justify-center">
					<img src="/icon.svg" className="h-8 w-8 object-contain pb-1 md:h-12 md:w-14" />
					<div className="pb-2 font-['Syne'] text-2xl text-[#50504F] md:pt-3 md:text-5xl">
						{params.product}
					</div>
				</div>
			</div>
		</header>
	);
};

export const ServiceSection: React.FC<ServiceSectionProps> = ({
	title,
	imageUrl,
	description,
	tags,
	qas,
	decorativeCircle,
}) => {
	return (
		<section className="relative flex w-full max-w-6xl px-4 py-24">
			{decorativeCircle === "top-right" && (
				<div className="right-15 absolute top-8 z-10 hidden h-36 w-36 rounded-full bg-orange-600 lg:block" />
			)}
			{decorativeCircle === "top-left" && (
				<div className="left-15 absolute top-8 z-10 hidden h-36 w-36 rounded-full bg-orange-600 lg:block" />
			)}

			<div className="z-1 relative">
				<Image
					src={imageUrl}
					alt={`Organizacja przestrzeni - ${title}`}
					width={1234}
					height={365}
					className="h-auto w-full object-cover"
				/>

				<div
					className={`md:pt-15 md:pb-15 md:pl-15 flex items-center justify-between gap-8 md:flex-row ${
						decorativeCircle === "top-right"
							? "border-l"
							: decorativeCircle === "top-left"
								? "border-r"
								: ""
					} ${
						decorativeCircle === "top-left"
							? "flex-col md:flex-row-reverse"
							: "flex-col md:flex-row"
					}`}
				>
					<div className="flex w-1/3 items-center justify-center">
						<img src="/icon-black.svg" className="h-8 w-8 object-contain pb-1 md:h-12 md:w-14" />
						<div className="pb-2 font-['Syne'] text-2xl text-[#50504F] md:pt-3 md:text-5xl">
							{title}
						</div>
					</div>

					<p className="text-dark text-justify font-[Syne] text-xl tracking-wide md:w-2/3">
						{description}
					</p>
				</div>

				<div className="grid grid-cols-2 border md:grid-cols-5">
					{tags.map((tag, index) => (
						<div key={index} className="px-4 py-10 text-center">
							<span className="text-xl font-normal uppercase tracking-wider">{tag}</span>
						</div>
					))}
				</div>

				<div
					className={`pt-16 font-['Syne'] ${
						decorativeCircle === "top-left"
							? "border-l"
							: decorativeCircle === "top-right"
								? "border-r"
								: ""
					}`}
				>
					{qas.map((item, index) => (
						<div key={index} className="grid grid-cols-1 gap-4 px-10 py-6 md:grid-cols-3 md:gap-8">
							<h4 className="text-xl font-bold uppercase tracking-wider md:col-span-1">{item.q}</h4>
							<p className="text-justify text-xl tracking-wide md:col-span-2">{item.a}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export const CallToAction: React.FC = () => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className="flex w-full items-center justify-center">
			<div className="relative w-full overflow-hidden bg-white px-6 py-20">
				{/* Main container */}
				<div
					className="group relative mx-auto w-full cursor-pointer"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					{/* Animated border frame */}
					<div className="absolute -inset-4">
						{/* ... linie bez zmian ... */}
						<div
							className={`absolute left-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4A00] to-transparent transition-all duration-700 ${isHovered ? "w-full" : "w-0"}`}
						/>
						<div
							className={`absolute right-0 top-0 w-px bg-gradient-to-b from-transparent via-[#FF4A00] to-transparent transition-all delay-200 duration-700 ${isHovered ? "h-full" : "h-0"}`}
						/>
						<div
							className={`absolute bottom-0 right-0 h-px bg-gradient-to-l from-transparent via-[#FF4A00] to-transparent transition-all delay-300 duration-700 ${isHovered ? "w-full" : "w-0"}`}
						/>
						<div
							className={`absolute bottom-0 left-0 w-px bg-gradient-to-t from-transparent via-[#FF4A00] to-transparent transition-all delay-500 duration-700 ${isHovered ? "h-full" : "h-0"}`}
						/>
					</div>

					{/* Corner accents - bez zmian */}
					<div className="absolute -left-4 -top-4 h-8 w-8">
						<div
							className={`absolute left-0 top-0 h-full w-px bg-[#FF4A00] transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
						/>
						<div
							className={`absolute left-0 top-0 h-px w-full bg-[#FF4A00] transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
						/>
					</div>
					{/* ... reszta rogów ... */}
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
					<div className="relative items-center justify-center px-8 py-12 text-center">
						{/* ZMIANA 1: Dodano 'justify-center' do h2 */}
						<h2 className="relative mb-6 flex justify-center gap-2 overflow-hidden font-['Syne'] text-3xl font-light uppercase text-[#2E2E2E] md:text-4xl">
							<span className="relative inline-block transition-transform duration-500">
								Napisz
							</span>
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

						{/* Email */}
						{/* ZMIANA 2: Usunięto zagnieżdżony tag <a> wewnątrz drugiego <a>. Zostawiłem jeden główny wrapper. */}
						<div></div>
						<a
							href="mailto:studiore@studiore.pl"
							className="group/email relative inline-flex flex-col items-center"
						>
							<span className="text-sm uppercase tracking-[0.3em] text-[#2E2E2E]/40 transition-colors duration-300 group-hover/email:text-[#FF4A00]/60">
								email
							</span>
							{/* Tutaj był drugi tag <a> - zamieniłem go na <span>, bo rodzic już jest linkiem */}
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
		</div>
	);
};

export function NavigationBar2() {
	const pathname = useParams();
	console.log(pathname);
	const navItems = [
		{ label: "STRONA GŁÓWNA", href: "/" },
		{ label: "REORGANIZACJA", href: "/organizacja" },
		{ label: "REARANŻACJA", href: "/rearanzacja" },
		{ label: "REPROJEKT", href: "/reprojekt" },
		{ label: "O NAS", href: "/onas" },
		{ label: "KONTAKT", href: "/kontakt" },
	];

	return (
		<div className="pointer-events-none absolute left-0 top-6 z-50 w-full px-6 md:px-12">
			<div className="pointer-events-auto relative h-16 w-full">
				<div className="flex h-16 w-full items-center justify-center gap-8 md:gap-12">
					{navItems.map((item) => {
						const isActive = pathname.product === item.href;

						return (
							<Link
								key={item.label}
								href={item.href}
								className={`whitespace-nowrap text-xs font-bold transition-all duration-500 md:text-sm ${
									isActive
										? "text-[#2E2E2E]"
										: "text-[#2E2E2E] hover:tracking-widest hover:text-[#FF4A00]"
								}`}
							>
								{item.label}

								<div
									className={`my-2 h-px w-full bg-[#2E2E2E] ${isActive ? "opacity-100 hover:w-full" : "opacity-0"}`}
								></div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
