import { useState } from "react";
import { UpperMenu } from "./UpperMenu";

export default function NavigationBar() {
	const [showUpperMenu, setShowUpperMenu] = useState(false);
	const [isClosingUpperMenu, setIsClosingUpperMenu] = useState(false);

	const handleToggle = () => {
		if (showUpperMenu) {
			setIsClosingUpperMenu(true);
			setTimeout(() => {
				setShowUpperMenu(false);
				setIsClosingUpperMenu(false);
			}, 400);
		} else {
			setShowUpperMenu(true);
		}
	};
	return (
		<>
			<div className="h-18 absolute w-full">
				<button onClick={handleToggle}>
					<div
						className={`w-18 h-18 duration-2000 absolute top-0 z-20 cursor-pointer rounded-full bg-orange-600 transition-all ease-in-out ${
							showUpperMenu && !isClosingUpperMenu ? "left-[94.4%]" : "left-0"
						}`}
					>
						<div className="w-18 h-18 flex items-center justify-center">
							<svg
								className={`h-6 w-6 text-white ${
									showUpperMenu && !isClosingUpperMenu ? "-rotate-180" : "rotate-360"
								}`}
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
						</div>
					</div>
				</button>
				{showUpperMenu}
			</div>

			<div
				className={`h-18 z-1 duration-2000 relative flex w-full transform justify-center overflow-hidden rounded-[100px] bg-white transition-all ease-in-out ${
					showUpperMenu && !isClosingUpperMenu
						? "z-10 translate-x-0 shadow-lg"
						: "-translate-x-320 -z-10"
				}`}
			>
				<div className="w-full max-w-5xl">
					<UpperMenu />
				</div>
			</div>
		</>
	);
}
