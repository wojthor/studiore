export function Footer() {
	return (
		<footer className="font-syne border-t border-[#50504F]/20 bg-white py-12 text-[#2E2E2E]">
			<div className="mx-auto max-w-4xl px-6">
				{/* Główna sekcja z linkami */}
				<nav className="mb-8 flex flex-wrap justify-center gap-8">
					<a
						href="/polityka-prywatnosci"
						className="text-sm font-medium tracking-wide text-[#2E2E2E] transition-colors duration-200 hover:text-[#FF4A00]"
					>
						POLITYKA PRYWATNOŚCI
					</a>
					<a
						href="/regulamin"
						className="text-sm font-medium tracking-wide text-[#2E2E2E] transition-colors duration-200 hover:text-[#FF4A00]"
					>
						REGULAMIN
					</a>
				</nav>

				{/* Social Media */}
				<nav className="mb-8 flex justify-center">
					<div className="flex gap-6">
						<img
							src="/logo.svg"
							className="hover:text-[#FF4A00]transition-opacity h-12 w-12 cursor-pointer text-black duration-200"
						/>
					</div>
				</nav>

				{/* Copyright */}
				<div className="text-center">
					<p className="text-sm text-[#50504F]">
						© {new Date().getFullYear()} - powered by{" "}
						<span className="font-medium text-[#FF4A00]">wojthor</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
