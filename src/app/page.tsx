/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Syne } from "next/font/google";
import { ContactContent } from "@/app/components/ContactHover";
import NavigationBarMain from "./components/NavigationBarMain";
import NavigationBarMobile from "./components/NavigationBarMobile";
import { Footer } from "./components/Footer";
import { ThreeColumnLandingDesktop, ThreeColumnLandingMobile } from "./test2/page";

const syneFont = Syne({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-syne",
});

{
	/*}
export default function Home() {
	const [showAboutUsHover, setShowAboutUsHover] = useState(false);
	const [isClosingAboutUsHover, setIsClosingAboutUsHover] = useState(false);

	const handleOpenAboutUsHover = () => {
		setIsClosingAboutUsHover(false);
		setShowAboutUsHover(true);
	};

	const [showContactHover, setShowContactHover] = useState(false);
	const [isClosingContactHover, setIsClosingContactHover] = useState(false);

	const handleOpenContactHover = () => {
		setIsClosingContactHover(false);
		setShowContactHover(true);
		if (showAboutUsHover) handleCloseAboutUsHover();
	};

	const handleCloseContactHover = () => {
		setIsClosingContactHover(true);
		setTimeout(() => setShowContactHover(false), 1000);
	};

	const handleCloseAboutUsHover = () => {
		setIsClosingAboutUsHover(true);
		setTimeout(() => setShowAboutUsHover(false), 1000);
	};
	return (
		<div className="h-full w-full">
			<div className={`relative h-full w-screen overflow-hidden ${syneFont.variable}`}>
				
				<div
					className={`z-10 flex h-full flex-col items-center justify-center gap-5 overflow-hidden font-[Syne] text-[#2E2E2E] md:h-screen md:w-screen md:p-12 ${
						showAboutUsHover
							? "opacity-12 bg-white transition-opacity duration-1000"
							: "bg-white transition-opacity duration-1000"
					} `}
				>
					<div className="relative z-20 flex h-full w-full flex-col overflow-hidden border-gray-300 md:h-full">
						<div className="relative mx-0 h-full w-full p-1">
							<div className="block md:hidden">
								<NavigationBarMobile />
							</div>

							<div className="hidden md:block">
								<NavigationBarMain />
							</div>
						</div>

						
						<div className="z-1 absolute bottom-0 left-0 flex items-end">
							<img
								src="/logo.svg"
								alt="Studio Re. Logo"
								className="z-10 mr-[-20%] h-[500px] w-auto"
							/>
							<div className="relative z-0 mb-10 h-[548px] w-auto overflow-hidden bg-white">
								<video
									src="/photo.mp4"
									autoPlay
									muted
									loop
									playsInline
									className="h-full w-auto max-w-none object-cover"
								/>
							</div>
						</div>
					</div>

					
				</div>

				
				<div
					className={`absolute -right-2 top-0 z-40 h-full w-1/3 transition-transform duration-1000 ease-in-out ${
						showAboutUsHover && !isClosingAboutUsHover
							? "translate-x-0"
							: "delay-600 translate-x-[100%]"
					}`}
				>
					<div className="relative flex h-full cursor-pointer flex-col">
						<div className="rotate-270 absolute -left-20 top-40 flex h-32 w-12 cursor-pointer items-center justify-center transition-colors">
							<button
								onClick={showAboutUsHover ? handleCloseAboutUsHover : handleOpenAboutUsHover}
								className={`flex cursor-pointer flex-col items-center transition-transform ${
									showAboutUsHover
										? "translate-y-[205%] gap-2 text-xl uppercase tracking-[0.2em] text-[#2E2E2E] transition-colors duration-1000"
										: "duration-800 gap-2 text-xl uppercase tracking-[0.2em] text-[#2E2E2E] transition-colors"
								} `}
							>
								<div className="h-[1px] w-24 bg-[#2E2E2E]"></div>
								<p>O nas</p>
							</button>
						</div>
						<div className="z-40 h-full w-full overflow-hidden rounded-l-3xl shadow-lg">
							<AboutUsContent handleClose={handleCloseAboutUsHover} />
						</div>
					</div>
				</div>

			
				<div
					className={`absolute bottom-0 right-10 z-30 h-[60vh] w-1/3 transition-transform ease-in-out ${
						showContactHover && !isClosingContactHover
							? "translate-y-0 duration-1000"
							: "translate-y-[100%] delay-1000 duration-1000"
					}`}
				>
					<div className="relative flex h-full flex-col">
						<button
							onClick={showContactHover ? handleCloseContactHover : handleOpenContactHover}
							className={`absolute -top-20 right-8 z-0 h-12 w-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-t-xl transition-colors transition-transform ${
								showContactHover ? "translate-y-100 duration-1000" : "translate-y-0 duration-1000"
							}`}
						>
							<div className="absolute right-0 top-1 h-[1px] w-44 bg-[#2E2E2E]"></div>
							<span className="absolute right-0 text-xl tracking-widest text-black">KONTAKT</span>
						</button>
						<div className="z-40 h-full w-full overflow-hidden rounded-3xl bg-white shadow-2xl">
							<ContactContent onClose={handleCloseContactHover} />
						</div>
					</div>
				</div>
			</div>
			<div
				className={`relative w-full ${syneFont.variable} ${
					showAboutUsHover
						? "opacity-12 transition-opacity duration-1000"
						: "transition-opacity duration-1000"
				} font-['Syne']`}
			>
				<Footer />
			</div>
		</div>
	);
}

*/
}

export default function Page() {
	return (
		<>
			<ThreeColumnLandingDesktop />
			<ThreeColumnLandingMobile />
		</>
	);
}
