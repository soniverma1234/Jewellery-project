import heroVideo from "../assets/HeroVedio.mp4";

const jewelryImage =
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=90";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-96px)] items-center justify-center overflow-hidden bg-[#101b2b] text-white"
    >
      <video
        src={heroVideo}
        poster={jewelryImage}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Jewellery manufacturing and craftsmanship"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#101b2b]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#101b2b]/30 via-[#101b2b]/20 to-[#101b2b]/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 text-center sm:px-10 sm:py-24 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#e3bd7a] sm:text-sm">
            Premium jewellery manufacturer
          </p>
          <h1 className="text-5xl font-medium leading-[1.06] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Crafting timeless
            <br />
            <span className="font-serif font-normal italic text-[#e3bd7a]">
              elegance
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            We bring your jewellery designs to life with skilled craftsmanship,
            thoughtful details, and dependable manufacturing.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#collections"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#a77b3d] px-6 text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#89612e] sm:text-sm"
            >
              Explore our products <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/65 bg-white/10 px-6 text-xs font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:text-sm"
            >
              Get a quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
