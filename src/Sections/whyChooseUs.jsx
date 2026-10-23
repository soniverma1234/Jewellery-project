const processSteps = [
  {
    number: "01",
    title: "Share your vision",
    description:
      "Tell us about your idea, reference images, preferred materials, and the pieces you want to create.",
    detail: "Brief & consultation",
  },
  {
    number: "02",
    title: "Design & approval",
    description:
      "We shape your brief into a considered design and confirm the details with you before production begins.",
    detail: "Concept & confirmation",
  },
  {
    number: "03",
    title: "Craft with care",
    description:
      "Our jewellery artisans bring your approved design to life, with careful attention to materials and finish.",
    detail: "Handcrafted production",
  },
  {
    number: "04",
    title: "Quality, then delivery",
    description:
      "Each piece is checked and finished before it is carefully packed and prepared for delivery.",
    detail: "Final check & dispatch",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="craft"
      aria-labelledby="process-heading"
      className="bg-[#eee6d9] px-5 py-20 text-[#19283c] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7135]">
            From first idea to finished piece
          </p>
          <h2
            id="process-heading"
            className="text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl"
          >
            A clear process.
            <span className="font-serif font-normal italic text-[#9b7135]">
              {" "}A thoughtful finish.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#586677] sm:text-lg">
            We keep every stage collaborative, so you know what comes next and
            your jewellery stays true to your vision.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-8 before:absolute before:left-[8%] before:right-[8%] before:top-7 before:hidden before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#b99a67]/70 before:to-transparent sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6 lg:before:block">
          {processSteps.map((step) => (
            <li key={step.number} className="relative">
              <div className="mb-6 flex items-center gap-4 lg:mb-8 lg:flex-col lg:items-start">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#c8ad7c] bg-[#fbf8f1] font-serif text-lg text-[#9b7135] shadow-[0_0_0_8px_#eee6d9]">
                  {step.number}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8a7b65]">
                  {step.detail}
                </span>
              </div>
              <h3 className="text-xl font-medium text-[#26364b] sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-[#586677]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center lg:mt-16">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center gap-3 rounded-md bg-[#a77b3d] px-6 text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#89612e] sm:text-sm"
          >
            Start your project <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
