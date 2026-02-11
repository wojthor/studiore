import Zakladka from "@/app/components/zakladka";
import React, { useState } from "react";

export function UpperPart() {
	const [showHoverOrganizacja, setShowHoverOrganizacja] = useState(false);
	const [showHoverAranzacja, setShowHoverAranzacja] = useState(false);
	const [showHoverProjekt, setShowHoverProjekt] = useState(false);

	const menuItems = ["organizacja", "aranżacja", "projekt"];
	return (
		<div className="flex h-auto flex-col border-b border-[#2E2E2E] font-[Syne] md:h-24 md:w-full md:flex-row md:border-b-0">
			{menuItems.map((item, index) => (
				<div
					key={item}
					className={`relative flex w-full items-center justify-start pl-5 pr-5 ${
						index === 0 ? "border-t-0" : "border-t"
					} border-zinc-800 py-4 font-[Syne] transition-colors duration-200 md:border-l md:border-t-0 md:py-0`}
					onClick={() =>
						(index === 0 && setShowHoverOrganizacja(true)) ||
						(index === 1 && setShowHoverAranzacja(true)) ||
						(index === 2 && setShowHoverProjekt(true))
					}
				>
					<Zakladka
						text={item}
						showClose={
							(index === 0 && showHoverOrganizacja) ||
							(index === 1 && showHoverAranzacja) ||
							(index === 2 && showHoverProjekt)
						}
						onClose={() => {
							if (index === 0) setShowHoverOrganizacja(false);
							if (index === 1) setShowHoverAranzacja(false);
							if (index === 2) setShowHoverProjekt(false);
						}}
					/>
				</div>
			))}
		</div>
	);
}
