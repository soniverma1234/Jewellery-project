import craftsmanshipImage from "../assets/service-craftsmanship.png";

const values = [
  {
    number: "01",
    title: "Made with skill",
    description: "Experienced hands shape every detail.",
  },
  {
    number: "02",
    title: "Chosen with care",
    description: "Materials selected for your design.",
  },
  {
    number: "03",
    title: "Finished to last",
    description: "Every piece checked before it leaves us.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#fbf8f2] px-5 py-16 text-[#263448] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.23em] text-[#9b7135]">
            A little craft. A lot of meaning.
          </p>
          <h2
            id="about-heading"
            className="max-w-xl font-serif text-4xl leading-[1.12] tracking-[-0.025em] text-[#302419] sm:text-5xl lg:text-6xl"
          >
            Jewellery starts with
            <span className="block italic text-[#a77b3d]">a human touch.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#62594e] sm:text-lg sm:leading-8">
            Behind every beautiful piece is a thoughtful process. We listen to
            your ideas, work closely with you, and bring each design to life
            with patience and skilled craftsmanship.
          </p>

          <div className="mt-8 border-t border-[#dfd4c3]">
            {values.map((value) => (
              <div
                key={value.number}
                className="flex items-center gap-4 border-b border-[#dfd4c3] py-4 sm:py-5"
              >
                <span className="font-serif text-lg italic text-[#a77b3d]">
                  {value.number}
                </span>
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between sm:gap-4">
                  <h3 className="text-sm font-semibold text-[#344257] sm:text-base">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#756b5e] sm:mt-0">
                    {value.description}
                  </p>
                </div>
                <span aria-hidden="true" className="text-lg text-[#b79868]">
                  ↗
                </span>
              </div>
            ))}
          </div>

          <a
            href="#craft"
            className="mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#8b642f] transition-colors hover:text-[#60451f]"
          >
            Discover our process
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative order-1 min-h-[340px] overflow-hidden rounded-sm bg-[#d5c3a8] sm:min-h-[460px] lg:order-2 lg:min-h-[600px]">
          <img
            src={craftsmanshipImage}
            alt="Jewellery artisan carefully setting a gold ring at the workbench"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20180f]/55 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
            <p className="max-w-xs text-sm leading-6 text-white/90 sm:text-base">
              Thoughtful hands behind every treasured detail.
            </p>
            <span className="flex h-[76px] w-[76px] shrink-0 flex-col items-center justify-center rounded-full border border-white/65 bg-[#f8f2e8]/90 text-center text-[#74562e] shadow-lg backdrop-blur-sm sm:h-[92px] sm:w-[92px]">
              <span className="font-serif text-xl italic sm:text-2xl">A</span>
              <span className="text-[7px] font-semibold uppercase tracking-[0.12em] sm:text-[8px]">
                Made with care
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
