"use client";

import { Syne } from "next/font/google";
import { MobileNavigationBar, NavigationBar2 } from "../[product]/page";
import AboutUsHorizontal from "../components/AboutUsHover";

const syneFont = Syne({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-syne",
});

export default function Page() {
	return (
		<div className={`${syneFont.className} relative min-h-screen w-full bg-white`}>
			<div className="hidden md:block">
				<NavigationBar2 />
			</div>
			<div className="block lg:hidden">
				<MobileNavigationBar />
			</div>

			<div className="flex flex-col pb-24 md:pb-0">
				<AboutUsHorizontal />
			</div>
		</div>
	);
}
