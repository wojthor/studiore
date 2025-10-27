export function Footer() {
  return (
    <footer className="bg-white trackin text-[#2E2E2E] font-syne border-t border-[#50504F]/20 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Główna sekcja z linkami */}
        <nav className="flex flex-wrap justify-center gap-8 mb-8">
          <a
            href="/polityka-prywatnosci"
            className="text-[#2E2E2E] hover:text-[#FF4A00] transition-colors duration-200 text-sm font-medium tracking-wide"
          >
            POLITYKA PRYWATNOŚCI
          </a>
          <a
            href="/regulamin"
            className="text-[#2E2E2E] hover:text-[#FF4A00] transition-colors duration-200 text-sm font-medium tracking-wide"
          >
            REGULAMIN
          </a>
        </nav>

        {/* Social Media */}
        <nav className="flex justify-center mb-8">
          <div className="flex gap-6">
            <img
              src="/logo.svg"
              className="w-12 h-12 cursor-pointer text-black hover:text-[#FF4A00]transition-opacity duration-200"
            />
          </div>
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#50504F] text-sm">
            © {new Date().getFullYear()} - powered by{" "}
            <span className="text-[#FF4A00] font-medium">wojthor</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
