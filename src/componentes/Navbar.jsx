import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Our products", href: "#collections" },
  { label: "Process", href: "#craft" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8c8ad] bg-gradient-to-r from-[#f1e9dc] via-[#fffdf9] to-[#f1e9dc] shadow-[0_4px_18px_rgba(62,45,25,0.08)]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[96px] max-w-7xl items-center justify-between gap-4 px-5 text-[#19283c] sm:px-8 lg:px-12"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3 sm:gap-4"
          aria-label="Aurelle home"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d7c29f] bg-[#f8f3e9] text-[#a77b3d] shadow-[inset_0_0_0_3px_rgba(255,255,255,0.65)] sm:h-14 sm:w-14">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
              className="h-10 w-10 sm:h-11 sm:w-11"
            >
              <path d="M16 2 29 11 16 30 3 11 16 2Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="m3 11 26 0M16 2l-4 9 4 19 4-19-4-9Z" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </span>
          <span>
            <span className="block text-base font-semibold uppercase tracking-[0.2em] sm:text-lg">
              Aurelle
            </span>
            <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.14em] text-[#78664f] sm:block">
              Jewellery manufacturer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.1em] text-[#514638] transition-colors hover:text-[#9b7135]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden whitespace-nowrap rounded-md bg-[#a77b3d] px-5 py-3.5 text-xs font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#89612e] lg:inline-flex"
        >
          Get a quote
        </a>

        <button
          type="button"
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-[#d7c29f] bg-[#f8f3e9] lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`h-px w-5 bg-[#19283c] transition-transform ${
              menuOpen ? "translate-y-[2px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-[#19283c] transition-transform ${
              menuOpen ? "-translate-y-[2px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-3xl border border-[#e0e5e9] bg-[#fbfcfd] p-3 text-[#19283c] shadow-lg md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3.5 text-sm uppercase tracking-[0.12em] text-[#586677] hover:bg-[#edf0f2]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="rounded-2xl bg-[#a77b3d] px-4 py-3.5 text-sm uppercase tracking-[0.12em] text-white"
          >
            Get a quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
