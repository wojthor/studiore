"use client";

import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-syne",
});

const teamMembers = [
	{
		name: "ANETA ROMPKOWSKA",
		role: "ARCHITEKT WNĘTRZ",
		bio: `„Od ponad dekady łączę architektoniczną precyzję z artystyczną wrażliwością, tworząc wnętrza, które są czymś więcej niż tylko ładnym obrazkiem. Projektowanie to dla mnie sztuka słuchania – głęboko wierzę, że przestrzeń musi być idealnym odzwierciedleniem osobowości i unikalnego stylu życia domowników. Nie uznaję kompromisów między estetyką a użytecznością. Moim celem jest przekształcenie Twoich marzeń i potrzeb w konkretne, przemyślane rozwiązania. Dbam o to, by każdy metr kwadratowy był w pełni funkcjonalny, a całość tworzyła harmonijny, bezpieczny azyl, w którym po prostu chce się przebywać każdego dnia.”`,
		image: "/professional-woman-architect.jpg",
	},
	{
		name: "MARTYNA WILCZYŃSKA",
		role: "SPECJALISTKA DS. ORGANIZACJI",
		bio: `„Od ponad dekady łączę architektoniczną precyzję z artystyczną wrażliwością, tworząc wnętrza, które są czymś więcej niż tylko ładnym obrazkiem. Projektowanie to dla mnie sztuka słuchania – głęboko wierzę, że przestrzeń musi być idealnym odzwierciedleniem osobowości i unikalnego stylu życia domowników. Nie uznaję kompromisów między estetyką a użytecznością. Moim celem jest przekształcenie Twoich marzeń i potrzeb w konkretne, przemyślane rozwiązania. Dbam o to, by każdy metr kwadratowy był w pełni funkcjonalny, a całość tworzyła harmonijny, bezpieczny azyl, w którym po prostu chce się przebywać każdego dnia.”`,
		image: "/professional-woman-architect.jpg",
	},
];

export default function AboutUsPage() {
	return (
		<div
			className={`${syne.className} h-full w-full bg-white text-[#2E2E2E] selection:bg-[#FF4A00] selection:text-white`}
		>
			<section className="bg-white">
				<div className="mx-auto max-w-6xl px-6 py-20 md:px-12 lg:px-24">
					<div className="flex flex-col gap-20">
						{teamMembers.map((member, index) => (
							<section
								key={member.name}
								className={`flex flex-col items-center gap-10 border-t border-gray-200 pt-10 lg:gap-16 lg:pt-14 ${
									index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
								}`}
							>
								{/* ZDJĘCIE */}
								<div className="w-full max-w-md flex-1">
									<div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-lg">
										<Image
											src={member.image || "/placeholder.svg"}
											alt={member.name}
											fill
											className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
											priority={index === 0}
											sizes="(max-width: 768px) 100vw, 400px"
										/>
									</div>
								</div>

								{/* TEKST */}
								<div className="flex flex-1 flex-col items-start gap-6">
									<div className="flex items-center gap-4">
										<span className="h-px w-10 bg-[#FF4A00]" />
										<span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF4A00]">
											{member.role}
										</span>
									</div>

									<h2 className="text-2xl font-bold leading-tight text-[#2E2E2E] sm:text-3xl md:text-[2rem]">
										{member.name}
									</h2>

									<p className="text-sm font-medium leading-relaxed text-gray-500 md:text-base">
										{member.bio}
									</p>
								</div>
							</section>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
