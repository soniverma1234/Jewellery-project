import { useEffect, useState } from "react";
import necklaceImage from "../assets/service-necklace.png";
import craftsmanshipImage from "../assets/service-craftsmanship.png";
import qualityImage from "../assets/service-quality.png";

const testimonials = [
  {
    quote:
      "From our first design discussion to the final finish, every detail was handled with care. The team understood exactly what we wanted to create.",
    name: "Jewellery brand founder",
    designation: "Bespoke collection",
    image: craftsmanshipImage,
    imageAlt: "Jewellery artisan carefully crafting a gold ring",
  },
  {
    quote:
      "Having design support and skilled craftsmanship in one place made developing our collection a much smoother experience.",
    name: "Design studio partner",
    designation: "Private label jewellery",
    image: necklaceImage,
    imageAlt: "Intricate gold necklace with gemstone details",
  },
  {
    quote:
      "The attention given to stone setting and finishing helped bring our original idea to life just as we had imagined it.",
    name: "Fine jewellery retailer",
    designation: "Custom gemstone pieces",
    image: qualityImage,
    imageAlt: "Jeweller inspecting the setting on a diamond ring",
  },
];

const Testmonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length);
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="overflow-hidden bg-[#f5f1e9] px-5 py-20 text-[#19283c] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div
        className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
        }}
      >
        <div
          className="relative mx-auto h-[340px] w-full max-w-lg sm:h-[440px]"
          aria-label="Jewellery partner stories"
        >
          {testimonials.map((testimonial, index) => {
            const offset = (index - activeIndex + testimonials.length) % testimonials.length;
            const isVisible = offset === 0 || offset === 1 || offset === testimonials.length - 1;
            const translateX =
              offset === 0 ? "0%" : offset === 1 ? "68%" : "-68%";

            return (
              <img
                key={testimonial.imageAlt}
                src={testimonial.image}
                alt={testimonial.imageAlt}
                loading="lazy"
                className="absolute left-1/2 top-1/2 h-[82%] w-[66%] rounded-2xl border-[5px] border-white object-cover shadow-[0_18px_50px_rgba(32,37,43,0.2)] transition-all duration-700 ease-[cubic-bezier(0.2,0.75,0.25,1)] sm:h-[86%] sm:w-[60%]"
                style={{
                  opacity: isVisible ? (offset === 0 ? 1 : 0.62) : 0,
                  zIndex: offset === 0 ? 3 : 2,
                  transform: `translate(-50%, -50%) translateX(${translateX}) scale(${offset === 0 ? 1 : 0.82}) rotateY(${offset === 1 ? -12 : offset === testimonials.length - 1 ? 12 : 0}deg)`,
                }}
              />
            );
          })}
          <span className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/80 bg-[#fffdf9]/90 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#705735] shadow-sm">
            Made together, remembered always
          </span>
        </div>

        <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7135]">
            The people behind every piece
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl"
          >
            Built on trust,
            <span className="font-serif font-normal italic text-[#9b7135]">
              {" "}finished with care.
            </span>
          </h2>

          <div className="mt-8 min-h-[220px] sm:mt-10 sm:min-h-[205px]" aria-live="polite">
            <span aria-hidden="true" className="font-serif text-6xl leading-none text-[#c5a36d]">
              “
            </span>
            <blockquote className="-mt-2">
              <p className="text-lg leading-8 text-[#48576a] sm:text-xl sm:leading-9">
                {testimonials[activeIndex].quote}
              </p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="block text-base font-semibold text-[#26364b]">
                    {testimonials[activeIndex].name}
                  </span>
                  <span className="mt-1 block text-sm text-[#7b7062]">
                    {testimonials[activeIndex].designation}
                  </span>
                </cite>
              </footer>
            </blockquote>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c7a8] text-lg text-[#795a2e] transition-colors hover:bg-[#a77b3d] hover:text-white"
            >
              <span aria-hidden="true">←</span>
            </button>
            <span className="min-w-16 text-center text-xs font-medium tracking-[0.12em] text-[#786b59]">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c7a8] text-lg text-[#795a2e] transition-colors hover:bg-[#a77b3d] hover:text-white"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="mt-6 text-xs leading-5 text-[#8a7e6e]">
            Sample testimonial copy for preview—replace with approved client
            feedback before publishing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testmonials;
