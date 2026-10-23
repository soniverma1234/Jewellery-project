const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Our services", href: "#collections" },
  { label: "Our craftsmanship", href: "#craft" },
];

const serviceLinks = [
  "Bespoke jewellery design",
  "Handcrafted manufacturing",
  "Gemstone setting",
  "Quality & collections",
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#172437] px-5 pb-6 pt-16 text-white sm:px-8 sm:pt-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.1fr] lg:gap-10 lg:pb-16">
          <div>
            <a
              href="#home"
              aria-label="Aurelle home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4b477]/60 bg-white/5 text-[#e3bd7a]">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                  className="h-9 w-9"
                >
                  <path
                    d="M16 2 29 11 16 30 3 11 16 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="m3 11 26 0M16 2l-4 9 4 19 4-19-4-9Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.2em] sm:text-base">
                  Aurelle
                </span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-white/55">
                  Jewellery manufacturer
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              Thoughtfully crafted jewellery, brought to life by skilled hands
              and a lasting love for detail.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3bd7a]">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[#e3bd7a]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3bd7a]">
              What we do
            </h2>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#collections"
                    className="text-sm text-white/70 transition-colors hover:text-[#e3bd7a]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3bd7a]">
              Let&apos;s create something
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Have a design in mind or a collection to make? We&apos;d love to
              hear what you&apos;re dreaming up.
            </p>
            <a
              href="#collections"
              className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-md bg-[#b28a4e] px-5 text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#c39a5d]"
            >
              Explore our services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aurelle Jewellery. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 uppercase tracking-[0.14em] transition-colors hover:text-[#e3bd7a]"
          >
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
