"use client";

import React, { useState } from "react";

export default function NavigationBarMobile() {
	const [showUpperMenu, setShowUpperMenu] = useState(false);

	const handleToggle = () => {
		setShowUpperMenu(!showUpperMenu);
	};

	return (
		<div className="relative z-50 flex w-full flex-col">
			<div className="rounded-t-4xl relative z-50 h-14 w-full">
				<button
					onClick={handleToggle}
					className="relative block h-full w-full cursor-pointer outline-none"
				>
					<div
						className={`absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 transition-transform duration-700 ${
							showUpperMenu
								? "translate-y-[160px] -rotate-90 delay-500" // Poprawka: konkretne px
								: "translate-y-0 rotate-90 delay-500"
						}`}
					>
						<svg
							className="h-6 w-6 text-white transition-transform duration-500"
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

			<div
				className={`rounded-b-4xl flex w-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.10)] transition-all ease-in-out [clip-path:inset(0_-30px_-30px_-30px)] ${
					showUpperMenu
						? "translate-y-0 opacity-100 delay-500 duration-700" // Wyjeżdża w dół
						: "-translate-y-full opacity-0 delay-500 duration-700" // Chowa się do góry POD czarną pokrywkę
				}`}
			>
				<div className="flex h-full w-full flex-col items-center justify-center gap-2 py-4">
					<a href="/organizacja" className="flex w-1/3 items-center justify-center gap-0.5">
						<img src="/icon.svg" className="h-8 w-8 object-contain" />
						<div className="pt-1.5 font-['Syne'] text-2xl text-[#50504F]">organizacja</div>
					</a>
					<a href="/aranzacja" className="flex w-1/3 items-center justify-center gap-0.5">
						<img src="/icon.svg" className="h-8 w-8 object-contain" />
						<div className="pt-1.5 font-['Syne'] text-2xl text-[#50504F]">aranżacja</div>
					</a>
					<a href="/projekt" className="flex w-1/3 items-center justify-center gap-0.5">
						<img src="/icon.svg" className="h-8 w-8 object-contain" />
						<div className="pt-1.5 font-['Syne'] text-2xl text-[#50504F]">projekt</div>
					</a>
				</div>
			</div>
		</div>
	);
}
