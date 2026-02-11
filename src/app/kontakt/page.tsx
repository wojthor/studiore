"use client";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { MobileNavigationBar } from "../[product]/page";
import { Syne } from "next/font/google";
import { NavigationBar2 } from "../components/ProductComponents/components";

const syneFont = Syne({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-syne",
});

export default function Page() {
	const priorityRef = useRef<HTMLDivElement>(null);

	// 2. Funkcja przewijania
	const scrollToContent = () => {
		priorityRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		// Usunąłem stąd h-screen, żeby strona mogła być dłuższa (mieć dwa ekrany)
		<div className={`${syneFont.className} flex flex-col bg-white`}>
			{/* === EKRAN 1: KONTAKT, SOCIALE, NAWIGACJA === */}
			{/* Tutaj dajemy h-screen i relative, żeby przycisk był na dole tego ekranu */}
			<div className="relative flex h-screen flex-col gap-10 p-4">
				<div className="hidden md:block">
					<NavigationBar2 />
				</div>
				<div className="block lg:hidden">
					<MobileNavigationBar />
				</div>

				<div className="flex h-full w-full flex-col overflow-x-hidden text-[hsl(0,0%,18%)]">
					<div className="gap-15 mx-auto flex h-full w-full flex-col px-16 pt-20">
						<div className="relative flex h-full w-1/2 flex-col items-start justify-start gap-5">
							<h1 className="items-center text-6xl font-bold leading-tight tracking-widest text-[#FF4A00] md:text-6xl lg:text-8xl">
								KONTAKT
							</h1>

							<p className="w-[95%] text-wrap text-xs font-normal tracking-widest text-[#FF4A00] md:text-lg">
								Twoja historia jest dla nas najważniejsza, a więc napisz do nas i opisz swoją
								sytuację, abyśmy mogli dostosować nasze usługi jak najlepiej do twoich potrzeb.
							</p>
						</div>

						<div className="flex w-full flex-col justify-end gap-12 pb-4 lg:flex-row lg:gap-24">
							<div className="gap-15 flex w-1/2 flex-col">
								<div className="flex flex-col items-end gap-2">
									<span className="flex text-left text-xl tracking-widest text-[#2E2E2E] md:text-xl">
										email
									</span>
									<a
										href="mailto:studiore@studiore.pl"
										className="text-xl font-normal tracking-widest text-[#2E2E2E] hover:text-[#FF4A00] md:text-xl"
									>
										studiore@studiore.pl
									</a>
								</div>

								{/* Social Media Sekcja */}
								<div className="flex flex-col items-end gap-10 text-xl leading-5">
									<span className="font-normal lowercase tracking-widest text-[#2E2E2E]">
										SOCIAL MEDIA
									</span>

									<span className="lowercase">Instagram / Facebook / LinkedIn</span>
									<span className="hover:underline">@studiore.</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* === PRZYCISK PRZEWIJANIA (Wklejony Twój kod) === */}
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
			</div>

			{/* === EKRAN 2: PRIORYTET (Na dole, wycentrowany) === */}
			<div ref={priorityRef} className="flex min-h-screen w-full items-center justify-center p-4">
				<div className="gap-15 flex w-1/2 flex-col text-center">
					<div className="flex">
						<p className="text-lg font-normal tracking-widest text-[#FF4A00]">
							Naszym priorytetem jest indywidualność Twoich potrzeb i przywrócenia harmonii w Twoim
							codziennym życiu. Napisz do nas maila zgłoszeniowego z opisem twojej sytuacji i
							potrzeb, a także swojej wizji, abyśmy mogli jak najszybciej rozpocząć współpracę.
						</p>
					</div>
					<div className="mt-8 flex justify-center">
						<img src="/logo.svg" alt="arrow down" className="h-[10%] w-[10%]" />
					</div>
				</div>
			</div>
		</div>
	);
}
